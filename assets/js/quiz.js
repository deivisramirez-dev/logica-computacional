const quizData = [
    {
        id: 'tema1',
        title: 'Tema 1: Justificación de la Lógica',
        questions: [
            {
                text: '¿Cuál es una de las razones principales para estudiar lógica en computación?',
                options: [
                    'Mejorar únicamente la velocidad de los programas',
                    'Fundamentar el razonamiento formal y la corrección de los algoritmos',
                    'Evitar por completo el uso de matemáticas en programación',
                    'Reemplazar todos los lenguajes de programación existentes'
                ],
                correctIndex: 1,
                explanation: 'La lógica proporciona las bases formales para razonar sobre programas, especificaciones y algoritmos, especialmente en cuanto a su corrección.'
            },
            {
                text: 'En lógica, un argumento es válido cuando:',
                options: [
                    'Sus premisas son verdaderas de hecho',
                    'Su conclusión es verdadera de hecho',
                    'Si las premisas fueran verdaderas, la conclusión no podría ser falsa',
                    'Tiene al menos una premisa verdadera'
                ],
                correctIndex: 2,
                explanation: 'La validez es una propiedad formal: si las premisas fueran verdaderas, la conclusión no puede ser falsa, independientemente de la verdad fáctica.'
            },
            {
                text: '¿Qué papel juega la noción de consecuencia lógica en la lógica computacional?',
                options: [
                    'Permite definir cuándo un enunciado sigue necesariamente de otros',
                    'Sirve solo para contar el número de premisas',
                    'Se usa únicamente para simplificar fórmulas largas',
                    'No tiene un papel relevante en computación'
                ],
                correctIndex: 0,
                explanation: 'La consecuencia lógica formaliza la idea de que una conclusión se sigue necesariamente de unas premisas, clave para la verificación de programas.'
            },
            {
                text: 'Un lenguaje formal se caracteriza por:',
                options: [
                    'Tener ambigüedad similar al lenguaje natural',
                    'Tener reglas de formación claras que determinan qué expresiones son fórmulas bien formadas',
                    'No necesitar una sintaxis definida',
                    'Ser siempre un lenguaje de programación'
                ],
                correctIndex: 1,
                explanation: 'Un lenguaje formal tiene una sintaxis precisa que determina qué expresiones están bien formadas, evitando ambigüedades del lenguaje natural.'
            },
            {
                text: 'La lógica se considera una herramienta transversal en computación porque:',
                options: [
                    'Solo se usa en cursos teóricos',
                    'Aparece en verificación, diseño de circuitos, bases de datos, IA y más',
                    'Se limita al diseño de interfaces gráficas',
                    'Es exclusiva de la programación funcional'
                ],
                correctIndex: 1,
                explanation: 'La lógica es una base común a múltiples áreas de la computación: verificación de programas, circuitos, consulta a bases de datos, IA, etc.'
            }
        ]
    },
    {
        id: 'tema2',
        title: 'Tema 2: Cálculo de Deducción Natural de Enunciados',
        questions: [
            {
                text: 'El cálculo de deducción natural para enunciados sirve principalmente para:',
                options: [
                    'Calcular probabilidades',
                    'Derivar conclusiones a partir de premisas usando reglas de inferencia',
                    'Reducir expresiones aritméticas',
                    'Medir la complejidad computacional de un algoritmo'
                ],
                correctIndex: 1,
                explanation: 'La deducción natural formaliza cómo se obtienen conclusiones a partir de premisas mediante reglas de inferencia lógicas.'
            },
            {
                text: 'Una regla de inferencia es correcta cuando:',
                options: [
                    'Siempre produce fórmulas más cortas',
                    'Preserva la validez: de premisas verdaderas no lleva a conclusiones falsas',
                    'Solo se aplica una vez en una prueba',
                    'No utiliza conectores lógicos'
                ],
                correctIndex: 1,
                explanation: 'La corrección de una regla de inferencia exige que no permita pasar de premisas verdaderas a conclusiones falsas.'
            },
            {
                text: 'En una demostración en deducción natural, las hipótesis descargadas son:',
                options: [
                    'Premisas que se mantienen activas hasta el final',
                    'Suposiciones temporales que se usan dentro de un subargumento y luego se cierran',
                    'Enunciados que se niegan automáticamente',
                    'Formulas que nunca pueden usarse en reglas'
                ],
                correctIndex: 1,
                explanation: 'Las hipótesis descargadas son suposiciones usadas en un subargumento que se cierran al aplicar ciertas reglas (como →-introducción).'
            },
            {
                text: 'Una derivación es una prueba de que:',
                options: [
                    'Una fórmula es contingente',
                    'Un conjunto de fórmulas es inconsistente',
                    'Una conclusión se sigue lógicamente de unas premisas',
                    'Una fórmula es indecidible'
                ],
                correctIndex: 2,
                explanation: 'Una derivación muestra que, usando reglas de inferencia, se puede obtener la conclusión a partir de las premisas.'
            },
            {
                text: 'El objetivo al practicar deducción natural es:',
                options: [
                    'Memorizar todas las pruebas posibles',
                    'Dominar patrones de razonamiento que se puedan reutilizar en distintos problemas',
                    'Evitar el uso de reglas lógicas',
                    'Encontrar siempre la prueba más larga posible'
                ],
                correctIndex: 1,
                explanation: 'Se busca reconocer y aplicar patrones de razonamiento correctos que puedan transferirse a distintos problemas lógicos.'
            }
        ]
    },
    {
        id: 'tema3',
        title: 'Tema 3: Estrategias de Formalización para la Lógica Proposicional',
        questions: [
            {
                text: 'Formalizar un enunciado en lógica proposicional significa:',
                options: [
                    'Traducirlo a un lenguaje natural distinto',
                    'Representarlo mediante variables proposicionales y conectores lógicos',
                    'Eliminar todos los conectores lógicos',
                    'Convertirlo necesariamente en una ecuación numérica'
                ],
                correctIndex: 1,
                explanation: 'Formalizar es pasar de lenguaje natural a fórmulas usando proposiciones atómicas y conectores como ¬, ∧, ∨, →, ↔.'
            },
            {
                text: 'Una buena formalización debe:',
                options: [
                    'Ignorar matices como “si y solo si”',
                    'Conservar la estructura lógica del enunciado original',
                    'Cambiar el sentido del enunciado para simplificarlo',
                    'Usar el menor número posible de conectores, aunque cambie el significado'
                ],
                correctIndex: 1,
                explanation: 'El criterio central es la fidelidad: la fórmula debe preservar la estructura lógica del enunciado original.'
            },
            {
                text: 'Al elegir letras proposicionales es recomendable:',
                options: [
                    'Usar siempre las mismas sin importar el contexto',
                    'Elegir símbolos que ayuden a recordar el contenido de cada proposición',
                    'Usar solo letras griegas',
                    'Evitar cualquier relación entre símbolo y contenido'
                ],
                correctIndex: 1,
                explanation: 'Es útil que las letras proposicionales sugieran su contenido para evitar confusiones en formalizaciones largas.'
            },
            {
                text: 'Expresiones como “a menos que”, “salvo que” o “si y solo si” requieren:',
                options: [
                    'Atención especial, porque no son equivalentes a un simple “si… entonces…”',
                    'Ser siempre ignoradas en la formalización',
                    'Traducirse siempre como una conjunción',
                    'No pueden formalizarse en lógica proposicional'
                ],
                correctIndex: 0,
                explanation: 'Estas expresiones tienen estructuras lógicas específicas que deben respetarse en la traducción a fórmulas.'
            },
            {
                text: 'Una estrategia útil al formalizar textos largos es:',
                options: [
                    'Traducir todo de una vez sin analizar la estructura',
                    'Identificar primero las proposiciones atómicas y luego la estructura de conectores',
                    'Empezar por las conclusiones y olvidar las premisas',
                    'Reducir todas las frases a una sola proposición'
                ],
                correctIndex: 1,
                explanation: 'Primero se identifican las partes atómicas, luego se analiza cómo se conectan mediante los distintos conectores lógicos.'
            }
        ]
    },
    {
        id: 'tema4',
        title: 'Tema 4: Estrategias de Deducción para la Lógica Proposicional',
        questions: [
            {
                text: 'Una estrategia básica de prueba en lógica proposicional es:',
                options: [
                    'Aplicar reglas al azar hasta llegar a algo familiar',
                    'Trabajar hacia adelante desde las premisas o hacia atrás desde la conclusión, de forma planificada',
                    'Usar solo reglas de eliminación',
                    'Evitar introducir nuevas hipótesis'
                ],
                correctIndex: 1,
                explanation: 'Las estrategias incluyen trabajar hacia adelante, hacia atrás o combinando ambos enfoques de manera planificada.'
            },
            {
                text: 'Para probar una implicación A → B, una táctica común es:',
                options: [
                    'Negar B y derivar una contradicción',
                    'Suponer A como hipótesis temporal y derivar B',
                    'Suponer B y derivar A',
                    'Introducir directamente A → B como premisa'
                ],
                correctIndex: 1,
                explanation: 'La regla de introducción de → usa una suposición temporal de A para derivar B y luego descargar la hipótesis.'
            },
            {
                text: 'En pruebas con disyunciones (A ∨ B), es típica la siguiente estrategia:',
                options: [
                    'Tratar la disyunción como si fuera una conjunción',
                    'Hacer una prueba por casos, suponiendo A y B por separado',
                    'Ignorar uno de los disyuntos',
                    'Convertir A ∨ B en ¬A → B siempre'
                ],
                correctIndex: 1,
                explanation: 'La eliminación de ∨ requiere analizar ambos casos: suponiendo A y suponiendo B, derivando la misma conclusión.'
            },
            {
                text: 'El principio de prueba indirecta (reducción al absurdo) consiste en:',
                options: [
                    'Suponer la negación de la conclusión y derivar una contradicción',
                    'Suponer todas las premisas son falsas',
                    'No usar ninguna hipótesis',
                    'Reemplazar todas las conjunciones por disyunciones'
                ],
                correctIndex: 0,
                explanation: 'En la prueba indirecta se parte de ¬C como hipótesis y, si se deriva una contradicción, se concluye C.'
            },
            {
                text: 'Para gestionar pruebas largas, una recomendación es:',
                options: [
                    'No anotar nada y confiar en la memoria',
                    'Marcar visualmente subpruebas, hipótesis y objetivos parciales',
                    'Evitar el uso de subpruebas',
                    'Usar siempre la misma estrategia sin importar el problema'
                ],
                correctIndex: 1,
                explanation: 'En pruebas complejas es clave organizar el espacio de trabajo, marcar subpruebas y tener claros los objetivos parciales.'
            }
        ]
    },
    {
        id: 'tema5',
        title: 'Tema 5: Semántica de la Lógica Proposicional',
        questions: [
            {
                text: 'Una tabla de verdad permite:',
                options: [
                    'Calcular derivaciones formales',
                    'Evaluar el valor de verdad de una fórmula para todas las asignaciones posibles',
                    'Medir la complejidad temporal de una fórmula',
                    'Evitar el uso de conectores lógicos'
                ],
                correctIndex: 1,
                explanation: 'La tabla de verdad muestra cómo varía el valor de verdad de una fórmula según las asignaciones a sus proposiciones atómicas.'
            },
            {
                text: 'Una tautología es una fórmula que:',
                options: [
                    'Es verdadera solo en algunas asignaciones',
                    'Es falsa en todas las asignaciones',
                    'Es verdadera en todas las asignaciones posibles',
                    'No tiene valor de verdad definido'
                ],
                correctIndex: 2,
                explanation: 'Por definición, una tautología es verdadera en toda interpretación posible de sus variables.'
            },
            {
                text: 'Dos fórmulas son lógicamente equivalentes cuando:',
                options: [
                    'Tienen exactamente la misma forma sintáctica',
                    'Comparten el mismo número de conectores',
                    'Tienen el mismo valor de verdad en todas las asignaciones',
                    'Una es más corta que la otra'
                ],
                correctIndex: 2,
                explanation: 'La equivalencia lógica se define semánticamente: las fórmulas coinciden en valor de verdad en todas las asignaciones posibles.'
            },
            {
                text: 'Un argumento es semánticamente válido si:',
                options: [
                    'Su conclusión es una tautología',
                    'No existe ninguna asignación en la que todas las premisas sean verdaderas y la conclusión falsa',
                    'Tiene muchas premisas',
                    'Todas sus fórmulas son equivalentes entre sí'
                ],
                correctIndex: 1,
                explanation: 'Esta es la definición semántica de validez basada en tablas de verdad o modelos.'
            },
            {
                text: 'Las nociones de consecuencia lógica y validez en lógica proposicional se pueden analizar usando:',
                options: [
                    'Solo derivaciones formales, nunca tablas de verdad',
                    'Únicamente ejemplos informales',
                    'Tablas de verdad, evaluaciones y noción de modelo',
                    'Solo mediante programación en Prolog'
                ],
                correctIndex: 2,
                explanation: 'La semántica usa tablas de verdad y modelos para caracterizar validez y consecuencia lógica.'
            }
        ]
    },
    {
        id: 'tema6',
        title: 'Tema 6: Aplicaciones de la Lógica Proposicional: Circuitos Lógicos',
        questions: [
            {
                text: 'Los circuitos lógicos combinacionales pueden modelarse usando:',
                options: [
                    'Únicamente ecuaciones diferenciales',
                    'Fórmulas de lógica proposicional con conectores como ∧, ∨, ¬',
                    'Listas enlazadas',
                    'Árboles de decisión probabilísticos'
                ],
                correctIndex: 1,
                explanation: 'Las compuertas lógicas (AND, OR, NOT, etc.) se modelan naturalmente mediante fórmulas proposicionales.'
            },
            {
                text: 'Una compuerta AND implementa semánticamente el conector:',
                options: [
                    '∨ (disyunción)',
                    '¬ (negación)',
                    '∧ (conjunción)',
                    '→ (implicación)'
                ],
                correctIndex: 2,
                explanation: 'La compuerta AND solo produce 1 cuando ambas entradas son 1, igual que la conjunción lógica.'
            },
            {
                text: 'Diseñar un circuito a partir de una tabla de verdad implica:',
                options: [
                    'Encontrar una fórmula proposicional equivalente a esa tabla',
                    'Contar el número de filas verdaderas sin más',
                    'Usar exclusivamente compuertas NOT',
                    'Evitar cualquier simplificación'
                ],
                correctIndex: 0,
                explanation: 'Se busca una fórmula que sea verdadera exactamente en las filas en que la salida del circuito es 1.'
            },
            {
                text: 'La simplificación de circuitos suele apoyarse en:',
                options: [
                    'Equivalencias lógicas como leyes de De Morgan o distributividad',
                    'Cambios arbitrarios de conectores',
                    'Ignorar entradas redundantes',
                    'Solo la intuición, sin reglas formales'
                ],
                correctIndex: 0,
                explanation: 'Las leyes de equivalencia permiten reducir el número de compuertas manteniendo el mismo comportamiento.'
            },
            {
                text: 'Un mismo comportamiento de entrada/salida puede implementarse mediante:',
                options: [
                    'Distintos circuitos lógicos equivalentes entre sí',
                    'Un único circuito posible',
                    'Solo un tipo de compuerta',
                    'Ningún circuito finito'
                ],
                correctIndex: 0,
                explanation: 'Existe más de una implementación de circuito para una misma función booleana; se buscan las más simples o eficientes.'
            }
        ]
    },
    {
        id: 'tema7',
        title: 'Tema 7: Cálculo de Deducción Natural de Predicados',
        questions: [
            {
                text: 'En lógica de predicados, además de conectores, introducimos:',
                options: [
                    'Solo constantes numéricas',
                    'Cuantificadores como ∀ y ∃ y variables',
                    'Conectores nuevos sin interpretación',
                    'Únicamente funciones recursivas'
                ],
                correctIndex: 1,
                explanation: 'La lógica de predicados extiende la proposicional con cuantificadores, variables y predicados de varias posiciones.'
            },
            {
                text: 'Una fórmula del tipo ∀x P(x) se lee como:',
                options: [
                    'Existe un x tal que P(x)',
                    'Para todo x, P(x)',
                    'P es falso para todo x',
                    'P es indefinido'
                ],
                correctIndex: 1,
                explanation: 'El cuantificador universal expresa que todos los elementos del dominio satisfacen la propiedad P.'
            },
            {
                text: 'En deducción natural para predicados, al instanciar un cuantificador universal debemos cuidar:',
                options: [
                    'No usar términos que ya aparecen en otras hipótesis de forma problemática',
                    'Usar siempre la misma constante',
                    'Evitar el uso de variables',
                    'Que la fórmula resultante sea una tautología'
                ],
                correctIndex: 0,
                explanation: 'La elección del término al instanciar debe respetar las restricciones de las reglas (por ejemplo, variables libres u ocurrencias previas).'
            },
            {
                text: 'La introducción del cuantificador existencial ∃x P(x) suele basarse en:',
                options: [
                    'Exhibir un ejemplo concreto que satisface P',
                    'Negar P(x) para todo x',
                    'Eliminar todas las variables',
                    'Convertir P(x) en una tautología'
                ],
                correctIndex: 0,
                explanation: 'Para justificar ∃x P(x) se muestra al menos un término específico para el cual P es verdadero.'
            },
            {
                text: 'La diferencia central entre proposicional y predicados está en que:',
                options: [
                    'En predicados ya no hay conectores',
                    'En predicados se puede hablar de objetos individuales y sus propiedades mediante cuantificación',
                    'Proposicional es más expresivo que predicados',
                    'Predicados no permite hacer deducciones'
                ],
                correctIndex: 1,
                explanation: 'La lógica de predicados permite expresar relaciones y propiedades sobre elementos de un dominio, gracias a los cuantificadores.'
            }
        ]
    },
    {
        id: 'tema8',
        title: 'Tema 8: Estrategias de Formalización para la Lógica de Predicados',
        questions: [
            {
                text: 'Al formalizar en lógica de predicados, una de las primeras tareas es:',
                options: [
                    'Elegir un dominio de discurso adecuado',
                    'Eliminar todos los cuantificadores',
                    'Usar siempre el dominio de los números naturales',
                    'Evitar el uso de predicados'
                ],
                correctIndex: 0,
                explanation: 'El dominio de discurso fija de qué tipo de objetos se está hablando (personas, números, programas, etc.).'
            },
            {
                text: 'Expresiones como “todos”, “algunos”, “ningún” se traducen mediante:',
                options: [
                    'Conectores proposicionales únicamente',
                    'Cuantificadores universales y existenciales',
                    'Variables libres sin cuantificar',
                    'Símbolos aritméticos'
                ],
                correctIndex: 1,
                explanation: 'Estas expresiones cuantifican sobre elementos del dominio y se representan con ∀ y ∃.'
            },
            {
                text: 'Una buena práctica al formalizar relaciones es:',
                options: [
                    'Usar siempre un solo predicado para todo',
                    'Definir predicados con nombres que sugieran su significado (por ejemplo, Estudiante(x))',
                    'Evitar que los predicados tengan interpretación',
                    'No especificar el número de argumentos del predicado'
                ],
                correctIndex: 1,
                explanation: 'Predicados con nombres significativos ayudan a mantener claridad en formalizaciones complejas.'
            },
            {
                text: 'La ambigüedad del lenguaje natural se combate en lógica de predicados mediante:',
                options: [
                    'Escribir frases aún más largas',
                    'Una sintaxis estricta y el uso explícito de cuantificadores y paréntesis',
                    'Eliminar todos los cuantificadores',
                    'No traducir expresiones complejas'
                ],
                correctIndex: 1,
                explanation: 'La sintaxis formal con cuantificadores y paréntesis elimina muchas ambigüedades del lenguaje cotidiano.'
            },
            {
                text: 'Al formalizar frases con varios cuantificadores, es fundamental:',
                options: [
                    'Que el orden de los cuantificadores no influya en el significado',
                    'Recordar que cambiar el orden puede cambiar totalmente el significado',
                    'Usar siempre primero ∃ y luego ∀',
                    'No usar más de un cuantificador'
                ],
                correctIndex: 1,
                explanation: 'En general, ∀x∃y P(x,y) no equivale a ∃y∀x P(x,y); el orden de cuantificación suele ser crucial.'
            }
        ]
    },
    {
        id: 'tema9',
        title: 'Tema 9: Estrategias de Deducción para la Lógica de Predicados',
        questions: [
            {
                text: 'En pruebas con cuantificadores, una dificultad adicional respecto a proposicional es:',
                options: [
                    'Que ya no hay conectores',
                    'Gestionar instancias concretas y variables ligadas de forma cuidadosa',
                    'No poder usar reglas de inferencia',
                    'No poder introducir nuevas hipótesis'
                ],
                correctIndex: 1,
                explanation: 'Hay que manejar con cuidado variables ligadas, libres e instanciaciones correctas de los cuantificadores.'
            },
            {
                text: 'Para usar ∀x P(x) en una prueba, normalmente se:',
                options: [
                    'Elige un elemento arbitrario del dominio y se infiere P de ese elemento',
                    'Lo ignora porque no aporta información',
                    'Lo convierte en una disyunción',
                    'Se sustituye por ∃x P(x)'
                ],
                correctIndex: 0,
                explanation: 'La eliminación de ∀ permite instanciar la fórmula con un término específico del dominio.'
            },
            {
                text: 'Una estrategia para demostrar ∀x P(x) es:',
                options: [
                    'Probar P solo para un ejemplo concreto',
                    'Tomar un x arbitrario y demostrar P(x) sin suponer nada especial sobre x',
                    'Negar P(x) para todo x',
                    'Convertir P(x) en una tautología proposicional'
                ],
                correctIndex: 1,
                explanation: 'Se muestra que cualquier elemento arbitrario del dominio satisface P; de ahí se concluye que todos lo satisfacen.'
            },
            {
                text: 'Las reglas con cuantificadores existenciales exigen cuidado para evitar:',
                options: [
                    'Introducir nuevas constantes',
                    'Errores de tipo o sintaxis',
                    'Usar información demasiado específica donde solo se sabe que “alguien” cumple la propiedad',
                    'Usar conectores binarios'
                ],
                correctIndex: 2,
                explanation: 'Del hecho de que existe un elemento con cierta propiedad no siempre podemos identificar cuál es ni usar sus rasgos específicos.'
            },
            {
                text: 'Muchas pruebas en lógica de predicados combinan:',
                options: [
                    'Solo reglas semánticas',
                    'Estrategias de proposicional junto con reglas específicas para cuantificadores',
                    'Únicamente razonamiento informal',
                    'Exclusivamente demostraciones por contradicción'
                ],
                correctIndex: 1,
                explanation: 'Las técnicas de proposicional siguen siendo válidas, pero se complementan con reglas para cuantificadores y términos.'
            }
        ]
    },
    {
        id: 'tema10',
        title: 'Tema 10: Teoría de Conjuntos y Lógica de Predicados',
        questions: [
            {
                text: 'En teoría de conjuntos, el símbolo ∈ significa que:',
                options: [
                    'Un conjunto es subconjunto de otro',
                    'Un elemento pertenece a un conjunto',
                    'Dos conjuntos son iguales',
                    'Un conjunto es infinito'
                ],
                correctIndex: 1,
                explanation: 'x ∈ A se lee “x pertenece a A” o “x es elemento de A”.'
            },
            {
                text: 'La relación entre conjuntos y lógica de predicados se aprecia cuando:',
                options: [
                    'Se identifica la pertenencia a conjuntos con propiedades definidas por predicados',
                    'Se evita hablar de propiedades',
                    'Se usan solo números reales',
                    'Se prohíbe el uso de cuantificadores'
                ],
                correctIndex: 0,
                explanation: 'Un conjunto puede describirse como el conjunto de elementos que satisfacen una propiedad P(x).'
            },
            {
                text: 'La intersección de dos conjuntos A ∩ B contiene:',
                options: [
                    'Elementos que están en A o en B pero no en ambos',
                    'Elementos que no están en A ni en B',
                    'Elementos que están simultáneamente en A y en B',
                    'Todos los elementos posibles del universo'
                ],
                correctIndex: 2,
                explanation: 'Por definición, A ∩ B = {x : x ∈ A y x ∈ B}.'
            },
            {
                text: 'El complemento de un conjunto A (respecto de un universo U) contiene:',
                options: [
                    'Elementos que pertenecen a A',
                    'Elementos que no pertenecen a A pero sí a U',
                    'Elementos que pertenecen a todos los conjuntos',
                    'Solo el elemento vacío'
                ],
                correctIndex: 1,
                explanation: 'El complemento de A son los elementos de U que no están en A.'
            },
            {
                text: 'Las leyes de De Morgan en conjuntos se corresponden con:',
                options: [
                    'Leyes sin relación con la lógica',
                    'Equivalencias lógicas que relacionan negación, conjunción y disyunción',
                    'Solo propiedades aritméticas',
                    'Reglas exclusivas de Prolog'
                ],
                correctIndex: 1,
                explanation: 'Las leyes de De Morgan aparecen tanto en el álgebra de conjuntos como en la lógica proposicional (¬(A ∧ B) ≡ ¬A ∨ ¬B, etc.).'
            }
        ]
    },
    {
        id: 'tema11',
        title: 'Tema 11: Semántica de la Lógica de Predicados',
        questions: [
            {
                text: 'En lógica de predicados, una interpretación fija:',
                options: [
                    'Solo los valores de verdad de las constantes proposicionales',
                    'Un dominio de discurso y el significado de los símbolos no lógicos',
                    'Únicamente el orden de los cuantificadores',
                    'El número de reglas de inferencia'
                ],
                correctIndex: 1,
                explanation: 'Una interpretación asigna un dominio y una extensión a los predicados, funciones y constantes del lenguaje.'
            },
            {
                text: 'Una fórmula con variables libres:',
                options: [
                    'No tiene ningún valor de verdad hasta que se asigne un valor a esas variables',
                    'Es siempre verdadera',
                    'Es siempre falsa',
                    'No pertenece al lenguaje'
                ],
                correctIndex: 0,
                explanation: 'El valor de verdad de fórmulas con variables libres depende de una asignación de valores a dichas variables.'
            },
            {
                text: 'Decir que una fórmula es válida en lógica de predicados significa que:',
                options: [
                    'Es verdadera solo en una interpretación particular',
                    'Es verdadera en todas las interpretaciones y para toda asignación de variables',
                    'Es falsa en todas las interpretaciones',
                    'Depende de un dominio específico'
                ],
                correctIndex: 1,
                explanation: 'La validez en lógica de predicados exige verdad en toda interpretación posible y para toda asignación de variables libres.'
            },
            {
                text: 'La noción de modelo de una teoría es:',
                options: [
                    'Una teoría derivada',
                    'Una interpretación en la que todas las fórmulas de la teoría son verdaderas',
                    'Un conjunto arbitrario de fórmulas',
                    'Un único enunciado atómico'
                ],
                correctIndex: 1,
                explanation: 'Un modelo es una interpretación que hace verdaderas todas las fórmulas de una teoría o conjunto de premisas.'
            },
            {
                text: 'La relación entre sintaxis y semántica se refleja en el objetivo de que:',
                options: [
                    'Las pruebas formales no tengan relación con la verdad',
                    'Los sistemas de prueba sean correctos y completos respecto a la noción semántica de consecuencia',
                    'No exista conexión entre derivabilidad y validez',
                    'Las derivaciones ignoren las interpretaciones'
                ],
                correctIndex: 1,
                explanation: 'Se busca que todo lo demostrable sea válido (corrección) y, en ciertos sistemas, que todo lo válido sea demostrable (completitud).'
            }
        ]
    },
    {
        id: 'tema12',
        title: 'Tema 12: Aplicaciones de la Lógica de Predicados: Programación Lógica',
        questions: [
            {
                text: 'En programación lógica (por ejemplo, Prolog), un programa se describe principalmente mediante:',
                options: [
                    'Hechos y reglas que representan conocimiento lógico',
                    'Secuencias de instrucciones imperativas',
                    'Diagramas de flujo',
                    'Únicamente funciones recursivas numéricas'
                ],
                correctIndex: 0,
                explanation: 'Los programas lógicos se basan en hechos y reglas que el motor de inferencia usa para responder consultas.'
            },
            {
                text: 'La unificación en Prolog es el proceso de:',
                options: [
                    'Simplificar fórmulas proposicionales',
                    'Hacer coincidir términos, encontrando sustituciones para variables',
                    'Ordenar listas en forma ascendente',
                    'Eliminar reglas redundantes'
                ],
                correctIndex: 1,
                explanation: 'La unificación busca una sustitución que haga que dos términos tengan la misma forma.'
            },
            {
                text: 'El backtracking en Prolog permite:',
                options: [
                    'Explorar distintas alternativas de prueba cuando una falla',
                    'Ejecutar varios programas en paralelo',
                    'Evitar el uso de reglas',
                    'Garantizar siempre la terminación'
                ],
                correctIndex: 0,
                explanation: 'Cuando una rama de búsqueda falla, el sistema vuelve atrás para probar otras reglas o hechos aplicables.'
            },
            {
                text: 'En la práctica de “mundiales” del curso, la base de conocimiento incluye:',
                options: [
                    'Hechos sobre mundiales, países y continentes, además de reglas de análisis',
                    'Únicamente reglas aritméticas',
                    'Solo listas de jugadores',
                    'Datos sin conexión con la lógica de predicados'
                ],
                correctIndex: 0,
                explanation: 'El archivo mundiales.pl modela mundiales, países, continentes y reglas para responder consultas sobre el dominio.'
            },
            {
                text: 'Un objetivo pedagógico central de la programación lógica en este tema es:',
                options: [
                    'Reemplazar por completo la lógica de predicados',
                    'Mostrar cómo la lógica de predicados puede ejecutarse a través de un motor de inferencia',
                    'Abandonar el razonamiento formal',
                    'Trabajar solo con datos numéricos'
                ],
                correctIndex: 1,
                explanation: 'Se busca conectar la teoría de la lógica de predicados con su uso práctico en un lenguaje ejecutable como Prolog.'
            }
        ]
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const quizContainer = document.getElementById('quiz-container');
    const summaryContainer = document.getElementById('quiz-summary');

    if (!quizContainer) {
        return;
    }

    function renderQuiz(temaId) {
        const tema = quizData.find(t => t.id === temaId);
        if (!tema) return;

        quizContainer.innerHTML = '';

        const card = document.createElement('div');
        card.className = 'quiz-card';

        tema.questions.forEach((question, index) => {
            const questionWrapper = document.createElement('div');
            questionWrapper.className = 'quiz-question';
            questionWrapper.setAttribute('data-question-index', String(index));

            const title = document.createElement('div');
            title.className = 'quiz-question-title';
            title.textContent = `Pregunta ${index + 1}. ${question.text}`;

            const optionsContainer = document.createElement('div');
            optionsContainer.className = 'quiz-options';

            question.options.forEach((optionText, optionIndex) => {
                const label = document.createElement('label');
                label.className = 'quiz-option';

                const input = document.createElement('input');
                input.type = 'radio';
                input.name = `${tema.id}_q${index}`;
                input.value = String(optionIndex);

                const span = document.createElement('span');
                span.textContent = optionText;

                label.appendChild(input);
                label.appendChild(span);
                optionsContainer.appendChild(label);
            });

            const feedback = document.createElement('div');
            feedback.className = 'quiz-feedback';

            questionWrapper.appendChild(title);
            questionWrapper.appendChild(optionsContainer);
            questionWrapper.appendChild(feedback);

            card.appendChild(questionWrapper);
        });

        const actions = document.createElement('div');
        actions.className = 'quiz-actions';

        const gradeButton = document.createElement('button');
        gradeButton.className = 'btn btn-primary';
        gradeButton.textContent = 'Calificar quiz';

        gradeButton.addEventListener('click', () => {
            gradeQuiz(tema);
        });

        actions.appendChild(gradeButton);
        card.appendChild(actions);

        quizContainer.appendChild(card);
    }

    function gradeQuiz(tema) {
        const questions = quizContainer.querySelectorAll('.quiz-question');
        let correctCount = 0;
        let total = tema.questions.length;

        questions.forEach(questionEl => {
            const index = parseInt(questionEl.getAttribute('data-question-index') || '0', 10);
            const dataQuestion = tema.questions[index];
            const name = `${tema.id}_q${index}`;
            const selected = quizContainer.querySelector(`input[name="${name}"]:checked`);
            const feedbackEl = questionEl.querySelector('.quiz-feedback');

            if (!feedbackEl || !dataQuestion) return;

            feedbackEl.classList.remove('correct', 'incorrect');

            if (!selected) {
                feedbackEl.textContent = `No respondiste esta pregunta. ${dataQuestion.explanation}`;
                feedbackEl.classList.add('incorrect');
                return;
            }

            const selectedIndex = parseInt(selected.value, 10);

            if (selectedIndex === dataQuestion.correctIndex) {
                correctCount += 1;
                feedbackEl.textContent = 'Correcto.';
                feedbackEl.classList.add('correct');
            } else {
                feedbackEl.textContent = `Incorrecto. ${dataQuestion.explanation}`;
                feedbackEl.classList.add('incorrect');
            }
        });

        const percent = Math.round((correctCount / total) * 100);
        summaryContainer.textContent = `Obtuviste ${correctCount} de ${total} respuestas correctas (${percent}%). Revisa la retroalimentación en cada pregunta para reforzar los conceptos.`;
    }

    const initialHash = window.location.hash.replace('#', '');
    const initialTemaExists = quizData.some(t => t.id === initialHash);

    if (!initialTemaExists) {
        quizContainer.innerHTML = '<p>Selecciona un tema desde la página principal para acceder a su quiz.</p>';
        if (summaryContainer) {
            summaryContainer.textContent = '';
        }
        return;
    }

    renderQuiz(initialHash);
});

