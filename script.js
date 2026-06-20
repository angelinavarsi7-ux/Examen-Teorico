// 1. Base de datos de tus flashcards
const bancoFlashcards = {
    bloque1: [
        { definicion: "Cual es el concepto de conducir?", concepto: "Manjear un vehiculo por la via, reconociendo la seguridad vial como lo primero para quienes se movilizan y circulan." },
        { definicion: "A que concepto hace referencia el siguiente texto: 'Todo aquel que conduce o maneja un vehiculo, sea de combustible, electrico, hibrido, es el responsable de lo que ocurra con el vehiculo y debe tomar su responsabilidad.'", concepto: "Conductor" },
        { definicion: "A que tipo de condcutor hace referencia el siguiente texto: 'Toda persona que aquiera por primera vez su licencia y no sobrepase los tres años de haberla obtenido, aplica para licencia A,B1 y D en sus 3 primeros años.'", concepto: "Conductor novato" },
        { definicion: "A que tipo de condcutor hace referencia el siguiente texto:'Su actividad laboral principal sea la conduccion de vehiculos a motor dedicado al transporte de mercancias o personas. Tienen licencia B3,B4,C,D,E'", concepto: "Conductor profesional" },
        { definicion: "A que tipo de conductor hace referencia el siguiente texto 'Aquel que renueve su licencia, tenga mas de 3 años de haberla obtenido y no sea profesional, acreditado con la licencia A,B1 o B2'", concepto: "Conductor no tipificado por la ley (conductor comun)" },
        { definicion: "A que tipo de conductor hace referencia el siguiente texto 'Aquel que no este debidamente inscrito como conductor, o sea no cuenta con el tipo de licencia correspondiente para el vehiculo que utiliza.'", concepto: "Conductor no acreditado" },
        { definicion: "La seguridad vial dentro de la vision sistema seguro incorpora 5 cosas, cuales son?", concepto: "Mejores infraestructuras, mejores leyes, mejor asitencia a las victimas, usuarios y vehiculos mas seguros" },
        { definicion: "A que concepto hace referencia el siguiente texto: 'Accion culposa cometida por los conductores de los vehiculos, sus pasajeros o peatones'", concepto: "Accidente de transito" },
        { definicion: "A que tipo de accidente de transito hace referencia el siguiente texto: 'Choque violento entre dos o mas vehiculos o un objeto fijo.'", concepto: "Colision" },
        { definicion: "A que tipo de accidente de transito hace referencia el siguiente texto: 'Vehiculo se deja ir sobre sus llantas perdiendo su posicion sobre la calzada'", concepto: "Vuelco" },
        { definicion: "A que tipo de accidente de transito hace referencia el siguiente texto: 'Pasarle por encima o golpear a una persona o animal, generalmente con un vehiculo'", concepto: "Atropello" },
        { definicion: "A que tipo de accidente de transito hace referencia el siguiente texto: 'Es la invasion del carril izquierdo al realizar un adelantamiento, es la principal causa para que ocurra este choque'", concepto: "Choque de frente" },
        { definicion: "A que tipo de accidente de transito hace referencia el siguiente texto: 'Es muy comun, sucede por no guardar la distancia, por distraccion o exceso de velocidad.'", concepto: "Colision trasera" },
        { definicion: "A que tipo de accidente de transito hace referencia el siguiente texto: 'Sucede cuando un vehiculo colisiona por el lado izquierdo o derecho de otro vehiculo'", concepto: "Colision lateral" },
        { definicion: "A que concepto hace referencia la siguiente definicion: 'Procedimiento simplificado que se usa para atender accidentes donde solo se presentan daños materiales y no hay heridos'", concepto: "DAM (Declaracion de accidente menor)" },
        { definicion: "A que concepto hace referencia la siguiente definicion: 'Via o seccion de la calzada destinada al transito de bicicletas, peatones o triciclos no motorizados'", concepto: "Ciclovias" },
        { definicion: "A que concepto hace referencia la siguiente definicion: 'Carretera que, en ambos sentidos por sus condiciones permite al ciclista circular de manera segura en igual derecho que otro vehiculo y tiene las misma reglas y responsabilidades.'", concepto: "Vias compartidas" },
        { definicion: "A que concepto hace referencia la siguiente definicion: 'Parte de la via destinada a peatones'", concepto: "Acera" },
        { definicion: "A que concepto hace referencia la siguiente definicion: 'Asegura la circulacion peatonal.", concepto: "Pasos peatonales'" },
        { definicion: "A que concepto hace referencia la siguiente definicion: 'Estructuras elevadas para que peatones crucen de manera segura'", concepto: "Puente peatonal" },
        { definicion: "A que concepto hace referencia la siguiente definicion: 'Espacios centrales entre carriles de diferentes sentidos'", concepto: "Medianeras" },
        { definicion: "A que concepto hace referencia la siguiente definicion: 'Espacios que separan carriles y cuentan con vegetacion'", concepto: "Zonas verdes" },
        { definicion: "A que concepto hace referencia la siguiente definicion: 'Espacios especiales para que los buses se detengan sin obstruir el transito'", concepto: "Bahias de autobuses" },
        { definicion: "A que concepto hace referencia la siguiente definicion: 'Espacio de la via donde circulan los vehiculos'", concepto: "Calzada" },
        { definicion: "A que concepto hace referencia la siguiente definicion: 'Parte de la calzada destinada al transito en una sola direccion'", concepto: "Carril de circulacion" },
        { definicion: "A que concepto hace referencia la siguiente definicion: 'Seccion contigua a la calzada que da soporte lateral al pavimento, sirve para transito de peatones y estacionamiento de emergencia'", concepto: "Espaldon" },
        { definicion: "A que concepto hace referencia la siguiente definicion: 'Permiten el flujo de agua de lluvia en una carretera'", concepto: "Cuneta" },
        { definicion: "A que concepto hace referencia la siguiente definicion: 'Reducen la gravedad de las consecuencias de los accidentes por salida de via'", concepto: "Sistema de contencion" },
        { definicion: "A que concepto hace referencia la siguiente definicion: 'Estructuras que permiten pasar sobre cuerpos de agua u otras carretras'", concepto: "Puente vehicular" },
        { definicion: "A que tipo de carretera hace referencia la siguiente definicion: 'Volumenes dee transito altos, viajes internacionales, interprovinciales o de larga distancia'", concepto: "Carretera primaria" },
        { definicion: "A que tipo de carretera hace referencia la siguiente definicion: 'Conectan cabeceras cantonales importantes u otros centros de poblacion'", concepto: "Carreteras secundarias"  },
        { definicion: "A que tipo de carretera hace referencia la siguiente definicion: 'Recogen el transito de carreteras primarias y secundarias.'", concepto: "Carreteras terciaria"  },
        { definicion: "A que tipo de calle hace referencia la siguiente definicion: 'Vias publicas incluidas dentro del cuadrante de un area urbana'", concepto: "Calle Local"},
        { definicion: "A que tipo de camino hace referencia la siguiente definicion: 'Dan acceso a fincas, poblados o areas rurales'", concepto: "Caminos vecinales"  },
        { definicion: "Cual es el tipo de licencia que autoriza conducir vehiculos de hasta 4000 kg de peso bruto o peso maximo autorizado y puede circular o no mas de 550 centimetros cubicos.", concepto: "B1" },
        { definicion: "Cual es el tipo de licencia que autoriza conducir vehiculos de hasta 8000 kg de peso bruto o peso maximo autorizado.", concepto: "B2" },
        { definicion: "Cual es el tipo de licencia que autoriza conducir vehiculos de todo peso, excepto los vehiculos pesados articulados, el conductor debe ser mayor de 22 años y contar con liceencia B o C al menos con tres años de expedida.", concepto: "B3" },
        { definicion: "Cual es el tipo de licencia que autoriza conducir vehiculos de todo peso y articulados, el conductor debe ser mayor de 22 años y contar con liceencia B o C al menos con tres años de expedida y aprobar un curso de Educacion vial", concepto: "B4" },
        { definicion: "Cual es la letra de licencia que se usa para bicimoto, moto, triciclo y cudraciclo?", concepto: "A" },
        { definicion: "Cual es la letra de licencia que se usa para taxis, microbuses, busetas o autobuses", concepto: "C" },
        { definicion: "Cual es la letra de licencia que se usa para tractores y otro equipo especial", concepto: "D" },
        { definicion: "Cual es la letra de licencia que se usa para vehiculos de dos, tres, cuatro o mas ejes excepto los destinados al transporte publico.", concepto: "E" },
        { definicion: "Si un conductor acumula la totalidad de puntos por primera vez, cuantos meses no podra conducir?", concepto: "12 meses" },
        { definicion: "Si un conductor acumula la totalidad de puntos por segunda vez, cuantos meses no podra conducir?", concepto: "24 meses" },
        { definicion: "Cuales son las tres pegatinas distintoras que debe tener pegadas un vehiculo?", concepto: "Placa adhesiva, Adhesivo de IVE, Calcomonia de derecho de circulacion." },
        { definicion: "Cuales son los 6 usuarios mas vulnerables en la via?", concepto: "Peatones, niños, adultos mayores, discapacitados, ciclistas y motociclistas." },
        { definicion: "Que color identifica los servicios de Salud?", concepto: "Rojo" },
        { definicion: "Que color identifica a los servicios de emergencia?", concepto: "Amarillo/ambar" },
        { definicion: "Que color identifica a los servicios policiales?", concepto: "Azul" },
        { definicion: "Siempe que usted vea o escuche un servicio de emergencia que debe hacer?", concepto: "ceder el paso" },
        { definicion: "Cual es el vehiculo con la primera prioridad en la via?", concepto: "Vehiculos sobre rieles" },
        { definicion: "Cual es el vehiculo con la segunda prioridad en la via?", concepto: "Regulacion de transito a traves de inspectores" },
        { definicion: "Cual es el vehiculo con la tecer prioridad en la via?", concepto: "Los de emergencias" },
        { definicion: "En carreteras, como se maneja la prioridad?", concepto: "Los que circulan sobre la carretera primaria tienen mas prioridad que los circulan en la secundaria, los que circulan en la secundaria tienen mas prioridad que los que ciruclan en la terciaria." },
        { definicion: "En intersecciones sin señales de prioridad, quien tiene la prioridad?", concepto: "Los de la derecha tienen mayor prioridad que los de la izquierda." },
        { definicion: "Cual usuario tiene mayor prioridad, el que lo regula un semaforo o un alto?", concepto: "El del semaforo" },
        { definicion: "Cual usuario tiene mayor prioridad, el regulado por una señal de ceda o la de alto?", concepto: "Los que estan regulados por la señal de ceda" },
        { definicion: "En intersecciones con dos accessos controlados por una señal de de alto, quien tiene la prioridad?", concepto: "Los que circulan por los accesos secundarios" },
        { definicion: "quien tiene la prioridad, los que continuan directo por los accesos secundarios o los que giran a la izquierda desde el mismo acceso?", concepto: "Los que continuan directo." },
        { definicion: "Al adelantar una bicicleta, cual es la distancia recomendada y segura que debe tener usted del ciclista?", concepto: "1.5 metros" },
    
  {
    definicion: "A qué concepto hace referencia la siguiente definición: 'Factores que aumentan la probabilidad de sufrir un siniestro vial, divididos por la OMS en cuatro grupos estratégicos'",
    concepto: "Factores de riesgo"
  },
  {
    definicion: "A qué concepto hace referencia la siguiente definición: 'Grupo de factores que incluye aspectos como la falta de aceras, ciclovías, las distancias de traslado, el tipo de vehículo y el volumen de tránsito'",
    concepto: "Exposición al riesgo"
  },
  {
    definicion: "A qué concepto hace referencia la siguiente definición: 'Grupo de factores que incluye el mal estado de carreteras, falta de mantenimiento del vehículo, consumo de sustancias, exceso de velocidad, fatiga y distracciones'",
    concepto: "Posibilidad de que ocurra un accidente"
  },
  {
    definicion: "A qué concepto hace referencia la siguiente definición: 'Grupo de factores determinado por el no uso de dispositivos de seguridad (cinturón, casco, sillas infantiles) y el diseño estructural de la vía'",
    concepto: "Gravedad de las lesiones"
  },
  {
    definicion: "A qué concepto hace referencia la siguiente definición: 'Grupo de factores relacionado con retrasos en la detección del siniestro, falta de servicios médicos de urgencia en el sitio o deficiencias en la atención postraumática'",
    concepto: "Evaluación de las lesiones post-accidente"
  },
  {
    definicion: "A qué concepto hace referencia la siguiente definición: 'La interacción respetuosa y segura entre los diferentes usuarios de la vía (conductores, peatones, ciclistas) que implica el cumplimiento de las normas de tránsito y la consideración de las necesidades y de los derechos de los demás.'",
    concepto: "Convivencia vial"
  },
  {
    definicion: "A qué concepto hace referencia la siguiente definición: 'Actitud de colaboración y respeto hacia otros usuarios de la vía, que ayuda a disminuir el estrés y a prevenir actitudes violentas.'",
    concepto: "Cortesía"
  },
  {
    definicion: "A qué concepto hace referencia la siguiente definición: 'Espacio que debe mantenerse entre vehículos para evitar colisiones, especialmente en caso de frenado repentino.'",
    concepto: "Distancia segura"
  },
  {
    definicion: "A qué concepto hace referencia la siguiente definición: 'Consecuencias negativas de los accidentes de tránsito, que incluyen daños materiales, lesiones físicas y muerte, así como el impacto en la salud pública, la economía y el bienestar social.'",
    concepto: "Impactos de los accidentes viales"
  },
  {
    definicion: "A qué concepto hace referencia la siguiente definición: 'Cambios repentinos y peligrosos en la dirección o en la velocidad del vehículo que pueden causar caos en el tráfico y aumentar el riesgo de accidentes.'",
    concepto: "Maniobras bruscas"
  },
  {
    definicion: "A qué concepto hace referencia la siguiente definición: 'Procedimientos y tareas realizadas para asegurar que un vehículo funcione correctamente, incluyendo la revisión y el ajuste de componentes esenciales como frenos, llantas, luces y otros.'",
    concepto: "Mantenimiento de automóviles"
  },
  {
    definicion: "A qué concepto hace referencia la siguiente definición: 'Conjunto de prácticas y medidas que buscan prevenir accidentes y garantizar la seguridad de todos los usuarios de la vía, mediante la observancia de normas, el uso adecuado del equipo de protección y la adaptación a las condiciones del entorno.'",
    concepto: "Movilidad segura"
  },
  {
    definicion: "A qué concepto hace referencia la siguiente definición: 'Estrategias y principios que promueven la seguridad vial mediante la identificación y mitigación de riesgos, la implementación de medidas preventivas y la creación de un entorno vial que facilite la conducción segura para todos.'",
    concepto: "Principios del sistema seguro"
  },
  {
    definicion: "A qué concepto hace referencia la siguiente definición: 'Método para determinar la distancia segura entre vehículos, que consiste en contar tres segundos desde que el vehículo de adelante pasa por un punto fijo.'",
    concepto: "Regla de los 3 segundos"
  },
  {
    definicion: "Que dice el manual sobre la poblacion de adultos mayores?'",
    concepto: "Esta creciendo rapidamente"
  },
  {
    definicion: "Que es un habitaculo?'",
    concepto: "Espacio interior donde van los pasajeros y el conductor"
  },
  {
    definicion: "A que distancia se debe proyectar la miarada hacia delante para una coduccion preventiva y perspectiva?'",
    concepto: "100 m"
  },
  {
    definicion: "Cual es el documento que tiene una vigencia de 180 dias para la prueba practica?'",
    concepto: "El dictamen medico digital"
  },
   {
    definicion: "Para obtener el permiso temporal, se indica no tener multas o infracciones, en cuales articulos se establece?'",
    concepto: "articulo 143 y 254 BIS del codigo penal"
  },
   {
    definicion: "Donde se puede decargar un DAM?'",
    concepto: "En la pagina del INS"
  },
   {
    definicion: "Para obtener el permiso temporal, se debe tener una poliza, cual es?'",
    concepto: "Poliza con cobertura de responsabilidad civil"
  },
  {
    definicion: "Cual es la licencia que permite conducir toda clase de vehiculos, menos transportes publicos?'",
    concepto: "Categoria E"
  },
  {
  definicion: "Cual es la edad minima para obtener la licencia tipo B2?'",
    concepto: "20 años "
  },
  {
  definicion: "Pueden haber dos tipos de trenes, cuales son?'",
    concepto: "Los de pasajeros y los de carga"
  }


    ],
    bloque2: [
        { definicion: "A que concepto hace referencia el siguiente texto : ¨Son las normas que ordenan el espacio vial y establecen las reglas para el uso correcto y seguro de la via¨", concepto: "Señales de transito" },
        { definicion: "Cual es el tipo de señal que se adhieren al suelo, consisten en un poste metalico con una placa en su parte superior que puede ser de varias formas tamaños o colores.", concepto: "Señales verticales" },
        { definicion: "Cual es el tipo de señal que indica prohibiciones, obligaciones o normativas que se deben seguir.", concepto: "Señales de reglamentacion" },
        { definicion: "Cual es el tipo de señal que advierte al usuario la existencia de un real o potencial peligro u obstaculo?", concepto: "Señales de prevencion" },
        { definicion: "Cuando una señal de prevencion se refiere a peligros por obra en la via, de que color son?", concepto: "Naranjas y su uso es temporal." },
        { definicion: "Cual es el tipo de señal que nos orientan e informan duurante nuestro recorrido en la via?", concepto: "Señales de informacion" },
        { definicion: "Cual es el tipo de señal que tambien se les conoce como demarcacion horizontal, y son una marca de pintura blanca o amarilla sobre la calle?", concepto: "Señales horizontales" },
        { definicion: "Que indica la pintura amarilla en una calle?", concepto: "Separacion de carriles con sentidos opuestos" },
        { definicion: "Que significa cuando hay pintura amarilla en el borde de una acera o en paradas de autobus?", concepto: "Indica prohibicion de estacionamiento" },
        { definicion: "Que indica la pintura blanca en la calle?", concepto: "Separa carriles que van en el mismo sentido, indican altos y cedas y maxima velocidad." },
        { definicion: "Cual es el color que puede estar pintado en la calle que indica zonas de estacionamiento para personas discapacitadas y carril exclusivo de buses y bicicletas", concepto: "el azul" },
        { definicion: "Cual es el color que puedde estar pintado en la calle que indica espacios en la via compartidos con ciclistas?", concepto: "El verde" },
        { definicion: "Cual es el nombre de la demarcacion que ordena el transito en distintos sentidos de circulacion", concepto: "Linea en el centro" },
        { definicion: "Cual es el nombre de la demarcacion que se utiliza en lugares donde NO se permite adelantar.", concepto: "Linea de barrera" },
        { definicion: "Cual es el nombre de la demarcacion que ordena carriles con el mismo sentido de circulacion, es de color blanco", concepto: "Linea de carril o de via" },
        { definicion: "Cual es el nombre de la demarcacion que Separa la calzada del espaldon o caño y sirve de guia para no salirse de la calzada", concepto: "Linea de borde" },
        { definicion: "De que color son los captaluces?", concepto: "En su mayoria rojos pero tambien pueden ser blancos" },
        { definicion: "Cual es el nombre de la demarcacion que guian a los vehiculos que desean virar a la izquierda, guia para hacer entradas y salidas de las carreteras convencionales o vias rapidas", concepto: "Linea de canalizacion" },
        { definicion: "Cual es el nombre de la demarcacion que ordenan el trafico en zonas conflictivas, elimina el sobreancho de la calzada.", concepto: "Isla de canalizacion" },
        { definicion: "Cual es el nombre de la demarcacion que indica al conductor donde debe parar o ceder el paso?", concepto: "Carril central de giro izquierdo" },
        { definicion: "Cual es el nombre de la demarcacion que descongestiona zonas conflictivas y esta guiado por horarios y semaforo?", concepto: "Carril reversible" },
        { definicion: "Cual es el nombre de la demarcacion que indica prohibicion de bloqueo en intersecciones?", concepto: "Caja amarilla" },
        { definicion: "Cuales son los tres tipos de señales luminosas?", concepto: "Semaforo vehicular, semaforo peatonal, señal luminosa transitoria" },
        { definicion: "Cual es el nombre de las señales que advierten por medio de sonidos?", concepto: "Señalamiento sonoro" },
        { definicion: "Cual es el nombre de el señalamiento que solo lo pueden hacer los oficiales de transito con sus manos o los ciclistas para indicar a donde van a girar?", concepto: "Señalamiento manual" },
        { definicion: "Cual es la velocidad minima en autopista?", concepto: "50 km/h" },
        { definicion: "Donde no hay demarcacion, cual es la velocidad maxima?", concepto: "60 km/h" },
        { definicion: "En una zona urbana con alta densidad poblacional, cual es el maximo de velocidad?", concepto: "50 km/h" },
        { definicion: "En pasos peatonales, zonas escolares o centros de salud cual es la velocidad maxima?", concepto: "25 km/h" },
        { definicion: "La señales verticales de prevencion suelen ser rectangulares a excepcion de 2, cuales son esas señales?", concepto: "El ato y el ceda" },
       
    ],
    bloque3: [ //mecanica
        { definicion: "Es una pantalla ubicada frente al conductor que muestra indicadores importantes, estos datos ayudan a tomar decisiones e identificar posibles problemas mecanicos", concepto: "Panel de control o panel de instrumentos" },
        { definicion: "De que color son las alertas que requieren que se atienda de inmediato, por ejemplo puertas abiertas.", concepto: "Luz roja" },
        { definicion: "De que color son las alertas que comunican sobre aspectos informativos, por ejemplo direccionales.", concepto: "Luz verde" },
        { definicion: "De que color son las alertas que requieren que se atienda al deterner el vehiculo, por ejemplo check engine (motor).", concepto: "Luz amarilla" },

        { definicion: "Mide la velocidad de rotacion del motor de un vehiculo en revoluciones por minuto (RPM), indica la velocidad a la que gira el motor.", concepto: "Tacometro"},
        { definicion: "Muestra la cantidad de combustible restante de un vehiculo.", concepto: "Nivel de combustible" },
        { definicion: "Si el nivel del combustible es muy bajo, de que color es la luz que se enciende en la pantalla?", concepto: "Color ambar" },
        { definicion: "Termometro presente en todos los automoviles con motores que tienen sistema de refrigeracion liquido y en algunos casos, enfriamiento por aire.", concepto: "Temperatura del motor" },

        { definicion: "Cual es el simbolo que muestra si el alternador esta cargando la bateria, pero no indica si la bateria esta en buen estado.", concepto: "Estado de la bateria." },
        { definicion: "Cual es el componente del sistema electrico de un vehiculo cuya funcion principal es generar energia electrica para recargar la bateria y alimentar los sitemas electricos mientras el motor esta en funcionamiento?", concepto: "Alternador" },
        { definicion: "Cual indicador muestra la velocidad a la que se mueve un vehiculo normalmente en KM/H?", concepto: "Indicador de velocidad" },

        { definicion: "Cual es la ley que exige que todos los vehiculos que ingresen al pais tengan el indicador de km/h, si no lo tienen no pueden ser regristrados ni pasar la revision tecnica (RTV)", concepto: "Ley 9078 modificada en el 2015" },
        { definicion: "Cual es el indicador que tambien se le conoce como odometro que mide la distancia recorrida por el automovil?", concepto: "Indicador de distancia recorrida" },
        { definicion: "Por que es util el Odometro?", concepto: "Calcula el rendimiento del combustible, programar mantenimientos preventivos refrencia de compra y venta." },
        { definicion: "Como se les conoce a los indicadores sonoros o luminosos que indican el funcionamiento de algunos sitemas del vehiculo.", concepto: "Señales de alerta." },
        { definicion: "Cual es la señal de alerta que indica que el freno de mano esta aplicado mientras el vehiculo esta en movimiento.", concepto: "Freno de mano activado" },
        { definicion: "Cual es la señal de alerta que indica alguna puerta, capo o cajuela esta abierta", concepto: "Puertas abiertas" },
        { definicion: "Cual es la señal de alerta que indica que un ocupante no se coloco el cinturon de seguridad?", concepto: "Cinturon de seguridad" },
        { definicion: "Cual es la señal de alerta que indica que una bolsa de aire no esta funcionando.", concepto: "Activacion del sistema de airbag" },
        { definicion: "En automoviles automaticos, en la palanca de cambios, cual es la marcha que esta confeccionada para dar mayor potencia al motor, se puede utilizar en pendientes o descenso.", concepto: "L1" },
        { definicion: "En automoviles automaticos, en la palanca de cambios, cual es la marcha que indica modo deportivo, mantiene marchas cortas y da mayor potencia para salir de curvas.", concepto: "S (modo deportivo)" },
        { definicion: "En automoviles automaticos, en la palanca de cambios, cual es la marcha que ofrece mayor potencia en el motor, para pendientes menos pronunciadas.", concepto: "L2" },
        { definicion: "Como se llama el intrumento que monitorea el aceite del vehiculo?", concepto: "Manometro" },
        { definicion: "Como se llama el sistema antibloqueo que previene que las ruedas se bloqueen al frenar abruptamente?", concepto: "ABS" },
        { definicion: "Donde suelen estar los punto ciegos de un auto?", concepto: "Parte delantera en vehiculos altos y con capo, laterales fuera de la vision de espejops retrovisores, parte trasera del vehiculo en areas no cubiertas por el espejo retrovisor." },
        { definicion: "Cuales son 4 formas de reducir los puntos ciegos?", concepto: "Agregar espejos adicionales en la parte frontal o ventana trasera. Usar camaras. Observar de manera directa las ventanas laterales antes de maniobrar. Colocar espejos tipo ojo de pescado." },
        { definicion: "Cuales son tres caracteristicas de la luz alta (larga)?", concepto: "Todo vehiculo debe tener 2 o 4 luces altas blancas o amarillas. Proyectan luz para ver hasta 100m. Deben usarse con precaucion para no deslumbrar a otros conductores." },
        { definicion: "Cuantas luces bajas y de que color deben tener todos los automoviles?", concepto: "2 y deben ser blancas o amarillas" },
        { definicion: "Hasta cuantos metros permiten ver durante la noche o en situaciones de baja visibilidad.", concepto: "30m" },
        { definicion: "A que horas y en que situacion es OBLIGATORIO usar las luces cortas?", concepto: "de 6:00 pm a 6:00 am y en condiciones de poca visibilidad." },
        { definicion: "Cual es el nombre del tipo de luz que solo se puede usar en condiciones climaticas adversas?", concepto: "Luz antiniebla o halogenos." },
        { definicion: "Cual es el nombre de la luz que se enciende con la luz alta, baja o halogenos y son de color blanco o amarillo adelante y rojas atras?", concepto: "Luces de posicion." },
        { definicion: "De que color debe ser la luz que ilumina la placa de un carro?", concepto: "Blanca." },
        { definicion: "Desde cuantos metros atras deben activarse las luces de direccionales?", concepto: "100 metros antes" },
        { definicion: "Que luz se debe encender cuando se esta estacionado en lugares no habituales y cuando paso alguna situacion especial con el auto?", concepto: "Luces de emergencia" },
        { definicion: "Como se llaman los dispositivos que reflejan la luz para hacer visible el vehiculo cuando esta apagado y son de color rojo?", concepto: "Dispositivos catadioptricos (reflectivos)" },
        { definicion: "Cual es el nivel de la llanta que es un taco de goma de 1.6mm de grosor ubicado en el fondo de las ranuras principales de la llanta?", concepto: "Testigo" },
        { definicion: "Que riesgo tiene el desgaste de un testigo de la llanta?", concepto: "Derrapes o perdidas de control" },
        { definicion: "Cual es el nombre del componente de la llanta que es una pieza metalica que sostiene la llanta para que conserve su forma al rodar?", concepto: "Aro" },
        { definicion: "Cual es la presion recomendada en frio para la capacidad de carga de una llanta?", concepto: "30 a 35 PSI" },
        { definicion: "Que nombre se le da al desgaste de la llanta que pasa cuando la banda de rotadura llega al nivel del testigo de forma uniforme, se considera el desgaste adecuado?", concepto: "Desgaste normal" },
        { definicion: "Que nombre se le da al desgaste de la llanta que pasa cuando la llanta se uso la mayoria del tiempo a una presion de inflado MAYOR a lo recomendado?", concepto: "Desgaste irregular en el centro de la banda." },
        { definicion: "Que nombre se le da al desgaste de la llanta que pasa cuando la llanta se uso la mayoria del tiempo a una presion de inflado MENOR a lo recomendado?", concepto: "Desgaste irregular en los lados." },
        { definicion: "Que nombre se le da al desgaste de la llanta que pasa cuando el vehiculo presenta problemas en su alineamiento en caso de que se de en el eje delantero. Si se da en el eje trasero indica problemas de soporte o excesos en la carga.", concepto: "Desgaste irregular en un extremo" },
        { definicion: "Que nombre se le da al desgaste de la llanta que pasa cuando se ha sometido a frenados de emergencia o problemas en el sistema de suspencion?", concepto: "Desgaste irregular en partes de la banda de rotadura." },
        { definicion: "Como se llama el tipo de llanta que sus capas de cable estan acomodadas de forma paralela, son resistentes al calor a altas velocidades y deformaciones.", concepto: "Llantas radiales" },
        { definicion: "Como se llama el tipo de llanta que su estructura es en forma diagonal para mayor amortiguacion en terrenos irregulares, son ideales para vehiculos de carga y tienen mmenor agarre y durabilidad.", concepto: "llantas convencionales." },
        { definicion: "Como se llama el tipo de huella de una llanta que es de uso comun en vehiculos que recorren largas distancias en carreteras asfaltadas", concepto: "Llantas HT (Carretera)" },
        { definicion: "Como se llama el tipo de huella de una llanta que tambien se les conoce 'doble proposito', tienen buen agarre en terrenos sin asalfar y buen desempeño en carreteras asfaltadas? ", concepto: "Llantas AT (todo terreno)" },
        { definicion: "Como se llama el tipo de huella de una llanta que tienen mejor agarre en tierra y barro, estructura robusta, menor rendimiento en carretera.", concepto: "Llantas MT (barro y tierra)" },
        { definicion: "Como se llama el tipo de huella de una llanta que tienen buen funcionamiento en zonas con nieve?", concepto: "Llantas para nieve (M+S)" },
        { definicion: "Cuando tiempo se puede utilizar una llanta temporal y a que velocidad?", concepto: "Temporalmente y a 80 km/h" },
        { definicion: "Cual es el freno que se usa para mantener el vehiculo estacionado sin moverse?", concepto: "Freno de mano" },
        { definicion: "Cual es el freno que opera por friccion entre pastillas de frenado y un disco que gira con el eje de las ruedas, menos propensos a fatigas por altas temperaturas.", concepto: "Freno de disco" },
        { definicion: "Cual es el freno que los componentes del freno estan dentro de un tambor que gira con el eje de las ruedas, tienen menor ventilacion por lo que pueden tener menor eficacia al calentarse", concepto: "Freno de tambor" },
        { definicion: "Cual es el nombre del sistema que mejora la seguridada activa del vehiculo, permite frenar y cambiar trayectoria sin bloquear las ruedas, el frenado es mas suave y se evita el derrape.", concepto: "Sistema ABS" },
        { definicion: "A que concepto pertenece la siguiente definicion: Sistema de un vehiculo que lleva la potencia del motor a las ruedas, permite que el automovil se mueva.", concepto: "La transmision" },
        { definicion: "Cuales son las 2 cosas que requiere un sistema de transmision manual?", concepto: "Pedal y embrague" },
        { definicion: "Cual es la ventaja de la transmision CVT?", concepto: "Permite marchas infinitas, lo que optimiza la eficiencia del motor." },
        { definicion: "Cuando se utiliza la transmision CVT?", concepto: "En carreteras como ciudades, donde permite cambios suaves de marcha" },
        { definicion: "Que diferencia una transmision semiautomatica de la manual?", concepto: "Es similar a una caja de cambios manual, pero cuenta con un dispositivo electromecanico que activa el embrague y realiza cambios automaticamente" },
        { definicion: "¿Cómo se llama el proceso de regular la posición de los espejos para asegurar una visión óptima trasera y lateral, minimizando los ángulos muertos?", concepto: "Ajuste de espejos retrovisores" },
        { definicion: "¿Qué procedimiento involucra el uso de herramientas como la gata hidráulica y la llave de ranas para reemplazar un neumático dañado?", concepto: "Cambio de llanta" },
        { definicion: "¿Cómo se les conoce a los mandos internos como el volante, los pedales, la palanca de cambios e interruptores de luces?", concepto: "Controles del vehículo" },
        { definicion: "¿Qué nombre reciben los elementos de seguridad reflectivos colocados en el vehículo para aumentar su visibilidad en condiciones adversas?", concepto: "Dispositivos catadióptricos" },
        { definicion: "¿Cómo se llaman los sistemas encargados de detener o reducir la velocidad del vehículo mediante fricción (pueden ser de disco o de tambor)?", concepto: "Frenos" },
        { definicion: "¿Qué luces están ubicadas adelante y atrás del vehículo e indican su presencia a otros conductores en condiciones de baja visibilidad?", concepto: "Luces de posición" },
        { definicion: "¿Cómo se llama la iluminación obligatoria que permite que la matrícula del vehículo sea visible durante la noche?", concepto: "Luces de placa" },
        { definicion: "¿Qué luces traseras se encienden de forma automática cuando el conductor pisa el pedal de freno para alertar de una deceleración?", concepto: "Luces de frenado" },
        { definicion: "¿Qué luces se activan para indicar la intención del conductor de realizar un giro a la izquierda o a la derecha?", concepto: "Luces direccionales" },
        { definicion: "¿Qué tipo de transmisión cambia las marchas del vehículo de forma autónoma sin que intervenga el conductor?", concepto: "Transmisión automática" },
        { definicion: "Tipo de transmisión que exige al conductor cambiar las marchas de forma manual utilizando la palanca y el pedal de embrague:", concepto: "Transmisión manual" },
        { definicion: "Transmisión de variación continua que ofrece una gama de relaciones sin cambios perceptibles, mejorando el consumo de combustible:", concepto: "Transmisión CVT" },
        { definicion: "Sistema de transmisión híbrido que combina características manuales y automáticas, permitiendo elegir entre control manual o autónomo:", concepto: "Transmisión semiautomática o automatizada" },
        { definicion: "¿Cómo se define la capacidad de ver y ser visto por otros conductores, apoyada por elementos como el parabrisas y limpiaparabrisas?", concepto: "Visibilidad" },
        { definicion: "Como se llama la tecnologia que tienen algunos autos que alertan en la cabina cuando hay otro auto cerca de un punto ciego?", concepto: "Tecnologia ADAS" },
        { definicion: "Segun la nomenclatura de la llanta, que significa el numero 195?", concepto: "el ancho de la llanta en centimetros" },
        { definicion: "Segun la nomenclatura de la llanta, que significa el porcentaje 55%?", concepto: "Porcentaje proporcional del flanco al ancho nominal" },
        { definicion: "Segun la nomenclatura de la llanta, que significa la letra R?", concepto: "Tipo de construccion radial" },
        { definicion: "Segun la nomenclatura de la llanta, que significa el numero 16?", concepto: "16 pulgadas, es diametro interior de la llanta" },
        { definicion: "Segun la nomenclatura de la llanta, que significa el numero 87?", concepto: "indice de carga" },
        { definicion: "Segun la nomenclatura de la llanta, que significa la letra v?", concepto: "indice de velocidad" },
        { definicion: "Cauntas veces al año se recomienta hacer una alineacion del eje delantero para evitar desgastes irregulares en la llanta?", concepto: "1 vez al año" },

    ],
    bloque4: [ 
               { definicion: "Al menos cuantos metros tiene que haber entre su pecho y el volante?", concepto: "20m" },
               { definicion: "Cual debe ser la posicion de las manos en el volante?", concepto: "De lado a lado en posicion de 10 horas con 10 minutos" },
               { definicion: "Cual es la distancia minima al adelantar una motocicleta o bicicleta", concepto: "1.50 metros" },
               { definicion: "Cual es la velocidad maxima permitida cuando usted esta conduciendo en reversa?", concepto: "20 km/h" },
               { definicion: "Cual es la distancia maxima permitida al manejar en reversa?", concepto: "50 m" },
               { definicion: "Si alguien maneja en reversa mas de 50 metros, que categegoria de multa le seria aplicada?", concepto: "Categoria D" },
               { definicion: "En intersecciones quien tiene la prioridad?", concepto: "El que maneja enb la via principal" },
               { definicion: "En intersecciones sin sennales o marcas que indiquen quien tiene la prioridad, quien tiene la prioridad?", concepto: "El vehiculo a la derecha tiene el paso." },
               { definicion: "Cual es la velocidad maxima para conducir en una rotonda?", concepto: "30 km/h" },
               { definicion: "En una rotonda, cual carril tiene prioridad?", concepto: "el interno" },
               { definicion: "Cuales on las 2 reglas que hay cuando se maneja en tuneles?", concepto: "llevar luces y no conducir a mas de 30km/h" },
               { definicion: "Cuando se conduce de noche, a cuantos metros antes deben cambiarse las luces largas por las cortas cuando viene de frente otro automovil?", concepto: "150 m" },
               { definicion: "Cual es la velocidad maxima en carretaras de velocidad?", concepto: "entre 80 y 100 km/h" },
               { definicion: "Cual es la velocidad minima para manejar en una autopista?", concepto: "50 o 40km/h" },
               { definicion: "En condiciones de lluvia, cual es la velocidad permitida?", concepto: "Reducirla a la mitad de lo permitido" },
               { definicion: "Cual es la ley de Igualdad de oportunidades para personas con discapacidad?", concepto: "7600" },
               { definicion: "Maniobra de rebasar a otro vehículo que circule en el mismo sentido, asegurando que se realiza de manera segura y respetando las normas de tránsito.", concepto: "Adelantamiento" },
  { definicion: "Proceso de modificar la posición del asiento del conductor para garantizar una postura adecuada y el alcance correcto de los controles del vehículo, contribuyendo a una conducción segura.", concepto: "Ajuste del asiento" },
  { definicion: "Dispositivo de seguridad en el vehículo que, al ser utilizado correctamente, ayuda a absorber fuerzas en caso de un accidente y evita que los ocupantes sean expulsados del vehículo.", concepto: "Cinturón de seguridad" },
  { definicion: "Capacidad del conductor para manejar el vehículo de forma efectiva, manteniendo la calma y el enfoque en la conducción, especialmente durante maniobras como el avance.", concepto: "Control" },
  { definicion: "Líneas o señales pintadas en la vía que indican las áreas permitidas para estacionar, así como las restricciones y las regulaciones correspondientes.", concepto: "Demarcación" },
  { definicion: "Luz señalizadora que indica la intención de un conductor de girar o de cambiar de dirección, utilizada para comunicar las maniobras a otros usuarios de la vía.", concepto: "Direccional" },
  { definicion: "Capacidad del sistema de frenos de un vehículo para detenerse de manera adecuada y eficiente, influenciada por diversas variables como el estado de la carretera y la reacción del conductor.", concepto: "Eficacia del frenado" },
  { definicion: "Maniobra que consiste en dejar de conducir y colocar el vehículo en un espacio destinado para ello, ya sea en paralelo, en perpendicular o en diagonal a la calle.", concepto: "Estacionar" },
  { definicion: "Técnica de frenado que consiste en comenzar a aplicar poca presión sobre el pedal para disminuir la velocidad de manera gradual, evitando el riesgo de perder el control del vehículo, especialmente en condiciones de lluvia o en carreteras mojadas.", concepto: "Frenado anticipado" },
  { definicion: "Dispositivo de seguridad en los vehículos que se utiliza para mantener el vehículo estacionado o inmóvil.", concepto: "Freno de mano" },
  { definicion: "Acción o movimiento que se realiza al conducir, ya sea para acelerar, disminuir la velocidad, detenerse, esquivar obstáculos en la vía, para ingresar, salir o posicionarlo en un espacio de estacionamiento.", concepto: "Maniobra" },
  { definicion: "Acción de rebasar o adelantar a otro vehículo, lo cual requiere de precauciones específicas para evitar colisiones y garantizar la seguridad durante la maniobra.", concepto: "Maniobra de avance" },
  { definicion: "Cualquier objeto o persona que pueda interferir en el camino de un vehículo al entrar o al salir de un espacio de estacionamiento.", concepto: "Obstáculo" },
  { definicion: "Estacionamiento donde el vehículo se coloca de forma perpendicular a la acera, requiriendo una maniobra específica para ingresar o para salir del espacio.", concepto: "Parqueo vertical" },
  { definicion: "Espejos en el vehículo que permiten al conductor observar el tráfico y los objetos que se encuentran detrás y a los lados.", concepto: "Retrovisores" },
  { definicion: "Acción de indicar, con las luces direccionales o con otros medios, la intención de realizar un giro o un cambio de dirección, esencial para prevenir accidentes y para mantener la comunicación con otros conductores.", concepto: "Señalización" },
  { definicion: "Capacidad de ver y ser visto, crucial al realizar maniobras de estacionamiento para evitar colisiones con otros vehículos, ciclistas y peatones.", concepto: "Visibilidad" },
  { definicion: "¿Qué variables influyen directamente en la eficacia del frenado de un vehículo?", concepto: "El estado de la carretera y la reacción del conductor" },
  { definicion: "¿En qué condiciones del clima o de la vía es especialmente útil aplicar la técnica de frenado anticipado?", concepto: "En condiciones de lluvia o en carreteras mojadas" },
  { definicion: "¿Cuáles son las tres formas en las que se puede colocar un vehículo al realizar la maniobra de estacionar?", concepto: "En paralelo, en perpendicular o en diagonal a la calle" },
  { definicion: "¿Qué dos funciones principales cumple el cinturón de seguridad si se utiliza correctamente?", concepto: "Absorber fuerzas en caso de un accidente y evitar que los ocupantes sean expulsados" },
  { definicion: "¿Por qué es crucial la visibilidad al realizar maniobras de estacionamiento?", concepto: "Para evitar colisiones con otros vehículos, ciclistas y peatones" },
  { definicion: "¿Para qué sirve el proceso del ajuste del asiento antes de conducir?", concepto: "Para garantizar una postura adecuada, el alcance correcto de los controles y una conducción segura" }
    ]
,
    bloque5:[
          { definicion: "Que pasa si un niño menor a 13 años viaja en el asiento delantero con la airbag activada y ocurre un accidente?", concepto:  "Es peligroso y duplica el riesgo de lesiones." },
          { definicion: "Cuantos centimetros y kilogramos soporta un portabebe?", concepto: "75 cm y 13kg" },
          { definicion: "Como debe colocarse un portabebe?", concepto: "En el asiento trasero, mirando hacia atras y debe quedar firme." },
          { definicion: "Cuantos kilos y centimetros soporta una silla para niños?", concepto: "de 75 a 110 cm y de 9 a 18kg" },
          { definicion: "De que edad hasta que edad se debe usar una silla para niños?", concepto: "desde 1 año hasta 4 años aproximadamente" },
    ],
    bloque6:[
        { definicion: "Hace pocos años en Costa Rica solo contabamos con una ley, debido a que el sistema vial se amplio se agregaron mas, cual era el nombre de esa ley?", concepto: "Ley de transito por vias publicas terrestres y seguridad vial" },
        { definicion: "Como se llama la ley a la que hace refrencia el siguiente texto: ¨Ley que establece todas las reglas de transito para vehiculos, bicicletas, motocicletas y peatones. Define las normas de transito y las sanciones por incumplimiento.¨", concepto: "Ley de transito por vias publicas terrestres y seguridad vial" },
        { definicion: "Como se llama la ley a la que hace refrencia el siguiente texto: ¨Regula la circulacion de ciclistas permitiendoles circular por el centro del carril con seguridad¨", concepto: "Movilidad y seguridad ciclista" },
        { definicion: "Cual es el articulo que habla de adelantamientos, y le exige a los ciclistas tomar el extremo derecho para permitir rebasos seguros?", concepto: "Articulo 108" },
        { definicion: "Como se llama la ley a la que hace refrencia el siguiente texto: ¨Establece que el MOPT, consejos y municipalidades deben reglamentar y financiar la construccion de aceras para la circulacion segura de peatones¨", concepto: "Movilidad peatonal" },
        { definicion: "Segun el manual, que busca la implementacion de leyes?", concepto: "Una movilidad mas segura y sostenible" },
        { definicion: "Por cuales tres entidades puede ser aplicada la ley de transito?", concepto: "Policia de transito, inspectores de transito municipales, policias con potestades de transito de fuerza publica" },
        { definicion: "Cual es el nombre del tipo de sanciones a las cuales hace referencia el siguiente texto: ¨Aquellas que aplican directamente la policia de transito, inspectores de transito municipales o de fuerza publica a cualquier persona que conduce y haya sido detectada cometiendo alguna infraccion.¨", concepto: "Sanciones administrativas" },
        { definicion: "Cual es la categoria de multa que acumula 6 puntos?", concepto: "Categoria A" },
        { definicion: "Cual es la categoria de multa que acumula 4 puntos?", concepto: "Categoria B" },
        { definicion: "Cuales son las 3 categorias que no acumulan puntos?", concepto: "Categorias C,D,E" },
        { definicion: "Para cualquier conductor, cual es la concentracion en sangre que debe tener para que se le haga una multa categoria A?", concepto: "0,50g y hasta 0,75 por litro" },
        { definicion: "Para cualquier conductor, cual es la concentracion en aire aspirado que debe tener para que se le haga una multa categoria A?", concepto: "superior a 0,25mg y hasta 0,38 mg" },
        { definicion: "Para conductores profesionales, cual es la concentracion en sangre que debe tener para que se le haga una multa categoria A?", concepto: "0,20g y hasta 0,50 por litro" },
        { definicion: "Para cualquier conductor, cual es la concentracion en aire aspirado que debe tener para que se le haga una multa categoria A?", concepto: "superior a 0,10 mg y hasta 0,25 mg" },
        { definicion: "Cuando hablamos de exceso de velocidad, cual es la velocidad en la que aplica una multa categoria A?", concepto: "A mas de 120km/h" },
        { definicion: "Cual es la categoria de multa que se hace cuando alguien conduce con una licencia que haya sido suspendida por infracciones a la ley?", concepto: "Categoria A" },
        { definicion: "Cual es la categoria de multa que se hace cuando alguien Adelanta en curvas, cruces de ferrocarril, tuneles, infringe prhibiciones de giros en U y la izquierda?", concepto: "Categoria A" },
        { definicion: "Cual es la categoria de multa que se hace cuando alguien que se niega a una prueba de alcoholimetria?", concepto: "Categoria A" },
        { definicion: "Cual es la categoria de multa que se hace cuando alguien produce ruido o emiciones contaminantes que exceden el limite permitido por la ley?", concepto: "Categoria A" },
        { definicion: "Cual es la categoria de multa que se hace cuando alguien que permite a menores de 12 años que miden menos de 1,45 no usen dispositivos de seguridad?", concepto: "Categoria B" },
        { definicion: "Cual es la categoria de multa que se hace cuando alguien que irrespeta señales de alt en intersecciones o ignora la luz roja del semaforo?", concepto: "Categoria B" },
        { definicion: "Cual es la categoria de multa que se hace cuando alguien que circula con placas pertenecientes a otro vehiculo, alteradas o falsas?", concepto: "Categoria B" },
        { definicion: "Alguien que circula un vehiculo con pasajeros fuera de la cabina, en la cajuela o cajon acumula o no puntos en su licencia? ", concepto: "No acumula puntos" },
        { definicion: "Alguien que circula con un vehiculo modificado o adaptado acumula o no puntos en su licencia? ", concepto: "No acumula puntos" },
        { definicion: "Alguien que circula con un vehiculo con exceso de carga acumula o no puntos en su licencia? ", concepto: "No acumula puntos" },
        { definicion: "Si una persona acumula el exceso de puntos pierde su licencia 12 meses, pero si esta persona demuestra que necesita su licencia para su trabajo, cuanto tiempo se reduce el tiempo sin licencia?", concepto: "Reduce hasta 6 meses" },
        { definicion: "A cual velocidad se aplica un castigo penal?", concepto: "150 km/h" },
        
        

    ],


bloque7:[
    { definicion: "Cual es el factor mas comun de accidentes en costa rica?", concepto: "El factor humano" },
        { definicion: "A que concepto hace refrencia la siguiente definicion: Accion de operar un vehiculo respteando las normas de transito, la seguridad vial y a los demas usuarios de la via.", concepto: "Conducir" },
        { definicion: "Las seguientes acciones a que factor de accidentes de transito pertenecen? Distraccion, Fatiga, cansancio, falta de experiencia, exceso de velocidad.", concepto: "Factor humano" },
        { definicion: "Las seguientes acciones a que factor de accidentes de transito pertenecen? Frenos defectuosos, llantas en mal estado, luces y dirrecionales malas.", concepto: "Factor vehicular" },
        { definicion: "Las seguientes acciones a que factor de accidentes de transito pertenecen? Carreteras en mal estado, lluvia o neblina, obstaculos en la via.", concepto: "Factor vial o ambiental" },
        { definicion: "A cual concepto hace referencia la siguiente definicion: evento inesperado que ocurre en la via.", concepto: "Accidentes de transito" },
        { definicion: "En que año circulo el primer vehiculo en costa rica?", concepto: "1912" },
        { definicion: "En que año se publica el primer codigo de la circulacion siendo Costa Rica el primer pais de america latina en seguridad vial?", concepto: "1920" },
        { definicion: "Debido al crecimiento vehicular se crea la ley de transito, en que año?", concepto: "1976" },
        { definicion: "En que año y cual es el numero de la ley se crea la ley de transito de las vias publicas y terrestres?", concepto: "1993 y la ley es la 7331" },
        { definicion: "De quienes esta conformada la triologia vial?", concepto: "Humano, vehiculo y la via y su entorno" },
        { definicion: "De cuantos articulos se compone la ley de transito?", concepto: "252 articulos" },
        { definicion: "De los montos que se recaudan por cada multa a que instituciones y cual es el porcentaje quee se dona?", concepto: "23% al PANI, 5% a la cruz roja, 3% al ministerio de justicia y 69% a COSEVI" },
        { definicion: "Entre las 10pm y 5am que pasa con el semaforo?", concepto: "Las luces rojas se vuelven parpadeantes y se debe considerar como un alto" },
        { definicion: "A que concepto hace refrencia la siguiente definicion? Permiso otorgado por el estado mediante el cual se faculta a una persona a conducir un vehiculo durante un periodo determinado", concepto: "Licencia de conducir" },
        { definicion: "A los 16 años, cual es el tipo de licencia que se puede obtener?", concepto: "La A1" },
    
        { definicion: "Que debe hacer la persona que acumula 5 o mas puntos sin suspencion?", concepto: "Debe realizar un trabajo comunal o un curso para renovar su licencia" },
        { definicion: "Cuales son los 4 documentos que debe portar la persona que maneja en su vehiculo?", concepto: "Licencia. Titulo de propiedad. Inspeccion tecnica vehicular (IVE). Marchamo y derecho de circulacion" },
        { definicion: "Cuales son los 3 distintivos que se usan en forma de ahdesivo que debe tener un carro?", concepto: "Placa adhesiva, IVE, derecho de circulacion" },
        { definicion: "Que es el numero chasis?", concepto: "Codigo de fabricacion que identifica de forma unica cada auto." },
        { definicion: "Que le pasa a un peaton si es impactado por un vehiculo que vaiaja a mas de 25 km/h?", concepto: "Puede sufrir lesiones greves o permanentes" },
        
]
}

let tarjetasActuales = [];
let tarjetaActivaIndex = 0;

const selector = document.getElementById('selector-bloque');
const flashcard = document.getElementById('flashcard');
const textoFrontal = document.getElementById('texto-frontal');
const textoTrasero = document.getElementById('texto-trasero');
const btnSiguiente = document.getElementById('btn-siguiente');
const contenedorNotificacion = document.getElementById('contenedor-notificacion');

function mezclarTarjetas(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function mostrarTarjeta() {
    flashcard.classList.remove('activada');
    setTimeout(() => {
        const tarjeta = tarjetasActuales[tarjetaActivaIndex];
        textoFrontal.textContent = tarjeta.definicion;
        textoTrasero.textContent = tarjeta.concepto;
    }, 150);
}

selector.addEventListener('change', (e) => {
    const bloqueSeleccionado = e.target.value;
    if (bloqueSeleccionado && bancoFlashcards[bloqueSeleccionado]) {
        tarjetasActuales = mezclarTarjetas([...bancoFlashcards[bloqueSeleccionado]]);
        tarjetaActivaIndex = 0;
        btnSiguiente.style.display = "inline-block";
        mostrarTarjeta();
    } else {
        btnSiguiente.style.display = "none";
        flashcard.classList.remove('activada');
        textoFrontal.textContent = "Selecciona un bloque arriba para empezar a estudiar.";
        textoTrasero.textContent = "";
    }
});

flashcard.addEventListener('click', () => {
    flashcard.classList.toggle('activada');
});

btnSiguiente.addEventListener('click', () => {
    tarjetaActivaIndex++;
    if (tarjetaActivaIndex >= tarjetasActuales.length) {
        const noti = document.createElement('div');
        noti.className = 'notificacion-verde';
        noti.textContent = "🎉 ¡Felicidades! Completaste este bloque de estudio.";
        contenedorNotificacion.appendChild(noti);
        setTimeout(() => { noti.remove(); }, 3000);
        tarjetaActivaIndex = 0;
    }
    mostrarTarjeta();
});

// --- LOGICA DE NAVEGACIÓN ENTRE PANTALLAS ---
const vistaFlashcards = document.getElementById('vista-flashcards');
const vistaConceptos = document.getElementById('vista-conceptos');
const btnMenuConceptos = document.getElementById('btn-menu-conceptos');
const btnVolverFlashcards = document.getElementById('btn-volver-flashcards');

btnMenuConceptos.addEventListener('click', () => {
    vistaFlashcards.classList.add('vista-oculta');
    vistaFlashcards.classList.remove('vista-activa');
    vistaConceptos.classList.remove('vista-oculta');
});

btnVolverFlashcards.addEventListener('click', () => {
    vistaConceptos.classList.add('vista-oculta');
    vistaFlashcards.classList.remove('vista-oculta');
    vistaFlashcards.classList.add('vista-activa');
});

// Manejo de Temas Principales (Licencias, Riesgos, Neumáticos)
const botonesTemas = document.querySelectorAll('.btn-tema');

botonesTemas.forEach(boton => {
    boton.addEventListener('click', () => {
        const temaSeleccionado = boton.getAttribute('data-tema');
        
        // Ocultar todos los temas principales
        document.querySelectorAll('#detalle-temas-contenedor > div').forEach(bloque => {
            bloque.className = 'bloque-contenido-tema-oculto';
        });
        
        // Ocultar cualquier detalle interno abierto previamente
        document.querySelectorAll('.contenedor-detalles > div').forEach(detalle => {
            detalle.className = 'detalle-oculto';
        });
        
        // Activar el tema elegido
        const bloqueActivo = document.getElementById(`tema-${temaSeleccionado}`);
        if (bloqueActivo) {
            bloqueActivo.className = 'bloque-contenido-tema-activo';
        }
    });
});

// Manejo Universal de Sub-Bloques de colores
const botonesSubbloques = document.querySelectorAll('.bloque-btn');

botonesSubbloques.forEach(btn => {
    btn.addEventListener('click', () => {
        const subtemaDestino = btn.getAttribute('data-subtema');
        
        // Buscamos el contenedor de detalles específico de este bloque hermano
        const contenedorPadre = btn.closest('.bloque-contenido-tema-activo').querySelector('.contenedor-detalles');
        
        // Ocultamos todos los detalles dentro de ese contenedor específico
        contenedorPadre.querySelectorAll(':scope > div').forEach(detalle => {
            detalle.className = 'detalle-oculto';
        });
        
        // Mostramos el detalle correspondiente
        const detalleActivo = document.getElementById(`subtema-${subtemaDestino}`);
        if (detalleActivo) {
            detalleActivo.className = 'detalle-activo';
        }
    });
});