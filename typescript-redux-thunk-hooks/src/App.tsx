import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Dogs } from './pages/Dogs';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/dogs" component={Dogs} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
