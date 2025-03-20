import Header from './Header';
import Footer from './Footer';
import Experience from './Experience';
import ProfilePhoto from '/profile.jpg';
import Skills from './Skills';
import Portfolio from './Portfolio';
import { useEffect } from 'react';

function Home() {

  useEffect(() => {
    document.title = 'robtz.me - Homepage'
  }, []);

	return (
    <div className='App'>
      <Header />
      <div className='app__profilePhoto'>
        <img src={ProfilePhoto} alt='ProfilePhoto'/>
      </div>
      <main className='__container__body app__body'>
        <div className='app__body--prebody'>
          <h1>
            ✋  Hi!, I'm 'robtz' a junior software developer <br /> based in México!
          </h1>
        </div>
        <h2>About</h2>
        <p>
          Hi!... I'm Jorge (robtz) a passionate software developer with over <span>+2 years</span> developing tools to automate
          tasks in different areas and process improvement. Experienced in working with different teams in different 
          areas such as <span>IT Support and IoT teams</span>, and sometimes working with robotics and electronics tools.
        </p>
        <Experience />
        <Skills /> 
      </main>
      <Portfolio />
      <Footer />
	  </div>
	)
}

export default Home;
