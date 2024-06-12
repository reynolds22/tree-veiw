import './App.css';
import TreeVeiw from "./components";
import sideMenu from './components/data';

function App() {
  return (
    <div>
      <TreeVeiw sideMenu={sideMenu}/>
    </div>
  );
}

export default App;
