// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Category from './Components/Category';
import WeeklyBest from './Components/WeeklyBest';
import SummerCollection from './Components/SummerCollection';
import TrendingNow from './Components/TrendingNow';
import Support from './Components/Support';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Category/>
      <WeeklyBest/>
      <SummerCollection/>
      <TrendingNow/>
      <Support/>
      <Footer/>
    </div>
  );
}

export default App;
