import ctaImage from '../assets/cta-section-image.jpg';
import Btn from "../components/Btn";

export default function Cta() {
  return (
    <section id="cta-section" className="relative my-0 py-[50px] lg:py-[100px]">
        <div style={{ backgroundImage: `url(${ctaImage})` }} className="absolute top-0 left-0 bg-center bg-cover h-full w-full -z-[2]"></div>
        <div className="wrapper ">

            <div className='sm:mx-auto max-w-lg md:max-w-2xl flex flex-col gap-6 sm:justify-center sm:items-center sm:text-center text-white'>
            <h2>Learn Astrophotography & Landscape Photography from Scratch</h2>
            <p>Don’t miss out on the opportunity to learn and explore the incredible world of landscape & astro-photography. Capturing the night sky, from the radiant Milky Way to countless shimmering panaromic mountains, is a deeply rewarding experience that connects you to the depth of photography.</p>
            <Btn btnPath={'/contact'} btnText={'get started'} btnStyle={'btn btn-outlined btn-outlined-white'}/>
            </div>
        </div>
        <div className="bg-black/50 absolute top-0 left-0 right-0 bottom-0 z-[-2]"></div>
    </section>
  )
}