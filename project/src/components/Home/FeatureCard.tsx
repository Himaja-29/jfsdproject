import { FC, useState, useEffect } from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: FC<FeatureCardProps> = ({ icon: Icon, title, description, delay }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`
        bg-white/10 p-6 rounded-xl backdrop-blur-sm 
        transform transition-all duration-700 ease-out
        ${isLoaded 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-10 scale-95'}
        hover:bg-white/20 hover:shadow-xl 
        transition-all duration-300
      `}
    >
      <div 
        className={`
          p-4 rounded-full mb-4 inline-block
          bg-blue-500/20 text-blue-400
          transition-all duration-300
        `}
      >
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
