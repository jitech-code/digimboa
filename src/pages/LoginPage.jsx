import React, { useState, useEffect } from 'react';
import { 
  FiUser, FiLock, FiMail, 
  FiCheckCircle,  FiX,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
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


// Page de connexion améliorée
 const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = "L'email est requis";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Format d'email invalide";
    
    if (!password) newErrors.password = "Le mot de passe est requis";
    else if (password.length < 6) newErrors.password = "Le mot de passe doit contenir au moins 6 caractères";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsLoading(true);
    // Simuler une connexion
    setTimeout(() => {
      console.log("Login attempt with:", { email, password, rememberMe });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col justify-center py-12 relative">
      <ParticleEffect />
      <AfricanPatternBackground opacity={0.04} animated={true} />
      
      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="flex justify-center">
        <Link to={'/'}><DigiMboaLogo size="medium" /></Link> 
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          Bienvenue sur DigiMboa
        </h2>
        <p className="mt-2 text-center text-gray-400">
          Connectez-vous pour découvrir les innovations camerounaises
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <AnimatedGradientBorder intensity="medium">
          <div className="bg-gray-800 bg-opacity-90 backdrop-blur-md py-8 px-6 shadow-lg rounded-xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <FormInput
                icon={<FiMail className="text-amber-500" />}
                label="Adresse email"
                type="email"
                name="email"
                placeholder="votre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                error={errors.email}
                showSuccess={email && !errors.email}
              />

              <FormInput
                icon={<FiLock className="text-amber-500" />}
                label="Mot de passe"
                type="password"
                name="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                error={errors.password}
                showSuccess={password && !errors.password}
              />

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className="h-4 w-4 rounded bg-gray-700 border-gray-600 text-amber-500 focus:ring-amber-500"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                    Se souvenir de moi
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-amber-500 hover:text-amber-400 transition-colors">
                    Mot de passe oublié?
                  </a>
                </div>
              </div>

              <div>
                <StyledButton 
                  type="submit" 
                  fullWidth 
                  disabled={isLoading}
                  className="relative"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Connexion en cours...
                    </span>
                  ) : "Se connecter"}
                </StyledButton>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-800 text-gray-400">Ou continuer avec</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <SocialButton 
                  icon={<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                  </svg>}
                />
                <SocialButton 
                  icon={<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.163 6.839 9.489.5.092.682-.217.682-.48 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.338-3.369-1.338-.454-1.156-1.11-1.464-1.11-1.464-.908-.619.069-.606.069-.606 1.003.07 1.531 1.03 1.531 1.03.89 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.841-2.337 4.687-4.565 4.934.359.31.678.92.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10" />
                  </svg>}
                />
                <SocialButton 
                  icon={<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81" />
                  </svg>}
                />
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-400">
                Pas encore membre?{' '}
                <Link to={"/register"} className="text-amber-500 hover:text-amber-400 font-medium transition-colors">
                  Créer un compte
                </Link>
              </p>
            </div>
          </div>
        </AnimatedGradientBorder>
      </div>
    </div>
  );
};
export default LoginPage;
