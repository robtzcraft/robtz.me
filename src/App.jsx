import ReactDOM from 'react-dom/client';
import ThemeSwitcher from './components/ThemeSwitcher';
import "@assets/styles/styles.css";
import Header from './layouts/header';

function App() {
	return (
		<>
      <div className='App'>
        <Header />
        <h2>Hello Sir</h2>
        <div className='gg-sun'/>
		  </div>
    </>
	)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <App /> )
