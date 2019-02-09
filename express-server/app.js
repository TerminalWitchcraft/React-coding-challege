const express = require('express')
const axios = require('axios')
const cors = require('cors')
const body_parser = require('body-parser')
const app = express()
const port = 8000

axios.defaults.baseURL = 'https://api.yelp.com/v3/businesses/';
axios.defaults.headers.common['Authorization'] = "Bearer _Qs0d8E81UeQKoPO9iitNTSoggIqq0cj5MaWRurJANa_HntPResR9hNOKR2B3FAjxXX5o0jd182fn9m7gv3WclD0nW4jvDPAa78KFj8Eb1D7ujEsyjJYgRk1uGNeXHYx";

var corsConfig = {
    origin: ["http://127.0.0.1:8000"],
    methods: ["GET", "POST"]
}

app.use(cors())
app.use(body_parser.json())
app.get('/fetch', (req, res) => {
    console.log("Got these queries")
    console.log(req.query)
    let query = req.query.query
    axios.get("/search", {params: {location: query}})
        .then(result => {
            return res.status(200).json(result.data)})
        .catch(error => {   
            if (error.response) {
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                } else if (error.request) {
                  console.log(error.request);
                } else {
                  console.log('Error', error.message);
                }
            return res.status(500).json({message: "Failed to retrieve data"})
        })
})


app.listen(port, () => console.log("Express server app listening on port ", port))
