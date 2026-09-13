import { useEffect, useState } from "react";
import Avatar from "boring-avatars";
import { apiUrl } from "../api.js";

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

const COLORES_AVATAR = ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"];

const jugadorVacio = () => ({ nombre: "", ataque: 3, defensa: 3 });

export default function PlayerForm({ onPartidoGuardado, partidoSeleccionado }) {
  const [jugadores, setJugadores] = useState(
    Array.from({ length: 10 }, jugadorVacio),
  );
  const [resultado, setResultado] = useState(null);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (partidoSeleccionado) {
      setResultado(partidoSeleccionado);
      setJugadores([
        ...partidoSeleccionado.equipo_a,
        ...partidoSeleccionado.equipo_b,
      ]);
    }
  }, [partidoSeleccionado]);

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
      onPartidoGuardado?.(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setEnviando(false);
    }
  };

  const promedio = (equipo, campo) =>
    (equipo.reduce((acc, j) => acc + j[campo], 0) / equipo.length).toFixed(1);

  return (
    <div className="card">
      <h2>Armador de equipos</h2>

      {jugadores.map((j, i) => (
        <div className="jugador-row" key={i}>
          <Avatar
            size={40}
            name={j.nombre || `Jugador ${i + 1}`}
            variant="beam"
            colors={COLORES_AVATAR}
          />
          <div>
            <label>Nombre</label>
            <input
              type="text"
              value={j.nombre}
              onChange={(e) => actualizarJugador(i, "nombre", e.target.value)}
              placeholder={`Jugador ${i + 1}`}
            />
          </div>
          <div>
            <label>Ataque: {j.ataque}</label>
            <input
              type="range"
              min={1}
              max={5}
              value={j.ataque}
              onChange={(e) => actualizarJugador(i, "ataque", e.target.value)}
            />
          </div>
          <div>
            <label>Defensa: {j.defensa}</label>
            <input
              type="range"
              min={1}
              max={5}
              value={j.defensa}
              onChange={(e) => actualizarJugador(i, "defensa", e.target.value)}
            />
          </div>
        </div>
      ))}

      <div className="acciones">
        <button className="secondary" onClick={cargarValoresDePrueba}>
          Cargar valores de prueba
        </button>
        <button onClick={balancearYGuardar} disabled={enviando}>
          {enviando ? "Balanceando..." : "Balancear y Guardar"}
        </button>
        {resultado && (
          <button className="secondary" onClick={nuevoPartido}>
            Nuevo partido
          </button>
        )}
      </div>

      {error && <p style={{ color: "#f87171" }}>{error}</p>}

      {resultado && (
        <>
          <div className="equipos">
            <div className="equipo">
              <h3>Equipo A</h3>
              {resultado.equipo_a.map((j, i) => (
                <div className="jugador-chip" key={i}>
                  <Avatar
                    size={28}
                    name={j.nombre}
                    variant="beam"
                    colors={COLORES_AVATAR}
                  />
                  <span>
                    {j.nombre} (A{j.ataque}/D{j.defensa})
                  </span>
                </div>
              ))}
              <p className="delta">
                Prom. ataque {promedio(resultado.equipo_a, "ataque")} · Prom.
                defensa {promedio(resultado.equipo_a, "defensa")}
              </p>
            </div>
            <div className="equipo">
              <h3>Equipo B</h3>
              {resultado.equipo_b.map((j, i) => (
                <div className="jugador-chip" key={i}>
                  <Avatar
                    size={28}
                    name={j.nombre}
                    variant="beam"
                    colors={COLORES_AVATAR}
                  />
                  <span>
                    {j.nombre} (A{j.ataque}/D{j.defensa})
                  </span>
                </div>
              ))}
              <p className="delta">
                Prom. ataque {promedio(resultado.equipo_b, "ataque")} · Prom.
                defensa {promedio(resultado.equipo_b, "defensa")}
              </p>
            </div>
          </div>
          <p className="delta">
            Diferencia entre equipos (delta): {resultado.delta}
          </p>
        </>
      )}
    </div>
  );
}
