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

                // Parse text to json file
                var json = JSON.parse(req.responseText);
                setData(json);
                console.log(json);
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
                    <div className="grid">
                        {data.map((item) => {
                            return (
                                <div className="grid-card">
                                    <h1>{item.productName}</h1>
                                    <p>{item.price}</p>
                                    <p>{item.productImage}</p>
                                    <div className="product-sizes">
                                    {item.size.map((sizes) => {
                                        return (
                                            <p className="sizes-text">{sizes}</p>
                                        )
                                    })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            }
            
        </div>
    );
}

export default Body;