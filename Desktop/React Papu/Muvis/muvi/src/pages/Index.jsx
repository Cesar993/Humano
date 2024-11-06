import React from 'react';
import Peliculas from '../components/Peliculas';
import Lateral from '../components/Lateral';
import Texto from '../components/Texto';

const texto = "Bienvenido a nuestro mundo de terror, donde las sombras y el suspense se entrelazan. Aquí encontrarás reseñas escalofriantes y recomendaciones que te mantendrán despierto por la noche. Desde clásicos de culto hasta joyas ocultas, prepárate para explorar lo macabro y lo inquietante. Recuerda, en el terror, lo que acecha en la oscuridad es tan cautivador como aterrador. ¡Juajaja!"

const Index = () => {
    return (
        <>
            <div className="w-3/6">
                <Texto texto={texto} />
            </div>
            <section className='bg-black w-3/6 h-auto flex flex-row gap-1 mx-auto pt-2 pb-1 '>

                <div className='lg:block bg-colorBaseVede
             border-colorBaseVedeBorde border-2 h-auto w-2/6
             sm:hidden '>
                    <Lateral />
                </div>
                <div className='bg-colorBaseVede border-colorBaseVedeBorde 
                                  border-2 h-auto w-auto flex  
                                 items-center flex-col p-2'>

                    <Texto />

                    <Peliculas />
                </div>
            </section>
        </>
    );
}

export default Index;
