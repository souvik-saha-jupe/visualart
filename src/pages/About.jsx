import { Helmet, HelmetProvider } from "react-helmet-async";
import aboutImg from "../assets/about-img.jpg";
import Footer from "../components/Footer";
import Cta from "../components/Cta";
import Navbar from "../components/Navbar";
import Benefits from "../components/Benefits";
import gear1 from "../assets/gear-1.jpg";
import gear2 from "../assets/gear-2.jpg";
import gear3 from "../assets/gear-3.jpg";
import gear4 from "../assets/gear-4.jpg";
import gear5 from "../assets/gear-5.jpg";
import gear6 from "../assets/gear-6.jpg";


export default function About() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Souvik Saha Photography | About</title>
        <meta
          name="description"
          content="Welcome to the Portfolio of Souvik Saha. Explore the world of unseen landscapes, star trails & much more.... "
        />
      </Helmet>
      <Navbar />
      <main>
        <section>
          <div className="wrapper">
            <div className="flex flex-col md:flex-row lg:items-center gap-12 lg:pb-8 lg:gap-24">
              <div className="relative md:w-1/2 ">
                <img src={aboutImg} alt="Souvik Saha" />
                <div className="bg-slate-50 h-full w-full absolute top-4 left-4 lg:top-8 lg:left-8 z-[-1]"></div>
              </div>
              <div className="md:w-1/2">
                <div className="mb-8">
                  <h2 className="mb-4">Let's introduce myself</h2>
                  <p className="uppercase text-slate-500">Hi, I'm Souvik Saha</p>
                </div>
                <p className="mb-4">Welcome to my photography portfolio!</p>
                <p className="mb-4">
                  Hi, I’m Souvik Saha, a 22-year-old photography enthusiast and undergraduate student from the Department of Power Engineering at Jadavpur University. My passion for photography began in 2022, and since then, it has grown into a defining part of who I am.
                </p>

                <p className="my-2">
                  I joined the Jadavpur University Photographic Club (JUPC) to immerse myself in the world of photography and refine my skills. During my journey with JUPC, I served as the Technical Lead for the academic year 2023–24 and currently hold the position of Associate Secretary for the academic year 2024–25.
                </p>
                <p className="my-2">
                  Armed with my Sony Alpha 6400 and a versatile lens collection — I have delved into various genres of photography, from portraiture to event coverage. My work has been featured in prestigious exhibitions, including those at Presidency University and Jadavpur University, and has earned recognition from renowned bands such as Bangladesh's Meghdol and other national and international artists.
                </p>
                <p className="my-2">
                  As an official photographer, I’ve captured the vibrant moments of college fests like Sanskriti, the annual cultural fest, and Srijan, the annual tech fest. These experiences have honed my ability to tell stories through my lens, earning appreciation for my dedication to the craft.
                </p>
                <p className="my-2">
                  Currently, my focus has shifted towards travel, landscape, and astrophotography — fields that let me combine my love for exploration and the natural world with my creative vision. I strive to capture the unseen beauty of the world, from breathtaking landscapes to mesmerizing starry skies, creating a visual narrative that resonates with viewers.
                </p>
                <p className="my-2">
                  Thank you for visiting my portfolio. I hope my work inspires you to see the world in a new light!
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="w-full px-4 py-4 sm:px-6 lg:px-8 justify-center items-center">
            <h2 className="text-center mb-8">My Gear</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
              <div className="max-w-sm bg-gray-100 border border-gray-300 rounded-lg shadow-lg dark:bg-gray-100 dark:border-gray-700">
                <img className="w-full h-auto rounded-t-lg object-cover" src={gear1} alt="product image" />
                <div className="px-5 pb-5 flex flex-col h-full">       
                    <h5 className="text-xl font-semibold tracking-tight text-black  p-2 rounded">
                    Sony Alpha ILCE-6400 24.2MP Mirrorless Camera
                    </h5>
                  <a
                      href="https://www.amazon.in/Sony-ILCE-6400-24-2MP-Mirrorless-Digital/dp/B07NF3SNLT"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Buy Now
                    </a> 
                </div>
              </div>

              <div className="max-w-sm bg-gray-100 border border-gray-300 rounded-lg shadow-lg dark:border-gray-700">
                  <img className="w-full h-auto rounded-t-lg object-cover" src={gear2} alt="product image" />
                <div className="px-5 pb-5 flex flex-col h-full">
                  <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-black  p-2 rounded">
                    Sony SELP1650 16-50mm Power Zoom Lens
                    </h5>
                  </a>
                  <a
                      href="https://www.amazon.in/Sony-SELP1650-16-50mm-Power-Zoom/dp/B0096W1PG6"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Buy Now
                    </a> 
                </div>
              </div>

              <div className="max-w-sm bg-gray-100 border border-gray-300 rounded-lg shadow-lg  dark:border-gray-700">
                <img className="w-full h-auto rounded-t-lg object-cover" src={gear3} alt="product image" />
                <div className="px-5 pb-5 flex flex-col h-full">       
                    <h5 className="text-xl font-semibold tracking-tight text-black  p-2 rounded">
                    Sony E-Mount 55-210mm F4.5-6.3 OSS APS-C Lens (SEL55210)
                    </h5>
                  <a
                      href="https://www.amazon.in/Sony-ILCE-6400-24-2MP-Mirrorless-Digital/dp/B07NF3SNLT"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Buy Now
                    </a> 
                </div>
                
              </div>
            </div>
          </div>

          <div className="w-full px-4 sm:px-6 lg:px-8 justify-center items-center">
  
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
              <div className="max-w-sm bg-gray-100 border border-gray-300 rounded-lg shadow-lg dark:bg-gray-100 dark:border-gray-700">
                <img className="w-full h-auto rounded-t-lg object-cover" src={gear4} alt="product image" />
                <div className="px-5 pb-5 flex flex-col h-full">       
                    <h5 className="text-xl font-semibold tracking-tight text-black  p-2 rounded">
                    Sigma 30mm f/1.4 DC DN Lens for Sony E-Mount
                    </h5>
                  <a
                      href="https://www.amazon.in/Sigma-Contemporary-Lens-Sony-Mount/dp/B01C3SCKI6"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Buy Now
                    </a> 
                </div>
              </div>

              <div className="max-w-sm bg-gray-100 border border-gray-300 rounded-lg shadow-lg dark:border-gray-700">
                  <img className="w-full h-auto rounded-t-lg object-cover" src={gear5} alt="product image" />
                <div className="px-5 pb-5 flex flex-col h-full">
                  <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-black  p-2 rounded">
                    DJI Ronin-SC 3-Axis Gimbal Stabilizer
                    </h5>
                  </a>
                  <a
                      href="https://www.amazon.in/DJI-Ronin-Handheld-Camera-Gimbal/dp/B07R48NZVD"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Buy Now
                    </a> 
                </div>
              </div>

              <div className="max-w-sm bg-gray-100 border border-gray-300 rounded-lg shadow-lg  dark:border-gray-700">
                <img className="w-full h-auto rounded-t-lg object-cover" src={gear6} alt="product image" />
                <div className="px-5 pb-5 flex flex-col h-full">       
                    <h5 className="text-xl font-semibold tracking-tight text-black  p-2 rounded">
                    DJI Mini 3 Pro 48MP 4K/60fps Drone with Fly More Kit
                    </h5>
                    <a
                      href="https://www.flipkart.com/dji-mini-3-pro-rc-lightweight-foldable-camera-drone-4k-60fps-video/p/itm384444ffbdb30"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Buy Now
                    </a> 
                </div>
                
              </div>
            </div>
          </div>
          
</section>

       
        <Cta />
      </main>
      <Footer />
    </HelmetProvider>
  );
}
