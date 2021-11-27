import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Support from './component/Support';

function App() {
  return (
<Router>
    <div className="App">
    <Navbar />
<Switch>
  <Route path="/pic">
    <Home />
  </Route>
  <Route path="/support">
    <Support />
  </Route>
</Switch>
    </div>
</Router>
  );
}

export default App;
