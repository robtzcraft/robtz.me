
function EmailPopUp({ isEmailPopupOpen, toggleEmailPopup }) {
  return(
    <div className="__emailPopup" style={{display: isEmailPopupOpen}}>
      <div className="__emailPopup__body">
        <form>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" />
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" />
          <label htmlFor="subject">Subject: </label>
          <input type="text" name="subjet" />
          <label htmlFor="message">Message: </label>
          <input type="text" name="message" />
        </form>
        <button onClick={toggleEmailPopup}>test</button>  
      </div>
    </div>
  )
};

export default EmailPopUp;
