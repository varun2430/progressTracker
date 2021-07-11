import { Switch, Route, HashRouter } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import './App.css';

function App() {
  return (

    <HashRouter>

      <div className="App">

        <NavBar />

        <Switch>

        	<Route path="/" component={Home} exact />
        	<Route path="/skills" component={Skills} exact />
          <Route path="/projects" component={Projects} exact />

        </Switch>

      </div>

    </HashRouter>

  );
}

export default App;