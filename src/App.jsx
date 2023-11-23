
import styles from './App.module.css';

import { Abaut } from './componets/About/About';
import { Contacto } from './componets/Contact/Contacto';
import { Experience } from './componets/Experience/Experience';
import { Hero } from './componets/Hero/Hero';
import { Navbar } from './componets/Navbar/Navbar';
import { Projects } from './componets/Projectss/Projects';


function App() {
  return (
  <div className={styles.App}> 
  <Navbar/>
  <Hero/>
  <Abaut/>
  <Experience/>
  <Projects/>
  <Contacto/>
   </div>
  );
}

export default App;

