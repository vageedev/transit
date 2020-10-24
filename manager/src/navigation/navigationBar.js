import React, {Component} from "react";
import {Link} from "react-router-dom";

class NavigationBar extends Component{

    render() {
        return(
            <nav className={"navbar navbar-dark bg-warning navbar-expand-lg"}>
                <Link to={"/"} className={"navbar-brand"}><i className={"fa fa-home fa-2x"}/></Link>
                <div className={"collapse navbar-collapse"}>
                    <ul className={"navbar-nav mr-auto"}>
                        <li className={"navbar-item"}>
                            <Link to={"/registerVehical"} className={"nav-link"}><span style={{color : "white"}}></span>Register Vehicles</Link>
                        </li>
                        <li className={"navbar-item"}>
                            <Link to={"/addRoutes"} className={"nav-link"}>Add Routes</Link>
                        </li>
                        <li className={"navbar-item"}>
                            <Link to={"/info"} className={"nav-link"}>Transportation Information</Link>
                        </li>
                        <li className={"navbar-item"}>
                            <Link to={"/needVehicle"} className={"nav-link"}>Find </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavigationBar;
