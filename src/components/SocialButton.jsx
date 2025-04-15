// Social Button amélioré avec hover effect
const SocialButton = ({ icon, label = "" }) => (
    <a
      href="#"
      className="w-full flex items-center justify-center py-2.5 px-4 border border-gray-700 
        rounded-lg shadow-sm bg-gray-800 text-gray-200 hover:bg-gray-700 
        transition-all duration-200 group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-red-500/0 to-purple-500/0 
        group-hover:from-amber-500/20 group-hover:via-red-500/20 group-hover:to-purple-500/20 
        transition-all duration-500"></div>
      <span className="relative flex items-center gap-2">
        {icon}
        {label}
      </span>
    </a>
  );

  export default SocialButton