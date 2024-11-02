

import { Link } from 'react-router-dom'
import { categorias, peliculas } from '../datos/Data'
import { useEffect, useState } from 'react'



const Peliculas = () => {

    const [categoria, setCategoria] = useState(0)
    const [tipos, setTipos] = useState([])


    const handleDesplegar = (valor) => {
        setCategoria(valor);
        if (valor == 0) {
            setTipos([])

        } else {
            setTipos(
                peliculas.filter(pel => 
                    Array.isArray(pel.categorias_id) 
                        ? pel.categorias_id.includes(parseInt(valor)) 
                        : pel.categorias_id === parseInt(valor)
                )
            )
        }


    }

    useEffect(() => {
        //monitorear el length cuando cambie tipos
        console.log(tipos.length)

    }, [tipos])

    return (
        <>
        <div className='flex pb-10 pt-10 lg:justify-end lg:w-4/5'>
            <div className="form-group flex items-center flex-row gap-10">
                <label htmlFor="categorias" className='text-white '>Seleccione su pelicula</label>
                <select
                    value={categoria}
                    onChange={(e) => { handleDesplegar(e.target.value) }}
                    name=""
                    id="categorias"
                    className=' border border-gray-600 rounded p-1'
                    >

                    <option value="0">Todas las peliculas</option>
                    {categorias.map(
                        (categoria) => (
                            <option
                                value={categoria.id}
                                key={categoria.id}>
                                {categoria.nombre}
                            </option>

                        )
                    )}


                </select>

            </div>

            </div>
            <div className='h-4/5 w-4/5'>
                {(tipos.length == 0) ? (
                    <div className='grid lg:grid-cols-3 justify-items-center gap-5 '>
                        {peliculas.map((pelicula) => (
                            <div key={pelicula.id}
                                className='h-70 w-48 border-4  border-black'
                            >
                                  <Link to={`/pelicula?id=${pelicula.id}`} className='relative'>
                                <img 
                                    className='object-cover w-full h-full'
                                    src={pelicula.imagen} 
                                    alt={pelicula.nombre} 
                                    
                                />
                                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-50"></div>
                            </Link>
                            </div>))}
                    </div>

                ) : (
                    <div className='grid grid-cols-3 justify-items-center gap-1 '>
                        {tipos.map((pelicula) => (<div key={pelicula.id}
                            className='h-70 w-48 border-4 mt-4 border-black'
                        >
                                                            <Link to={`/pelicula?id=${pelicula.id}`} className='relative'>
                                <img 
                                    className='object-cover w-full h-full'
                                    src={pelicula.imagen} 
                                    alt={pelicula.nombre} 
                                    
                                />
                                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-50"></div>
                            </Link>
                        </div>))}

                    </div>
                )}

            </div>
        </>
    )
}

export default Peliculas