import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import "@assets/styles/styles.css";
import Header from './layouts/header';
import Footer from './layouts/footer';
import EmailPopUp from './components/EmailPopUp';
import Experience from './layouts/experience';
import ProfilePhoto from '/profile.jpg';
import Skills from './layouts/skills';
import Portfolio from './layouts/portfolio';
import Button from './components/Button';

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function SupabaseDataList(){
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect( () => {
    async function fetchData() {
      setError(null);
      try {
        const { data, error } = await supabase.from('contactmessages').select('*');
        if(error) {
          setError(error);
        } else {
          setData(data);
        }
      } catch (err) {
        setError(err);
      } finally {
        console.log('finally');
      }
    }

    fetchData();
  }, []);

  if (error) {
    return <p>Error: {error.message}</p>
  }

  return(
    <div>
      <h2>Supabase Data</h2>
      {data.length > 0 ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {/* Replace with your data fields */}
              {item.fullname && <p>Name: {item.fullname}</p>}
              {item.emaildirection && <p>Email: {item.emaildirection}</p>}
              {item.emailmessage && <p>Description: {item.emailmessage}</p>}
              {/* Add more fields as needed */}
            </li>
          ))}
        </ul>
      ):(
        <p>No data found.</p>
      )}
    </div>
  );
}

function App() {

  // State for email popUp
  const [isEmailPopupOpen, setIsEmailPopupOpen] = useState('none');
  const toggleEmailPopup = (e) => {
    e.preventDefault();
    setIsEmailPopupOpen(isEmailPopupOpen === 'none'?'flex':'none');
  }

	return (
    <div className='App'>
      <EmailPopUp isEmailPopupOpen={isEmailPopupOpen} toggleEmailPopup={toggleEmailPopup}/>
      <Header toggleEmailPopup={toggleEmailPopup}/>
     
      <div className='app__profilePhoto'>
        <img src={ProfilePhoto} alt='ProfilePhoto'/>
      </div>
      <main className='__container__body app__body'>
        <div className='app__body--prebody'>
          ✋  Hi!, I'm 'robtz' a junior software developer <br /> based in México!
        </div>
        <h2>About</h2>
        <p>
          Jorge is a freelancer and a full-stack developer based in Osaka with a passion for building
          digital services/stuff. He has a knack for all things lauching products, from planning and
          designing all the way to solving real-life problems with code. When not online, he loves
          hanging out with his camera. Currently, he is living off if his own product called Inkdrop.
          He publishes content for marketing his products and his YoutTube channel called "Dev as Life"
          has more than 100l subscribers.
        </p>
        <Experience />
        <Skills /> 
      </main>

      <Portfolio />

      <section>
        <Button href={'#'} children={'See my Blog'}download={false} />
      </section>

      <Footer />

      <SupabaseDataList />

	  </div>
	)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <App /> )
