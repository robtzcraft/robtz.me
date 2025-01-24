import './footer.css';
import Button from '../../Components/Button.jsx';

function Footer() {
	return(
		<div>
			<div className="footer">
				<h2 className="footer__message">Lets build your<br />project together</h2>
				<Button
					className = "footer__button"
					href="#"
					children="Get in touch!"
				/>
				<div className="footer__page__message">
					<p>I've created this page using Figma, React and many hours... feel free to view this project on github!</p>
					<p>2025</p>
				</div>
			</div>
		</div>
	)
}

export default Footer;
