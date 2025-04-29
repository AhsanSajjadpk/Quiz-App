// import services
import { useReducer } from "react";
import axios, { Axios } from "axios";

// import files
import GlobalContext from "./GlobalContext";
import GlobalReducer from "./GlobalReducer";

// import types

const GlobalState = (props) => {
  const initialState = {
    allQuestions: [],
    score: 0,
    currentQuestion: null,
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  const stateQuiz = async () => {
    try {
      const response = await axios.get(
        "https://the-trivia-api.com/api/questions?categories=general_knowledge&limit=20&region=PK&difficulty=medium"
      );
      const data = response.data;

      


    } catch (error) {}
  };

  return (
    <GlobalContext.Provider value={{}}>{props.children}</GlobalContext.Provider>
  );
};

export default GlobalState;
