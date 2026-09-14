import Avatar from "boring-avatars";
import { SwordIcon, ShieldIcon } from "./icons.jsx";

const COLORES_AVATAR = ["#264653", "#2a9d8f", "#f0ca55", "#f4a261", "#e76f51"];

export default function TeamBuilder({
  jugadores,
  onActualizarJugador,
  onCargarValoresDePrueba,
}) {
  return (
    <div className="card">
      <div className="card-header">
        <h2>Armador de equipos</h2>
        <button className="ghost" onClick={onCargarValoresDePrueba}>
          Cargar valores de prueba
        </button>
      </div>
      <div className="roster-head">
        <span>El plantel</span>
        <span className="roster-head-hint">
          ATQ <SwordIcon size={11} /> / DEF <ShieldIcon size={11} /> · 1-5
        </span>
      </div>

      <div className="roster">
        {jugadores.map((j, i) => (
          <div className="roster-row" key={i}>
            <span className="roster-index">
              {String(i + 1).padStart(2, "0")}
            </span>
            <Avatar
              size={32}
              name={j.nombre || `Jugador ${i + 1}`}
              variant="beam"
              colors={COLORES_AVATAR}
            />
            <input
              className="roster-name"
              type="text"
              value={j.nombre}
              onChange={(e) => onActualizarJugador(i, "nombre", e.target.value)}
              placeholder={`Jugador ${i + 1}`}
            />
            <div className="roster-attr">
              <div className="roster-attr-label">
                <span className="roster-attr-value atq">
                  <SwordIcon size={12} />
                  {j.ataque}
                </span>
              </div>
              <input
                className="slider slider-atq"
                type="range"
                min={1}
                max={5}
                value={j.ataque}
                onChange={(e) =>
                  onActualizarJugador(i, "ataque", e.target.value)
                }
              />
            </div>
            <div className="roster-attr">
              <div className="roster-attr-label">
                <span className="roster-attr-value def">
                  <ShieldIcon size={12} />
                  {j.defensa}
                </span>
              </div>
              <input
                className="slider slider-def"
                type="range"
                min={1}
                max={5}
                value={j.defensa}
                onChange={(e) =>
                  onActualizarJugador(i, "defensa", e.target.value)
                }
              />
            </div>
            <span className="roster-total">
              {Number(j.ataque) + Number(j.defensa)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
