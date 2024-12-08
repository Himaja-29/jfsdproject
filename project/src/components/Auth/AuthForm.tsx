import React, { useState } from 'react';
import { Lock, Mail, User, Eye, EyeOff } from 'lucide-react';

interface Props {
  isLogin: boolean;
  onSubmit: (data: any) => void;
}

const AuthForm: React.FC<Props> = ({ isLogin, onSubmit }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    role: 'Investor',
  });

  const [isAccountCreated, setIsAccountCreated] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const [passwordError, setPasswordError] = useState('');

  // Mock list of existing users for validation (replace with API call in a real app)
  const existingUsers = [
    { email: 'test@example.com', name: 'JohnDoe' },
    { email: 'user123@example.com', name: 'JaneSmith' },
  ];

  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{6,}$/;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation check for empty fields
    if (!isLogin) {
      if (!formData.name || !formData.email || !formData.password || !formData.role) {
        setError('Please fill in all the fields.');
        return;
      }
    } else if (!formData.email || !formData.password) {
      setError('Please enter both email and password.');
      return;
    }

    // Password validation
    if (!passwordRegex.test(formData.password)) {
      setPasswordError(
        'Password must contain at least one uppercase letter, one special character, and one number.'
      );
      return;
    }

    // Reset password error if password is valid
    setPasswordError('');

    // Duplicate email or username validation
    const isDuplicate = existingUsers.some(
      (user) =>
        user.email.toLowerCase() === formData.email.toLowerCase() ||
        user.name.toLowerCase() === formData.name.toLowerCase()
    );

    if (isDuplicate) {
      setError('The email or username is already in use. Please choose a different one.');
      return;
    }

    // Clear error if validation passes
    setError('');
    onSubmit(formData);

    if (!isLogin) {
      setIsAccountCreated(true);

      // Reset form fields
      setFormData({
        email: '',
        password: '',
        name: '',
        role: 'Investor',
      });

      // Hide success message after 3 seconds
      setTimeout(() => setIsAccountCreated(false), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {!isLogin && (
        <div>
          <label className="block text-sm font-medium text-gray-700 text-black">Name</label>
          <div className="mt-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-black"
              placeholder="John Doe"
            />
          </div>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 text-black">Email</label>
        <div className="mt-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-black"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 text-black">Password</label>
        <div className="mt-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <Lock className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type={showPassword ? 'text' : 'password'} // Toggle input type based on visibility
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="pl-10 pr-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-black"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 text-black"
          >
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-1">
          Password must be at least 6 characters and include an uppercase letter, a number, and a special character.
        </p>
        {passwordError && (
          <p className="text-sm text-red-600 mt-2">{passwordError}</p>
        )}
      </div>

      {!isLogin && (
        <div>
          <label className="block text-sm font-medium text-gray-700">Role</label>
          <select
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-black bg-white"
          >
            <option value="Admin">Admin</option>
            
          </select>
        </div>
      )}

      {error && (
        <div className="mt-2 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
          <p className="text-sm">{error}</p>
        </div>
      )}

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {isLogin ? 'Sign In' : 'Create Account'}
      </button>

      {/* Conditional Success Message */}
      {!isLogin && isAccountCreated && (
        <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
          <p className="text-lg font-bold">Account was successfully created!</p>
        </div>
      )}
    </form>
  );
};

export default AuthForm;
