import ReactDOM from 'react-dom/client';
import "@assets/styles/styles.css";
import Header from './layouts/header';
import Footer from './layouts/footer';
import Experience from './layouts/experience';
import ProfilePhoto from '/profile.jpg';
import Skills from './layouts/skills';
import Portfolio from './layouts/portfolio';

function App() {
	return (
    <div className='App'>
      <Header />
      <div className='app__profilePhoto'>
        <img src={ProfilePhoto} alt='ProfilePhoto'/>
      </div>
      <main className='__container__body app__body'>
        <div className='app__body--prebody'>
          ✋  Hi!, I'm 'robtz' a junior software developer <br /> based in México!
        </div>
        <h2>About</h2>
        <p>
          Something!... I'm working on it...
        </p>
        <Experience />
        <Skills /> 
      </main>
      <Portfolio />
      <Footer />
	  </div>
	)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <App /> )
