const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
        'X-RapidAPI-Key': '1673859b58msh22ca0430778cb65p1c244fjsn5e68ca46937d'
    }
};

fetch('https://deezerdevs-deezer.p.rapidapi.com/album/302127', options)
    .then(response => response.json())
    .then(response => console.log(response.tracks.data))
    .catch(err => console.error(err));

const testClass = document.getElementsByClassName("test");

