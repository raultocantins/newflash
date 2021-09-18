import './App.css';
//import Sections
import Section1 from './sections/Section1.js'
//import Section2 from './sections/Section2.js'
import Section3 from './sections/Section3.js'
import Section4 from './sections/Section4.js'
import Comentarios from './sections/Comentarios.js'
function App() {
  return (
    <div className="App">
      <Section1/>
      <Section3/>
      <Section4/>
      <Comentarios/>     
    </div>
  );
}

export default App;
