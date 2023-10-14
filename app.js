const express = require("express");
const User = require("./mongo"); // Import the User model
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Define a route for fetching a specific user
app.get("/users/:id", async (req, res) => {
  const userId = req.params.id;
  console.log(userId, "user id bro");
  try {
    // Fetch data for the specified user
    const user = await User.findOne({ _id: `${userId}` });
    console.log(user, " <------ used");
    if (user) {
      res.json(user);
      console.log("User data retrieved");
    } else {
      res.json("User not found");
      console.log(user);
    }
  } catch (e) {
    res.status(500).json("An error occurred");
  }
});

// Define a route for fetching all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from the database

    // console.log(users, "<--- from /users ");
    if (users.length > 0) {
      res.json(users);
      console.log("yes");
    } else {
      res.json("No users found");
      console.log("no");
    }
  } catch (e) {
    res.status(500).json("An error occurred");
  }
});

app.post("/Signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });

    if (user) {
      res.json("exist");
      await User.create({ email, password });
    } else {
      await User.create({ email, password });
      res.json("exist");
      console.log("New user created");
    }
  } catch (e) {
    res.status(500).json("An error occurred");
  }
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
