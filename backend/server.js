const express = require("express");
const { MongoClient } = require("mongodb");
const path = require("path");
const bodyParser = require("body-parser"); // To parse incoming request body

const app = express();
const port = 3000;

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

const uri = "mongodb+srv://mphoteng16:Tsotets21@imy220.h4fks.mongodb.net/?retryWrites=true&w=majority&appName=IMY220";
const client = new MongoClient(uri);

async function connectToMongoDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Failed to connect to MongoDB", err);
    }
}

async function runFindQuery(collectionName) {
    try {
        const database = client.db('DeliverableDatabase');
        const collection = database.collection(collectionName);
        const cursor = collection.find();
        return await cursor.toArray();
    } catch (error) {
        console.error("Error running find query", error);
        throw error;
    }
}

// Helper function to find a user by username and password
async function findUser(username, password) {
    try {
        const database = client.db('DeliverableDatabase');
        const usersCollection = database.collection("Users");
        const user = await usersCollection.findOne({ username, password });
        return user;
    } catch (error) {
        console.error("Error finding user", error);
        throw error;
    }
}

// API route to get all users
app.get('/api/users', async (req, res) => {
    try {
        const users = await runFindQuery("Users");
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving users" });
    }
});

// API route to get all songs
app.get('/api/songs', async (req, res) => {
    try {
        const songs = await runFindQuery("Songs");
        res.status(200).json(songs);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving songs" });
    }
});

// API route to get all playlists
app.get('/api/playlists', async (req, res) => {
    try {
        const playlists = await runFindQuery("Playlist");
        res.status(200).json(playlists);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving playlists" });
    }
});



// API route for login
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }

    try {
        const user = await findUser(username, password);

        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Simulate a successful login response with user data
        res.status(200).json({
            message: "Login successful",
            user: {
                id: user._id,
                username: user.username,
                followers: user.followers,
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Error during login" });
    }
});

app.post('/api/signup', async (req, res) => {
    const { username, email, password } = req.body;

    // Check if all required fields are present
    if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields (username, email, password) are required." });
    }

    try {
        // Connect to the database
        const database = client.db('DeliverableDatabase');
        const usersCollection = database.collection("Users");

        // Check if the user already exists
        const existingUser = await usersCollection.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists with this email." });
        }

        // Create a new user object with default values
        const newUser = {
            username: username,
            email: email,
            password: password, // Storing password as plain text
            subscriptionType: "free", // Default subscription for new users
            favorites: {
                songs: [],
                playlists: []
            },
            followers: 0,
            following: []
        };

        // Insert new user into the collection
        const result = await usersCollection.insertOne(newUser);

        // Return success response with the new user data (excluding password)
        res.status(201).json({
            message: "User created successfully",
            user: {
                id: result.insertedId,
                username: newUser.username,
                email: newUser.email,
                subscriptionType: newUser.subscriptionType,
                favorites: newUser.favorites,
                followers: newUser.followers,
                following: newUser.following
            }
        });
    } catch (error) {
        console.error("Error during sign-up:", error);
        res.status(500).json({ message: "Server error during sign-up" });
    }
});

app.post('/api/songs', (req, res) => {
    const { title, artist, album, duration } = req.body;
    
    const newSong = {
      id: songs.length + 1,
      title,
      artist,
      album,
      duration
    };
  
    songs.push(newSong);
    res.status(201).json(newSong); 
  });

app.post('/api/playlists/:playlistId/songs', async (req, res) => {
    const playlistId = req.params.playlistId;
    const songTitle = req.body.song;

    try {
        await client.connect();
        const database = client.db('DeliverableDatabase');
        const playlistsCollection = database.collection('Playlist');

        const result = await playlistsCollection.updateOne(
            { _id: playlistId },
            { $push: { songs: songTitle } }
        );

        if (result.modifiedCount > 0) {
            res.status(200).json({ message: "Song added successfully" });
        } else {
            res.status(404).json({ message: "Playlist not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error adding song to playlist", error: error.message });
    } finally {
        await client.close();
    }
});

// API route to edit a playlist
app.patch('/api/playlists/:playlistId', async (req, res) => {
    const playlistId = req.params.playlistId; 
    const { name, description } = req.body; 

    try {
        await client.connect();
        const database = client.db('DeliverableDatabase');
        const playlistsCollection = database.collection('Playlist');

        const updateObject = {};
        if (name) updateObject.name = name;        
        if (description) updateObject.description = description; 

        const result = await playlistsCollection.updateOne(
            { _id: playlistId },  // Match the playlist by ID
            { $set: updateObject } // Set the updated fields
        );

        if (result.modifiedCount > 0) {
            res.status(200).json({ message: "Playlist updated successfully" });
        } else {
            res.status(404).json({ message: "Playlist not found or no changes made" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error updating playlist", error: error.message });
    } finally {
        await client.close();
    }
});



app.use(express.static("./frontend/public"));

// Start the server
app.listen(port, async () => {
    await connectToMongoDB();  // Ensure MongoDB is connected when the server starts
    console.log(`Server running on http://localhost:${port}`);
});
