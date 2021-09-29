// Note sorting data by latest just returns the original data array (sort by index)

// Modified code for testing purposes...
exports.sortData = (sort, data) => {
    var selectValue = sort;
    var sortedData = data;
    switch(sort){
        case "Alphabet":
            selectValue = "Alphabet";
            const sortByAlphabet = [].concat(data).sort((a,b) => a.productName > b.productName ? 1: -1);
            sortedData = sortByAlphabet;
            break;
        case "Price asc":
            selectValue = "Price asc";
            const sortByPriceAsc = [].concat(data).sort((a,b) => parseFloat(a.price.split("$")[1]) > parseFloat(b.price.split("$")[1]) ? 1 : -1);
            sortedData = sortByPriceAsc;
            break;
        case "Price dsc":
            selectValue = "Price dsc";
            const sortByPriceDsc = [].concat(data).sort((a,b) => parseFloat(a.price.split("$")[1]) < parseFloat(b.price.split("$")[1]) ? 1 : -1);
            sortedData = sortByPriceDsc;
            break;
        default:
            selectValue = "All";
            sortedData = data;
            break;
    }
    return [selectValue, sortedData];
}

// After each filter we set the sorting option back to Latest
exports.filterData = (filter, data) => {
    var selectValue = "Latest";
    var filterValue = filter;
    var filteredData = data;
    switch(filter){
        case "All":
            filteredData = data;
            break;
        case "Sale":
            var filteredSaleData = [].concat(data).filter((item) => item.isSale);
            return [selectValue, filterValue, filteredSaleData];
        case "Exclusive":
            var filteredExclusiveData = [].concat(data).filter((item) => item.isExclusive);
            return [selectValue, filterValue, filteredExclusiveData];
        case "Both":
            var filteredBothData = [].concat(data).filter((item) => item.isSale && item.isExclusive);
            return [selectValue, filterValue, filteredBothData];
        case "Size XS":
            var filteredSizeXSData = [].concat(data).filter((item) => item.size.includes('XS'));
            return [selectValue, filterValue, filteredSizeXSData];
        case "Size S":
            var filteredSizeSData = [].concat(data).filter((item) => item.size.includes('S'));
            return [selectValue, filterValue, filteredSizeSData];
        case "Size M":
            var filteredSizeMData = [].concat(data).filter((item) => item.size.includes('M'));
            return [selectValue, filterValue, filteredSizeMData];
        case "Size L":
            var filteredSizeLData = [].concat(data).filter((item) => item.size.includes('L'));
            return [selectValue, filterValue, filteredSizeLData];
        case "Size XL":
            var filteredSizeXLData = [].concat(data).filter((item) => item.size.includes('XL'));
            return [selectValue, filterValue, filteredSizeXLData];
        default:
            setFilteredData(data);
            setsortedData(data);
            break;
    }
    return [selectValue, filterValue, filteredData]
}