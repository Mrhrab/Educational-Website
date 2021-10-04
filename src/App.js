import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Activities from './Components/Activities/Activities';
import AboutUs from './Components/AboutUs/AboutUs';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
     <Router>
       <Header></Header>
       <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/activities">
            <Activities></Activities>
          </Route>
          <Route path="/aboutus">
            <AboutUs></AboutUs>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
       </Switch>
       <Footer></Footer>
     </Router>
    </div>
  );
}

export default App;
