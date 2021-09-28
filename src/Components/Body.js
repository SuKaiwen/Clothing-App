import React, {useState, useEffect} from 'react';

require('dotenv').config();

function Body(props) {
    // Structure to hold API response
    const [data, setData] = useState([]);

    // Boolean to show loading animation while we fetch data from API 
    const [loading, setLoading] = useState(true);

    // Get products on first load
    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = () => {
        let req = new XMLHttpRequest();

        req.onreadystatechange = () => {
            if (req.readyState === XMLHttpRequest.DONE) {
                const response = req.responseText;
                setData(response);
                console.log(req.responseText);
            }
        };

        req.open("GET", "https://api.jsonbin.io/b/5e9fc4a82940c704e1dc7893", true);
        req.setRequestHeader("X-Master-Key", process.env.REACT_APP_PRODUCTS_API_KEY);
        req.send();
        
        setLoading(false);
    }

    return (
        <div>
            {loading ? <h1>"Please wait while we load..."</h1> :
                <div>
                    <h1>Women's Clothing</h1>
                    <h1>{data}</h1>
                </div>
            }
            
        </div>
    );
}

export default Body;