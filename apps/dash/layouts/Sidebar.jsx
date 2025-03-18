import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import LogOutLight from '../assets/images/logout_light.svg';
import KeyLight from '../assets/images/key_light.svg';
import { supabase } from "../../../src/App";
import { useEffect } from "react";

function Sidebar(){

    const navigate = useNavigate();
    const signOutSession = async(e) => {
        try {
            const { error } = await supabase.auth.signOut()
            console.log(error)
            // navigate('/authentication')
            
        } catch(err) {
            console.log("Error ", err)
        }
    }

    return(
        <div className="dash__sidebar">
            <div>
                <p>something to display</p>
                <button className="dash__sidebar--userLogOut" onClick={ () => { signOutSession() } }>
                    <img src={KeyLight} alt="" />
                    Passwords
                </button>
                <button className="dash__sidebar--userLogOut" onClick={ () => { signOutSession() } }>
                    <img src={LogOutLight} alt="" />
                    Log Out
                </button>
            </div>
            <div className="dasg__sidebar--user">
                <button className="dash__sidebar--userLogOut" onClick={ () => { signOutSession() } }>
                    <img src={LogOutLight} alt="" />
                    Log Out
                </button>
            </div>
        </div>
    )
}

export default Sidebar; 