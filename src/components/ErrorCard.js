import React   from "react";



const ErrorCard = ({message}) =>{
    return(
        <div className="error">
            {message}
        </div>
    );

}

export default ErrorCard;