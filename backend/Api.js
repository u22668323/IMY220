const express = require("express");
const { MongoClient } = require("mongodb");
const path = require("path");

const app = express();
const port = 3000;

const uri = "mongodb+srv://mphoteng16:Tsotets21@imy220.h4fks.mongodb.net/?retryWrites=true&w=majority&appName=IMY220";
const client = new MongoClient(uri);

async function runFindQuery(collectionName) {
    try {
        await client.connect();
        const database = client.db('DBExample');
        const collection = database.collection(collectionName);
        const cursor = collection.find();
        return await cursor.toArray();
    } finally {
        await client.close();
    }
}

app.get('/api/users', async (req, res) => {
    try {
        const users = await runFindQuery("Users");
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving users" });
    }
});

app.get('/api/songs', async (req, res) => {
    try {
        const songs = await runFindQuery("Songs");
        res.status(200).json(songs);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving songs" });
    }
});

app.get('/api/playlists', async (req, res) => {
    try {
        const playlists = await runFindQuery("Playlists");
        res.status(200).json(playlists);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving playlists" });
    }
});

app.use(express.static("./frontend/public"));

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
