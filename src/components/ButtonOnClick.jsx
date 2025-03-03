import Button from "./Button";

function ButtonOnClick({ onClick, ...props }){
  const handleClick = (event) => {
    event.preventDefault();
    onClick(event)
  };

  return <Button {...props} onClick={handleClick} />;
}

export default ButtonOnClick;
