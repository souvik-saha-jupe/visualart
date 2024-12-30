import Btn from "./Btn";
import cover from "../assets/Cover.jpg";

export default function Hero() {
  return (
    <section id="hero-section" className="relative my-0">
        <img src={cover} id="cover" className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover -z-[2]">
            
        </img>
        <div className="bg-black/50 absolute top-0 left-0 right-0 bottom-0 -z-[1]"></div>
        <div className="wrapper flex items-center justify-between min-h-screen lg:min-h-[700px] text-white">
            <div className="max-w-[500px]">
                <h2>Enhancing the <br />Essence of World<br />Through Viewfinder</h2>
                <p className="my-6">Delve deep into the breathtaking landscapes, unseen galaxies & serene nature through my camera. </p>
                <Btn btnPath={'/portfolio'} btnText={'view portfolio'} btnStyle={'btn btn-outlined btn-outlined-white'}/>
            </div>   
        </div>
    </section>
  )
}