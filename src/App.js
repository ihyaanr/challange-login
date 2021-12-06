import Form from "./Form";
import Home from "./Home";
import { useState } from "react";
import Transactions from "./Transactions";
import Book from "./Book";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import BookAdd from "./BookAdd";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={<Form setIsAuth={setIsAuth} isAuth={isAuth} />}
          />

          <Route
            path="/home"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route
            path="/transactions"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <Transactions />
              </ProtectedRoute>
            }
          />

          {/* <Route path="/home" element={<Home />} />
          <Route path="/transactions" element={<Transactions />} /> */}
          <Route path="/book" element={<Book />} />
          <Route path="/addBook" element={<BookAdd />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
