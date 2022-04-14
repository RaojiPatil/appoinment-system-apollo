import logo from './logo.svg';
import './App.css';
import { Landingpage } from './Components/landingpage';
import { Routers } from './Routes/Routers';

function App() {
  return (
    <div className="App">
      {/* <Routers/> */}
      <Landingpage />
    </div>
  );
}

export default App;
