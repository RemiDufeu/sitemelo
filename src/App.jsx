import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import TopBar from './component/topbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Curriculum from "./pages/cv"
import Contact from "./pages/contact"
import Portofolio from "./pages/portofolio"

// page permetant de créer un thème de l'application et de gerer le routage

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ee6c4d',
      light: '#ecb8a5'
    },
    secondary: {
      main: '#ffa630',
      light: '#FCEED2'
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <TopBar />
        <Switch>
          <Route path="/Contact">
            <Contact/>
          </Route>
          <Route exact path="/">
            <Curriculum/>
          </Route>
          <Route path="/Portofolio">
            <Portofolio/>
          </Route>
        </Switch>
      </Router>
      
    </ThemeProvider>
  );
}

export default App;
