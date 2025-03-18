import './assets/styles/styles.css';
import Sidebar from './layouts/Sidebar';
import PasswordManager from './layouts/PasswordManager';
import { supabase } from '../../src/App';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Dash() {
    const navigate = useNavigate();

    useEffect(() => {
        const checkSession = async () => {
            const { data } = await supabase.auth.getSession();
            if (!data?.session) { // Verifica si data y session existen y si session es null o undefined
                navigate('/authentication');
            }
        };

        checkSession();

        // Configura un listener para los cambios de sesión de Supabase.
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            if (!session) {
                navigate('/authentication');
            }
        });

        // Limpia el listener cuando el componente se desmonta.
        return () => subscription.unsubscribe();

    }, [navigate]); // Agrega navigate como dependencia.

    return (
        <div className='dash'>
            {console.log('Renderizando')}
            <Sidebar />
            <div className='dash__content'>
                <PasswordManager />
            </div>
        </div>
    );
}

export default Dash;