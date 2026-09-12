"""Algoritmo de balanceo de equipos 5 vs 5 para Fulbito5."""
from itertools import combinations
from typing import TypedDict


class Jugador(TypedDict):
    nombre: str
    ataque: int
    defensa: int


def _score(jugador: Jugador) -> int:
    return jugador["ataque"] + jugador["defensa"]


def balancear(jugadores: list[Jugador]) -> dict:
    """Divide 10 jugadores en dos equipos de 5 minimizando la diferencia
    absoluta entre la suma de estadisticas (ataque + defensa) de cada equipo.
    """
    if len(jugadores) != 10:
        raise ValueError("Se requieren exactamente 10 jugadores")

    indices = list(range(10))
    mejor_delta: int | None = None
    mejor_combo: tuple[int, ...] | None = None

    for combo in combinations(indices, 5):
        equipo_a = [jugadores[i] for i in combo]
        equipo_b = [jugadores[i] for i in indices if i not in combo]
        delta = abs(sum(_score(j) for j in equipo_a) - sum(_score(j) for j in equipo_b))
        if mejor_delta is None or delta < mejor_delta:
            mejor_delta = delta
            mejor_combo = combo

    assert mejor_combo is not None and mejor_delta is not None
    equipo_a = [jugadores[i] for i in mejor_combo]
    equipo_b = [jugadores[i] for i in indices if i not in mejor_combo]

    return {
        "equipo_a": equipo_a,
        "equipo_b": equipo_b,
        "delta": mejor_delta,
    }
