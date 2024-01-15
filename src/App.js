import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Table from './components/Table';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Hero />
        <Table />
        <Footer />
      </div>
    </div>
  );
}

export default App;
