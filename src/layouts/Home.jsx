import Header from './header';
import Footer from './footer';
import Experience from './experience';
import ProfilePhoto from '/profile.jpg';
import Skills from './skills';
import Portfolio from './portfolio';

function Home() {
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