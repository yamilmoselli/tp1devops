import { useEffect, useState } from "react";
import { apiUrl } from "../api.js";

export default function NodeBanner() {
  const [info, setInfo] = useState(null);
  const [historial, setHistorial] = useState([]);
  const [pingueando, setPingueando] = useState(false);

  const fetchInfo = async () => {
    const res = await fetch(apiUrl("/api/info"));
    return res.json();
  };

  useEffect(() => {
    fetchInfo().then(setInfo).catch(() => {});
  }, []);

  const pingCluster = async () => {
    setPingueando(true);
    setHistorial([]);
    try {
      // 7, no 8: el contador de round-robin de nginx es acumulativo entre
      // clicks. Con un tamaño de tanda multiplo de la cantidad de replicas
      // vivas (8 lo es de 2 y de 3), la ultima posicion de cada tanda cae
      // siempre en la misma replica y el Hostname de arriba queda "tildado"
      // entre clicks. 7 no es multiplo de 2 ni de 3, asi que siempre rota.
      let ultima = null;
      for (let i = 0; i < 7; i++) {
        const data = await fetchInfo();
        ultima = data;
        setHistorial((prev) => [...prev, data.hostname]);
      }
      if (ultima) setInfo(ultima);
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
          {pingueando ? "Realizando ping" : "Ping al Clúster"}
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
