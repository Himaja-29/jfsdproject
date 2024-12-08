import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-600 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              MutualFund Insight helps investors make informed decisions through
              comprehensive analysis and expert guidance.
            </p>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/funds" className="hover:text-primary-400 transition-colors">Explore Funds</Link></li>
              <li><Link to="/learn" className="hover:text-primary-400 transition-colors">Learning Center</Link></li>
              <li><Link to="/tools" className="hover:text-primary-400 transition-colors">Investment Tools</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary-400" />
                support@mutualfundinsight.com
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary-400" />
                +91 7865434041
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-primary-400" />
                Andhra Pradesh , India
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Subscribe for investment insights and updates</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-md w-full bg-dark-500 border border-dark-400 focus:outline-none focus:border-primary-400"
              />
              <button
                type="submit"
                className="bg-primary-500 text-white px-4 py-2 rounded-r-md hover:bg-primary-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-dark-400 mt-12 pt-8 text-sm text-center">
          © {new Date().getFullYear()} MutualFund Insight. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;