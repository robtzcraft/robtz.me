
// import 'reset-css';
import './assets/styles/styles.css'
import { createClient } from '@supabase/supabase-js';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function Dash() {

    const navigate = useNavigate();

    useEffect(() => {
        const checkSession = async() => {
            const { data } = await supabase.auth.getSession();
            if(data.session == null) {
                navigate('/authentication')
            }
        }
        checkSession();
    }, [])

    const [messages, setMessages] = useState([]); // Crea un estado para almacenar los mensajes

    async function fetchData() {
        try {
            const { data, error } = await supabase
                .from('contactmessages')
                .select('')
                .eq('visibility', true)
            if (error) {
                console.error('Error fetching data:', error);
            } else {
                setMessages(data); // Actualiza el estado con los datos recuperados
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async function deleteDataItem(identifier) {
        try {
            const { data, error } = await supabase
                .from('contactmessages')
                .update({
                    visibility: false
                })
                .eq('id', identifier)
        } catch (err) {
            alert(err)
        }
    }

    const signOutSession = async(e) => {
        e.preventDefault();
        try {
            const { error } = await supabase.auth.signOut()
            navigate('/authentication')
        } catch(err) {
            console.log(err)
        }
    }

    fetchData();

    useEffect(() => {
        fetchData(); // Llama a fetchData al montar el componente
    }, []); // El array vacío asegura que se ejecute solo una vez al montar

    return (
        <div>
            <h2>Hola Dash</h2>
            {messages.length > 0 ? (
                <ul className='dash__data'>
                    {messages.map((message) => (
                        <li className='dash__data--item' key={message.id}>
                            <div>
                                <p>{message.fullname}</p>
                                <p>{message.emaildirection}</p>
                            </div>
                            <div>
                                <p>{message.emailsubject}</p>
                            </div>
                            <button onClick={() => { deleteDataItem(message.id) }}>Delete</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No hay mensajes.</p>
            )}
            <button onClick={signOutSession}>Log Out</button>
        </div>
    );
}

export default Dash