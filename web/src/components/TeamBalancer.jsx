import Avatar from "boring-avatars";
import { SwordIcon, ShieldIcon } from "./icons.jsx";

const COLORES_AVATAR = ["#264653", "#2a9d8f", "#f0ca55", "#f4a261", "#e76f51"];

const totalDe = (equipo, campo) =>
  equipo.reduce((acc, j) => acc + Number(j[campo]), 0);

export default function TeamBalancer({
  resultado,
  enviando,
  error,
  onBalancear,
  onNuevoPartido,
}) {
  return (
    <div className="balanceador">
      <button
        className="balancear-btn"
        onClick={onBalancear}
        disabled={enviando}>
        {enviando ? "Balanceando..." : "Balancear equipos"}
      </button>

      {error && <p className="form-error">{error}</p>}

      {!resultado && (
        <div className="card sin-equipos">
          <p className="sin-equipos-title">Sin equipos</p>
          <p className="sin-equipos-text">
            Calificá el plantel y tocá Balancear para ver el cruce.
          </p>
        </div>
      )}

      {resultado && (
        <div className="card resultado-card">
          <div className="equipos">
            <div className="equipo">
              <h3>Equipo A</h3>
              {resultado.equipo_a.map((j, i) => (
                <div className="jugador-chip" key={i}>
                  <div className="jugador-chip-name">
                    <Avatar
                      size={24}
                      name={j.nombre}
                      variant="beam"
                      colors={COLORES_AVATAR}
                    />
                    <span>{j.nombre}</span>
                  </div>
                  <div className="jugador-chip-stats">
                    <span className="stat-chip atq">
                      <SwordIcon size={12} />
                      {j.ataque}
                    </span>
                    <span className="stat-chip def">
                      <ShieldIcon size={12} />
                      {j.defensa}
                    </span>
                  </div>
                </div>
              ))}
              <p className="delta team-totals">
                <span className="stat-chip atq">
                  <SwordIcon size={13} />
                  {totalDe(resultado.equipo_a, "ataque")}
                </span>
                <span className="stat-chip def">
                  <ShieldIcon size={13} />
                  {totalDe(resultado.equipo_a, "defensa")}
                </span>
              </p>
            </div>
            <div className="equipo">
              <h3>Equipo B</h3>
              {resultado.equipo_b.map((j, i) => (
                <div className="jugador-chip" key={i}>
                  <div className="jugador-chip-name">
                    <Avatar
                      size={24}
                      name={j.nombre}
                      variant="beam"
                      colors={COLORES_AVATAR}
                    />
                    <span>{j.nombre}</span>
                  </div>
                  <div className="jugador-chip-stats">
                    <span className="stat-chip atq">
                      <SwordIcon size={12} />
                      {j.ataque}
                    </span>
                    <span className="stat-chip def">
                      <ShieldIcon size={12} />
                      {j.defensa}
                    </span>
                  </div>
                </div>
              ))}
              <p className="delta team-totals">
                <span className="stat-chip atq">
                  <SwordIcon size={13} />
                  {totalDe(resultado.equipo_b, "ataque")}
                </span>
                <span className="stat-chip def">
                  <ShieldIcon size={13} />
                  {totalDe(resultado.equipo_b, "defensa")}
                </span>
              </p>
            </div>
          </div>
          <p className="delta delta-main">
            Diferencia entre equipos (delta): {resultado.delta}
          </p>
          <button className="ghost" onClick={onNuevoPartido}>
            Nuevo partido
          </button>
        </div>
      )}
    </div>
  );
}
