import './App.css';
import Navbar from './components/navbar/Navbar';
import AnimalList from './components/animal-cards-home/AnimalList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AnimalList />
    </div>
  );
}

export default App;
