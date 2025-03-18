import { useState, useEffect, useCallback } from "react";
import { useRef } from "react";
import { supabase } from "../../../src/App";

function PasswordManager(){

    const inputSearch = useRef()

    const [passwords, setPasswords] = useState([]); // Crea un estado para almacenar los mensajes

    const fetchData = useCallback(async () => {
        try {
            const searchValue = inputSearch.current ? inputSearch.current.value : "";
            const { data, error } = await supabase
                .from('passwordmanager')
                .select('')
                .eq('passwordvisibility', true)
                .ilike('passwordtitle', `%${searchValue}%`);
            if (error) {
                console.error('Error fetching data:', error);
            } else {
                setPasswords(data); // Actualiza el estado con los datos recuperados
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }, []);

    async function deleteDataItem(identifier) {
        try {
            const { data, error } = await supabase
                .from('passwordmanager')
                .update({
                    passwordvisibility: false
                })
                .eq('id', identifier);
            if(error) {
                throw error;
            }
            fetchData();
        } catch (err) {
            console.log(err)
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
        <div className="dash__passwordManager">
            <div className="dash__passwordManager--header">
                <input ref={inputSearch} type="text" placeholder="Search..." onKeyDown={handleSearch}/>
            </div>
            <div className="dash__passwordManager--body">
                {console.log('Componente renderizandose')}
                <h2>Password Manager</h2>
                {passwords.length > 0 ? (
                    <ul className='dash__data'>
                        {passwords.map((password) => (
                            <li className='dash__data--item' key={password.id}>
                                <div>
                                    <p>{password.passwordtitle}</p>
                                    <p>{password.passwordvalue}</p>
                                </div>
                                <div>
                                    <p>{password.passwordemail}</p>
                                </div>
                                <button onClick={() => { deleteDataItem(password.id) }}>Delete</button>
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