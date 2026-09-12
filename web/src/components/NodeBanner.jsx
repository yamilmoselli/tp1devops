import { useEffect, useState } from "react";

export default function NodeBanner() {
  const [info, setInfo] = useState(null);
  const [historial, setHistorial] = useState([]);
  const [pingueando, setPingueando] = useState(false);

  const fetchInfo = async () => {
    const res = await fetch("/api/info");
    const data = await res.json();
    setInfo(data);
    return data;
  };

  useEffect(() => {
    fetchInfo().catch(() => {});
  }, []);

  const pingCluster = async () => {
    setPingueando(true);
    setHistorial([]);
    try {
      for (let i = 0; i < 8; i++) {
        const data = await fetchInfo();
        setHistorial((prev) => [...prev, data.hostname]);
      }
    } finally {
      setPingueando(false);
    }
  };

  return (
    <div className="card">
      <h2>Telemetría de nodo</h2>
      <div className="banner">
        <div className="banner-stats">
          <div className="stat">
            <span>Hostname</span>
            <span>{info?.hostname ?? "—"}</span>
          </div>
          <div className="stat">
            <span>IP interna</span>
            <span>{info?.ip ?? "—"}</span>
          </div>
          <div className="stat">
            <span>Uptime (s)</span>
            <span>{info?.uptime ?? "—"}</span>
          </div>
          <div className="stat">
            <span>Partidos en Redis</span>
            <span>{info?.partidosTotal ?? "—"}</span>
          </div>
          <div className="stat">
            <span>Visitas totales</span>
            <span>{info?.visitas ?? "—"}</span>
          </div>
        </div>
        <button onClick={pingCluster} disabled={pingueando}>
          {pingueando ? "Pingueando..." : "Ping al Clúster"}
        </button>
      </div>
      {historial.length > 0 && (
        <div className="ping-history">
          {historial.map((host, i) => (
            <span className="ping-chip" key={i}>
              {host}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
