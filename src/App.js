import './App.css';
import Whatsapp from './assets/whatsapp.png'
//import Sections
import Section1 from './sections/Section1.js'
import Score from './sections/Score.js'
import Section3 from './sections/Section3.js'
import Section4 from './sections/Section4.js'
import Section5 from './sections/Section5.js'
import Section6 from './sections/Section6.js'
import Comentarios from './sections/Comentarios.js'
import Footer from './sections/Footer.js'
function App() {
  return (
    <div className="App">
      <Section1 />
      <Section3 />
      <Section4 />
      <Section6 />
      <Score />
      <Comentarios />
      <Section5 />
      <Footer />
     <a href="/">
     <img src={Whatsapp} alt="whatsapp" id="whatsapp"/>
     </a>
    </div>
  );
}

export default App;
