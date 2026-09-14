import { useState } from "react";
import NodeBanner from "./components/NodeBanner.jsx";
import MatchExplorer from "./components/MatchExplorer.jsx";
import TeamBuilder from "./components/TeamBuilder.jsx";
import TeamBalancer from "./components/TeamBalancer.jsx";
import { apiUrl } from "./api.js";

const jugadorVacio = () => ({ nombre: "", ataque: 3, defensa: 3 });

const NOMBRES_PRUEBA = [
  "Tobi",
  "Renzo",
  "Edu",
  "Feli",
  "Fabri",
  "Yoel",
  "Valent",
  "Martin",
  "Joa",
  "Bruno",
];

export default function App() {
  const [jugadores, setJugadores] = useState(
    Array.from({ length: 10 }, jugadorVacio),
  );
  const [resultado, setResultado] = useState(null);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const actualizarJugador = (i, campo, valor) => {
    setJugadores((prev) =>
      prev.map((j, idx) => (idx === i ? { ...j, [campo]: valor } : j)),
    );
  };

  const cargarValoresDePrueba = () => {
    setResultado(null);
    setJugadores(
      NOMBRES_PRUEBA.map((nombre) => ({
        nombre,
        ataque: Math.ceil(Math.random() * 5),
        defensa: Math.ceil(Math.random() * 5),
      })),
    );
  };

  const nuevoPartido = () => {
    setResultado(null);
    setJugadores(Array.from({ length: 10 }, jugadorVacio));
  };

  const balancearYGuardar = async () => {
    setError(null);
    if (jugadores.some((j) => !j.nombre.trim())) {
      setError("Completá el nombre de los 10 jugadores.");
      return;
    }
    setEnviando(true);
    try {
      const res = await fetch(apiUrl("/api/partidos"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jugadores: jugadores.map((j) => ({
            nombre: j.nombre,
            ataque: Number(j.ataque),
            defensa: Number(j.defensa),
          })),
        }),
      });
      if (!res.ok) throw new Error("No se pudo balancear el partido");
      const data = await res.json();
      setResultado(data);
      setRefreshKey((k) => k + 1);
    } catch (e) {
      setError(e.message);
    } finally {
      setEnviando(false);
    }
  };

  const seleccionarPartido = (partido) => {
    setResultado(partido);
    setJugadores([...partido.equipo_a, ...partido.equipo_b]);
  };

  return (
    <div className="app">
      <div className="g-title title-block">
        <h1>
          FULBITO<span className="accent">5</span>
        </h1>
        <p>
          Calificá ataque y defensa de cada jugador. El reparto minimiza la
          diferencia entre los dos lados, no la suerte.
        </p>
      </div>

      <div className="g-telem">
        <NodeBanner />
      </div>

      <div className="g-hist">
        <MatchExplorer
          refreshKey={refreshKey}
          onSeleccionarPartido={seleccionarPartido}
        />
      </div>

      <div className="g-armador">
        <TeamBuilder
          jugadores={jugadores}
          onActualizarJugador={actualizarJugador}
          onCargarValoresDePrueba={cargarValoresDePrueba}
        />
      </div>

      <div className="g-balanceador">
        <TeamBalancer
          resultado={resultado}
          enviando={enviando}
          error={error}
          onBalancear={balancearYGuardar}
          onNuevoPartido={nuevoPartido}
        />
      </div>
    </div>
  );
}
