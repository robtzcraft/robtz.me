import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ErrorLogo from '@public/404_error.svg';

function Error404() {
    useEffect(() => {
        document.title = "404";
    }, []);
    const navigate = useNavigate();
    return (
        <div className="errorPage">
            <div className="errorPage__card">
                <img src={ErrorLogo} />
                <p className="errorPage__cardBodyTitle">Oops... page not found</p>
                <p className="errorPage__cardBodyText">Actually... you don't suppose to be here!</p>
                <p className="errorPage__cardBodySignature">-robtz</p>
                <button className="button" onClick={() => navigate('/')}>Go Home</button>
            </div>
        </div>
    )
}

export default Error404;
