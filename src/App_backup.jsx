// import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from '@layouts/header/index.jsx';
import Footer from '@layouts/footer/index.jsx';
import Button from '@components/Button.jsx';
import '@assets/styles/styles.css';

function App() {
	return (
		<div className="App">
			<div className="container">
				<Header /> 
			</div>
			<main>
				<h1>Web Developer with experience on .NET and SpringBoot</h1>
				<p>I create and develop software for companies en many sector</p>
				<Button 
					href="#"
					children="Get in touch"
					download={false}
				/>
			</main>
			<div>
				<h2>About me</h2>
				<p>
					I am Jorge Azuara, a mechatronics enginner with a especialization on software development and robotics.
					I've working with multidisiplinary teams on tech areas and something.
					My personal interest ara playing guitar, bouldering (sometimes), senderism and aeronautics.
				</p>
				<p>Here are a few Technologies I`&apos`ve been working the last year:</p>
				<ul>
					<li>react.js</li>
					<li>spring boot</li>
					<li>asp.net</li>
					<li>DSP (with C/C++)</li>
					<li>PowerPlatform</li>
					<li>tensorflow</li>
				</ul>
				<div>
					<div>
						<h3>Education</h3>
						<p>Mechatronics enginnering</p>
					</div>
					<div>
						<h3>Profesional experience</h3>
						<p>ServiceDesk - Technical Specialist</p>
					</div>
				</div>
			</div>
			<footer className="footer">
				<Footer />	
			</footer>
			<div className="app__footer__message container">
				<p>2025 by Jorge Luis Azuara | Made with react.js</p>
			</div>		
		</div>
	)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <App /> )
