
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function DashLogin(){

    const navigate = useNavigate();
    const emailInput = useRef();
    const passwordInput = useRef();

    useEffect(() => {
        const checkSession = async() => {
            const { data } = await supabase.auth.getSession();
            if(data.session == null) {
                navigate('/authentication')
            }
        }
        checkSession();
    }, [])

    const authenticationFunction = async(e) => {
        e.preventDefault();
        try{
            const { data, error } = await supabase.auth.signInWithPassword({
                email: emailInput.current.value,
                password: passwordInput.current.value
            })
            if (data) {
                navigate('/dash')
            }
        } catch(err) {
            console.log('Constraseña incorrecta');
        }
    }

    return(
        <div>
            <h2>Test</h2>
            <form onSubmit={authenticationFunction}>
                <input ref={emailInput} type="email" placeholder="Email" required />
                <input ref={passwordInput} type="password" placeholder="Password" required />
                <input type="submit" placeholder="Submit" />
            </form>
        </div>
    )
}

export default DashLogin;