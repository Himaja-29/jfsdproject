import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // For toggling password visibility
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  const [passwordError, setPasswordError] = useState<string | null>(null); // For password validation errors
  const navigate = useNavigate();

  // Password validation function
  const validatePassword = (password: string): boolean => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    // Validate the password before submitting
    if (!validatePassword(password)) {
      setPasswordError(
        'Password must be at least 8 characters long, contain one uppercase letter, one number, and one special character.'
      );
      setIsLoading(false);
      return;
    } else {
      setPasswordError(null); // Clear any previous password error
    }

    try {
      // Replace with actual API call
      console.log({ email, password, name });

      setMessage('Signup successful! Redirecting to login...');
      setIsError(false);

      setTimeout(() => navigate('/login'), 2000);
    } catch (error: any) {
      setMessage('Something went wrong. Please try again.');
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create an account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {message && (
            <div
              className={`mb-4 text-sm ${
                isError ? 'text-red-500' : 'text-green-500'
              }`}
            >
              {message}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 text-black">
                Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-black">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 text-black">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  type={isPasswordVisible ? 'text' : 'password'} // Toggle type based on visibility state
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black"
                />
                <button
                  type="button"
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  className="absolute inset-y-0 right-0 px-3 py-2 text-sm font-medium text-gray-600 focus:outline-none"
                >
                  {isPasswordVisible ? 'Hide' : 'Show'}
                </button>
              </div>
              {passwordError && (
                <p className="mt-2 text-sm text-red-500">{passwordError}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-2 px-4 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-sm"
              >
                {isLoading ? 'Signing up...' : 'Sign up'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
