import React from 'react';

require('dotenv').config();

function Body(props) {

    const getProducts = async term => {
        let req = new XMLHttpRequest();

        req.onreadystatechange = () => {
            if (req.readyState === XMLHttpRequest.DONE) {
                console.log(req.responseText);
            }
        };

        req.open("GET", "https://api.jsonbin.io/b/5e9fc4a82940c704e1dc7893", true);
        req.setRequestHeader("X-Master-Key", process.env.REACT_APP_PRODUCTS_API_KEY);
        req.send();
        console.log(process.env.REACT_APP_PRODUCTS_API_KEY);
    }

    return (
        <div>
            <h1>Body</h1>
            <button onClick={getProducts}>Button</button>
        </div>
    );
}

export default Body;