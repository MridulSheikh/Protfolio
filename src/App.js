import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/home/Home';
import Aboutme from './Components/About me/Aboutme';
import Perticle from './config/Perticle';


function App() {
 
  return (
    <div className="App">
       <BrowserRouter>
       <Header />
       <Switch>
       <Route exact path="/">
          <Home></Home>
       </Route>
       <Route  path="/About">
         <Aboutme></Aboutme>
       </Route>
       <Route  path="/skill">
         <Aboutme></Aboutme>
       </Route>
       </Switch>
       </BrowserRouter>
    </div>
  );
}

export default App;
