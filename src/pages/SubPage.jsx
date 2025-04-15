import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiUser, FiLock, FiMail, FiUploadCloud, FiLink, FiImage, 
  FiCheckCircle, FiInfo, FiX, FiChevronRight, FiCode, 
  FiGlobe, FiArrowRight, FiHelpCircle, FiUpload,FiPlus, FiYoutube, FiArrowLeft, FiGithub,FiActivity,FiSave
} from 'react-icons/fi';
import AfricanPatternBackground from '../components/AfricanPatternBackground'
import AnimatedGradientBorder from '../components/AnimatedGradientBorder'
import DigiMboaLogo from '../components/DigiMboaLogo';
import ParticleEffect from '../components/ParticleEffect';
import SocialButton from '../components/SocialButton';
import StyledButton from '../components/StyledButton';



// Composant d'entrée stylisé amélioré avec validation et animation
const FormInput = ({ 
  icon, 
  label, 
  type = "text", 
  placeholder, 
  value, 
  onChange, 
  required = false,
  name,
  error = null,
  showSuccess = false,
  helperText = null
}) => (
  <div className="mb-4 relative">
    <label className="block text-gray-300 mb-2 text-sm font-medium flex items-center gap-1.5">
      {icon}
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        name={name}
        className={`
          bg-gray-800 w-full pl-4 pr-10 py-3 rounded-lg 
          text-gray-200 focus:ring-2 focus:ring-amber-500 focus:bg-gray-900 
          focus:outline-none transition-all duration-200
          ${error ? "border border-red-500 focus:ring-red-500" : ""}
          ${showSuccess ? "border border-green-500" : ""}
        `}
        placeholder={placeholder}
      />
      {error && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500">
          <FiX />
        </div>
      )}
      {showSuccess && !error && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500">
          <FiCheckCircle />
        </div>
      )}
    </div>
    {error && (
      <p className="text-red-500 text-xs mt-1">{error}</p>
    )}
    {helperText && !error && (
      <p className="text-gray-400 text-xs mt-1">{helperText}</p>
    )}
  </div>
);



// Page de soumission de projet
export const ProjectSubmissionPage = () => {
    const [formStep, setFormStep] = useState(1);
    const [projectData, setProjectData] = useState({
      title: "",
      category: "",
      description: "",
      technologies: "",
      teamMembers: "",
      website: "",
      githubRepo: "",
      thumbnailImage: null,
      gallery: [],
      videoLink: "",
      releaseStatus: "in-development", // in-development, beta, released
      yearStarted: ""
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setProjectData(prev => ({ ...prev, [name]: value }));
    };
  
    const handleFileUpload = (e) => {
      // Logique de gestion des fichiers
      console.log("File selected:", e.target.files[0]);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Logique de soumission du projet
      console.log("Project submission:", projectData);
    };
  
    const nextStep = () => {
      setFormStep(prev => prev + 1);
    };
  
    const prevStep = () => {
      setFormStep(prev => prev - 1);
    };
  
    // Catégories avec des icônes personnalisées pour la touche africaine
    const categories = [
      { id: "app", name: "Application Mobile" },
      { id: "website", name: "Site Web" },
      { id: "game", name: "Jeu Vidéo" },
      { id: "iot", name: "IoT / Hardware" },
      { id: "book", name: "Livre / BD / Manga" },
      { id: "ai", name: "IA / Machine Learning" },
      { id: "other", name: "Autre" }
    ];
  
    return (
      <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 relative">
        <ParticleEffect></ParticleEffect>
        <AfricanPatternBackground opacity={0.03} />
        <div className="flex justify-center">
             <Link to={'/'}><DigiMboaLogo size="medium" /></Link> 
             </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-white sm:text-4xl">
              Soumettre un nouveau projet
            </h1>
            <p className="mt-3 text-xl text-gray-400">
              Partagez votre innovation et rejoignez la communauté tech camerounaise
            </p>
          </div>
  
          {/* Stepper */}
          <div className="mb-10">
            <div className="flex justify-between items-center">
              <div className={`flex flex-col items-center ${formStep >= 1 ? 'text-amber-500' : 'text-gray-500'}`}>
                <div className={`rounded-full h-10 w-10 flex items-center justify-center border-2 ${formStep >= 1 ? 'border-amber-500 bg-amber-500 bg-opacity-20' : 'border-gray-700'}`}>
                  <FiInfo className={formStep >= 1 ? 'text-amber-500' : 'text-gray-500'} />
                </div>
                <span className="text-sm mt-2">Informations</span>
              </div>
              <div className={`flex-1 h-1 mx-2 ${formStep >= 2 ? 'bg-amber-500' : 'bg-gray-700'}`}></div>
              <div className={`flex flex-col items-center ${formStep >= 2 ? 'text-amber-500' : 'text-gray-500'}`}>
                <div className={`rounded-full h-10 w-10 flex items-center justify-center border-2 ${formStep >= 2 ? 'border-amber-500 bg-amber-500 bg-opacity-20' : 'border-gray-700'}`}>
                  <FiImage className={formStep >= 2 ? 'text-amber-500' : 'text-gray-500'} />
                </div>
                <span className="text-sm mt-2">Média</span>
              </div>
              <div className={`flex-1 h-1 mx-2 ${formStep >= 3 ? 'bg-amber-500' : 'bg-gray-700'}`}></div>
              <div className={`flex flex-col items-center ${formStep >= 3 ? 'text-amber-500' : 'text-gray-500'}`}>
                <div className={`rounded-full h-10 w-10 flex items-center justify-center border-2 ${formStep >= 3 ? 'border-amber-500 bg-amber-500 bg-opacity-20' : 'border-gray-700'}`}>
                  <FiCheckCircle className={formStep >= 3 ? 'text-amber-500' : 'text-gray-500'} />
                </div>
                <span className="text-sm mt-2">Détails</span>
              </div>
            </div>
          </div>
  
          <div className="bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700 overflow-hidden">
            <form onSubmit={handleSubmit}>
              {/* Étape 1: Informations de base */}
              {formStep === 1 && (
                <div className="p-8">
                  <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                    <FiInfo className="mr-2 text-amber-500" /> Informations de base
                  </h2>
                  
                  <FormInput
                    icon={<span className="text-lg font-bold">Aa</span>}
                    label="Titre du projet"
                    name="title"
                    placeholder="Ex: Kamer Market - Plateforme e-commerce"
                    value={projectData.title}
                    onChange={handleChange}
                    required
                  />
  
                  <div className="mb-6">
                    <label className="block text-gray-300 mb-2 text-sm font-medium">Catégorie</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {categories.map(category => (
                        <button
                          key={category.id}
                          type="button"
                          onClick={() => setProjectData(prev => ({ ...prev, category: category.id }))}
                          className={`p-3 rounded-lg text-sm text-center transition-all ${
                            projectData.category === category.id 
                              ? 'bg-gradient-to-r from-amber-500 to-red-600 text-white' 
                              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                          }`}
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>
  
                  <div className="mb-4">
                    <label className="block text-gray-300 mb-2 text-sm font-medium">Description</label>
                    <textarea
                      name="description"
                      rows="4"
                      className="bg-gray-800 w-full px-4 py-3 rounded-lg text-gray-200 focus:ring-2 focus:ring-amber-500 focus:bg-gray-900 focus:outline-none transition-all"
                      placeholder="Décrivez votre projet, son objectif et ce qui le rend unique..."
                      value={projectData.description}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
  
                  <div className="mb-4">
                    <label className="block text-gray-300 mb-2 text-sm font-medium">Technologies utilisées</label>
                    <input
                      type="text"
                      name="technologies"
                      className="bg-gray-800 w-full px-4 py-3 rounded-lg text-gray-200 focus:ring-2 focus:ring-amber-500 focus:bg-gray-900 focus:outline-none transition-all"
                      placeholder="Ex: React, Node.js, MongoDB, Flutter..."
                      value={projectData.technologies}
                      onChange={handleChange}
                    />
                  </div>
  
                  <div className="mb-4">
                    <label className="block text-gray-300 mb-2 text-sm font-medium">Membres de l'équipe</label>
                    <input
                      type="text"
                      name="teamMembers"
                      className="bg-gray-800 w-full px-4 py-3 rounded-lg text-gray-200 focus:ring-2 focus:ring-amber-500 focus:bg-gray-900 focus:outline-none transition-all"
                      placeholder="Ex: Jean Takam (Développeur), Marie Ndom (Designer)..."
                      value={projectData.teamMembers}
                      onChange={handleChange}
                    />
                  </div>
  
                  <div className="flex justify-end mt-8">
                    <button
                      type="button" onClick={nextStep}
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all duration-200"
                    >
                      Continuer vers les médias
                      <FiArrowRight className="ml-2" />
                    </button>
                  </div>
                </div>
              )}
  
              {/* Étape 2: Médias */}
              {formStep === 2 && (
                <div className="p-8">
                  <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                    <FiImage className="mr-2 text-amber-500" /> Médias et ressources visuelles
                  </h2>
                  
                  <div className="mb-6">
                    <label className="block text-gray-300 mb-2 text-sm font-medium">Image principale du projet</label>
                    <AnimatedGradientBorder intensity="light">
                      <div className="bg-gray-700 p-6 rounded-lg text-center">
                        <input
                          type="file"
                          name="thumbnailImage"
                          id="thumbnailImage"
                          accept="image/*"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                        <label 
                          htmlFor="thumbnailImage" 
                          className="flex flex-col items-center justify-center cursor-pointer"
                        >
                          <div className="w-32 h-32 bg-gray-800 rounded-lg flex items-center justify-center mb-3">
                            <FiUpload className="text-5xl text-amber-500 opacity-80" />
                          </div>
                          <p className="text-gray-300 text-sm">Cliquez pour télécharger</p>
                          <p className="text-gray-400 text-xs mt-1">PNG, JPG ou GIF (max 5 Mo)</p>
                        </label>
                      </div>
                    </AnimatedGradientBorder>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-300 mb-2 text-sm font-medium">Galerie d'images (optionnel)</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {[...Array(3)].map((_, index) => (
                        <div key={index} className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center">
                          <input
                            type="file"
                            name={`gallery-${index}`}
                            id={`gallery-${index}`}
                            accept="image/*"
                            onChange={handleFileUpload}
                            className="hidden"
                          />
                          <label 
                            htmlFor={`gallery-${index}`} 
                            className="w-full h-full flex items-center justify-center cursor-pointer"
                          >
                            <FiPlus className="text-2xl text-amber-500" />
                          </label>
                        </div>
                      ))}
                    </div>
                    <p className="text-gray-400 text-xs mt-1">Ajoutez jusqu'à 3 images supplémentaires pour mettre en valeur votre projet</p>
                  </div>
                  
                  <FormInput
                    icon={<FiYoutube className="text-amber-500" />}
                    label="Lien vidéo (optionnel)"
                    name="videoLink"
                    placeholder="https://youtube.com/watch?v=..."
                    value={projectData.videoLink}
                    onChange={handleChange}
                    helperText="Lien YouTube ou Vimeo montrant votre application en action"
                  />
                  
                  <div className="flex justify-between mt-8">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="inline-flex items-center px-6 py-3 border border-gray-700 text-base font-medium rounded-md text-gray-300 bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200"
                    >
                      <FiArrowLeft className="mr-2" />
                      Retour
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all duration-200"
                    >
                      Continuer vers les détails
                      <FiArrowRight className="ml-2" />
                    </button>
                  </div>
                </div>
              )}
  
              {/* Étape 3: Détails supplémentaires */}
              {formStep === 3 && (
                <div className="p-8">
                  <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                    <FiCheckCircle className="mr-2 text-amber-500" /> Détails supplémentaires
                  </h2>
                  
                  <FormInput
                    icon={<FiGlobe className="text-amber-500" />}
                    label="Site web (optionnel)"
                    name="website"
                    placeholder="https://votre-projet.com"
                    value={projectData.website}
                    onChange={handleChange}
                  />
                  
                  <FormInput
                    icon={<FiGithub className="text-amber-500" />}
                    label="Dépôt GitHub (optionnel)"
                    name="githubRepo"
                    placeholder="https://github.com/username/projet"
                    value={projectData.githubRepo}
                    onChange={handleChange}
                  />
                  
                  <div className="mb-6">
                    <label className="block text-gray-300 mb-2 text-sm font-medium">État du projet</label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        {id: "in-development", name: "En développement", icon: <FiCode />},
                        {id: "beta", name: "Beta", icon: <FiActivity />},
                        {id: "released", name: "Publié", icon: <FiCheckCircle />}
                      ].map(status => (
                        <button
                          key={status.id}
                          type="button"
                          onClick={() => setProjectData(prev => ({ ...prev, releaseStatus: status.id }))}
                          className={`p-3 rounded-lg flex flex-col items-center justify-center transition-all ${
                            projectData.releaseStatus === status.id 
                              ? 'bg-gradient-to-r from-amber-500 to-red-600 text-white' 
                              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                          }`}
                        >
                          <span className="mb-1">{status.icon}</span>
                          <span className="text-sm">{status.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-300 mb-2 text-sm font-medium">Année de démarrage</label>
                    <select
                      name="yearStarted"
                      value={projectData.yearStarted}
                      onChange={handleChange}
                      className="bg-gray-800 w-full px-4 py-3 rounded-lg text-gray-200 focus:ring-2 focus:ring-amber-500 focus:bg-gray-900 focus:outline-none transition-all"
                    >
                      <option value="">Sélectionnez une année</option>
                      {[...Array(10)].map((_, i) => {
                        const year = new Date().getFullYear() - i;
                        return <option key={year} value={year}>{year}</option>;
                      })}
                    </select>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-6 mt-8">
                    <div className="flex items-center mb-4">
                      <input
                        id="agreement"
                        type="checkbox"
                        className="h-4 w-4 rounded bg-gray-700 border-gray-600 text-amber-500 focus:ring-amber-500"
                      />
                      <label htmlFor="agreement" className="ml-2 block text-sm text-gray-300">
                        Je confirme que je suis propriétaire ou autorisé à partager ce projet
                      </label>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row justify-between gap-4">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 text-base font-medium rounded-md text-gray-300 bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200"
                      >
                        <FiArrowLeft className="mr-2" />
                        Retour
                      </button>
                      <StyledButton 
                        type="submit" 
                        className="px-8 py-3 flex-grow sm:flex-grow-0"
                        icon={<FiSave className="mr-2" />}
                      >
                        Soumettre mon projet
                      </StyledButton>
                    </div>
                  </div>
                </div>
              )}
  
              {/* Confirmation de soumission */}
              {formStep === 4 && (
                <div className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-green-500 bg-opacity-20 flex items-center justify-center">
                      <FiCheck className="text-5xl text-green-500" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">Projet soumis avec succès !</h2>
                  <p className="text-gray-400 mb-8">
                    Votre projet "{projectData.title}" a été soumis pour examen. Notre équipe le vérifiera et le publiera prochainement.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <StyledButton 
                      primary={false}
                      onClick={() => setFormStep(1)}
                      icon={<FiPlusCircle className="mr-2" />}
                    >
                      Soumettre un autre projet
                    </StyledButton>
                    <StyledButton
                      onClick={() => window.location.href = "/dashboard"}
                      icon={<FiHome className="mr-2" />}
                    >
                      Retour au tableau de bord
                    </StyledButton>
                  </div>
                </div>
              )}
            </form>
          </div>
          
          {/* Aide à la soumission */}
          <div className="mt-12 bg-gray-800 bg-opacity-70 rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-medium text-white mb-4 flex items-center">
              <FiHelpCircle className="mr-2 text-amber-500" /> Conseils pour un projet réussi
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <FiCheckCircle className="text-amber-500 mt-1 mr-2 flex-shrink-0" />
                <span>Assurez-vous que votre image principale est claire, attrayante et représente bien votre projet.</span>
              </li>
              <li className="flex items-start">
                <FiCheckCircle className="text-amber-500 mt-1 mr-2 flex-shrink-0" />
                <span>Écrivez une description détaillée mais concise, en expliquant clairement quel problème résout votre projet.</span>
              </li>
              <li className="flex items-start">
                <FiCheckCircle className="text-amber-500 mt-1 mr-2 flex-shrink-0" />
                <span>Mentionnez les technologies et frameworks utilisés pour aider les autres développeurs à comprendre votre stack.</span>
              </li>
              <li className="flex items-start">
                <FiCheckCircle className="text-amber-500 mt-1 mr-2 flex-shrink-0" />
                <span>Si possible, ajoutez une vidéo de démonstration - c'est le meilleur moyen de montrer votre projet en action.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  // Composant pour visualiser un projet en progress bar
  export const ProjectProgressBar = ({ project, className = "" }) => {
    // Calculer le pourcentage d'avancement basé sur les étapes complétées
    const getProgressPercentage = () => {
      const steps = [
        !!project.title,
        !!project.description,
        !!project.category,
        !!project.thumbnailImage,
        !!project.technologies
      ];
      
      const completedSteps = steps.filter(step => step).length;
      return (completedSteps / steps.length) * 100;
    };
  
    const percentage = getProgressPercentage();
    
    return (
      <div className={`${className}`}>
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium text-gray-300">
            Progression du projet
          </span>
          <span className="text-sm font-medium text-amber-500">
            {Math.round(percentage)}%
          </span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-amber-500 to-red-600 h-2.5 rounded-full transition-all duration-700 ease-out"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    );
  };
  
  
  
  
  
  
  