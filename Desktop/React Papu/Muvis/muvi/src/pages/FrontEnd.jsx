import { Outlet } from "react-router-dom"
import Nav from "./Nav"
import Footer from "./Footer"



const FrontEnd = () => {
  return (
    <>
    <section className="bg-black flex flex-col items-center ">
    <Nav/>
    <Outlet/>
    <Footer/>
    </section>
    </>
  )
}

export default FrontEnd