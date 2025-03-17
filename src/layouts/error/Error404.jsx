import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Error404() {
    useEffect(() => {
        document.title = "404";
    }, []);
    const navigate = useNavigate();
    return (
        <div className="errorPage">
            <div className="errorPage__card">
                <p className="errorPage__cardTitle">404!</p>
                <p className="errorPage__cardBody">Oops... page not found</p>
                <p className="errorPage__cardBody">Actually... you don't suppose to be here!</p>
                <button className="errorPage__button" onClick={() => navigate('/')}>Go Home</button>
            </div>
        </div>
    )
}

export default Error404;