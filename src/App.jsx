import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import "@assets/styles/styles.css";
import Header from './layouts/header';
import Footer from './layouts/footer';
import EmailPopUp from './components/EmailPopUp';

function App() {

  // State for email popUp
  const [isEmailPopupOpen, setIsEmailPopupOpen] = useState('none');

  const toggleEmailPopup = () => {
    setIsEmailPopupOpen(isEmailPopupOpen === 'none'?'flex':'none');
    console.log(isEmailPopupOpen)
  }

	return (
    <div className='App'>
      <EmailPopUp isEmailPopupOpen={isEmailPopupOpen} toggleEmailPopup={toggleEmailPopup}/>
      <Header toggleEmailPopup={toggleEmailPopup}/>
     
      <section className='__container__body app__body'>
        <div className='app__body--prebody'>
          ✋  Hi!, I'm 'robtz' a junior software developer <br /> based in México!
        </div>
        <p>
          Jorge is a freelancer and a full-stack developer based in Osaka with a passion for building
          digital services/stuff. He has a knack for all things lauching products, from planning and
          designing all the way to solving real-life problems with code. When not online, he loves
          hanging out with his camera. Currently, he is living off if his own product called Inkdrop.
          He publishes content for marketing his products and his YoutTube channel called "Dev as Life"
          has more than 100l subscribers.
        </p>
      </section>

      <Footer />
	  </div>
	)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <App /> )
