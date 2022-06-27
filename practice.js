// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];
  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });
  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var count = 0;
  _.each(numbers, function(num) {
    if (num % 5 === 0) {
      count ++;
    }
  });
  return count;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  return _.filter(fruits, function(fruit) {
    return fruit === targetFruit;
  });
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  return _.filter(fruits, function(fruit) {
    return fruit[0] === letter;
  });
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  return _.filter(desserts, function(currentDessert) {
    return currentDessert['type'] === 'cookie';
  });
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  return _.reduce(products, function (memo, product) {
    var value = product['price'].substring(1);
    value = Number.parseFloat(value);
    return value + memo;
  }, 0);
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }

var dessertCategories = function(desserts) {
  var dessertTally = {};
  _.reduce(desserts, function(memo, dessert) {
    var typeOfDessert = dessert.type;
    if (dessertTally[typeOfDessert] === undefined) {
      dessertTally[typeOfDessert] = 1;
    } else {
      dessertTally[typeOfDessert]++;
    }
  }, 0);
  return dessertTally;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!

var ninetiesKid = function(movies) {
  return _.reduce(movies, function(ninetiesMovies, movie) {
    if (movie.releaseYear > 1990 && movie.releaseYear < 2000) {
      ninetiesMovies.push(movie.title);
    }
    return ninetiesMovies;
  }, []);
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  return _.reduce(movies, function(shortMovieExists, movie) {
    if (movie.runtime < timeLimit) {
      shortMovieExists = true;
    }
    return shortMovieExists;
  }, false);
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  _.map(fruits, function(fruit) {
    return fruit.toUpperCase;
  });
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  return _.map(desserts, function(currentDessert) {
    var ingredients = currentDessert.ingredients;
    var hasGluten = _.indexOf(ingredients, 'flour');

    if (hasGluten > -1) {
      currentDessert['glutenFree'] = false;
      return currentDessert;
    } else {
      currentDessert['glutenFree'] = true;
      return currentDessert;
    }
  });
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

  I - array and coupon price as decimals
  O - array of objects with NEW property (SalePrice)
  C - round decimals to two points
  E -
*/

var applyCoupon = function(groceries, coupon) {
  return _.map(groceries, function(item) {
    // find onSale price
    var fullPrice = item.price.substring(1);
    var onSale = fullPrice * (1 - coupon);
    onSale = Math.round(onSale * 100) / 100;
    onSale.toString;
    onSale = '$' + onSale;
    // add onSale property to object
    console.log(item);
    item['salePrice'] = onSale;
    console.log(item);
    return item;
  });
};
