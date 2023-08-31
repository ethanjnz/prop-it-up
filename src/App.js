import logo from './logo.svg';
import PersonCard from './components/PersonCard';
import './App.css';

function App() {
  return (
    <div className='App'>
      <PersonCard firstname={'Jane'} lastname={'Doe'} age={45} hair={'Black'} />
      <PersonCard firstname={'John'} lastname={'Smith'} age={88} hair={'Brown'} />
      <PersonCard firstname={'Millard'} lastname={'Fillmore'} age={50} hair={'Brown'} />
      <PersonCard firstname={'Maria'} lastname={'Smith'} age={62} hair={'Brown'} />
    </div>
  );
}

export default App;
