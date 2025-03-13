import './header.css';
import Button from '../../components/Button';
import CurriculumVitae from '../../documents/CurriculumVitae_AzuaraJorge.pdf';
import GithubIcon from '@assets/images/brand-github.svg';
import LinkedInIcon from '@assets/images/brand-linkedin.svg';
import MailIcon from '@assets/images/mail.svg';

function Header({ toggleEmailPopup }) {
  return (
    <div className='__header'>
      <div className='__container'>
        
        <a href='#' className='__header__logo'>
          <img className='__display__logo__img' src='robtzcraft.svg' alt='logo' />
          <p>robtz</p> 
        </a>
        <nav className='__header__navbar'>
          <a href='https://github.com/robtzcraft' target='_blank'>
            <img src={GithubIcon} alt='github'/>
          </a>
          <a href='https://www.linkedin.com/in/jorge-luis-azuara-251427239/' target='_blank'>
            <img src={LinkedInIcon} alt="linkedin" />
          </a>
          <a href="#" onClick={toggleEmailPopup}>
            <img src={MailIcon} alt="mail" />
          </a>
          <Button 
            href={CurriculumVitae}
            children={'Download CV'}
            download={true}
          />
        </nav>
        
      </div>
    </div>
	)
}

export default Header;
