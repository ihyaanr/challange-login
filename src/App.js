import Form from './Form';
import {BrowserRouter as Route } from  'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact>
            <Form />
      </Route>
    </div>
  );
}

export default App;
