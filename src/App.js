import logo from './logo.svg';
import './App.css';
import Homepage from './component/Homepage';
import Gallerypage from './component/Gallerypage';
import Aboutpage from './component/Aboutpage';
import Contactpage from './component/Contactpage';
import Titlebar from './component/Titlebar';

function App() {
  return (
    <div>
       <Titlebar/>
      <Homepage/>
      <Aboutpage/>
      <Gallerypage/>
      <Contactpage/>
    </div>
  );
}

export default App;
