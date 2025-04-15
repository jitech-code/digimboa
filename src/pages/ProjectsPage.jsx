import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiSearch, 
  FiFilter, 
  FiGrid, 
  FiList, 
  FiStar, 
  FiArrowRight, 
  FiCalendar, 
  FiEye, 
  FiHeart, 
  FiPlus, 
  FiCpu, 
  FiMonitor, 
  FiBook, 
  FiEdit3, 
  FiUsers, 
  FiCheckCircle, 
  FiX, 
  FiChevronDown 
} from 'react-icons/fi';

import AfricanPatternBackground from '../components/AfricanPatternBackground'
import AnimatedGradientBorder from '../components/AnimatedGradientBorder'
import DigiMboaLogo from '../components/DigiMboaLogo';
import ParticleEffect from '../components/ParticleEffect';
import SocialButton from '../components/SocialButton';
import StyledButton from '../components/StyledButton';

const ProjectsPage = () => {
  // États pour les filtres et la vue
  const [viewMode, setViewMode] = useState('grid'); // 'grid' ou 'list'
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedSort, setSelectedSort] = useState('newest');
  
  // Données de démo pour les projets
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Kamer Market",
      description: "Une plateforme e-commerce complète permettant aux artisans camerounais de vendre leurs produits à l'international, avec un système de paiement mobile intégré et une logistique optimisée pour l'Afrique.",
      category: "website",
      categoryLabel: "Site Web",
      thumbnailUrl: "/images/projects/kamer-market.jpg",
      technologies: ["React", "Node.js", "MongoDB", "API MTN Mobile Money"],
      status: "released",
      statusLabel: "Publié",
      author: "Équipe Kamer Tech",
      authorAvatar: "/images/avatars/kamer-tech.jpg",
      year: 2023,
      views: 1245,
      likes: 89,
      bookmarks: 32,
      featured: true
    },
    {
      id: 2,
      title: "Bamiléké Legends",
      description: "Un jeu mobile éducatif qui permet d'explorer les mythes et légendes du peuple Bamiléké. Le joueur incarne un jeune héros qui doit accomplir des quêtes tout en apprenant l'histoire et la culture traditionnelle.",
      category: "game",
      categoryLabel: "Jeu Vidéo",
      thumbnailUrl: "/images/projects/bamileke-legends.jpg",
      technologies: ["Unity", "C#", "Illustrator", "Blender"],
      status: "beta",
      statusLabel: "Beta",
      author: "Douala Game Studio",
      authorAvatar: "/images/avatars/douala-game.jpg",
      year: 2024,
      views: 783,
      likes: 62,
      bookmarks: 18,
      featured: true
    },
    {
      id: 3,
      title: "Agripro",
      description: "Application mobile qui connecte les agriculteurs camerounais aux acheteurs et fournit des prévisions météorologiques précises ainsi que des conseils agronomiques basés sur l'IA.",
      category: "app",
      categoryLabel: "Application Mobile",
      thumbnailUrl: "/images/projects/agripro.jpg",
      technologies: ["Flutter", "Firebase", "TensorFlow", "OpenWeatherMap API"],
      status: "in-development",
      statusLabel: "En développement",
      author: "Tech4Farmers",
      authorAvatar: "/images/avatars/tech4farmers.jpg",
      year: 2024,
      views: 428,
      likes: 41,
      bookmarks: 13,
      featured: false
    },
    {
      id: 4,
      title: "Cybersavanna",
      description: "Une bande dessinée afrofuturiste qui se déroule dans un Cameroun futuriste où technologies avancées et traditions ancestrales coexistent. L'histoire suit un groupe de jeunes hackers qui protègent leur communauté.",
      category: "book",
      categoryLabel: "Livre / BD",
      thumbnailUrl: "/images/projects/cybersavanna.jpg",
      technologies: ["Procreate", "InDesign", "Print-on-demand"],
      status: "released",
      statusLabel: "Publié",
      author: "Manga Yaounde",
      authorAvatar: "/images/avatars/manga-yaounde.jpg",
      year: 2023,
      views: 932,
      likes: 87,
      bookmarks: 45,
      featured: true
    },
    {
      id: 5,
      title: "KamerHealth",
      description: "Plateforme de télémédecine adaptée aux réalités camerounaises, permettant aux patients des zones rurales de consulter des médecins à distance et d'accéder à des informations de santé vérifiées.",
      category: "app",
      categoryLabel: "Application Mobile",
      thumbnailUrl: "/images/projects/kamerhealth.jpg",
      technologies: ["React Native", "Express", "PostgreSQL", "Twillio"],
      status: "released",
      statusLabel: "Publié",
      author: "Health Innovation Lab",
      authorAvatar: "/images/avatars/health-innovation.jpg",
      year: 2022,
      views: 1654,
      likes: 123,
      bookmarks: 67,
      featured: false
    },
    {
      id: 6,
      title: "EcoTrack",
      description: "Un système IoT qui permet de suivre et d'optimiser la consommation énergétique dans les bâtiments, adapté aux conditions électriques instables du Cameroun avec un système de batterie de secours intelligent.",
      category: "iot",
      categoryLabel: "IoT / Hardware",
      thumbnailUrl: "/images/projects/ecotrack.jpg",
      technologies: ["ESP32", "Arduino", "MQTT", "React", "Python"],
      status: "beta",
      statusLabel: "Beta",
      author: "GreenTech Cameroon",
      authorAvatar: "/images/avatars/greentech.jpg",
      year: 2023,
      views: 589,
      likes: 47,
      bookmarks: 23,
      featured: false
    },
    {
      id: 7,
      title: "LangLearn",
      description: "Une application d'apprentissage des langues camerounaises (Ewondo, Bulu, Duala, Fulfulde) utilisant la gamification et la reconnaissance vocale pour faciliter l'apprentissage.",
      category: "app",
      categoryLabel: "Application Mobile",
      thumbnailUrl: "/images/projects/langlearn.jpg",
      technologies: ["Kotlin", "TensorFlow Lite", "Room Database", "Firebase"],
      status: "released",
      statusLabel: "Publié",
      author: "Linguatech",
      authorAvatar: "/images/avatars/linguatech.jpg",
      year: 2023,
      views: 842,
      likes: 76,
      bookmarks: 38,
      featured: false
    },
    {
      id: 8,
      title: "Djembe AI",
      description: "Un assistant vocal en français et en langues locales camerounaises, capable de répondre à des questions et d'aider avec des tâches quotidiennes. Adapté aux accents et expressions locales.",
      category: "ai",
      categoryLabel: "IA / Machine Learning",
      thumbnailUrl: "/images/projects/djembe-ai.jpg",
      technologies: ["Python", "TensorFlow", "FastAPI", "WebRTC"],
      status: "beta",
      statusLabel: "Beta",
      author: "Yaounde AI Lab",
      authorAvatar: "/images/avatars/yaounde-ai.jpg",
      year: 2024,
      views: 721,
      likes: 58,
      bookmarks: 29,
      featured: true
    }
  ]);
  // Fonction pour charger plus de projets
const handleLoadMore = () => {
  // Simuler le chargement de plus de projets
  // Dans une implémentation réelle, vous feriez un appel API avec pagination
  console.log('Charger plus de projets...');
  // setProjects([...projects, ...newProjects]);
};

// Fonction pour s'abonner à la newsletter
const handleSubscribe = () => {
  if (email && /^\S+@\S+\.\S+$/.test(email)) {
    // Simuler l'abonnement à la newsletter
    // Dans une implémentation réelle, vous feriez un appel API
    console.log(`Email souscrit: ${email}`);
    setEmail('');
    setShowNotification(true);
    
    // Masquer la notification après 5 secondes
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  }
};

  // Catégories de projets
  const categories = [
    { id: "all", name: "Tous les projets" },
    { id: "app", name: "Applications Mobiles" },
    { id: "website", name: "Sites Web" },
    { id: "game", name: "Jeux Vidéo" },
    { id: "iot", name: "IoT / Hardware" },
    { id: "book", name: "Livres / BD / Manga" },
    { id: "ai", name: "IA / Machine Learning" },
    { id: "other", name: "Autres" }
  ];

  // Statuts de projets
  const statuses = [
    { id: "all", name: "Tous les statuts" },
    { id: "in-development", name: "En développement" },
    { id: "beta", name: "Beta" },
    { id: "released", name: "Publié" }
  ];

  // Options de tri
  const sortOptions = [
    { id: "newest", name: "Plus récents" },
    { id: "oldest", name: "Plus anciens" },
    { id: "most-liked", name: "Plus appréciés" },
    { id: "most-viewed", name: "Plus consultés" }
  ];

  // Filtrer les projets
  const filteredProjects = projects.filter(project => {
    const matchesQuery = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || project.status === selectedStatus;
    
    return matchesQuery && matchesCategory && matchesStatus;
  });

  // Trier les projets
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (selectedSort) {
      case 'newest':
        return b.year - a.year;
      case 'oldest':
        return a.year - b.year;
      case 'most-liked':
        return b.likes - a.likes;
      case 'most-viewed':
        return b.views - a.views;
      default:
        return 0;
    }
  });

  // Projets en vedette
  const featuredProjects = projects.filter(project => project.featured);

  

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 relative">
      <ParticleEffect />
      <AfricanPatternBackground opacity={0.02} />
      
      {/* Header - Nous utilisons celui déjà défini dans votre code précédent */}
      
      {/* Bannière de la page */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700 relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Découvrez les <span className="bg-gradient-to-r from-amber-500 via-red-500 to-purple-600 bg-clip-text text-transparent">innovations camerounaises</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-8">
            Explorez des projets créatifs et innovants développés par des talents camerounais dans la tech, les jeux vidéo, la littérature et plus encore.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/sub" className="px-6 py-3 bg-gradient-to-r from-amber-500 to-red-600 rounded-md text-white hover:opacity-90 transition-colors flex items-center">
              Soumettre votre projet
              <FiArrowRight className="ml-2" />
            </Link>
            <button className="px-6 py-3 bg-gray-800 border border-gray-600 rounded-md text-gray-200 hover:bg-gray-700 transition-colors flex items-center">
              <FiFilter className="mr-2" />
              Explorer par catégorie
            </button>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-20 bg-gradient-to-l from-amber-500 to-transparent transform -skew-x-12"></div>
      </div>
      
      {/* Projets en vedette */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold flex items-center">
            <FiStar className="text-amber-500 mr-2" /> Projets en vedette
          </h2>
          <Link to="/featured" className="text-amber-500 hover:text-amber-400 flex items-center">
            Voir tous <FiArrowRight className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <Link key={project.id} to={`/project/${project.id}`} className="group">
              <AnimatedGradientBorder intensity="light">
                <div className="bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 transform group-hover:scale-[1.01] h-full">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10"></div>
                    <img
                      src={project.thumbnailUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/images/placeholder-project.jpg";
                      }}
                    />
                    <div className="absolute top-4 right-4 z-20">
                      <span className="px-3 py-1 bg-amber-500 text-xs font-medium rounded-full text-gray-900">
                        En vedette
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="px-3 py-1 bg-gray-800 bg-opacity-90 text-xs font-medium rounded-full text-gray-200">
                        {project.categoryLabel}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-amber-500 transition-colors">
                        {project.title}
                      </h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        project.status === 'released' ? 'bg-green-900 text-green-300' : 
                        project.status === 'beta' ? 'bg-blue-900 text-blue-300' : 
                        'bg-amber-900 text-amber-300'
                      }`}>
                        {project.statusLabel}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center text-xs text-gray-400 mb-4">
                      <FiCalendar className="mr-1" />
                      <span>{project.year}</span>
                      <span className="mx-2">•</span>
                      <div className="flex items-center">
                        <FiEye className="mr-1" />
                        <span>{project.views}</span>
                      </div>
                      <span className="mx-2">•</span>
                      <div className="flex items-center">
                        <FiHeart className="mr-1" />
                        <span>{project.likes}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src={project.authorAvatar}
                          alt={project.author}
                          className="w-6 h-6 rounded-full mr-2"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/images/placeholder-avatar.jpg";
                          }}
                        />
                        <span className="text-sm text-gray-300">{project.author}</span>
                      </div>
                      <div className="flex gap-2">
                        {project.technologies.slice(0, 2).map((tech, index) => (
                          <span key={index} className="bg-gray-700 px-2 py-1 rounded-md text-xs">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 2 && (
                          <span className="bg-gray-700 px-2 py-1 rounded-md text-xs">
                            +{project.technologies.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedGradientBorder>
            </Link>
          ))}
        </div>
      </section>
      
      {/* Barre de recherche et filtres */}
      <section className="container mx-auto px-4 py-6">
        <div className="bg-gray-800 rounded-xl p-4 md:p-6 border border-gray-700">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un projet..."
                className="bg-gray-700 w-full pl-10 pr-4 py-3 rounded-lg text-gray-200 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button
              className="md:hidden bg-gray-700 px-4 py-3 rounded-lg text-gray-200 flex items-center justify-center"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              <FiFilter className="mr-2" />
              Filtres
              <FiChevronDown className={`ml-2 transition-transform ${filterOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-4 gap-4 ${filterOpen ? 'block' : 'hidden md:grid'}`}>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Catégorie</label>
              <select
                className="bg-gray-700 w-full px-4 py-2 rounded-lg text-gray-200 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Statut</label>
              <select
                className="bg-gray-700 w-full px-4 py-2 rounded-lg text-gray-200 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                {statuses.map((status) => (
                  <option key={status.id} value={status.id}>
                    {status.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Trier par</label>
              <select
                className="bg-gray-700 w-full px-4 py-2 rounded-lg text-gray-200 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all"
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="flex items-end">
              <div className="flex gap-2 w-full">
                <button
                  className={`flex-1 flex items-center justify-center px-4 py-2 rounded-lg transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-amber-500 text-gray-900' 
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                  onClick={() => setViewMode('grid')}
                >
                  <FiGrid className="mr-2" />
                  <span className="text-sm">Grille</span>
                </button>
                <button
                  className={`flex-1 flex items-center justify-center px-4 py-2 rounded-lg transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-amber-500 text-gray-900' 
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                  onClick={() => setViewMode('list')}
                >
                  <FiList className="mr-2" />
                  <span className="text-sm">Liste</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Liste des projets */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            {sortedProjects.length} projet{sortedProjects.length !== 1 ? 's' : ''} trouvé{sortedProjects.length !== 1 ? 's' : ''}
          </h2>
        </div>
        
        {sortedProjects.length === 0 ? (
          <div className="bg-gray-800 rounded-xl p-8 text-center border border-gray-700">
            <div className="text-5xl mb-4 text-gray-600">
              <FiSearch className="inline-block" />
            </div>
            <h3 className="text-xl font-bold text-gray-300 mb-2">Aucun projet trouvé</h3>
            <p className="text-gray-400 mb-6">
              Essayez d'ajuster vos filtres ou lancez une recherche différente.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedStatus('all');
              }}
              className="px-4 py-2 bg-amber-500 text-gray-900 rounded-md hover:bg-amber-600 transition-colors"
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProjects.map((project) => (
              <Link key={project.id} to={`/project/${project.id}`} className="group">
                <div className="bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 transform group-hover:scale-[1.01] border border-gray-700 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10"></div>
                    <img
                      src={project.thumbnailUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/images/placeholder-project.jpg";
                      }}
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="px-3 py-1 bg-gray-800 bg-opacity-90 text-xs font-medium rounded-full text-gray-200">
                        {project.categoryLabel}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-amber-500 transition-colors">
                        {project.title}
                      </h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        project.status === 'released' ? 'bg-green-900 text-green-300' : 
                        project.status === 'beta' ? 'bg-blue-900 text-blue-300' : 
                        'bg-amber-900 text-amber-300'
                      }`}>
                        {project.statusLabel}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center text-xs text-gray-400 mb-4">
                      <FiCalendar className="mr-1" />
                      <span>{project.year}</span>
                      <span className="mx-2">•</span>
                      <div className="flex items-center">
                        <FiEye className="mr-1" />
                        <span>{project.views}</span>
                      </div>
                      <span className="mx-2">•</span>
                      <div className="flex items-center">
                        <FiHeart className="mr-1" />
                        <span>{project.likes}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src={project.authorAvatar}
                          alt={project.author}
                          className="w-6 h-6 rounded-full mr-2"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/images/placeholder-avatar.jpg";
                          }}
                        />
                        <span className="text-sm text-gray-300">{project.author}</span>
                      </div>
                      <div className="flex gap-2">
                        {project.technologies.slice(0, 2).map((tech, index) => (
                          <span key={index} className="bg-gray-700 px-2 py-1 rounded-md text-xs">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 2 && (
                          <span className="bg-gray-700 px-2 py-1 rounded-md text-xs">
                            +{project.technologies.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {sortedProjects.map((project) => (
              <Link key={project.id} to={`/project/${project.id}`} className="group">
                <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 transition-all duration-300 hover:bg-gray-750">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-64 h-48 md:h-auto overflow-hidden">
                      <img
                        src={project.thumbnailUrl}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/images/placeholder-project.jpg";
                        }}
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-gray-800 bg-opacity-90 text-xs font-medium rounded-full text-gray-200">
                          {project.categoryLabel}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-amber-500 transition-colors">
                          {project.title}
                        </h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          project.status === 'released' ? 'bg-green-900 text-green-300' : 
                          project.status === 'beta' ? 'bg-blue-900 text-blue-300' : 
                          'bg-amber-900 text-amber-300'
                        }`}>
                          {project.statusLabel}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, index) => (
                     <span key={index} className="bg-gray-700 px-2 py-1 rounded-md text-xs">
                     {tech}
                   </span>
                 ))}
               </div>
               <div className="flex items-center justify-between">
                 <div className="flex items-center text-xs text-gray-400">
                   <FiCalendar className="mr-1" />
                   <span>{project.year}</span>
                   <span className="mx-2">•</span>
                   <div className="flex items-center">
                     <FiEye className="mr-1" />
                     <span>{project.views}</span>
                   </div>
                   <span className="mx-2">•</span>
                   <div className="flex items-center">
                     <FiHeart className="mr-1" />
                     <span>{project.likes}</span>
                   </div>
                 </div>
                 <div className="flex items-center">
                   <img
                     src={project.authorAvatar}
                     alt={project.author}
                     className="w-6 h-6 rounded-full mr-2"
                     onError={(e) => {
                       e.target.onerror = null;
                       e.target.src = "/images/placeholder-avatar.jpg";
                     }}
                   />
                   <span className="text-sm text-gray-300">{project.author}</span>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </Link>
     ))}
   </div>
 )}
 
 {/* Pagination */}
 {sortedProjects.length > 0 && (
   <div className="mt-12 flex justify-center">
     <button 
       className="px-6 py-3 bg-gray-800 border border-gray-700 rounded-md text-gray-200 hover:bg-gray-700 transition-colors flex items-center"
       onClick={handleLoadMore}
     >
       <FiPlus className="mr-2" />
       Charger plus de projets
     </button>
   </div>
 )}
</section>

{/* Section Projets populaires par catégorie */}
<section className="container mx-auto px-4 py-16 border-t border-gray-800">
 <h2 className="text-2xl font-bold mb-8">Explorez par catégorie</h2>
 
 <div className="space-y-12">
   {popularCategories.map((category) => (
     <div key={category.id}>
       <div className="flex justify-between items-center mb-6">
         <h3 className="text-xl font-semibold flex items-center">
           {category.icon && <span className="mr-2">{category.icon}</span>}
           {category.name}
         </h3>
         <Link to={`/category/${category.id}`} className="text-amber-500 hover:text-amber-400 flex items-center">
           Voir tous <FiArrowRight className="ml-1" />
         </Link>
       </div>
       
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
         {category.projects.map((project) => (
           <Link key={project.id} to={`/project/${project.id}`} className="group">
             <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 h-full hover:border-gray-600 transition-all">
               <div className="relative h-40 overflow-hidden">
                 <img
                   src={project.thumbnailUrl}
                   alt={project.title}
                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                   onError={(e) => {
                     e.target.onerror = null;
                     e.target.src = "/images/placeholder-project.jpg";
                   }}
                 />
                 <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-gray-900 to-transparent h-1/2"></div>
               </div>
               <div className="p-4">
                 <h4 className="font-bold text-white mb-1 group-hover:text-amber-500 transition-colors">
                   {project.title}
                 </h4>
                 <div className="flex justify-between items-center text-xs text-gray-400">
                   <span>{project.year}</span>
                   <div className="flex items-center">
                     <FiHeart className="mr-1" />
                     <span>{project.likes}</span>
                   </div>
                 </div>
               </div>
             </div>
           </Link>
         ))}
       </div>
     </div>
   ))}
 </div>
</section>

{/* Newsletter */}
<section className="container mx-auto px-4 py-16">
 <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 relative overflow-hidden border border-gray-700">
   <div className="absolute right-0 top-0 w-1/3 h-full opacity-20 bg-gradient-to-l from-amber-500 to-transparent transform -skew-x-12"></div>
   <div className="max-w-2xl relative z-10">
     <h2 className="text-2xl md:text-3xl font-bold mb-4">
       Restez informé des nouveaux projets
     </h2>
     <p className="text-gray-300 mb-6">
       Abonnez-vous à notre newsletter pour découvrir les dernières innovations camerounaises et être informé des mises à jour de la plateforme.
     </p>
     <div className="flex flex-col sm:flex-row gap-4">
       <input
         type="email"
         placeholder="Votre adresse email"
         className="bg-gray-700 px-4 py-3 rounded-lg text-gray-200 focus:ring-2 focus:ring-amber-500 focus:outline-none flex-1"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
       />
       <button 
         className="px-6 py-3 bg-amber-500 rounded-lg text-gray-900 font-medium hover:bg-amber-600 transition-colors"
         onClick={handleSubscribe}
       >
         S'abonner
       </button>
     </div>
     <p className="text-gray-400 text-sm mt-3">
       Nous respectons votre vie privée. Désabonnez-vous à tout moment.
     </p>
   </div>
 </div>
</section>

{/* Call to Action */}
<section className="container mx-auto px-4 py-16 border-t border-gray-800">
 <div className="grid md:grid-cols-2 gap-8">
   <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all">
     <div className="text-3xl text-amber-500 mb-4">
       <FiEdit3 />
     </div>
     <h3 className="text-xl font-bold mb-3">Vous êtes un créateur ?</h3>
     <p className="text-gray-300 mb-6">
       Partagez votre projet avec notre communauté et gagnez en visibilité. Rejoignez les talents camerounais qui innovent.
     </p>
     <Link to="/submit-project" className="inline-block px-6 py-3 bg-amber-500 rounded-md text-gray-900 font-medium hover:bg-amber-600 transition-colors">
       Soumettre votre projet
     </Link>
   </div>
   
   <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all">
     <div className="text-3xl text-amber-500 mb-4">
       <FiUsers />
     </div>
     <h3 className="text-xl font-bold mb-3">Vous êtes une organisation ?</h3>
     <p className="text-gray-300 mb-6">
       Explorez notre réseau de talents et découvrez des projets innovants pour des collaborations ou des investissements.
     </p>
     <Link to="/for-organizations" className="inline-block px-6 py-3 bg-gray-700 border border-gray-600 rounded-md text-gray-200 font-medium hover:bg-gray-600 transition-colors">
       Découvrir nos services
     </Link>
   </div>
 </div>
</section>

{/* Footer - Utilisez celui que vous avez déjà défini dans votre code précédent */}

{/* Notification de succès de l'abonnement */}
{showNotification && (
 <div className="fixed bottom-4 right-4 bg-green-800 text-green-100 px-6 py-4 rounded-lg shadow-lg flex items-center">
   <FiCheckCircle className="text-green-300 mr-2" />
   <span>Merci pour votre abonnement !</span>
   <button 
     className="ml-4 text-green-300 hover:text-green-100"
     onClick={() => setShowNotification(false)}
   >
     <FiX />
   </button>
 </div>
)}
</div>
);
}
 export default ProjectsPage;