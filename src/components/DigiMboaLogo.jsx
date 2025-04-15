// Logo de DigiMboa amélioré
const DigiMboaLogo = ({ size = "medium" }) => {
    const sizeClasses = {
      small: "h-12 w-12 text-lg",
      medium: "h-16 w-16 text-2xl",
      large: "h-20 w-20 text-3xl"
    };
    
    return (
      <div className={`relative ${sizeClasses[size]}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-red-600 rounded-xl blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-red-600 rounded-xl"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
          <span className="relative">DM</span>
        </div>
        <div className="absolute -top-1 -right-1 h-3 w-3 bg-teal-400 rounded-full animate-pulse"></div>
      </div>
    );
  };
  
  export default DigiMboaLogo