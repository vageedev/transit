import React, {Component, useState} from "react";
import firebaseDB from "../../server/base";
import {MDBAlert} from "mdbreact";

const ArrangeVehicles = () =>{

    const data = {
        code:'',
        time:'',
        day:'',
        msg: ''
    }

    const searchData = {
        route : '',
        day: ''
    }

    var [value, setValue] = useState(data);
    var [Data, setData] = useState(searchData);

    function onChangeRoute(e) {
        var {name, value }= e.target
        setData({
            ...Data,
            route: value
        })

    }

    function onChangDay(e) {
        var {name, value} = e.target
        setData({
            ...Data,
            day: value
        })

    }




    function onSubmit(e){
        e.preventDefault();

        if(Data.day === 'Monday' && Data.route === 'C130'){
            setValue({
                ...value,
                code: "C130",
                time: "1 pm",
                day: Data.day,
                msg: 'Need More vehicles'
            })
        }else
            setValue({
                ...value,
                msg : "There are enough vehicles for this search input"
            })


    }




        return(
            <div>
                <h4>Find where buses are needed</h4>
                <br/>
                <div className={"row"}>
                    <form className={"col-md-6"} onSubmit={onSubmit}>

                            <div className={"form-group row justify-content-center col"}>
                                <label className={"col-sm-2 col-form-label"}>Route  </label>
                                <div className={"col-sm-10"}>
                                    <input type={"text"} className={"form-control"} placeholder={"C177"}  required={true} onChange={onChangeRoute}/>
                                </div>
                            </div>

                            <div className={"form-group row justify-content-center col"}>
                                <label className={"col-sm-2 col-form-label"}>Day </label>
                                <div className={"col-sm-10"}>
                                    <input type={"text"} className={"form-control"} placeholder={"Monday"}  required={true} onChange={onChangDay}/>
                                </div>
                            </div>

                        <div className={"form-group"}>
                            <div className={"col-sm-2"}>
                                <button type={"submit"} className={"btn btn-warning"} > Search </button>
                            </div>

                        </div>
                    </form>
                    <div className={"col-md-6"}>
                        <table className={"table table-borderless table-stripped"}>
                            <thead className={"thead-light"}>
                            <tr>
                                <th>Route Code</th>
                                <th>Day</th>
                                <th>Time</th>
                                <th></th>
                            </tr>

                            </thead>
                            <tbody>
                                <tr>
                                    <th>{value.code}</th>
                                    <th>{value.day}</th>
                                    <th>{value.time}</th>
                                    <th>
                                    </th>
                                </tr>

                            </tbody>
                        </table>
                        <MDBAlert>{value.msg}</MDBAlert>

                    </div>
                </div>

            </div>
        );
    }


export default ArrangeVehicles;
