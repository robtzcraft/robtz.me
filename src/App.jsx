/*
  Loaded pages for routing:
    _home
    _dashLogIn
    _dash
    _error404
*/

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import DashLogin from '../apps/dash/DashLogin';
import Dash from '../apps/dash/Dash';
import Error404 from './layouts/error/Error404';
import Home from './layouts/Home';
import "@assets/styles/styles.css";

// Supabase client object (global)
const supabaseURL = import.meta.env.VITE_SUPABASE_URL;
const supabaseKEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseURL, supabaseKEY);

function App(){
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/authentication" element={<DashLogin />} />
      <Route path="/dash" element={<Dash />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( 
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
