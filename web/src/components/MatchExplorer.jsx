import { useEffect, useState } from "react";

export default function MatchExplorer({ refreshKey, onSeleccionarPartido }) {
  const [partidos, setPartidos] = useState([]);
  const [detalle, setDetalle] = useState(null);

  useEffect(() => {
    fetch("/api/partidos")
      .then((res) => res.json())
      .then(setPartidos)
      .catch(() => setPartidos([]));
  }, [refreshKey]);

  const verDetalle = async (id) => {
    const res = await fetch(`/api/partidos/${id}`);
    const data = await res.json();
    setDetalle(data);
    onSeleccionarPartido?.(data);
  };

  return (
    <div className="card">
      <h2>Explorador de Redis</h2>
      {partidos.length === 0 && <p>Todavía no hay partidos guardados.</p>}
      <div className="partidos-lista">
        {partidos.map((p) => (
          <button
            key={p.id}
            className="partido-chip secondary"
            onClick={() => verDetalle(p.id)}
          >
            {new Date(p.fecha).toLocaleString()} · Δ{p.delta}
          </button>
        ))}
      </div>
      {detalle && <pre>{JSON.stringify(detalle, null, 2)}</pre>}
    </div>
  );
}
