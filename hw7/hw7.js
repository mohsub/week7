// step 1

let numbers = [1, 2, 3, 4];

let newNumber = numbers.filter(number => number % 2 !== 0)

console.log(newNumber)

let newNumbers = newNumber.map(number => number * 2)

console.log('newNumbers',newNumbers)

//step 2

function getAjaxData(url, callback) {
    // Create new ajax call with the js function called XMLHttpRequest
    const request = new XMLHttpRequest();
    request.addEventListener('load', () => {
        // This in here is our callback function
        // Check our server responsecode, 200 means ok, success: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes 
        if (request.status === 200) {
            callback(JSON.parse(request.responseText));
        } else {
            console.log('Something is probably wrong with the url');
        }
    });

    request.addEventListener('error', function () {
        console.log('Server error like timeout');
    });

    // initializes a request with an http method
    request.open("GET", url);
    // Sends the request 
    request.send();
}

getAjaxData('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json',(data) => {

    console.log(data)

    const goodMovie = data

    .filter(movie => movie.rating > 7)

    .map(movie => movie.rating)

    console.log(goodMovie)

    console.log('the number of Good movies =' , goodMovie.length)

    const averageMovie = data
    
    .filter(movie => movie.rating >= 4 && movie.rating < 7)

    .map(movie => movie.rating)

    console.log(averageMovie)

    console.log('the number of Average movies =' , averageMovie.length)

    const badMovie = data
    
    .filter(movie => movie.rating < 4)

    .map(movie => movie.rating)

    console.log(badMovie)

    console.log('the number of Bad movies =' , badMovie.length)

    const allMovie = data.map(movie => movie.rating)

    console.log(allMovie)

    const ratingSum = allMovie.reduce((accumulator,value) => accumulator + value ,0)

    console.log(ratingSum)

    //v.

    const eighteenthMovies = data
    
    .filter(movie => movie.year > 1980 && movie.year < 1989)

    .map(movie => movie.year)

    console.log('the number of 80th movies =' , eighteenthMovies.length)






 
})








