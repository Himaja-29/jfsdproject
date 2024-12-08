import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, LogIn, LogOut, PieChart } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-dark-500 text-white border-b border-dark-400">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <PieChart className="h-8 w-8 text-primary-400" />
            <span className="font-bold text-xl">Fund Guru</span>
          </Link>
          
          <div className="flex space-x-6">
            
            <Link to="/learn" className="flex items-center space-x-1 hover:text-primary-400 transition-colors">
              <BookOpen className="h-5 w-5" />
              <span>Gain Insights</span>
            </Link>
            {user ? (
              <>
                
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 hover:text-primary-400 transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <Link to="/login" className="flex items-center space-x-1 hover:text-primary-400 transition-colors">
                <LogIn className="h-5 w-5" />
                <span>Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;