
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { supabase } from "../../src/App";
import './assets/styles/styles.css';

function DashLogin(){

    const navigate = useNavigate();
    const emailInput = useRef();
    const passwordInput = useRef();

    useEffect(() => {
        const checkSession = async() => {
            const { data } = await supabase.auth.getSession();
            if(data.session) {
                navigate('/dash')
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
            });
            if(error){
                if(error.code == 'invalid_credentials'){
                    emailInput.current.value = ''
                    passwordInput.current.value = '';
                    alert('Invalid user')
                    return;
                } else {
                    alert(error.message);
                }
            }
            if (data) {
                navigate('/dash')
            }
        } catch(err) {
            // console.log(err)
            alert('An error has been occured');
        }
    }

    return(
        <div className="dash__login">
            <div className="dash__loginCard">
                <p className="dash__loginCardTitle">WELCOME ROBTZ</p>
                <p className="dash__loginCardText">Welcome back! Please enter your details.</p>
                <form className="dash__loginForm" onSubmit={authenticationFunction}>
                    <div className="dash__loginFormItem">
                        <p className="dash__loginFormItem--label">Email</p>
                        <input className="dash__loginFormItem--input" ref={emailInput} type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="dash__loginFormItem">
                        <p className="dash__loginFormItem--label">Password</p>
                        <input className="dash__loginFormItem--input" ref={passwordInput} type="password" placeholder="Enter your password" required />
                    </div>
                    <input className="dash__loginFormSubmit" type="submit" value={'Sign in'}/>
                </form>
            </div>
        </div>
    )
}

export default DashLogin;