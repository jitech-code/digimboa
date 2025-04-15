// Composant pour le fond avec motifs africains modernisés et améliorés
const AfricanPatternBackground = ({ opacity = 0.05, animated = false }) => {
    return (
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className={`absolute inset-0 ${animated ? 'animate-pulse-slow' : ''}`} style={{ opacity }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="africanPattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                {/* Motifs géométriques inspirés de l'art Kente et Ndebele */}
                <path d="M20 20L80 20L80 80L20 80Z" stroke="currentColor" fill="none" strokeWidth="2" className="text-amber-500" />
                <path d="M35 35L65 35L65 65L35 65Z" stroke="currentColor" fill="none" strokeWidth="2" className="text-red-500" />
                <circle cx="50" cy="50" r="8" fill="currentColor" className="text-purple-600" />
                <path d="M10 10L25 25M75 25L90 10M10 90L25 75M75 75L90 90" stroke="currentColor" strokeWidth="2" className="text-amber-600" />
                
                {/* Ajout de nouveaux motifs inspirés du style adinkra */}
                <path d="M110 30A10 10 0 0 1 100 20A10 10 0 0 1 90 30A10 10 0 0 1 100 40A10 10 0 0 1 110 30Z" stroke="currentColor" fill="none" strokeWidth="1.5" className="text-teal-500" />
                <path d="M110 90A10 10 0 0 1 100 80A10 10 0 0 1 90 90A10 10 0 0 1 100 100A10 10 0 0 1 110 90Z" stroke="currentColor" fill="none" strokeWidth="1.5" className="text-blue-500" />
                <path d="M0 50h15 M105 50h15" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2,2" className="text-amber-700" />
                <path d="M50 0v15 M50 105v15" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2,2" className="text-amber-700" />
              </pattern>
              
              {/* Motifs connectés pour symboliser la technologie */}
              <pattern id="techPattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <circle cx="0" cy="0" r="2" fill="currentColor" className="text-purple-500" />
                <circle cx="40" cy="40" r="2" fill="currentColor" className="text-teal-500" />
                <circle cx="80" cy="0" r="2" fill="currentColor" className="text-blue-500" />
                <circle cx="120" cy="40" r="2" fill="currentColor" className="text-amber-500" />
                <circle cx="160" cy="0" r="2" fill="currentColor" className="text-red-500" />
                <circle cx="0" cy="80" r="2" fill="currentColor" className="text-green-500" />
                <circle cx="40" cy="120" r="2" fill="currentColor" className="text-amber-500" />
                <circle cx="80" cy="80" r="2" fill="currentColor" className="text-purple-500" />
                <circle cx="120" cy="120" r="2" fill="currentColor" className="text-blue-500" />
                <circle cx="160" cy="80" r="2" fill="currentColor" className="text-teal-500" />
                <circle cx="0" cy="160" r="2" fill="currentColor" className="text-amber-500" />
                <circle cx="40" cy="200" r="2" fill="currentColor" className="text-purple-500" />
                <circle cx="80" cy="160" r="2" fill="currentColor" className="text-red-500" />
                <circle cx="120" cy="200" r="2" fill="currentColor" className="text-green-500" />
                <circle cx="160" cy="160" r="2" fill="currentColor" className="text-blue-500" />
                
                {/* Lignes connectant les points */}
                <path d="M0 0L40 40L80 0L120 40L160 0" stroke="currentColor" strokeWidth="0.5" className="text-purple-500 opacity-30" />
                <path d="M0 80L40 120L80 80L120 120L160 80" stroke="currentColor" strokeWidth="0.5" className="text-teal-500 opacity-30" />
                <path d="M0 160L40 200L80 160L120 200L160 160" stroke="currentColor" strokeWidth="0.5" className="text-amber-500 opacity-30" />
                <path d="M0 0L0 80L0 160" stroke="currentColor" strokeWidth="0.5" className="text-blue-500 opacity-30" />
                <path d="M40 40L40 120L40 200" stroke="currentColor" strokeWidth="0.5" className="text-red-500 opacity-30" />
                <path d="M80 0L80 80L80 160" stroke="currentColor" strokeWidth="0.5" className="text-green-500 opacity-30" />
                <path d="M120 40L120 120L120 200" stroke="currentColor" strokeWidth="0.5" className="text-purple-500 opacity-30" />
                <path d="M160 0L160 80L160 160" stroke="currentColor" strokeWidth="0.5" className="text-teal-500 opacity-30" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#africanPattern)" />
            <rect width="100%" height="100%" fill="url(#techPattern)" />
          </svg>
        </div>
      </div>
    );
  };
  export default AfricanPatternBackground
  