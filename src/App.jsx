import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Scoreboard from "./components/Scoreboard";
import QuestionCard from "./components/QuestionCard";
import Navigation from "./components/Navigation";
import Spinner from "./components/common/Spinner";
import Alert from "./components/common/Alert";

const App = () => {
  return (
    <>
      <Navbar />

      <main>
        <Alert />
        <Spinner/>
        <Scoreboard />
        <QuestionCard />
        <Navigation />
      </main>
    </>
  );
};

export default App;
