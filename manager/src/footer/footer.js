import React, {Component} from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

class Footer extends Component{
    render() {
        return(
            <MDBFooter className="page-footer font-small pt-4 mt-4 bg-dark">
                <MDBContainer fluid className="text-center text-md-left">
                    <MDBRow>
                        <MDBCol md="6">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold" style={{color:"white"}}>
                                Footer Content
                            </h5>
                            <p style={{color:"white"}}>
                                Here you can use rows and columns here to organize your footer
                                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit.
                            </p>
                        </MDBCol>
                        <hr className="clearfix w-100 d-md-none" />
                        <MDBCol md="2">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold" style={{color:"white"}}>
                                About
                            </h5>
                        </MDBCol>
                        <hr className="clearfix w-100 d-md-none" />
                        <MDBCol md="2">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold" style={{color:"white"}}>
                                contact
                            </h5>
                        </MDBCol>
                        <hr className="clearfix w-100 d-md-none" />
                        <MDBCol md="2">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold" style={{color:"white"}}>
                                sdfsf
                            </h5>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <hr />
                <div className="text-center">
                    <ul className="list-unstyled list-inline">
                        <li className="list-inline-item">
                            <a className="btn-floating btn-sm btn-fb mx-1">
                                <i className="fab fa-facebook-f"> </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-sm btn-tw mx-1">
                                <i className="fab fa-twitter"> </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-sm btn-gplus mx-1">
                                <i className="fab fa-google-plus"> </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-sm btn-li mx-1">
                                <i className="fab fa-linkedin-in"> </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-sm btn-dribbble mx-1">
                                <i className="fab fa-dribbble"> </i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid style={{color:"white"}}>
                        &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        );
    }
}

export default Footer;
