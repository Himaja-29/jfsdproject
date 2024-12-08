import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/Auth/AuthForm';
import { LoginFormData } from '../types/auth';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (data: LoginFormData) => {
    // Simulated API call
    login({
      id: '1',
      email: data.email,
      name: 'John Doe',
      role: 'investor',
    });

    // Redirect to "Explore Funds" page
    navigate('/Funds');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {/* Login Form */}
          <AuthForm isLogin={true} onSubmit={handleLogin} />

          {/* Separator */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  New to MutualFund Insight?
                </span>
              </div>
            </div>

            {/* Sign-Up Link */}
            <div className="mt-6">
              <Link
                to="/signup"
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700 hover:text-black"
              >
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
