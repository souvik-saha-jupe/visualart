export default function Footer() {
  
  const currentYear = new Date().getFullYear();

  return (
    <footer>
        <div className="wrapper">
            <div className="flex flex-col sm:items-center md:flex-row md:justify-between gap-8">
                <p>&copy; {currentYear} | Souvik Saha Photography | Developed by <a href="https://www.linkedin.com/in/souvik-saha-jupe/" target="_blank" className="underline">Souvik Saha</a></p>
                <div className="flex gap-6">
                    <a href="https://www.instagram.com/nemanjaphotography_/" target="_blank" aria-label="Visit Instagram page">
                        Instagram
                    </a>
                    <a href="https://www.facebook.com/souvik.notun.diner.sondhane/" target="_blank" aria-label="Visit Facebook page">
                        Facebook
                    </a>
                </div>
            </div>
        </div>
    </footer>
  )
}