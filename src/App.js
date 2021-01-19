import './App.css';
import Sidebar from './Components/Sidebar';
import Feed from './Pages/Feed';
import Workout from './Pages/Workout';
import Widgets from "./Components/Widgets"
import {BrowserRouter as Router, Route} from "react-router-dom"

function App() {
  return (
    <div className="app">
      
        <Router>
          <Sidebar />
          <Route path= "/chat">
            <Feed />
          </Route>
          <Route path= "/workout">
            <Workout />
          </Route>
        </Router>

        {/* Widgets */}
        <Widgets />

    </div>
  );
}

export default App;
