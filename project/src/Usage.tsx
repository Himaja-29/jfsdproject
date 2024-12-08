import ReactDOM from 'react-dom';
import { AuthProvider } from './context/AuthContext';
import Funds from './pages/Funds.tsx';

const App = () => (
  <AuthProvider>
    <Funds />
  </AuthProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
