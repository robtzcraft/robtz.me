import './header.css';
import Button from '../../Components/Button.jsx';

function Header() {
	return (
		<div className="header">
			<p className="logo">Robtzcraft</p>
			<nav className="navbar">
				<a href="./">GitHub</a>
				<a href="./">LinkedIn</a>
				<a href="./">Instagram</a>
			</nav>
			<Button 
				href="public/downloads/CurriculumVitae_AzuaraJorge.pdf"
				children="Download CV"
				download={false}
			/>
		</div>
	)
}

export default Header;
