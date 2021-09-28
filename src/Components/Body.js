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

    // State to display current selected sorting option and filter (for CSS purposes)
    const [selectValue, setSelectValue] = useState("Latest");
    const [filterValue, setFilterValue] = useState("All");

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
                setFilteredData(json);
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
        setSelectValue(sort);
        switch(sort){
            case "Alphabet":
                const sortByAlphabet = [].concat(filteredData).sort((a,b) => a.productName > b.productName ? 1: -1);
                setsortedData(sortByAlphabet);
                break;
            case "Price asc":
                const sortByPriceAsc = [].concat(filteredData).sort((a,b) => a.price > b.price ? 1 : -1);
                setsortedData(sortByPriceAsc);
                break;
            case "Price dsc":
                const sortByPriceDsc = [].concat(filteredData).sort((a,b) => a.price < b.price ? 1 : -1);
                setsortedData(sortByPriceDsc);
                break;
            default:
                setsortedData(filteredData);
                break;
        }
    }

    // After each filter we set the sorting option back to Latest
    const filterData = (filter) => {
        setSelectValue("Latest");
        setFilterValue(filter);
        switch(filter){
            case "All":
                setFilteredData(data);
                setsortedData(data);
                break;
            case "Sale":
                const filterSaleData = [].concat(data).filter((item) => item.isSale);
                setFilteredData(filterSaleData);
                setsortedData(filterSaleData);
                break;
            case "Exclusive":
                const filterExclusiveData = [].concat(data).filter((item) => item.isExclusive);
                setFilteredData(filterExclusiveData);
                setsortedData(filterExclusiveData);
                break;
            default:
                setFilteredData(data);
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
                        <h5 className="card-title">Products ({sortedData.length})</h5>
                    </div>
                    <div className="body-sort">
                        <div className="row">
                            <h5 className="card-title">Sort by: </h5>
                            <select value = {selectValue} className="selector" onChange={ val => sortData(val.target.value)}>
                                <option value="">Latest</option>
                                <option value="Alphabet">Alphabetical</option>
                                <option value="Price asc">Price (low to high)</option>
                                <option value="Price dsc">Price (high to low)</option>
                            </select>
                        </div>
                        <div className="row">
                            <h5 className="card-title">Filter by: </h5>
                            <select value = {filterValue} className="selector" onChange={ val => filterData(val.target.value)}>
                                <option value="All">All</option>
                                <option value="Sale">On Sale</option>
                                <option value="Exclusive">Exclusive</option>
                            </select>
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