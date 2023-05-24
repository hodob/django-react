import "./App.css";
import React, { useState } from "react";
import axios from "axios";
function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}
function App() {
  return (
    <section>
      <h1>Amazing scientiststest</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

export default App;
