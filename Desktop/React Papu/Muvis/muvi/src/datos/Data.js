

const categorias = [
  {
    id: 1,
    nombre: "Mounstros del Espacio",
  },
  {
    id: 2,
    nombre: "Robots",
  },
  {
    id: 3,
    nombre: "Criaturas",
  },

];

const peliculas = [
  {
    id: 1,
    categorias_id: 3,
    nombre: "La oscura noche del espantapájaros (1981)",
    link: "mUq4szfC1HU",
    imagen: "/public/imgenesPelis/Nightofthescarecrow.jpg",
    descripcion: "En 'La oscura noche del espantapájaros', una banda de narcotraficantes recurre a la creación de vampiros para proteger su preciada carga de drogas. Mientras tanto, la policía responde a esta inusual amenaza desarrollando un robot policía al estilo de RoboCop. Esta película, producida por Filmark, es un ejemplo clásico del cine de serie B, utilizando material de producciones hongkonesas inéditas en Occidente. Con una trama que mezcla horror y acción de forma surrealista, 'La oscura noche del espantapájaros' destaca por su narrativa caótica y su producción de bajo presupuesto, prometiendo una experiencia única y divertida para los fanáticos del género."
  },
  {
    id: 2,
    categorias_id: 2,
    nombre: "Robo Vampire",
    link: "p-Jsyel51KU",
    imagen: "/public/roboVampireAfiche.jpg",
    descripcion: "Una banda de narcotraficantes desarrolla vampiros para proteger su droga, mientras que la policía responde creando un robot policía al estilo de RoboCop. La película, producida por Filmark, sigue la regla de utilizar material de producciones hongkonesas ineditas en Occidente, a las que se les añaden escenas de ninjas y superhéroes, filmadas con bajo presupuesto y en poco tiempo. Esto resulta en una narrativa confusa y poco coherente. Robo Vampire, dirigida por Godfrey Ho bajo el seudónimo de Joe Livingstone, combina dos películas diferentes con la esperanza de que funcionen como una sola. El producto final, que carece de una trama sólida y una producción cuidada, ofrece una experiencia caótica que la sitúa en un nivel único de entretenimiento."

  },
  {
    id: 3,
    categorias_id: [1,3],
    nombre: "The Deadly Spawn (1983)",
    link: "p-Jsyel51KU",
    imagen: "/public/imgenesPelis/thedeadlyspawn.jpg",
    descripcion: "Un meteoro se estrella en la Tierra y libera una criatura hambrienta que se esconde en el sótano de una tranquila casa en las afueras. A medida que el monstruo se alimenta, va creciendo y amenazando a toda la familia. Ahora, un grupo de adolescentes y niños deben encontrar la forma de detener a esta terrorífica entidad antes de que se vuelva imparable. Lleno de efectos especiales prácticos y momentos de tensión, este clásico de terror de serie B es una auténtica pesadilla que combina suspenso, horror y un toque de humor oscuro."

  },
  {
    id: 4,
    categorias_id: 3,
    nombre: "Rumpelstiltskin (1995)",
    link: "p-Jsyel51KU",
    imagen: "/public/imgenesPelis/ruper.jpg",
    descripcion: "Después de encontrar una antigua estatuilla, Shelley libera sin querer al malévolo duende Rumpelstiltskin, quien estuvo atrapado durante siglos. Ahora, esta criatura despiadada reclama lo que considera suyo: el bebé de Shelley. Dispuesta a proteger a su hijo a toda costa, Shelley se embarca en una frenética y peligrosa carrera contra el tiempo para detener a Rumpelstiltskin y deshacer la maldición. Este retorcido giro del cuento clásico combina humor oscuro, suspenso y terror en un enfrentamiento escalofriante con una criatura de pesadilla."

  },


]


export { categorias };
export { peliculas };