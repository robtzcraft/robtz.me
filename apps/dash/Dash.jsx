import './assets/styles/styles.css';
import Sidebar from './layouts/Sidebar';
import PasswordManager from './layouts/PasswordManager';
import { supabase } from '../../src/App';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import robtzcraft from '@public/robtzcraft.svg'

function Dash() {
    // Navigate object
    const navigate = useNavigate();
    // UserData
    const [sessionData, setSessionData] = useState(null);
    /* 
        Authentication of user:
        If session is saved on browser then pass to app
        If not then return to /authentication page
    */
    useEffect(() => {
        const checkSession = async () => {
            const { data } = await supabase.auth.getSession();
            setSessionData(data.session.user.email)
            if (!data) {
                navigate('/authentication');
            }
        };
        checkSession();
        // Listener to verify session changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            if (!session) {
                navigate('/authentication');
            }
        });
        return () => subscription.unsubscribe();
    }, [navigate]);
    // console.log(sessionData)
    return (
        <div className='dash'>
            <Sidebar />
            <div className='dash__content'>
                <div className='dash__content--header'>
                    <button className='dash__content--headerButton'>
                        <img src={robtzcraft} alt="image" />
                        <p>{sessionData}</p>
                    </button>
                </div>
                <PasswordManager />
            </div>
        </div>
    );
}

export default Dash;