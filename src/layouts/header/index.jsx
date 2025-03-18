import './header.css';
import Button from '../../components/Button';
import CurriculumVitae from '../../documents/CurriculumVitae_AzuaraJorge.pdf';
import GithubIcon from '@assets/images/brand-github.svg';
import LinkedInIcon from '@assets/images/brand-linkedin.svg';
import MailIcon from '@assets/images/mail.svg';
import '../../components/components.css'
import { createClient } from '@supabase/supabase-js';
import { v4 as uuidv4 } from 'uuid';
import { supabase } from '../../App';

import { useEffect, useRef, useState } from 'react';

function Header() {

  const dialogRef = useRef(null);
  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();
  const formRef = useRef();
  const submitRef = useRef();

  const [submitContent, setSubmitContent] = useState('Submit');
  const toggleSubmitContent = () => {
    if(submitContent == 'Submit') {
      setSubmitContent('Sending...');
    } else {
      setSubmitContent('Submit');
    }
  }

  const openDialog = (e) => {
    e.preventDefault();
    console.log('deberia abrir')
    if(dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const dateNow = new Date();
  const optionsDate = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }
  const dateFormat = dateNow.toLocaleDateString('en-US', optionsDate)

  const closeDialog = async ( e ) => {
    e.preventDefault();
    await sendData();
    if(dialogRef.current) {
      dialogRef.current.close();
    }
  }
  const sendData = async( e ) => {
    try {
      toggleSubmitContent();
      const { error } = await supabase
        .from('contactmessages')
        .insert([{
          id: uuidv4(),
          dateconnection: dateFormat,
          ipdirection: '123123123',
          devicetype: navigator.oscpu,
          fullname: nameRef.current.value,
          emaildirection: emailRef.current.value,
          emailsubject: subjectRef.current.value,
          emailmessage: messageRef.current.value,
          visibility: true
        }]);
        // .select();
      if( error ) {
        throw new Error(`Error: ${error.message}`);
      }
      if(formRef){
        formRef.current.reset();
      }
      alert('I\'ve received your data, I\'ll contact you later!');
      setSubmitContent('Submit');
    } catch( error ) {
      console.error(`Error: ${error}`);
      alert(`Something went wrong!. Please check your internet connection and retry.
        ${error}`);
      setSubmitContent('Retry');
    }
  };

  // Agregar este useEffect para el cierre al hacer clic fuera
  useEffect(() => {
    const dialogElement = dialogRef.current;
    
    // Esta función verifica si el clic fue directamente en el dialog 
    // y no en su contenido interno
    const handleBackdropClick = (event) => {
      if (event.target === dialogElement) {
        dialogElement.close();
      }
    };
    
    // Agregar el event listener cuando el componente se monta
    if (dialogElement) {
      dialogElement.addEventListener('click', handleBackdropClick);
    }
    
    // Remover el event listener cuando el componente se desmonta
    return () => {
      if (dialogElement) {
        dialogElement.removeEventListener('click', handleBackdropClick);
      }
    };
  }, []);

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
          <a href='https://www.linkedin.com/in/jorge-azuara-251427239/' target='_blank'>
            <img src={LinkedInIcon} alt="linkedin" />
          </a>
          <a href="#" onClick={openDialog}>
            <img src={MailIcon} alt="mail" />
          </a>
          <Button 
            href={CurriculumVitae}
            children={'Download CV'}
            download={true}
          />

          { /* Dialog para */ }
          <dialog ref={dialogRef} className='dialogPopUp'>
            <div className='dialogPopUp__header'>
              <p>Let's talk!</p>
              <p>Contact me by filling out this form or emiling me at <span>jorgeluisah47@gmail.com</span></p>
            </div>
            <div className='dialogPopup__form' id='dialogPopup__form'>
              <form ref={formRef} onSubmit={closeDialog}>
                <input type="text" ref={nameRef} placeholder='Enter your name' maxLength={40} required/>      
                <input type="email" ref={emailRef} placeholder='Enter your email' maxLength={255} required/>
                <input type="text" ref={subjectRef} placeholder='Email Subject' maxLength={255} required/>
                <textarea name='userMessage' ref={messageRef} placeholder='Type your message here!' maxLength={1000} required></textarea>
                <button className='button' ref={submitRef} type='submit'>{submitContent}</button>
              </form>
            </div>
          </dialog>

        </nav>
      </div>
    </div>
	)
}

export default Header;
