import './components.css';

function Button({ href, children, download=false }) {

	let href_value;

	if(download === true) { href_value = href; }
	
	return(
		<div>
			<a href={href} download={href_value} className="button">{children}</a>
		</div>
	)
}

export default Button;
