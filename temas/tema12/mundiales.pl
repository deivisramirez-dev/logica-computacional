% ========================================
% MUNDIALES DE FÚTBOL - BASE DE DATOS PROLOG
% ========================================
% Archivo de datos para la práctica de mundiales de fútbol
% Contiene información sobre todos los mundiales desde 1930 hasta 2022

% ========================================
% BASE DE HECHOS - MUNDIALES GANADOS
% ========================================
% Formato: mundial(Año, País_Ganador, Sede, Continente)

% Mundiales desde 1930 hasta 2022
mundial(1930, uruguay, uruguay, america_sur).
mundial(1934, italia, italia, europa).
mundial(1938, italia, francia, europa).
mundial(1950, uruguay, brasil, america_sur).
mundial(1954, alemania_occidental, suiza, europa).
mundial(1958, brasil, suecia, europa).
mundial(1962, brasil, chile, america_sur).
mundial(1966, inglaterra, inglaterra, europa).
mundial(1970, brasil, mexico, america_norte).
mundial(1974, alemania_occidental, alemania_occidental, europa).
mundial(1978, argentina, argentina, america_sur).
mundial(1982, italia, espana, europa).
mundial(1986, argentina, mexico, america_norte).
mundial(1990, alemania, italia, europa).
mundial(1994, brasil, estados_unidos, america_norte).
mundial(1998, francia, francia, europa).
mundial(2002, brasil, corea_japon, asia).
mundial(2006, italia, alemania, europa).
mundial(2010, espana, sudafrica, africa).
mundial(2014, alemania, brasil, america_sur).
mundial(2018, francia, rusia, europa).
mundial(2022, argentina, qatar, asia).

% ========================================
% BASE DE HECHOS - INFORMACIÓN DE PAÍSES
% ========================================
% Formato: pais(País, Continente, Población_Aprox, Idioma_Principal)

pais(uruguay, america_sur, 3500000, espanol).
pais(italia, europa, 60000000, italiano).
pais(brasil, america_sur, 215000000, portugues).
pais(alemania_occidental, europa, 60000000, aleman).
pais(inglaterra, europa, 56000000, ingles).
pais(argentina, america_sur, 45000000, espanol).
pais(espana, europa, 47000000, espanol).
pais(francia, europa, 68000000, frances).
pais(alemania, europa, 83000000, aleman).

% ========================================
% BASE DE HECHOS - INFORMACIÓN DE CONTINENTES
% ========================================
% Formato: continente(Continente, Nombre_Completo)

continente(america_sur, "América del Sur").
continente(america_norte, "América del Norte").
continente(europa, "Europa").
continente(asia, "Asia").
continente(africa, "África").
continente(oceania, "Oceanía").

% ========================================
% BASE DE HECHOS - INFORMACIÓN DE SEDES
% ========================================
% Formato: sede_mundial(País, Año)

sede_mundial(uruguay, 1930).
sede_mundial(italia, 1934).
sede_mundial(francia, 1938).
sede_mundial(brasil, 1950).
sede_mundial(suiza, 1954).
sede_mundial(suecia, 1958).
sede_mundial(chile, 1962).
sede_mundial(inglaterra, 1966).
sede_mundial(mexico, 1970).
sede_mundial(alemania_occidental, 1974).
sede_mundial(argentina, 1978).
sede_mundial(espana, 1982).
sede_mundial(mexico, 1986).
sede_mundial(italia, 1990).
sede_mundial(estados_unidos, 1994).
sede_mundial(francia, 1998).
sede_mundial(corea_japon, 2002).
sede_mundial(alemania, 2006).
sede_mundial(sudafrica, 2010).
sede_mundial(brasil, 2014).
sede_mundial(rusia, 2018).
sede_mundial(qatar, 2022).

% ========================================
% BASE DE HECHOS - INFORMACIÓN REGIONAL
% ========================================
% Formato: region_geografica(Continente, Región)

region_geografica(america_sur, "Cono Sur").
region_geografica(america_norte, "Norteamérica").
region_geografica(europa, "Europa Occidental").
region_geografica(asia, "Asia Oriental").
region_geografica(africa, "África Subsahariana").

% ========================================
% REGLAS BÁSICAS PARA LA PRÁCTICA
% ========================================

% Regla 1: Un país es campeón del mundo si ha ganado al menos un mundial
campeon_mundial(Pais) :- mundial(_, Pais, _, _).

% Regla 2: Un país es potencia futbolística si ha ganado más de un mundial
potencia_futbolistica(Pais) :- 
    mundial(_, Pais, _, _),
    mundial(_, Pais, _, _).

% Regla 3: Un país ha ganado en su propio país
gano_en_su_pais(Pais, Año) :-
    mundial(Año, Pais, Pais, _).

% Regla 4: Un mundial es reciente si fue después de 2000
mundial_reciente(Año, Pais, Sede, Continente) :-
    mundial(Año, Pais, Sede, Continente),
    Año > 2000.

% Regla 5: Un país es bicampeón si ha ganado exactamente 2 mundiales
bicampeon(Pais) :-
    mundial(_, Pais, _, _),
    mundial(_, Pais, _, _),
    not(mundial(_, Pais, _, _)).

% ========================================
% REGLAS AVANZADAS PARA ANÁLISIS
% ========================================

% Regla 6: Contar mundiales ganados por país
mundiales_ganados(Pais, Cantidad) :-
    findall(Año, mundial(Año, Pais, _, _), Mundiales),
    length(Mundiales, Cantidad).

% Regla 7: Países que han ganado en su continente
gano_en_su_continente(Pais, Año) :-
    mundial(Año, Pais, _, Continente),
    pais(Pais, Continente, _, _).

% Regla 8: Dominio continental
dominio_continental(Continente, Cantidad) :-
    findall(Pais, mundial(_, Pais, _, Continente), Paises),
    length(Paises, Cantidad).

% Regla 9: Era dorada de un país (período de mayor éxito)
era_dorada(Pais, Inicio, Fin) :-
    mundial(Inicio, Pais, _, _),
    mundial(Fin, Pais, _, _),
    Fin > Inicio,
    not((mundial(Año, Pais, _, _), Año > Inicio, Año < Fin)).

% Regla 10: Superpotencia futbolística
superpotencia_futbolistica(Pais) :-
    mundiales_ganados(Pais, Cantidad),
    Cantidad > 2,
    mundial(_, Pais, _, Continente1),
    mundial(_, Pais, _, Continente2),
    Continente1 \= Continente2,
    mundial(Año1, Pais, _, _),
    mundial(Año2, Pais, _, _),
    Decada1 is Año1 // 10,
    Decada2 is Año2 // 10,
    Decada1 \= Decada2.

% ========================================
% CONSULTAS DE EJEMPLO
% ========================================
% Descomenta las siguientes líneas para probar consultas específicas

% ?- mundial(1998, Pais, _, _).                    % ¿Quién ganó en 1998?
% ?- mundial(Año, brasil, _, _).                   % ¿Cuándo ganó Brasil?
% ?- campeon_mundial(Pais).                       % ¿Quiénes son campeones?
% ?- potencia_futbolistica(Pais).                 % ¿Quiénes son potencias?
% ?- gano_en_su_pais(Pais, Año).                  % ¿Quién ganó en su país?
% ?- mundiales_ganados(Pais, Cantidad).            % ¿Cuántos mundiales ha ganado cada país?
% ?- superpotencia_futbolistica(Pais).             % ¿Quién es superpotencia?

% ========================================
% INFORMACIÓN ADICIONAL
% ========================================
% Este archivo contiene datos históricos de los mundiales de fútbol
% desde 1930 hasta 2022, incluyendo:
% - Países ganadores
% - Sedes de los mundiales
% - Continentes y regiones
% - Información demográfica básica
% - Reglas para análisis estadístico

% Para usar este archivo:
% 1. Cárgalo en tu intérprete de Prolog: ?- consult('mundiales.pl').
% 2. Realiza consultas usando las reglas definidas
% 3. Experimenta con nuevas consultas y reglas
% 4. Analiza los resultados obtenidos

% ¡Disfruta explorando los mundiales de fútbol con Prolog! ⚽🏆
