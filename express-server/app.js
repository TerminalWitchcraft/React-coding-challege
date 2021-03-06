// Packages
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const body_parser = require("body-parser");
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose
    .connect("mongodb://localhost:27017/react", { useNewUrlParser: true })
    .catch(err => {
        console.log(
            "Failed to connect MongoDB. Please ensure MongoDB is up and running."
        );
        process.exit(1);
    });

// Create MongoDB Schema
var favSchema = new mongoose.Schema({
    businessId: String,
    businessLocation: String
});
var Favourites = mongoose.model("favs", favSchema);

// Set some axios defaults
axios.defaults.baseURL = "https://api.yelp.com/v3/businesses/";
axios.defaults.headers.common["Authorization"] =
    "Bearer _Qs0d8E81UeQKoPO9iitNTSoggIqq0cj5MaWRurJANa_HntPResR9hNOKR2B3FAjxXX5o0jd182fn9m7gv3WclD0nW4jvDPAa78KFj8Eb1D7ujEsyjJYgRk1uGNeXHYx";

// Create express app
const app = express();
const port = 8000;

// Enable cors
app.use(cors());
app.use(body_parser.json());

// GET method to search yelp based on query
app.get("/fetch", (req, res) => {
    let query = req.query.query;
    axios
        .get("/search", { params: { location: query } })
        .then(result => {
            return res.status(200).json(result.data);
        })
        .catch(error => {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log("Error", error.message);
            }
            return res.status(500).json({ message: "Failed to retrieve data" });
        });
});

// GET method to retrieve all Favourites data
app.get("/get", (req, res) => {
    Favourites.find({})
        .then(data => res.status(200).json({ data: data }))
        .catch(err => res.status(500).json({ message: "Somthing went wrong" }));
});

// POST method to toggle item as Favourite
app.post("/update", (req, res) => {
    let businessLocation = req.body.businessLocation;
    let businessId = req.body.businessId;
    if (req.body.mark) {
        // Add to database if switch enabled
        let entry = new Favourites({
            businessId: businessId,
            businessLocation: businessLocation
        });
        entry
            .save()
            .then(res.status(200).json({ message: "Successfully Updated" }))
            .catch(err => console.log(err));
    } else {
        // remove from database if switch disabled
        Favourites.deleteMany({ businessId: businessId })
            .then(res.status(200).json({ message: "Successfully Updated" }))
            .catch(err => console.log(err));
    }
});

// Start the express server
app.listen(port, () =>
    console.log("Express server app listening on port ", port)
);
