const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
        'X-RapidAPI-Key': '1673859b58msh22ca0430778cb65p1c244fjsn5e68ca46937d'
    }
};

const URL = 'https://spotify23.p.rapidapi.com/playlist_tracks/?id=4QR0vsbUW1pI6BdoZAiolQ&offset=0&limit=18'

fetch(URL, options)
    .then(response => response.json())
    .then(response => response.items)
    .then(response => response.map(song => {

        const div = document.createElement("div");
        const audio = document.createElement("audio");
        const source = document.createElement("source");
        const albums = document.getElementById("albums");

        source.src = song.track.preview_url;
        source.type = "audio/mpeg";
        audio.appendChild(source);

        div.style.backgroundImage = `url(${song.track.album.images[0].url})`
        audio.controls = true

        div.appendChild(audio)
        //img.src = song.track.album.images[0].url;
        //source.type = "audio/mpeg"
        albums.appendChild(div);

    }))
    .catch(err => console.error(err));