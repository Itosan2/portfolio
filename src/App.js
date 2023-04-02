import './App.css'
import Header from './components/Header'
import Intro from './components/Intro'
import Services from './components/Services'
import MyWork from './components/MyWork'
import Footer from './components/Footer'
// import './js/Script2.js'

export default function App() {
  return (
    <div className="App">

      <Header/>
      <Intro/>
      <Services/>
      <MyWork/>
      <Footer/>
    </div>
  );
}

