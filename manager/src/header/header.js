import React, {Component} from "react";
import img from "../image/capp.png";


class Header extends Component{

    render() {
        return(
            <div className={"container"}>
                <img src={img}/>
            </div>
        );
    }
}

export default Header;
