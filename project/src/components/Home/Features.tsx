import { useState, useEffect } from 'react';
import { Shield, TrendingUp, Users, BookOpen, PieChart, Lock } from 'lucide-react';
import FeatureCard from './FeatureCard'; // Make sure this path is correct

const Features = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: Shield,
      title: 'Expert Guidance',
      description: 'Get personalized advice from certified financial advisors'
    },
    {
      icon: TrendingUp,
      title: 'Performance Analysis',
      description: 'Track and analyze fund performance with detailed metrics'
    },
    {
      icon: Users,
      title: 'Community Insights',
      description: 'Learn from experienced investors and share knowledge'
    },
    {
      icon: BookOpen,
      title: 'Educational Resources',
      description: 'Access comprehensive learning materials and market insights'
    },
    {
      icon: PieChart,
      title: 'Portfolio Management',
      description: 'Manage and optimize your investment portfolio effectively'
    },
    {
      icon: Lock,
      title: 'Secure Investments',
      description: 'Your investments are protected with bank-grade security'
    }
  ];

  return (
    <section 
      className={`
        py-20 bg-gradient-to-br from-blue-900 to-blue-700 
        font-poppins
        transition-all duration-700
        ${isLoaded 
          ? 'opacity-100' 
          : 'opacity-0'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div 
          className={`
            transform transition-all duration-700 delay-300
            ${isLoaded 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'}
          `}
        >
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Why Choose Fund Guru ?
          </h2>
          <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto">
            Experience the power of intelligent investing with our comprehensive suite of tools and expert guidance and provide low Risk reccomandations to Invest
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              {...feature} 
              delay={(index + 1) * 300} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
