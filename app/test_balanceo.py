from itertools import combinations

from balanceo import balancear

JUGADORES = [
    {"nombre": "Jugador1", "ataque": 5, "defensa": 2},
    {"nombre": "Jugador2", "ataque": 4, "defensa": 2},
    {"nombre": "Jugador3", "ataque": 4, "defensa": 3},
    {"nombre": "Jugador4", "ataque": 3, "defensa": 4},
    {"nombre": "Jugador5", "ataque": 3, "defensa": 3},
    {"nombre": "Jugador6", "ataque": 2, "defensa": 4},
    {"nombre": "Jugador7", "ataque": 2, "defensa": 5},
    {"nombre": "Jugador8", "ataque": 1, "defensa": 1},
    {"nombre": "Jugador9", "ataque": 5, "defensa": 1},
    {"nombre": "Jugador10", "ataque": 1, "defensa": 5},
]


def _delta_fuerza_bruta(jugadores):
    scores = [j["ataque"] + j["defensa"] for j in jugadores]
    mejor = None
    for combo in combinations(range(10), 5):
        a = sum(scores[i] for i in combo)
        b = sum(scores[i] for i in range(10) if i not in combo)
        delta = abs(a - b)
        if mejor is None or delta < mejor:
            mejor = delta
    return mejor


def test_divide_en_dos_equipos_de_cinco():
    resultado = balancear(JUGADORES)
    assert len(resultado["equipo_a"]) == 5
    assert len(resultado["equipo_b"]) == 5


def test_no_repite_jugadores_entre_equipos():
    resultado = balancear(JUGADORES)
    nombres_a = {j["nombre"] for j in resultado["equipo_a"]}
    nombres_b = {j["nombre"] for j in resultado["equipo_b"]}
    assert nombres_a.isdisjoint(nombres_b)
    assert nombres_a | nombres_b == {j["nombre"] for j in JUGADORES}


def test_delta_es_el_minimo_posible():
    resultado = balancear(JUGADORES)
    assert resultado["delta"] == _delta_fuerza_bruta(JUGADORES)


def test_requiere_exactamente_diez_jugadores():
    import pytest

    with pytest.raises(ValueError):
        balancear(JUGADORES[:9])
