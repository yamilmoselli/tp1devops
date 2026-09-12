import { useState } from "react";
import NodeBanner from "./components/NodeBanner.jsx";
import PlayerForm from "./components/PlayerForm.jsx";
import MatchExplorer from "./components/MatchExplorer.jsx";

export default function App() {
  const [ultimoPartido, setUltimoPartido] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const handlePartidoGuardado = (partido) => {
    setUltimoPartido(partido);
    setRefreshKey((k) => k + 1);
  };

  return (
    <div className="app">
      <div className="card">
        <h1>⚽ Fulbito5 — Armador de Equipos</h1>
      </div>
      <NodeBanner />
      <PlayerForm onPartidoGuardado={handlePartidoGuardado} partidoSeleccionado={ultimoPartido} />
      <MatchExplorer refreshKey={refreshKey} onSeleccionarPartido={setUltimoPartido} />
    </div>
  );
}
