import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Nav';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exactpath="/" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
