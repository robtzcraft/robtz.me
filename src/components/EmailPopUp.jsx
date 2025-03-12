import { v4 as uuidv4 } from 'uuid';
import { useRef } from 'react';

import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://mrzhlbvbuwadffyfzosj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1yemhsYnZidXdhZGZmeWZ6b3NqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE2NzgxNDYsImV4cCI6MjA1NzI1NDE0Nn0._qguxIBiJmVBiQZKSXp_AUX2upapS5fcrMUJ_s-NSDw';
const supabase = createClient(supabaseUrl, supabaseKey);

function EmailPopUp({ isEmailPopupOpen, toggleEmailPopup }) {

  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  // Create New Email Entry
  const createEmail = async(e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase
        .from('contactmessages')
        .insert([{
          id: uuidv4(),
          dateconnection: '12-12-2024',
          ipdirection: '123123123',
          devicetype: 'Android',
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
