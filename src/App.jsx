import ReactDOM from 'react-dom/client';
import ThemeSwitcher from './components/ThemeSwitcher';
import "@assets/styles/styles.css";
import Header from './layouts/header';
import Footer from './layouts/footer';

function App() {
	return (
    <div className='App'>
      <Header />
      <h2>Something</h2>
      <Footer />
	  </div>
	)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <App /> )
