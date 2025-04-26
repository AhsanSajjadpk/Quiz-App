import React, { useState } from "react";
import "./App.css";

// MUI elements
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";

// Components
import Navbar from "./components/Navbar";
import Scoreboard from "./components/Scoreboard";
import QuestionCard from "./components/QuestionCard";
import Navigation from "./components/Navigation";
import Spinner from "./components/common/Spinner";
import AlertFun from "./components/common/AlertFun";
import { Start } from "@mui/icons-material";

const App = () => {
  const [quizStarted, setquizStarted] = useState(false);

  const start = () => setquizStarted(true);

  return (
    <>
      <Navbar />
      <br />

      {/* <CssBaseline /> */}
      <Container maxWidth="lg">
        <Box
          sx={{
            bgcolor: "#d9dedb",
            height: "auto",
            padding: "10px",
            display: "flex",
            gap: "10px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "15px",
            paddingY: "30px",
          }}
        >
          {!quizStarted ? (
            <Button
              sx={{ fontSize: "26px", marginBottom: "22px" }}
              color="secondary"
              variant="contained"
              onClick={start}
            >
              Start Quiz
            </Button>
          ) : (
            <>
              <Scoreboard />
              <QuestionCard />
              <Navigation />
            </>
          )}

          {/* <AlertFun />
          <Spinner /> */}
        </Box>
      </Container>
    </>
  );
};

export default App;
