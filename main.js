let baseURL = "https://api.imgflip.com/get_memes"

    axios.get(baseURL)
    .then(function(result) {
        res = result.data
        res.data.memes.map(element => {

            document.getElementById("output").innerHTML +=` <h3>${element.name}</h3><img src="${element.url}" width="${element.width}" height="${element.height}"> <br><hr>`

        })
    })
