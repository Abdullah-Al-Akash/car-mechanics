import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Booking from './Components/Booking/Booking/Booking';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import AuthProvider from './Contexts/AuthProvider';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Navbar />
          <div className="mt-5 pt-3">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/booking/:bookingId">
                <Booking />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
            </Switch>
          </div>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
