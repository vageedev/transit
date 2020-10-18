import React from 'react';
import './App.css';

import Header from "./header/header";
import NavigationBar from "./navigation/navigationBar";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Add_routes from "./components/manager.transport.infor/add_routes";
import Register_vehical from "./components/manager.transport.infor/register_vehical";
import Assaigning_routes from "./components/manager.transport.infor/assaigning_routes";
import Footer from "./footer/footer";
import BusList from "./components/manager.transport.infor/busList";
import ArrangeVehicles from "./components/manager.transport.infor/arrangeVehicles";
import Routes from "./components/manager.transport.infor/routes";

function App() {
  return (


      <div className={"container"}>
          <Router>
              <Header/>
              <NavigationBar/>
              <br/>
              <Route path={"/registerVehical"} component={Assaigning_routes} />
              <Route path={"/addRoutes"} component={Routes}/>
              <Route path={"/assignRoute"} component={Assaigning_routes}/>
              <Route path={"/info"} component={BusList}/>
              <Route path={"/needVehicle"} component={ArrangeVehicles}/>
          </Router>
      </div>

  );
}

export default App;
