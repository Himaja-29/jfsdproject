import Header from '../components/Layout/Header';
import Features from '../components/Home/Features';
import Footer from '../components/Layout/Footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Features />
      <Footer />
    </div>
  );
};


export default Home;