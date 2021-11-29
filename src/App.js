import Form from "./Form";
import Home from "./Home";
import { useState } from "react";
import Transactions from "./Transactions";
import Book from "./Book";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Form setIsAuth={setIsAuth} isAuth={isAuth} />
          </Route>
          <ProtectedRoute path="/home" component={Home} isAuth={isAuth} />
          <ProtectedRoute
            path="/transactions"
            component={Transactions}
            isAuth={isAuth}
          />
          <Route path="/book">
            <Book />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
