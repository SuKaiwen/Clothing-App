import React, {useState, useEffect} from 'react';

import p from '../Images/product-1.jpg';

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
                <div className="body-container">
                    <div className="body-header">
                        <h1>WOMEN'S TOPS</h1>
                        <p>Products ({data.length})</p>
                    </div>
                    <div className="grid">
                        {data.map((item) => {
                            return (
                                <div className="grid-card">
                                    <img src={ require('../Images/'+item.productImage).default } alt={item.productImage} />
                                    <div className="grid-card-body">
                                        <div className="card-top">
                                            <h1 className="card-title">{item.productName}</h1>
                                            <p className="price-text">{item.price}</p>
                                        </div>
                                        <div className="card-bottom">
                                            <div className="product-sizes">
                                                {item.size.map((sizes) => {
                                                    return (
                                                        <p className="sizes-text badge badge-primary">{sizes}</p>
                                                    )
                                                })}
                                            </div>
                                            <button className="btn btn-success sizes-text">Add to Cart</button>
                                        </div>
                                        
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