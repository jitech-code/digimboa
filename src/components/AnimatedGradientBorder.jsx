// Animation pour les transitions
const AnimatedGradientBorder = ({ children, className = "", intensity = "light" }) => {
    const intensityClasses = {
      light: "from-amber-500/20 via-red-500/20 to-purple-500/20",
      medium: "from-amber-500/40 via-red-500/40 to-purple-500/40",
      strong: "from-amber-500/60 via-red-500/60 to-purple-500/60"
    };
  
    return (
      <div className={`relative p-[1px] rounded-xl bg-gradient-to-r animate-border-flow ${intensityClasses[intensity]} ${className}`}>
        {children}
      </div>
    );
  };
  
  export default AnimatedGradientBorder;
  