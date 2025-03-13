import { v4 as uuidv4 } from 'uuid';
import { useRef } from 'react';

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function EmailPopUp({ isEmailPopupOpen, toggleEmailPopup }) {

  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  // Create New Email Entry
  const createEmail = async(e) => {
    e.preventDefault();

    const dateNow = new Date();

    const optionsDate = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    };

    const dateFormat = dateNow.toLocaleDateString('en-US', optionsDate);

    try {
      const { data, error } = await supabase
        .from('contactmessages')
        .insert([{
          id: uuidv4(),
          dateconnection: dateFormat,
          ipdirection: '123123123',
          devicetype: navigator.oscpu,
          fullname: nameRef.current.value,
          emaildirection: emailRef.current.value,
          emailsubject: subjectRef.current.value,
          emailmessage: messageRef.current.value
        }])
        // .select();
      } catch(error) {
        console.log(error.message);
      } finally {
        alert('Something has been sent to robtz');
      }
    // toggleEmailPopup();
  }

  return(
    <div className="__emailPopup" style={{display: isEmailPopupOpen}}>
      <div className="__emailPopup__body">
        <form>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" ref={nameRef}/>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" ref={emailRef}/>
          <label htmlFor="subject">Subject: </label>
          <input type="text" name="subject" ref={subjectRef}/>
          <label htmlFor="message">Message: </label>
          <input type="text" name="message" ref={messageRef}/>
        </form>
        <button id='submit' onClick={createEmail}>test</button>
      </div>
    </div>
  )
};

export default EmailPopUp;
