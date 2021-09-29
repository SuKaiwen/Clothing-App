import React, {useState, useEffect} from 'react';
import Header from '../Images/header.jpg';

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

    // Message to display if something goes wrong with API call
    const [errorMessage, setErrorMessage] = useState("");

    // Get products from API on first load
    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = () => {
        let req = new XMLHttpRequest();

        req.onreadystatechange = () => {
            if (req.readyState === XMLHttpRequest.DONE) {

                // If OK status then store the data by parsing text to JSON file
                if(req.status === 200){
                    var json = JSON.parse(req.responseText);
                    setData(json);
                    setsortedData(json);
                    setFilteredData(json);
                }else{
                    // Else display an error message
                    setErrorMessage("Sorry, something went wrong!");
                }
                setLoading(false);
                console.log(req);
            }
        };

        req.open("GET", "https://api.jsonbin.io/b/5e9fc4a82940c704e1dc7893", true);
        req.setRequestHeader("X-Master-Key", process.env.REACT_APP_PRODUCTS_API_KEY);
        req.send();
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
            case "Both":
                const filterBothData = [].concat(data).filter((item) => item.isSale && item.isExclusive);
                setFilteredData(filterBothData);
                setsortedData(filterBothData);
                break;
            default:
                setFilteredData(data);
                setsortedData(data);
                break;
        }
    }
    
    // First: check if the JSON has loaded: if not display a loading message
    // Second: after displaying data, the user has the options to sort/filter it. Sometimes th
    //         there will be cases where nothing shows e.g. on sale AND exclusive. If so display a
    //         message stating no such data.
    return (
        <div>
            <div className="text-container">
                <img src={Header} className="head-image" alt="Header" />
                <div class="header-text-box">
                    <h1 className="header-text-title">NEW ARRIVALS</h1>
                    <p className="header-text">Check out the new summer catalog...</p>
                    <a href="#shop-items"><button className="btn header-button">SHOP NOW</button></a>
                </div>
            </div>
            {loading ? <div className="error-container"><h1>"Please wait while we load..."</h1></div> :
            <div id="shop-items">
                {(errorMessage.length > 0 ? <div className="error-container"><h1>{errorMessage}</h1></div> : (
                    <div className="body-container">
                        <p>Home / Women / Tops</p>
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
                                    <option value="Both">On Sale and Exclusive</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid">
                            {sortedData.length < 1 ? <h3>No products matching filter terms...</h3> :
                            sortedData.map((item) => {
                                return (
                                    <div className="grid-card">
                                        <img src={ require('../Images/'+item.productImage).default } alt={item.productImage} />
                                        <div className="special-tag">
                                            {item.isSale ? <p className="special-text badge badge-danger">On Sale</p> :
                                            <></>}
                                            {item.isExclusive ? <p className="special-text badge badge-danger">Exclusive</p> :
                                            <></>}
                                        </div>
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
                ))}
            </div>
            }
        </div>
    );
}

export default Body;