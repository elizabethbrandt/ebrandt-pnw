import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Nav';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exactpath="/" component={Home}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
