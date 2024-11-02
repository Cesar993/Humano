import React from 'react'
import Texto from '../components/Texto'

const Footer = () => {
    return (
        <>
            <section className='bg-black w-full h-1/3 flex 
            flex-col justify-center items-center pb-5'>
                <img src="spin-cal.gif" alt="" className='h-24 m-10' />
                <div className='text-white flex justify-center 
                w-full'>
                    <div className='flex flex-col
                    justify-center items-center 
                    bg-colorBaseVede border-colorBaseVedeBorde 
                    border-2 h-auto w-3/6 p-4 '>
                        <Texto 
                        texto={`Explora un mundo lleno de suspense, horror y emoción. Aquí encontrarás reseñas, recomendaciones y todo lo relacionado con el fascinante género del terror.
                            Síguenos en nuestras redes sociales para mantenerte al tanto de las últimas novedades, trailers y eventos especiales.
                            
                       `}/>    
                       <p className='pt-4 font-medium'> © 2024 Terror Cinemático. Todos los derechos reservados.
                       Política de privacidad | Términos de servicio</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer