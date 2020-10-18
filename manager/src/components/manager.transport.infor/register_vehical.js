import React, {useState, useEffect} from "react";
import firebaseDB from "../../server/base";


const Register_vehical = (props) =>{

    const vehicle = {
        vehicleNumber: '',
        code:'',
        type:'',
        volume: '',
        route: '',
        workingDay: '',
        time: ''
    }

    const initialRoutes = {
        code : '',
        route: '',
        description: '',
        totDistance: '',
        pricePerKm: '',
        totPrice: ''
    }


    var [values, setValue] = useState(vehicle);
    var [route, setRoute] = useState(initialRoutes);

    useEffect(() => {
        if(props.currentId != null)
            setRoute({
                ...props.routesObj[props.currentId]

            })

    }, [props.currentId, props.routesObj])

    /*function onChangeRoute(e) {
        var { name, value } = e.target
        setValue({
            ...values,
            route: value
        })
        console.log(route.route);
    }*/

    function onChangeDay(e) {
        var { name, value } = e.target
        setValue({
            ...values,
            workingDay: value
        })
        console.log(value);
    }

    function onChangeTime(e) {
        var { name, value } = e.target
        setValue({
            ...values,
            time: value
        })
        console.log(value);

    }



    function onChangeVehicalNumber(e) {
        var { name, value} = e.target
        setValue({
            ...values,
            vehicleNumber: value
        })
        console.log(value);

    }

    function onChangeCode(e){
        var { name, value} = e.target
        setValue({
            ...values,
            code: value
        })
        console.log(value);
    }

    function onChangeType(e) {
        var { name, value } = e.target
        setValue({
            ...values,
            type: value
        })
        console.log(value);

    }

    function onChangeVolume(e) {
        var {name, value} = e.target
        setValue({
            ...values,
            volume: value
        })
        console.log(value);

    }

    function onSubmit(e) {
        e.preventDefault();

        console.log(values);
        props.addVehicle(values)
    }



        return(
            <form  onSubmit={onSubmit}>
            <div className={"row"}>

            <div className={"container col-md-6"}>
                <h4>Enter vehicle information</h4>
                <br/>
                    <div className={"form-group row justify-content-center"}>
                        <label className={"col-sm-2 col-form-label"}>Vehicle Number </label>
                        <div className={"col-sm-10"}>
                            <input type={"text"} className={"form-control"} placeholder={"CAA-9898"}  required={true} onChange={onChangeVehicalNumber} value={values.vehicleNumber}/>
                        </div>
                    </div>

                    <div className={"form-group row justify-content-center"}>
                        <label className={"col-sm-2 col-form-label"}>Code </label>
                        <div className={"col-sm-10"}>
                            <input type={"text"} className={"form-control"} placeholder={"COL5434"} required={true} onChange={onChangeCode} value={values.code}/>
                        </div>
                    </div>

                    <div className={"form-group row"}>
                        <label className={"col-sm-2 col-form-label"}>Type </label>
                        <div className={"col-sm-10"}>
                            <select className={"form-control"} onChange={onChangeType} value={values.type}>
                                <option className={"dropdown-item"} >Select a Type</option>
                                <option className={"dropdown-item"} >Regular</option>
                                <option className={"dropdown-item"} >Express</option>
                                <option className={"dropdown-item"} >Semi Luxury</option>
                                <option className={"dropdown-item"} >Luxury</option>
                                <option className={"dropdown-item"} >Luxury(Express)</option>
                                <option className={"dropdown-item"} >AC</option>
                            </select>
                        </div>
                    </div>

                    <div className={"form-group row justify-content-center"}>
                        <label className={"col-sm-2 col-form-label"}>Volume </label>
                        <div className={"col-sm-10"}>
                            <input type={"number"} className={"form-control"} placeholder={"54 Seats"} required={true} onChange={onChangeVolume} value={values.volume}/>
                        </div>
                    </div>
            </div>

                <div className={"col-md-6"}>
                    <h4>Select a Route for the Vehicle</h4>
                    <br/>

                    <div className={"form-group row"}>
                        <label className={"col-sm-2 col-form-label"}>Route </label>
                        <div className={"col-sm-10"}>
                            <input type={"text"} className={"form-control"} placeholder={"starting point - ending point"}  required={true}  value={route.route}  onClick={() => {
                                setValue({
                                    ...values,
                                    route: route.route
                                })
                            }}/>
                        </div>
                    </div>

                    <div className={"form-group row"}>
                        <label className={"col-sm-2 col-form-label"}>Working Day </label>
                        <div className={"col-sm-10"}>
                            <select className={"form-control"} onChange={onChangeDay} value={values.workingDay}>
                                <option className={"dropdown-item"} >Select a Type</option>
                                <option className={"dropdown-item"} >Monday</option>
                                <option className={"dropdown-item"} >Tuesday</option>
                                <option className={"dropdown-item"} >Wednesday</option>
                                <option className={"dropdown-item"} >Thursday</option>
                                <option className={"dropdown-item"} >Friday</option>
                                <option className={"dropdown-item"} >Saturday</option>
                                <option className={"dropdown-item"} >Sunday</option>
                            </select>
                        </div>
                    </div>



                    <div className={"form-group row"}>
                        <label className={"col-sm-2 col-form-label"}>Time </label>
                        <div className={"col-sm-10"}>
                            <select className={"form-control"} onChange={onChangeTime} >
                                <option className={"dropdown-item"} >Select a Time</option>
                                <option className={"dropdown-item"} >7 am</option>
                                <option className={"dropdown-item"} >7.30 am</option>
                                <option className={"dropdown-item"} >8 am</option>
                                <option className={"dropdown-item"} >8.30 am</option>
                                <option className={"dropdown-item"} >9 am</option>
                                <option className={"dropdown-item"} >12 pm</option>
                                <option className={"dropdown-item"} >1 pm</option>
                                <option className={"dropdown-item"} >2 pm</option>
                                <option className={"dropdown-item"} >3 pm</option>
                                <option className={"dropdown-item"} >4 pm</option>
                                <option className={"dropdown-item"} >5 pm</option>
                                <option className={"dropdown-item"} >6 pm</option>
                            </select>
                        </div>
                    </div>

                        <div className={"form-group"}>
                            <div className={"col-sm-9"}>
                                <button type={"submit"} className={"btn btn-warning"} > Register Vehicle </button>
                            </div>

                        </div>


                </div>
            </div>
            </form>
        );
    }


export default Register_vehical;
