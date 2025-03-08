
import '@layouts/skills/skills.css';
import ReactJS from '@assets/images/reactjs.png';
import PostgreSQL from '@assets/images/postgresql.png';
import SpringBoot from '@assets/images/springboot.png';
import MicrochioLogo from '@assets/images/MCHP.svg';
import Fusion360 from '@assets/images/fusion360.png';
import Python from '@assets/images/python.png';

function SkillsCard({logo, text, porcentage}){
  return(
    <>
      <div className='__skills__recordItem'>
        <img src={logo} />
        <p>{text}</p>
        <p className='__skills__recordItemPercentage'>{porcentage}</p>
      </div>
    </>
  )
}

function Skills() {
  return(
    <>
      <div className='__skills'>
        <h2>Some of my Skills</h2>
        <div className='__skills__record'>
          
          <SkillsCard logo={ReactJS} text={'ReactJS'} porcentage={'Advanced'}/>
          <SkillsCard logo={PostgreSQL} text={'PostgreSQL'} porcentage={'Intermediate'}/>
          <SkillsCard logo={SpringBoot} text={'Spring Boot'} porcentage={'Basic'}/>
          <SkillsCard logo={Python} text={'Python'} porcentage={'Intermediate'}/>
          <SkillsCard logo={Fusion360} text={'Fusion 360'} porcentage={'Advanced'}/>
          <SkillsCard logo={MicrochioLogo} text={'AVR Microcontrollers'} porcentage={'Advanced'}/>

        </div>
      </div>
    </>
  )
}

export default Skills;
