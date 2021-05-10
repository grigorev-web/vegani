import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [state, setState] = React.useState({
    page: "shop",
    status: 1,
  });
 

  return (
    <>
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    </>
  );
}

export default App;
