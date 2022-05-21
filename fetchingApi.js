const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
        'X-RapidAPI-Key': '1673859b58msh22ca0430778cb65p1c244fjsn5e68ca46937d'
    }
};

const imagen = document.createElement("img");
const testClass = document.getElementById("imagen");


fetch('https://deezerdevs-deezer.p.rapidapi.com/album/302127', options)
    .then(response => response.json())
    .then(res => {
        console.log(res)
        imagen.src = res.cover
        testClass.appendChild(imagen)
    })
    .catch(err => console.error(err));

