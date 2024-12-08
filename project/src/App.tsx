import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Layout/Navbar';
import Home from './pages/Home';
import Funds from './pages/Funds';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Learn from './pages/Learn';

// Define the data structure for the API response
interface DataItem {
  id: number; // Assuming each item has an `id`
  name: string;
  email: string;
  password: string;
}

const App: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    axios.get<DataItem[]>('http://localhost:5000/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/learn" element={<Learn />} />
        </Routes>
      </AuthProvider>

      <div>
        <ul>
          {data.map(item => (
            <li key={item.id}>
              Name: {item.name}, Email: {item.email}, Password: {item.password}
            </li>
          ))}
        </ul>
      </div>
    </Router>
  );
};

export default App;
