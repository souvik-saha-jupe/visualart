import Services from "../components/Genre";
import Hero from "../components/Hero";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Genre from "../components/Genre";

export default function Home() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Souvik Saha Photography | Home</title>
        <meta
          name="description"
          content="Welcome to the Portfolio of Souvik Saha. Explore the world of unseen landscapes, star trails & much more.... "
        />
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <Genre/>
        <Cta />
      </main>
      <Footer />
    </HelmetProvider>
  );
}
