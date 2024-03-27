import './App.css';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/page/Home';
import Member from './components/page/Member';
import Products from './components/page/Products';

function App() {
  return (
    <div className='app-route'>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/member" component={Member} />
          <Route path="/product" component={Products} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
