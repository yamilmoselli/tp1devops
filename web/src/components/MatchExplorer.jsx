import { useEffect, useState } from "react";
import { apiUrl } from "../api.js";

export default function MatchExplorer({ refreshKey, onSeleccionarPartido }) {
  const [partidos, setPartidos] = useState([]);

  useEffect(() => {
    fetch(apiUrl("/api/partidos"))
      .then((res) => res.json())
      .then(setPartidos)
      .catch(() => setPartidos([]));
  }, [refreshKey]);

  const verDetalle = async (id) => {
    const res = await fetch(apiUrl(`/api/partidos/${id}`));
    const data = await res.json();
    onSeleccionarPartido?.(data);
  };

  return (
    <div className="card">
      <h2>Historial de equipos</h2>
      {partidos.length === 0 && (
        <p className="historial-vacio">Todavía no hay partidos guardados.</p>
      )}
      <div className="historial-lista">
        {partidos.map((p) => (
          <button
            key={p.id}
            className="historial-item"
            onClick={() => verDetalle(p.id)}
          >
            <span className="historial-fecha">
              {new Date(p.fecha).toLocaleString()}
            </span>
            <span className="historial-delta">Δ{p.delta}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
