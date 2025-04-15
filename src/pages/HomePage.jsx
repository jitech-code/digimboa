import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiSearch, FiUser, FiGlobe , FiMessageCircle, FiStar, FiMail, FiInfo} from 'react-icons/fi';
import { FaGamepad, FaLaptopCode, FaBookOpen, FaLightbulb } from 'react-icons/fa';
import AfricanPatternBackground from '../components/AfricanPatternBackground'
import AnimatedGradientBorder from '../components/AnimatedGradientBorder'
import DigiMboaLogo from '../components/DigiMboaLogo';
import ParticleEffect from '../components/ParticleEffect';
import SocialButton from '../components/SocialButton';
import StyledButton from '../components/StyledButton';
import { Link } from 'react-router-dom';



  


const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);



  useEffect(() => {
    // Simulation de chargement des projets
    setTimeout(() => {
      setFeaturedProjects([
        {
          id: 1,
          title: "Ancestral Echoes",
          category: "Jeu Vidéo",
          creator: "NjoyaTech Studios",
          image: "/api/placeholder/600/400",
          description: "Un RPG qui mêle mythologie africaine et science-fiction futuriste",
          icon: <FaGamepad className="text-amber-500" />
        },
        {
          id: 2,
          title: "Mboa Code",
          category: "Application",
          creator: "Dev Cameroon",
          image: "/api/placeholder/600/400",
          description: "Plateforme d'apprentissage du code adaptée aux réalités africaines",
          icon: <FaLaptopCode className="text-green-500" />
        },
        {
          id: 3,
          title: "Lumières de Douala",
          category: "BD Science-Fiction",
          creator: "Manga237",
          image: "/api/placeholder/600/400",
          description: "Une vision futuriste de Douala en 2150, entre traditions et hyper-technologie",
          icon: <FaBookOpen className="text-blue-500" />
        },
        {
          id: 4,
          title: "SolarMboa",
          category: "Innovation",
          creator: "EcoTech Yaoundé",
          image: "/api/placeholder/600/400",
          description: "Technologie solaire innovante inspirée....",
          icon: <FaLightbulb className="text-yellow-500" />
        },
      ]);
      setIsLoaded(true);
    }, 1000);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
   // Liste des liens de navigation pour éviter la répétition
   const navLinks = [
    { path: "/", name: "Accueil", icon: null },
    { path: "/projects", name: "Projets", icon: null },
    { path: "/creators", name: "Créateurs", icon: null },
    { path: "/events", name: "Événements", icon: null },
    { path: "/community", name: "Communauté", icon: FiMessageCircle },
    { path: "/success-stories", name: "Success Stories", icon: FiStar },
    { path: "/about", name: "À propos", icon: FiInfo },
    { path: "/contact", name: "Contact", icon: FiMail }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-gray-100">
      {/* Motif africain stylisé en arrière-plan */}
      <ParticleEffect></ParticleEffect>
      <AfricanPatternBackground />
      <header className="relative z-10">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-4">
            <div className="bg-gradient-to-br from-amber-500 to-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
             <Link to={'/'}><DigiMboaLogo size="medium" /></Link> 
            </div>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-500 via-red-500 to-purple-600 bg-clip-text text-transparent">
            DigiMboa
          </h1>
        </div>

        {/* Menu desktop */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className="text-gray-300 hover:text-amber-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center">
          <button className="p-2 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 transition-colors">
            <FiSearch size={20} />
          </button>
          
          <div className="hidden md:flex ml-4">
            <Link to="/login" className="flex items-center text-gray-300 hover:text-amber-500 transition-colors mr-4">
              <FiUser size={18} className="mr-1" />
              <span>Connexion</span>
            </Link>
            <Link to="/sub" className="px-4 py-2 bg-gradient-to-r from-amber-500 to-red-600 rounded-md text-white hover:opacity-90 transition-colors">
              Soumettre un projet
            </Link>
          </div>
          
          <button className="md:hidden p-2 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 transition-colors ml-2">
            <FiUser size={20} />
          </button>
          
          <button className="p-2 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 transition-colors ml-2" title="Changer de langue">
            <FiGlobe size={20} />
          </button>
          
          <button className="md:hidden p-2 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 transition-colors ml-2" onClick={toggleMenu}>
            {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {/* Menu mobile amélioré */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-gray-800 border-t border-gray-700 z-50">
          <div className="container mx-auto px-4 py-2">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className="flex items-center py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.icon && <link.icon className="mr-2" />}
                <span>{link.name}</span>
              </Link>
            ))}
            <div className="border-t border-gray-700 mt-2 pt-2">
              <Link 
                to="/sub" 
                className="block py-2 px-4 bg-gradient-to-r from-amber-500 to-red-600 rounded-md text-white hover:opacity-90 transition-colors text-center my-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Soumettre un projet
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>

     {/* Hero Section - Improved mobile layout */}
     <section className="relative z-10 pt-16 pb-24 px-4 md:px-0">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 mt-12 md:mt-0">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-center md:text-left"
            >
              Découvrez le Futur de la{' '}
              <span className="bg-gradient-to-r from-amber-500 via-red-500 to-purple-600 bg-clip-text text-transparent">
                Création Camerounaise
              </span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-300 text-base sm:text-lg mb-8 text-center md:text-left"
            >
              Une vitrine numérique pour les projets technologiques, jeux vidéo, littérature et innovations
              qui façonnent le patrimoine culturel et technique du Cameroun.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start"
            >
              <button className="bg-gradient-to-r from-amber-500 to-red-600 px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity w-full sm:w-auto">
                Explorer les projets
              </button>
              <button className="bg-transparent border border-gray-500 px-8 py-3 rounded-lg font-semibold hover:border-white transition-colors w-full sm:w-auto">
                Rejoindre la communauté
              </button>
            </motion.div>
          </div>
          <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-gradient-to-br from-amber-500/20 to-purple-600/20 rounded-full flex items-center justify-center">
                <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-slate-800 rounded-full overflow-hidden border-4 border-amber-500/30">
                  <img 
                    src="assets/bggg.jpeg" 
                    alt="Créateurs Camerounais" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-amber-500 to-red-600 rounded-full flex items-center justify-center text-white animate-pulse">
                <div className="text-center">
                  <div className="font-bold text-xl">237+</div>
                  <div className="text-xs">Projets</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 md:px-0 bg-gray-900/50 backdrop-blur-sm relative z-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Catégories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { name: "Jeux Vidéo", icon: <FaGamepad size={32} />, color: "from-amber-500 to-red-600" },
              { name: "Applications", icon: <FaLaptopCode size={32} />, color: "from-green-500 to-teal-600" },
              { name: "SF & BD", icon: <FaBookOpen size={32} />, color: "from-blue-500 to-indigo-600" },
              { name: "Innovations", icon: <FaLightbulb size={32} />, color: "from-yellow-500 to-orange-600" },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/80 rounded-xl p-6 hover:bg-gray-700/80 transition-colors cursor-pointer"
              >
                <div className={`bg-gradient-to-br ${category.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto`}>
                  {category.icon}
                </div>
                <h3 className="text-center font-bold text-lg">{category.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-16 px-4 md:px-0 relative z-10">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Projets à la Une</h2>
            <a href="#" className="text-amber-500 hover:text-amber-400 transition-colors">Voir tous les projets</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {isLoaded ? (
              featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800/80 rounded-xl overflow-hidden hover:bg-gray-700/80 transition-colors cursor-pointer group"
                >
                  <div className="aspect-w-16 aspect-h-9 relative">
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                    <div className="absolute top-2 right-2 bg-gray-900/80 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                      {project.icon}
                      <span className="text-xs ml-2">{project.category}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-1 group-hover:text-amber-500 transition-colors">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-3">par {project.creator}</p>
                    <p className="text-gray-300 text-sm">{project.description}</p>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full flex justify-center">
                <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Creators Spotlight */}
      <section id="creators" className="py-16 px-4 md:px-0 bg-gray-900/50 backdrop-blur-sm relative z-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Créateurs en Vedette</h2>
          
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { name: "Aminata ", role: "Game Designer", image: "/api/placeholder/400/400", projects: 6 },
              { name: "petit joe", role: "Développeur", image: "/api/placeholder/400/400", projects: 4 },
              { name: "eren yeager", role: "Illustratrice", image: "/api/placeholder/400/400", projects: 8 },
              { name: "jhon Njoya", role: "Auteur SF", image: "/api/placeholder/400/400", projects: 3 }
            ].map((creator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-64 text-center"
              >
                <div className="relative mx-auto mb-4 group">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-amber-500/30 mx-auto">
                    <img src={creator.image} alt={creator.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-br from-amber-500 to-red-600 rounded-full h-8 w-8 flex items-center justify-center text-xs font-bold">
                    {creator.projects}
                  </div>
                </div>
                <h3 className="font-bold text-lg">{creator.name}</h3>
                <p className="text-gray-400">{creator.role}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-transparent border border-amber-500 px-8 py-3 rounded-lg font-semibold hover:bg-amber-500/10 transition-colors">
              Découvrir tous les créateurs
            </button>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 px-4 md:px-0 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12">Événements à Venir</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: "Cameroon Game Developers Meetup", 
                date: "25 Mars 2025", 
                location: "Douala, Akwa", 
                image: "/api/placeholder/600/400",
                tags: ["Jeux Vidéo", "Networking"]
              },
              { 
                title: "Tech Innovation Summit", 
                date: "12 Avril 2025", 
                location: "Yaoundé, ANTIC", 
                image: "/api/placeholder/600/400",
                tags: ["Tech", "Conférence"]
              },
              { 
                title: "Festival BD & Manga Cameroun", 
                date: "30 Avril 2025", 
                location: "Institut Français, Yaoundé", 
                image: "/api/placeholder/600/400",
                tags: ["BD", "Manga", "Exposition"]
              },
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/80 rounded-xl overflow-hidden group hover:bg-gray-700/80 transition-colors cursor-pointer"
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="text-amber-500 font-bold mb-1">{event.date}</div>
                    <h3 className="font-bold text-lg">{event.title}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center text-gray-400 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{event.location}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {event.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gray-700 text-xs px-2 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-transparent border border-amber-500 px-8 py-3 rounded-lg font-semibold hover:bg-amber-500/10 transition-colors">
              Voir tous les événements
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 md:px-0 bg-gradient-to-br from-amber-900/30 to-red-900/30 backdrop-blur-sm relative z-10">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-6">
            <div className="inline-block bg-gray-800/50 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">Restez informé de l'innovation camerounaise</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Abonnez-vous à notre newsletter pour recevoir les dernières actualités sur les projets, 
            événements et opportunités dans l'écosystème tech et créatif camerounais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Votre adresse e-mail" 
              className="bg-gray-800/80 border border-gray-700 rounded-lg px-4 py-3 flex-grow text-white focus:outline-none focus:border-amber-500"
            />
            <button className="bg-gradient-to-r from-amber-500 to-red-600 px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity whitespace-nowrap">
              S'abonner
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 md:px-0 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Témoignages</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Cette plateforme m'a permis de connecter avec d'autres développeurs camerounais et de trouver des collaborateurs pour mon projet de jeu vidéo.",
                author: "Daniel Ekobe",
                role: "Game Developer",
                image: "/api/placeholder/400/400"
              },
              {
                quote: "Grâce à la visibilité offerte par ce site, mes BD sont maintenant connues au-delà des frontières du Cameroun.",
                author: "Sophie Mballa",
                role: "Auteure & Illustratrice",
                image: "/api/placeholder/400/400"
              },
              {
                quote: "Un espace vital pour l'écosystème tech du Cameroun. J'y ai découvert des innovations extraordinaires qui méritent d'être connues.",
                author: "Michel Fokou",
                role: "Investisseur Tech",
                image: "/api/placeholder/400/400"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/80 rounded-xl p-6 relative"
              >
                <div className="absolute -top-6 left-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-4 border-gray-800">
                    <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="pt-6">
                  <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-bold">{testimonial.author}</div>
                    <div className="text-amber-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-4 md:px-0 relative z-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-br from-amber-500 to-red-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-2">
                <div className="flex justify-center">
                  <Link to={'/'}><DigiMboaLogo size="medium" /></Link> 
                </div>
              </div>
              <h3 className="text-xl font-bold">DigiMboa</h3>
            </div>
            <p className="text-gray-400 mb-4">
              La vitrine de l'innovation et de la créativité camerounaise dans le monde numérique.
            </p>
            <div className="flex space-x-4">
              <Link to="/facebook" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link to="/twitter" className="text-gray-400 hover:text-white transition-colors">
                {/* Icône X (Twitter) mise à jour */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              <Link to="/instagram" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link to="/linkedin" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 24V7h4v17h-4zm7.5 0V7h3.88v2.42h.05c.54-1.02 1.87-2.1 3.85-2.1 4.12 0 4.88 2.71 4.88 6.23V24h-4v-7.65c0-1.83-.03-4.17-2.54-4.17-2.54 0-2.93 1.99-2.93 4.04V24h-4z" />
                </svg>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><Link to="/projects" className="text-gray-400 hover:text-white transition-colors">Projets</Link></li>
              <li><Link to="/creators" className="text-gray-400 hover:text-white transition-colors">Créateurs</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-white transition-colors">Événements</Link></li>
              <li><Link to="/resources" className="text-gray-400 hover:text-white transition-colors">Ressources</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Catégories</h3>
            <ul className="space-y-2">
              <li><Link to="/category/videogames" className="text-gray-400 hover:text-white transition-colors">Jeux Vidéo</Link></li>
              <li><Link to="/category/apps" className="text-gray-400 hover:text-white transition-colors">Applications</Link></li>
              <li><Link to="/category/sf-bd" className="text-gray-400 hover:text-white transition-colors">SF & BD</Link></li>
              <li><Link to="/category/manga" className="text-gray-400 hover:text-white transition-colors">Manga</Link></li>
              <li><Link to="/category/innovations" className="text-gray-400 hover:text-white transition-colors">Innovations</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contact@techcameroun.com
              </li>
              <li className="flex items-center text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +237 694770796
              </li>
              <li className="flex items-center text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Douala & Yaoundé, Cameroun
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 JITECK. Tous droits réservés.</p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">Politique de confidentialité</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">Conditions d'utilisation</Link>
            <Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Nous contacter</Link>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default HomePage;