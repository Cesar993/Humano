

const categorias = [
  {
    id: 1,
    nombre: "Psicologico",
  },
  {
    id: 2,
    nombre: "Robots",
  },
  {
    id: 3,
    nombre: "Criaturas",
  },
  {
    id: 4,
    nombre: "Gastronomico",
  },
  {
    id: 5,
    nombre: "Ciencia Ficción",
  },

];

const peliculas = [
  {
    id: 1,
    categorias_id: 3,
    nombre: "La oscura noche del espantapájaros (1981)",
    link: "mUq4szfC1HU",
    imagen: "/imgenesPelis/Nightofthescarecrow.jpg",
    descripcion: "En 'La oscura noche del espantapájaros', una banda de narcotraficantes recurre a la creación de vampiros para proteger su preciada carga de drogas. Mientras tanto, la policía responde a esta inusual amenaza desarrollando un robot policía al estilo de RoboCop. Esta película, producida por Filmark, es un ejemplo clásico del cine de serie B, utilizando material de producciones hongkonesas inéditas en Occidente. Con una trama que mezcla horror y acción de forma surrealista, 'La oscura noche del espantapájaros' destaca por su narrativa caótica y su producción de bajo presupuesto, prometiendo una experiencia única y divertida para los fanáticos del género.",
    videoSource: "youtube"
  },
  {
    id: 2,
    categorias_id: 2,
    nombre: "Robo Vampire",
    link: "p-Jsyel51KU",
    imagen: "/roboVampireAfiche.jpg",
    descripcion: "Una banda de narcotraficantes desarrolla vampiros para proteger su droga, mientras que la policía responde creando un robot policía al estilo de RoboCop. La película, producida por Filmark, sigue la regla de utilizar material de producciones hongkonesas ineditas en Occidente, a las que se les añaden escenas de ninjas y superhéroes, filmadas con bajo presupuesto y en poco tiempo. Esto resulta en una narrativa confusa y poco coherente. Robo Vampire, dirigida por Godfrey Ho bajo el seudónimo de Joe Livingstone, combina dos películas diferentes con la esperanza de que funcionen como una sola. El producto final, que carece de una trama sólida y una producción cuidada, ofrece una experiencia caótica que la sitúa en un nivel único de entretenimiento.",
    videoSource: "youtube"

  },
  /*  {
    id: 3,
    categorias_id: [1,3],
    nombre: "The Deadly Spawn (1983)",
    link: "1SNrmFO_uKMiOp4KLui5wKUvX8Dr5NQdL",
    imagen: "/public/imgenesPelis/thedeadlyspawn.jpg",
    descripcion: "Un meteoro se estrella en la Tierra y libera una criatura hambrienta que se esconde en el sótano de una tranquila casa en las afueras. A medida que el monstruo se alimenta, va creciendo y amenazando a toda la familia. Ahora, un grupo de adolescentes y niños deben encontrar la forma de detener a esta terrorífica entidad antes de que se vuelva imparable. Lleno de efectos especiales prácticos y momentos de tensión, este clásico de terror de serie B es una auténtica pesadilla que combina suspenso, horror y un toque de humor oscuro.",
    videoSource: "drive",
    srtId: "14d8cwMDik9-xi6e_rGQR-aOCk-xiopDm", 
  }, */
 /* {
    id: 4,
    categorias_id: 3,
    nombre: "Rumpelstiltskin (1995)",
    link: "p-Jsyel51KU",
    imagen: "/public/imgenesPelis/ruper.jpg",
    descripcion: "Después de encontrar una antigua estatuilla, Shelley libera sin querer al malévolo duende Rumpelstiltskin, quien estuvo atrapado durante siglos. Ahora, esta criatura despiadada reclama lo que considera suyo: el bebé de Shelley. Dispuesta a proteger a su hijo a toda costa, Shelley se embarca en una frenética y peligrosa carrera contra el tiempo para detener a Rumpelstiltskin y deshacer la maldición. Este retorcido giro del cuento clásico combina humor oscuro, suspenso y terror en un enfrentamiento escalofriante con una criatura de pesadilla."

  }, */
  {
    id: 5,
    categorias_id: 3,
    nombre: "Project: Metalbeast (1995)",
    link: "1u-DhVETRGZNDfNOhUD8GAxAuI7KOiVXQ",
    imagen: "/imgenesPelis/metalbeast.jpg",
    descripcion: "Un experimento militar sale terriblemente mal cuando un soldado es inyectado con un suero que lo convierte en hombre lobo. Años después, el gobierno decide revivir al Metalbeast y recubrirlo con una armadura metálica indestructible, convirtiéndolo en el arma definitiva. Pero cuando la criatura despierta, desata una ola de destrucción imposible de contener. En una mezcla de ciencia ficción, terror y acción, este thriller de horror presenta a un hombre lobo de metal en una cacería sin piedad que pondrá a prueba los límites de la ciencia y el terror.",
    videoSource: "drive"

  },
  {
    id: 6,
    categorias_id: 4,
    nombre: "Taeter Burger (2023)",
    link: "1mHdkLsYi-UuOAoRCtAlLfkyXpypBzueQ",
    imagen: "/imgenesPelis/burger.jpg",
    descripcion: "En un mundo donde los gustos son cada vez más extremos, una cadena de comida rápida se vuelve famosa por servir hamburguesas únicas. Pero cuando un grupo de amigos decide probar el famoso Taeter Burger, descubren un oscuro secreto: estos menús incluyen ingredientes mucho más siniestros de lo que imaginaban. Atrapados en un juego macabro entre la supervivencia y el horror, deberán enfrentarse a una pesadilla culinaria donde ellos mismos podrían ser el próximo platillo. Una mezcla visceral de gore, suspenso y humor negro que redefine el horror gastronómico en un festín para los amantes del cine extremo.",
    videoSource: "drive"
  },
  {
    id: 7,
    categorias_id: 4,
    nombre: "Bad Milo (2013)",
    link: "135wmC28k-Yk3IBobCXGvbsYSVYoav4J9",
    imagen: "/imgenesPelis/milo.jpg",
    descripcion: "La vida de Duncan se sale de control cuando descubre que sufre de un problema gastrointestinal muy peculiar: un pequeño demonio vive en su intestino. Este extraño parásito, que él llama Milo, cobra vida cada vez que Duncan experimenta estrés extremo y sale para eliminar de manera brutal a cualquiera que sea una fuente de preocupación. Ahora, Duncan deberá aprender a controlar a Milo antes de que su vida laboral, amorosa y social se conviertan en un desastre sangriento. Esta comedia de terror con tintes de humor negro mezcla lo absurdo y lo espeluznante en una historia tan extraña como divertida.",
    videoSource: "drive"
  },
  {
    id: 8,
    categorias_id: 1,
    nombre: "Carnival of Souls (1962)",
    link: "vNYg4YWkp0k",
    imagen: "/imgenesPelis/carnaval.jpg",
    descripcion: "Tras sobrevivir milagrosamente a un accidente automovilístico, Mary Henry intenta recomponer su vida. Sin embargo, algo en ella ha cambiado. Con una frialdad inexplicable y una desconexión emocional que no logra entender, Mary se muda a una pequeña ciudad para comenzar un nuevo trabajo como organista en una iglesia. Pero pronto empieza a experimentar visiones perturbadoras de una figura misteriosa, un hombre pálido y siniestro que parece observarla desde las sombras. Como si respondiera a una llamada ineludible, Mary se siente atraída hacia un pabellón abandonado en las afueras de la ciudad, un antiguo parque de atracciones cubierto de polvo y desolación. A medida que se adentra en este lugar inquietante, las apariciones se intensifican y sus propias percepciones de la realidad empiezan a desmoronarse. ¿Está perdiendo la razón, o hay fuerzas oscuras que intentan arrastrarla a otro mundo?",
    videoSource: "youtube"
  },
  {
    id: 9,
    categorias_id: 1,
    nombre: "Onibaba (1964)",
    link: "5122648640086",
    imagen: "/imgenesPelis/oni.jpg",
    descripcion: "En el paisaje desolado de las llanuras de juncos altos, las mujeres utilizan su ingenio y brutalidad para sobrevivir en un entorno hostil. Su relación comienza a tambalearse cuando la joven viuda se siente atraída por un hombre que vive cerca, provocando una mezcla de celos y resentimiento en su suegra. En un intento por controlar a su nuera y evitar que se escape con él, la suegra recurre a la superstición y la manipulación. Una noche, la suegra se encuentra con un samurái que usa una aterradora máscara de demonio. Aprovechando la oportunidad, decide usar la máscara para asustar a su nuera, pero pronto descubre que esta acción desencadenará consecuencias devastadoras e inesperadas.",
    videoSource: "ok"
  },
  {
    id: 10,
    categorias_id: 5,
    nombre: "They Live (1988)" ,
    link: "1954064370241",
    imagen: "/imgenesPelis/theyAlive.jpg",
    descripcion: "La historia sigue a Nada, un hombre desempleado interpretado por Roddy Piper, que llega a Los Ángeles buscando trabajo. Después de encontrar un empleo temporal en la construcción, descubre una extraña resistencia en la ciudad. Durante una serie de eventos que lo ponen en contacto con esta resistencia, Nada encuentra un par de gafas de sol que le permiten ver la verdadera naturaleza de la realidad que lo rodea: un mundo donde las élites y los poderosos son, en realidad, alienígenas que han tomado el control de la humanidad, manipulando a la población a través de la publicidad, los medios de comunicación y la economía. Al usar las gafas, Nada puede ver que los anuncios comerciales, las revistas, los billetes de banco y las personas en general no son lo que parecen: las personas están controladas por los alienígenas y las imágenes se transforman en órdenes subliminales, como consuma, obedezca y cómprese. A partir de ahí, Nada se une a la resistencia humana para luchar contra esta invasión extraterrestre y liberar a la humanidad de la opresión alienígena.",
    videoSource: "ok"
  },
  {
    id: 11,
    categorias_id: 5,
    nombre: "Videodrome (1983)" ,
    link: "2353750477479",
    imagen: "/imgenesPelis/video.jpg",
    descripcion: "a historia sigue a Max Renn (interpretado por James Woods), un ejecutivo de una pequeña estación de televisión por cable que se especializa en contenidos provocativos. Max está siempre en busca de nuevos materiales extremos para su canal, y es así como descubre Videodrome, un programa clandestino y perturbador que muestra imágenes de tortura y violencia extrema. Lo que inicialmente parece ser un programa sensacionalista comienza a tener efectos extraños en la mente y el cuerpo de Max. Después de obsesionarse con Videodrome, Max comienza a experimentar alucinaciones en las que se le fusionan los límites entre la realidad, la tecnología y su propio cuerpo. Su piel parece convertirse en una pantalla que recibe señales de televisión, y en un giro hacia lo grotesco, su cuerpo se convierte en una especie de medio para transmitir imágenes y control de los medios. Max empieza a investigar más sobre Videodrome, solo para descubrir una red de conspiraciones que involucra tanto a la tecnología como a los poderes corporativos, quienes buscan usar el programa para controlar las mentes de los espectadores.",
    videoSource: "ok"
  },


]


export { categorias };
export { peliculas };