import React, {Component} from "react";
import img from "../image/headerImag.jpg";


class Header extends Component{

    render() {
        return(
            <div>
                <img src={img} width={"1150"} height={"500"}/>
            </div>
        );
    }
}

export default Header;
