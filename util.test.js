const { sortData, filterData} = require('./utils');

test('Sort data 1 (ALL): Should return original object in original ordering', () => {
    const result = sortData("All", [
        {
            productName:"White shirt",
            price:"$10.00"
        },
        {
            productName:"Black shirt",
            price:"$15.00"
        },
        {
            productName:"Red shirt",
            price:"$5.00"
        }
    ]);
    expect(result).toStrictEqual(
        [
            "All",
            [
                {
                    productName:"White shirt",
                    price:"$10.00"
                },
                {
                    productName:"Black shirt",
                    price:"$15.00"
                },
                {
                    productName:"Red shirt",
                    price:"$5.00"
                }
            ]
        ]
    )
});

test('Sort data 2 (ALPHABET): Should return object in alphabetical ordering', () => {
    const result = sortData("Alphabet", [
        {
            productName:"White shirt",
            price:"$10.00"
        },
        {
            productName:"Black shirt",
            price:"$15.00"
        },
        {
            productName:"Red shirt",
            price:"$5.00"
        }
    ]);
    expect(result).toStrictEqual(
        [
            "Alphabet",
            [
                {
                    productName:"Black shirt",
                    price:"$15.00"
                },
                {
                    productName:"Red shirt",
                    price:"$5.00"
                },
                {
                    productName:"White shirt",
                    price:"$10.00"
                }
            ]
        ]
    )
});

test('Sort data 3 (ALPHABET same starting letter): Should return object in alphabetical ordering', () => {
    const result = sortData("Alphabet", [
        {
            productName:"White shirt",
            price:"$10.00"
        },
        {
            productName:"Black shirt",
            price:"$15.00"
        },
        {
            productName:"Red shirt",
            price:"$5.00"
        },
        {
            productName:"Whale shirt",
            price:"$20.00"
        },
        {
            productName:"Reading shirt",
            price:"$25.00"
        }
    ]);
    expect(result).toStrictEqual(
        [
            "Alphabet",
            [
                {
                    productName:"Black shirt",
                    price:"$15.00"
                },
                {
                    productName:"Reading shirt",
                    price:"$25.00"
                },
                {
                    productName:"Red shirt",
                    price:"$5.00"
                },
                {
                    productName:"Whale shirt",
                    price:"$20.00"
                },
                {
                    productName:"White shirt",
                    price:"$10.00"
                }
            ]
        ]
    )
});

test('Sort data 4 (PRICE ASC): Should return object in price low to high', () => {
    const result = sortData("Price asc", [
        {
            productName:"White shirt",
            price:"$10.00"
        },
        {
            productName:"Black shirt",
            price:"$15.00"
        },
        {
            productName:"Red shirt",
            price:"$5.00"
        }
    ]);
    expect(result).toStrictEqual(
        [
            "Price asc",
            [
                {
                    productName:"Red shirt",
                    price:"$5.00"
                },
                {
                    productName:"White shirt",
                    price:"$10.00"
                },
                {
                    productName:"Black shirt",
                    price:"$15.00"
                }
            ]
        ]
    )
});


test('Sort data 5 (PRICE ASC with decimals): Should return object in price low to high', () => {
    const result = sortData("Price asc", [
        {
            productName:"White shirt",
            price:"$10.99"
        },
        {
            productName:"Black shirt",
            price:"$15.11"
        },
        {
            productName:"Red shirt",
            price:"$5.25"
        },
        {
            productName:"Purple shirt",
            price:"$5.75"
        }
    ]);
    expect(result).toStrictEqual(
        [
            "Price asc",
            [
                {
                    productName:"Red shirt",
                    price:"$5.25"
                },
                {
                    productName:"Purple shirt",
                    price:"$5.75"
                },
                {
                    productName:"White shirt",
                    price:"$10.99"
                },
                {
                    productName:"Black shirt",
                    price:"$15.11"
                }
            ]
        ]
    )
});


test('Sort data 6 (PRICE ASC with alot of products): Should return object in price low to high', () => {
    const result = sortData("Price asc", [
        {
            productName:"White shirt",
            price:"$10.99"
        },
        {
            productName:"Black shirt",
            price:"$15.11"
        },
        {
            productName:"Red shirt",
            price:"$5.25"
        },
        {
            productName:"Purple shirt",
            price:"$5.75"
        },
        {
            productName:"Blue shirt",
            price:"$99.99"
        },
        {
            productName:"Yellow shirt",
            price:"$17.50"
        },
        {
            productName:"Grey shirt",
            price:"$25.25"
        },
        {
            productName:"Gold shirt",
            price:"$75.75"
        },
        {
            productName:"Special shirt",
            price:"$1115.11"
        },
        {
            productName:"Leather shirt",
            price:"$110.99"
        }
    ]);
    expect(result).toStrictEqual(
        [
            "Price asc",
            [
                {
                    productName:"Red shirt",
                    price:"$5.25"
                },
                {
                    productName:"Purple shirt",
                    price:"$5.75"
                },
                {
                    productName:"White shirt",
                    price:"$10.99"
                },
                {
                    productName:"Black shirt",
                    price:"$15.11"
                },
                {
                    productName:"Yellow shirt",
                    price:"$17.50"
                },
                {
                    productName:"Grey shirt",
                    price:"$25.25"
                },
                {
                    productName:"Gold shirt",
                    price:"$75.75"
                },
                {
                    productName:"Blue shirt",
                    price:"$99.99"
                },
                {
                    productName:"Leather shirt",
                    price:"$110.99"
                },
                {
                    productName:"Special shirt",
                    price:"$1115.11"
                }
            ]
        ]
    )
});

test('Sort data 7 (PRICE ASC with no data): Should return empty array', () => {
    const result = sortData("Price asc", [
        
    ]);
    expect(result).toStrictEqual(
        [
            "Price asc",
            [
                
            ]
        ]
    )
});

test('Sort data 8 (PRICE DSC): Should return object in price high to low', () => {
    const result = sortData("Price dsc", [
        {
            productName:"White shirt",
            price:"$10.00"
        },
        {
            productName:"Black shirt",
            price:"$15.00"
        },
        {
            productName:"Red shirt",
            price:"$5.00"
        }
    ]);
    expect(result).toStrictEqual(
        [
            "Price dsc",
            [
                {
                    productName:"Black shirt",
                    price:"$15.00"
                },
                {
                    productName:"White shirt",
                    price:"$10.00"
                },
                {
                    productName:"Red shirt",
                    price:"$5.00"
                }
            ]
        ]
    )
});

test('Sort data 9 (PRICE DSC with decimals): Should return object in price high to low', () => {
    const result = sortData("Price dsc", [
        {
            productName:"White shirt",
            price:"$10.99"
        },
        {
            productName:"Black shirt",
            price:"$15.11"
        },
        {
            productName:"Red shirt",
            price:"$5.25"
        },
        {
            productName:"Purple shirt",
            price:"$5.75"
        },
        {
            productName:"Rabbit shirt",
            price:"$9.25"
        },
        {
            productName:"Cat shirt",
            price:"$5.76"
        }
    ]);
    expect(result).toStrictEqual(
        [
            "Price dsc",
            [
                {
                    productName:"Black shirt",
                    price:"$15.11"
                },
                {
                    productName:"White shirt",
                    price:"$10.99"
                },
                {
                    productName:"Rabbit shirt",
                    price:"$9.25"
                },
                {
                    productName:"Cat shirt",
                    price:"$5.76"
                },
                {
                    productName:"Purple shirt",
                    price:"$5.75"
                },
                {
                    productName:"Red shirt",
                    price:"$5.25"
                }
            ]
        ]
    )
});

test('Sort data 10 (PRICE DSC with alot of products): Should return object in price high to low', () => {
    const result = sortData("Price dsc", [
        {
            productName:"White shirt",
            price:"$10.99"
        },
        {
            productName:"Black shirt",
            price:"$15.11"
        },
        {
            productName:"Red shirt",
            price:"$5.25"
        },
        {
            productName:"Purple shirt",
            price:"$5.75"
        },
        {
            productName:"Blue shirt",
            price:"$99.99"
        },
        {
            productName:"Yellow shirt",
            price:"$17.50"
        },
        {
            productName:"Grey shirt",
            price:"$25.25"
        },
        {
            productName:"Gold shirt",
            price:"$75.75"
        },
        {
            productName:"Special shirt",
            price:"$1115.11"
        },
        {
            productName:"Leather shirt",
            price:"$110.99"
        }
    ]);
    expect(result).toStrictEqual(
        [
            "Price dsc",
            [
                {
                    productName:"Special shirt",
                    price:"$1115.11"
                },
                {
                    productName:"Leather shirt",
                    price:"$110.99"
                },
                {
                    productName:"Blue shirt",
                    price:"$99.99"
                },
                {
                    productName:"Gold shirt",
                    price:"$75.75"
                },
                {
                    productName:"Grey shirt",
                    price:"$25.25"
                },
                {
                    productName:"Yellow shirt",
                    price:"$17.50"
                },
                {
                    productName:"Black shirt",
                    price:"$15.11"
                },
                {
                    productName:"White shirt",
                    price:"$10.99"
                },
                {
                    productName:"Purple shirt",
                    price:"$5.75"
                },
                {
                    productName:"Red shirt",
                    price:"$5.25"
                }
            ]
        ]
    )
});

test('Sort data 11 (PRICE DSC with no data): Should return empty array', () => {
    const result = sortData("Price dsc", [
        
    ]);
    expect(result).toStrictEqual(
        [
            "Price dsc",
            [
                
            ]
        ]
    )
});

test('Sort data 12 (Invalid Sort): Should return original array in original format as well as change sort value to All', () => {
    const result = sortData("How heavy it is...", [
        {
            productName:"White shirt",
            price:"$10.00"
        },
        {
            productName:"Black shirt",
            price:"$15.00"
        },
        {
            productName:"Red shirt",
            price:"$5.00"
        }
    ]);
    expect(result).toStrictEqual(
        [
            "All",
            [
                {
                    productName:"White shirt",
                    price:"$10.00"
                },
                {
                    productName:"Black shirt",
                    price:"$15.00"
                },
                {
                    productName:"Red shirt",
                    price:"$5.00"
                }
            ]
        ]
    )
});

test('Filter data 1 (ALL): Should return original array in original and reset select value to latest', () => {
    const result = filterData("All", [
        {
            productName:"White shirt",
            price:"$10.00"
        },
        {
            productName:"Black shirt",
            price:"$15.00"
        },
        {
            productName:"Red shirt",
            price:"$5.00"
        }
    ]);
    expect(result).toStrictEqual(
        [
            "Latest",
            "All",
            [
                {
                    productName:"White shirt",
                    price:"$10.00"
                },
                {
                    productName:"Black shirt",
                    price:"$15.00"
                },
                {
                    productName:"Red shirt",
                    price:"$5.00"
                }
            ]
        ]
    )
});

test('Filter data 2 (SALE): Should only return all items that are on sale', () => {
    const result = filterData("Sale", [
        {
            productName:"White shirt",
            price:"$10.00",
            isSale: true
        },
        {
            productName:"Black shirt",
            price:"$15.00",
            isSale: true
        },
        {
            productName:"Red shirt",
            price:"$5.00",
            isSale: false
        },
        {
            productName:"Reading shirt",
            price:"$25.00",
            isSale: false
        },
        {
            productName:"Sale shirt",
            price:"$25.00",
            isSale: true
        }
    ]);
    expect(result).toStrictEqual(
        [
            "Latest",
            "Sale",
            [
                {
                    productName:"White shirt",
                    price:"$10.00",
                    isSale: true
                },
                {
                    productName:"Black shirt",
                    price:"$15.00",
                    isSale: true
                },
                {
                    productName:"Sale shirt",
                    price:"$25.00",
                    isSale: true
                }
            ]
        ]
    )
});

test('Filter data 3 (SALE no items): Should return empty array', () => {
    const result = filterData("Sale", [
        {
            productName:"White shirt",
            price:"$10.00",
            isSale: false
        },
        {
            productName:"Black shirt",
            price:"$15.00",
            isSale: false
        },
        {
            productName:"Red shirt",
            price:"$5.00",
            isSale: false
        },
        {
            productName:"Reading shirt",
            price:"$25.00",
            isSale: false
        },
        {
            productName:"Sale shirt",
            price:"$25.00",
            isSale: false
        }
    ]);
    expect(result).toStrictEqual(
        [
            "Latest",
            "Sale",
            [
        
            ]
        ]
    )
});

test('Filter data 4 (EXCLUSIVE): Should only return all items that are exclusive', () => {
    const result = filterData("Exclusive", [
        {
            productName:"White shirt",
            price:"$10.00",
            isExclusive: false
        },
        {
            productName:"Black shirt",
            price:"$15.00",
            isExclusive: true
        },
        {
            productName:"Red shirt",
            price:"$5.00",
            isExclusive: false
        },
        {
            productName:"Reading shirt",
            price:"$25.00",
            isExclusive: false
        },
        {
            productName:"Sale shirt",
            price:"$25.00",
            isExclusive: false
        }
    ]);
    expect(result).toStrictEqual(
        [
            "Latest",
            "Exclusive",
            [
                {
                    productName:"Black shirt",
                    price:"$15.00",
                    isExclusive: true
                }
            ]
        ]
    )
});


test('Filter data 5 (EXCLUSIVE no items): Should only empty array', () => {
    const result = filterData("Exclusive", [
        {
            productName:"White shirt",
            price:"$10.00",
            isExclusive: false
        },
        {
            productName:"Black shirt",
            price:"$15.00",
            isExclusive: false
        },
        {
            productName:"Red shirt",
            price:"$5.00",
            isExclusive: false
        },
        {
            productName:"Reading shirt",
            price:"$25.00",
            isExclusive: false
        },
        {
            productName:"Sale shirt",
            price:"$25.00",
            isExclusive: false
        }
    ]);
    expect(result).toStrictEqual(
        [
            "Latest",
            "Exclusive",
            [
                
            ]
        ]
    )
});

test('Filter data 6 (EXCLUSIVE AND SALE): Should only return all items that are exclusive and on sale', () => {
    const result = filterData("Both", [
        {
            productName:"White shirt",
            price:"$10.00",
            isExclusive: false,
            isSale: true,
        },
        {
            productName:"Black shirt",
            price:"$15.00",
            isExclusive: true,
            isSale: true
        },
        {
            productName:"Red shirt",
            price:"$5.00",
            isExclusive: false,
            isSale: false
        },
        {
            productName:"Reading shirt",
            price:"$25.00",
            isExclusive: true,
            isSale: true
        },
        {
            productName:"Sale shirt",
            price:"$25.00",
            isExclusive: false,
            isSale: true
        }
    ]);
    expect(result).toStrictEqual(
        [
            "Latest",
            "Both",
            [
                {
                    productName:"Black shirt",
                    price:"$15.00",
                    isExclusive: true,
                    isSale: true
                },
                {
                    productName:"Reading shirt",
                    price:"$25.00",
                    isExclusive: true,
                    isSale: true
                }
            ]
        ]
    )
});

test('Filter data 7 (EXCLUSIVE AND SALE no items): Should only empty array', () => {
    const result = filterData("Both", [
        {
            productName:"White shirt",
            price:"$10.00",
            isExclusive: false,
            isSale: true
        },
        {
            productName:"Black shirt",
            price:"$15.00",
            isExclusive: true,
            isSale: false
        },
        {
            productName:"Red shirt",
            price:"$5.00",
            isExclusive: false,
            isSale: true
        },
        {
            productName:"Reading shirt",
            price:"$25.00",
            isExclusive: false,
            isSale: false
        },
        {
            productName:"Sale shirt",
            price:"$25.00",
            isExclusive: false,
            isSale: true
        }
    ]);
    expect(result).toStrictEqual(
        [
            "Latest",
            "Both",
            [
                
            ]
        ]
    )
});

test('Filter data 8 (SIZE XS): Should only return all items that contain size of XS', () => {
    const result = filterData("Size XS", [
        {
            productName:"White shirt",
            price:"$10.00",
            isExclusive: false,
            isSale: true,
            size: ["XS", "M", "L"]
        },
        {
            productName:"Black shirt",
            price:"$15.00",
            isExclusive: true,
            isSale: true,
            size: ["S", "M", "L"]
        },
        {
            productName:"Red shirt",
            price:"$5.00",
            isExclusive: false,
            isSale: false,
            size: ["XS", "L", "XL"]
        }
    ]);
    expect(result).toStrictEqual(
        [
            "Latest",
            "Size XS",
            [
                {
                    productName:"White shirt",
                    price:"$10.00",
                    isExclusive: false,
                    isSale: true,
                    size: ["XS", "M", "L"]
                },
                {
                    productName:"Red shirt",
                    price:"$5.00",
                    isExclusive: false,
                    isSale: false,
                    size: ["XS", "L", "XL"]
                }
            ]
        ]
    )
});

test('Filter data 9 (SIZE S): Should only return all items that contain size of S', () => {
    const result = filterData("Size S", [
        {
            productName:"White shirt",
            price:"$10.00",
            isExclusive: false,
            isSale: true,
            size: ["XS", "M", "L"]
        },
        {
            productName:"Black shirt",
            price:"$15.00",
            isExclusive: true,
            isSale: true,
            size: ["S", "M", "L"]
        },
        {
            productName:"Red shirt",
            price:"$5.00",
            isExclusive: false,
            isSale: false,
            size: ["XS", "L", "XL"]
        }
    ]);
    expect(result).toStrictEqual(
        [
            "Latest",
            "Size S",
            [
                {
                    productName:"Black shirt",
                    price:"$15.00",
                    isExclusive: true,
                    isSale: true,
                    size: ["S", "M", "L"]
                }
            ]
        ]
    )
});

test('Filter data 10 (SIZE M): Should only return all items that contain size of M', () => {
    const result = filterData("Size M", [
        {
            productName:"White shirt",
            price:"$10.00",
            isExclusive: false,
            isSale: true,
            size: ["XS", "M", "L"]
        },
        {
            productName:"Black shirt",
            price:"$15.00",
            isExclusive: true,
            isSale: true,
            size: ["S", "M", "L"]
        },
        {
            productName:"Red shirt",
            price:"$5.00",
            isExclusive: false,
            isSale: false,
            size: ["XS", "L", "XL"]
        }
    ]);
    expect(result).toStrictEqual(
        [
            "Latest",
            "Size M",
            [
                {
                    productName:"White shirt",
                    price:"$10.00",
                    isExclusive: false,
                    isSale: true,
                    size: ["XS", "M", "L"]
                },
                {
                    productName:"Black shirt",
                    price:"$15.00",
                    isExclusive: true,
                    isSale: true,
                    size: ["S", "M", "L"]
                }
            ]
        ]
    )
});


test('Filter data 11 (SIZE L): Should only return all items that contain size of L', () => {
    const result = filterData("Size L", [
        {
            productName:"White shirt",
            price:"$10.00",
            isExclusive: false,
            isSale: true,
            size: ["XS", "M"]
        },
        {
            productName:"Black shirt",
            price:"$15.00",
            isExclusive: true,
            isSale: true,
            size: ["S", "M", "L"]
        },
        {
            productName:"Red shirt",
            price:"$5.00",
            isExclusive: false,
            isSale: false,
            size: ["XS", "L", "XL"]
        }
    ]);
    expect(result).toStrictEqual(
        [
            "Latest",
            "Size L",
            [
                {
                    productName:"Black shirt",
                    price:"$15.00",
                    isExclusive: true,
                    isSale: true,
                    size: ["S", "M", "L"]
                },
                {
                    productName:"Red shirt",
                    price:"$5.00",
                    isExclusive: false,
                    isSale: false,
                    size: ["XS", "L", "XL"]
                }
            ]
        ]
    )
});

test('Filter data 12 (SIZE XL): Should only return all items that contain size of XL', () => {
    const result = filterData("Size XL", [
        {
            productName:"White shirt",
            price:"$10.00",
            isExclusive: false,
            isSale: true,
            size: ["XS", "M"]
        },
        {
            productName:"Black shirt",
            price:"$15.00",
            isExclusive: true,
            isSale: true,
            size: ["S", "M", "L"]
        },
        {
            productName:"Red shirt",
            price:"$5.00",
            isExclusive: false,
            isSale: false,
            size: ["XS", "L", "XL"]
        }
    ]);
    expect(result).toStrictEqual(
        [
            "Latest",
            "Size XL",
            [
                {
                    productName:"Red shirt",
                    price:"$5.00",
                    isExclusive: false,
                    isSale: false,
                    size: ["XS", "L", "XL"]
                }
            ]
        ]
    )
});

test('Filter data 13 (SIZE no products): Should only return empty array', () => {
    const result = filterData("Size XL", [
        {
            productName:"White shirt",
            price:"$10.00",
            isExclusive: false,
            isSale: true,
            size: ["XS", "M"]
        },
        {
            productName:"Black shirt",
            price:"$15.00",
            isExclusive: true,
            isSale: true,
            size: ["S", "M", "L"]
        },
        {
            productName:"Red shirt",
            price:"$5.00",
            isExclusive: false,
            isSale: false,
            size: ["XS", "L"]
        }
    ]);
    expect(result).toStrictEqual(
        [
            "Latest",
            "Size XL",
            [
               
            ]
        ]
    )
});

test('Integration sort filtered data 1 (ALPHABET + SALE): Should only return items that are on sale in alphabeticall order', () => {
    const filtered = filterData("Sale", [
        {
            productName:"White shirt",
            price:"$10.00",
            isExclusive: false,
            isSale: true,
            size: ["XS", "M"]
        },
        {
            productName:"Black shirt",
            price:"$15.00",
            isExclusive: true,
            isSale: true,
            size: ["S", "M", "L"]
        },
        {
            productName:"Red shirt",
            price:"$5.00",
            isExclusive: false,
            isSale: false,
            size: ["XS", "L"]
        },
        {
            productName:"Yellow shirt",
            price:"$25.00",
            isExclusive: false,
            isSale: true,
            size: ["XS", "L"]
        }
    ]);
    const result = sortData("Alphabet", filtered[2]);
    expect(result).toStrictEqual(
        [
            "Alphabet",
            [ 
                {
                    productName:"Black shirt",
                    price:"$15.00",
                    isExclusive: true,
                    isSale: true,
                    size: ["S", "M", "L"]
                },
                {
                    productName:"White shirt",
                    price:"$10.00",
                    isExclusive: false,
                    isSale: true,
                    size: ["XS", "M"]
                },
                {
                    productName:"Yellow shirt",
                    price:"$25.00",
                    isExclusive: false,
                    isSale: true,
                    size: ["XS", "L"]
                }  
            ]
        ]
    )
});

test('Integration sort filtered data 2 (EXCLUSIVE and PRICE ASC): Should only return items that are exclusive ordering from price low to high', () => {
    const filtered = filterData("Exclusive", [
        {
            productName:"White shirt",
            price:"$10.00",
            isExclusive: false,
            isSale: true,
            size: ["XS", "M"]
        },
        {
            productName:"Black shirt",
            price:"$15.00",
            isExclusive: true,
            isSale: true,
            size: ["S", "M", "L"]
        },
        {
            productName:"Red shirt",
            price:"$5.00",
            isExclusive: true,
            isSale: false,
            size: ["XS", "L"]
        },
        {
            productName:"Yellow shirt",
            price:"$25.00",
            isExclusive: false,
            isSale: true,
            size: ["XS", "L"]
        }
    ]);
    const result = sortData("Price asc", filtered[2]);
    expect(result).toStrictEqual(
        [
            "Price asc",
            [ 
                {
                    productName:"Red shirt",
                    price:"$5.00",
                    isExclusive: true,
                    isSale: false,
                    size: ["XS", "L"]
                },
                {
                    productName:"Black shirt",
                    price:"$15.00",
                    isExclusive: true,
                    isSale: true,
                    size: ["S", "M", "L"]
                }
            ]
        ]
    )
});

test('Integration sort filtered data 3 (EXCLUSIVE and SALE and PRICE DSC): Should only return items that are exclusive and on sale ordering from price high to low', () => {
    const filtered = filterData("Both", [
        {
            productName:"White shirt",
            price:"$10.00",
            isExclusive: false,
            isSale: true,
            size: ["XS", "M"]
        },
        {
            productName:"Black shirt",
            price:"$15.00",
            isExclusive: true,
            isSale: true,
            size: ["S", "M", "L"]
        },
        {
            productName:"Red shirt",
            price:"$5.00",
            isExclusive: true,
            isSale: false,
            size: ["XS", "L"]
        },
        {
            productName:"Yellow shirt",
            price:"$25.00",
            isExclusive: true,
            isSale: true,
            size: ["XS", "L"]
        }
    ]);
    const result = sortData("Price dsc", filtered[2]);
    expect(result).toStrictEqual(
        [
            "Price dsc",
            [ 
                
                {
                    productName:"Yellow shirt",
                    price:"$25.00",
                    isExclusive: true,
                    isSale: true,
                    size: ["XS", "L"]
                },
                {
                    productName:"Black shirt",
                    price:"$15.00",
                    isExclusive: true,
                    isSale: true,
                    size: ["S", "M", "L"]
                }
            ]
        ]
    )
});

test('Integration sort filtered data 4 (SIZE M and PRICE ASC): Should only return items that include size M from price low to high', () => {
    const filtered = filterData("Size M", [
        {
            productName:"White shirt",
            price:"$10.00",
            isExclusive: false,
            isSale: true,
            size: ["XS", "M"]
        },
        {
            productName:"Black shirt",
            price:"$15.00",
            isExclusive: true,
            isSale: true,
            size: ["S", "M", "L"]
        },
        {
            productName:"Red shirt",
            price:"$5.00",
            isExclusive: true,
            isSale: false,
            size: ["XS", "L"]
        },
        {
            productName:"Yellow shirt",
            price:"$25.00",
            isExclusive: true,
            isSale: true,
            size: ["XS", "L"]
        }
    ]);
    const result = sortData("Price asc", filtered[2]);
    expect(result).toStrictEqual(
        [
            "Price asc",
            [ 
                {
                    productName:"White shirt",
                    price:"$10.00",
                    isExclusive: false,
                    isSale: true,
                    size: ["XS", "M"]
                },
                {
                    productName:"Black shirt",
                    price:"$15.00",
                    isExclusive: true,
                    isSale: true,
                    size: ["S", "M", "L"]
                }
            ]
        ]
    )
});

test('Integration sort filtered data 5 (No item from filter): Should only return empty array as no items of that filter', () => {
    const filtered = filterData("Size M", [
        {
            productName:"White shirt",
            price:"$10.00",
            isExclusive: false,
            isSale: true,
            size: ["XS", "XL"]
        },
        {
            productName:"Black shirt",
            price:"$15.00",
            isExclusive: true,
            isSale: true,
            size: ["XS", "S", "L"]
        },
        {
            productName:"Red shirt",
            price:"$5.00",
            isExclusive: true,
            isSale: false,
            size: ["XS", "L"]
        },
        {
            productName:"Yellow shirt",
            price:"$25.00",
            isExclusive: true,
            isSale: true,
            size: ["XS", "L"]
        }
    ]);
    const result = sortData("Price asc", filtered[2]);
    expect(result).toStrictEqual(
        [
            "Price asc",
            [ 
                
            ]
        ]
    )
});
