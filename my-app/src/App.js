import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Products from './component/Products';
import NotFound from './component/NotFound';
import LoginForm from './component/LoginForm';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route exact path="/login" component={LoginForm} />
    <Route exact path="/" component={Home} />
    <Route exact path="/products" component={Products} />
    <Route exact path="/cart" component={Cart} />
    <Route component={NotFound} />
  </Switch>
  </BrowserRouter>
    </div>
  );
}

export default App
