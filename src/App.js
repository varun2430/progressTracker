import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import './App.css';

function App() {
  return (

    <Router>

      <div className="App">

        <NavBar />

        <Switch>

        	<Route path="/" component={Home} exact />
        	<Route path="/skills" component={Skills} exact />
          <Route path="/projects" component={Projects} exact />

        </Switch>

      </div>

    </Router>

  );
}

export default App;