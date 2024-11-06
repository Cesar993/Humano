import { useLocation } from 'react-router-dom'
import { peliculas } from '../datos/Data'

const DetallePelicula = () => {
  const search = useLocation().search;
  let id = new URLSearchParams(search).get("id")
  const peliculaInfo = peliculas.find(pel => pel.id === parseInt(id))
  console.log(peliculaInfo.link)


  let videoEmbedUrl;

  if (peliculaInfo.videoSource === "youtube") {
    videoEmbedUrl = `https://www.youtube.com/embed/${peliculaInfo.link}`;
  } 
  else if (peliculaInfo.videoSource === "drive") {
    videoEmbedUrl = `https://drive.google.com/file/d/${peliculaInfo.link}/preview`
  } 
  else if (peliculaInfo.videoSource === "ok") {
    videoEmbedUrl = `https://ok.ru/videoembed/${peliculaInfo.link}`;
  }
  

  

  return (
    <>
      <div className='flex flex-col justify-center items-center pb-10 text-white pt-10'>

        <h1 className='text-3xl font-raleway'>{peliculaInfo.nombre}</h1>
        <div className='flex text-white w-3/6 p-10 text-justify'>
          <p>{peliculaInfo.descripcion}</p>
        </div>
        <img src="esqueletoDos.gif" alt="" className='h-24 mt-10 mb-10' />

        <img src={peliculaInfo.imagen} className='h-2/3 w-2/4' alt="" />
        <img src="esqueletoUno.gif" alt="" className='h-24 mt-10 mb-10' />
        <iframe
          width="800"
          height="600"
          src={videoEmbedUrl}
          title="Video Player"
          allowFullScreen
        ></iframe>
        

      </div>
    </>
  )
}

export default DetallePelicula