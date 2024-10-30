import React from 'react'

const Texto = ({ texto }) => {
    return (
        <>
            <div className='text-white w-auto mt-2 text-justify font-medium '>
                <p >
                    {texto ||
                         `
                         Bienvenido, fan de las películas de serie B.
                         Este es un refugio seguro para dar rienda suelta 
                         a tus gustos cinematográficos más cuestionables. 
                         Sabemos que las ves cuando todos en casa ya se han ido a 
                         dormir, que tu pareja frunce el ceño cada vez que te detienes 
                         a ver un tráiler de xxxx. Incluso, algún amigo ya te ha 
                         recriminado por haberle hecho ver algo *tan espantoso*. 
                         Pero aquí, eso cambia. Aquí tienes un sitio donde puedes 
                         leer reseñas, comentar con otros fanáticos de las películas 
                         de serie B y rendirle homenaje a este género. Soy xxxx, y sí, 
                         estoy aquí para ayudarte a encontrar las peores… o las mejores 
                         de las peores.
                     `
                    }
                </p>
            </div>

        </>
    )
}

export default Texto