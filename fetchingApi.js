API_KEY = "YTk1ZTZhOTctNjhmYy00NDI5LWE5YzItZDFiNTM0OTU1NDg5"

fetch(`https://api.napster.com/v2.1/tracks/top?apikey=${API_KEY}`)
    .then((response) => {
        console.log(response.body)
    });