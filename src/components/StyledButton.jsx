// Bouton stylisé
const StyledButton = ({ 
    children, 
    primary = true, 
    onClick, 
    className = "", 
    type = "button",
    fullWidth = false,
    disabled = false,
    icon = null
  }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`
          ${primary 
            ? "bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-white" 
            : "bg-gray-700 hover:bg-gray-600 text-gray-200"}
          ${fullWidth ? "w-full" : ""}
          flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium 
          shadow-md transition-all duration-200 ease-in-out
          focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          ${className}
        `}
      >
        {icon && <span>{icon}</span>}
        {children}
      </button>
    );
  };
  

  export default StyledButton