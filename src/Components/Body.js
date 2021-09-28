import React, {useState, useEffect} from 'react';

import p from '../Images/product-1.jpg';

require('dotenv').config();

function Body(props) {
    // Structure to hold API response
    const [data, setData] = useState([]);

    // Filter the data by key words e.g. exclusive only
    const [filteredData, setFilteredData] = useState([]);
    
    // Final data array post sorting the filtered data
    const [sortedData, setsortedData] = useState([]);

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
                setsortedData(json);
                console.log(json);
            }
        };

        req.open("GET", "https://api.jsonbin.io/b/5e9fc4a82940c704e1dc7893", true);
        req.setRequestHeader("X-Master-Key", process.env.REACT_APP_PRODUCTS_API_KEY);
        req.send();
        
        setLoading(false);
    }

    // Note sorting data by latest just returns the original data array (sort by index)
    const sortData = (sort) => {
        switch(sort){
            case "Alphabet":
                const filteredByAlphabet = [].concat(data).sort((a,b) => a.productName > b.productName ? 1: -1);
                setsortedData(filteredByAlphabet);
                break;
            case "Price asc":
                const filteredByPriceAsc = [].concat(data).sort((a,b) => a.price > b.price ? 1 : -1);
                setsortedData(filteredByPriceAsc);
                break;
            case "Price dsc":
                const filteredByPriceDsc = [].concat(data).sort((a,b) => a.price < b.price ? 1 : -1);
                setsortedData(filteredByPriceDsc);
                break;
            default:
                setsortedData(data);
                break;
        }
    }

    
    return (
        <div>
            {loading ? <h1>"Please wait while we load..."</h1> :
                <div className="body-container">
                    <div className="body-header">
                        <h1>WOMEN'S TOPS</h1>
                        <p>Products ({data.length})</p>
                    </div>
                    <div className="body-sort">
                        <div className="row">
                            <h5 className="card-title">Sort by: </h5>
                            <select className="selector" onChange={ val => sortData(val.target.value)}>
                                <option value="">Latest</option>
                                <option value="Alphabet">Alphabetical</option>
                                <option value="Price asc">Price (low to high)</option>
                                <option value="Price dsc">Price (high to low)</option>
                            </select>
                        </div>
                        <div className="row">
                            <h5 className="card-title">Filter by: </h5>
                            <button className="btn btn-primary button-filter">On Sale</button>
                            <button className="btn btn-primary button-filter">Exclusive</button>
                        </div>
                    </div>
                    <div className="grid">
                        {sortedData.map((item) => {
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