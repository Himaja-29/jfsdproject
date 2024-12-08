import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { PieChart, TrendingUp, BarChart, Shield } from 'lucide-react';

const Header = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    // Simulate page load animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleGetStarted = () => {
    navigate('/signup'); // Redirect to the signup route
  };

  return (
    <div className={`
      relative w-full h-screen flex items-center justify-center 
      bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 
      text-white overflow-hidden
      font-poppins
    `}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-1/2 h-1/2 bg-white/10 rounded-full -top-1/4 -left-1/4 transform rotate-45"></div>
        <div className="absolute w-1/3 h-1/3 bg-white/10 rounded-full -bottom-1/4 -right-1/4 transform -rotate-45"></div>
      </div>

      {/* Content Container */}
      <div 
        className={`
          relative z-10 max-w-6xl mx-auto px-6 text-center
          transform transition-all duration-1000 ease-out
          ${isLoaded 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'}
        `}
      >
        {/* Logo and Title */}
        <div 
          className={`
            flex items-center justify-center mb-8 space-x-6
            transition-all duration-700 delay-300
            ${isLoaded 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'}
          `}
        >
          <PieChart className="h-16 w-16 text-white/90 animate-pulse" />
          <h1 className="text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Fund Guru
          </h1>
        </div>

        {/* Tagline */}
        <p 
          className={`
            text-xl max-w-3xl mx-auto mb-12 text-white/90 leading-relaxed
            transition-all duration-700 delay-500
            ${isLoaded 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'}
          `}
        >
          Empower your financial journey with intelligent mutual fund analytics. 
          Transform complex data into clear, actionable investment strategies.
        </p>

        {/* Call to Action */}
        <div 
          className={`
            flex justify-center space-x-6
            transition-all duration-700 delay-700
            ${isLoaded 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'}
          `}
        >
          <button
            onClick={handleGetStarted} // Use the navigation handler
            className="
              px-10 py-4 
              bg-white text-blue-800 
              rounded-full 
              font-semibold 
              text-lg
              shadow-xl
              hover:bg-blue-50 
              transition-all 
              duration-300 
              transform 
              hover:-translate-y-1 
              hover:shadow-2xl
              focus:outline-none 
              focus:ring-4 
              focus:ring-blue-300
            "
          >
            Get Started
          </button>
        </div>

        {/* Key Features */}
        <div 
          className={`
            mt-16 grid grid-cols-3 gap-8 max-w-4xl mx-auto
            transition-all duration-700 delay-1000
            ${isLoaded 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'}
          `}
        >
          {[{
              icon: TrendingUp,
              title: "Smart Analytics",
              description: "Advanced data-driven insights for optimal investment decisions."
            },
            {
              icon: BarChart,
              title: "Comprehensive Metrics",
              description: "Detailed performance metrics across various mutual fund categories."
            },
            {
              icon: Shield,
              title: "Secure Platform",
              description: "Top-tier security and privacy protection for your financial data."
            }
          ].map(({ icon: Icon, title, description }, index) => (
            <div 
              key={index}
              className="bg-white/10 p-6 rounded-xl backdrop-blur-sm text-center"
            >
              <Icon className="mx-auto h-12 w-12 mb-4 text-blue-300" />
              <h3 className="font-bold text-lg mb-2">{title}</h3>
              <p className="text-sm text-white/70">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
