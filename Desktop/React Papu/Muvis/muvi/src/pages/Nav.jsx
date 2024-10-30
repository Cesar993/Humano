import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <section className='bg-black w-5/6 h-1/3 flex flex-col justify-center items-center '>
                <Link to={'/'}>
                <img className='' src="pel-terr.gif" alt="spin" />
                </Link>
                <nav className='text-white flex justify-center w-3/5 
                h-16 border-colorBaseVedeBorde border-2
                bg-colorBaseVedeBanner '>
                    <ul className='flex flex-row gap-4 justify-around w-full items-start uppercase
                    font-medium text-coloramarilloLetra'>
                        <Link to={'/'}>
                        <img src="skull-spin.gif" alt="skul-spin"className='w-12 pt-1' />
                        </Link>                  
                        <li>Home</li>
                        <li>Peliculas</li>
                        <li>Secciones</li>
                        <li>Recomendaciones</li>
                        <li>Peores Peliculas</li>
                    </ul>
                </nav>
                
            </section>

        </>
    )
}

export default Nav