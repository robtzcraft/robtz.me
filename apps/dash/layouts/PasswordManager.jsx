import { useState, useEffect, useCallback } from "react";
import { useRef } from "react";
import { supabase } from "../../../src/App";

function PasswordManager(){

    const inputSearch = useRef()
    const [searchTerm, setSearchTerm] = useState('')

    const [messages, setMessages] = useState([]); // Crea un estado para almacenar los mensajes

    const fetchData = useCallback(async () => {
        try {
            const searchValue = inputSearch.current ? inputSearch.current.value : "";
            const { data, error } = await supabase
                .from('contactmessages')
                .select('')
                .eq('visibility', true)
                .like('emaildirection', `%${inputSearch.current.value}%`);
            if (error) {
                console.error('Error fetching data:', error);
            } else {
                setMessages(data); // Actualiza el estado con los datos recuperados
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }, []);

    async function deleteDataItem(identifier) {
        try {
            const { data, error } = await supabase
                .from('contactmessages')
                .update({
                    visibility: false
                })
                .eq('id', identifier);
            fetchData();
        } catch (err) {
            alert(err)
        }
    }
    
    useEffect(() => {
        fetchData();
    }, [fetchData]);


    const handleSearch = (e) => {
        if(e.key == 'Enter'){
            fetchData();
        }
    }

    return(
        <div>
            <div className="">
                <input ref={inputSearch} type="text" placeholder="Search..." onKeyDown={handleSearch}/>
            </div>
            <div>
                {console.log('Componente renderizandose')}
                <h2>Password Manager</h2>
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
            </div>
        </div>
    )
}

export default PasswordManager;