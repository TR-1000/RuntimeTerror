import React from "react";
import AuthRoutes from "./routing/AuthRoutes";
// import '../src/App.css'
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Routes from "./routing/Routes";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Navbar />
          {/* Routing here for now */}

          <Routes />
          {/* If user is signed in */}
          <AuthRoutes />

        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;