import React, {Component, useState, useEffect} from "react";
import base from "../../server/base";


 const Add_routes = (props) =>{


        const initialValues = {
            code : '',
            route: '',
            description: '',
            totDistance: '',
            pricePerKm: '',
            totPrice: ''

        }

        var [values, setValues] = useState(initialValues);

        useEffect(() => {
            if(props.currentId == '')
                setValues({
                    ...initialValues
                })
            else
                setValues({
                    ...props.routesObj[props.currentId]

                })

        }, [props.currentId, props.routesObj])

    function onChangeCode(e){
        var { name, value} = e.target
        setValues({
            ...values,
            code: value
        })
    }

    function onChangeRoute(e){
        var { name, value} = e.target
        setValues({
            ...values,
            route: value
        })
    }
    function onChangeDescription(e){
        var { name, value} = e.target
        setValues({
            ...values,
            description: value
        })
    }
    function onChangeDistance(e){
        var { name, value} = e.target
        setValues({
            ...values,
            totDistance: value
        })
    }
    function onChangePrice_km(e){
        var { name, value} = e.target
        setValues({
            ...values,
            pricePerKm: value

        })
    }
     var totPriceV = values.pricePerKm * values.totDistance;

    function onChangeTotal(e){

        var {name, value} = e.target

        setValues({
            ...values,
            totPrice: value
        })
    }

    function onSubmit(e){
        e.preventDefault();


        props.addOrEdit(values);
    }

    return(
            <div className={"container"}>
                <h4>Enter Route Details</h4>
                <br/>
                <form onSubmit={onSubmit} className={"AddRoute"}>
                    <div className={"form-group row"}>
                        <label className={"col-sm-3 col-form-label"}>Code </label>
                        <div className={"col-sm-10"}>
                            <input id={"code"} type={"text"} className={"form-control"} placeholder={"C177"}  required={true} onChange={onChangeCode}  value={values.code}/>
                        </div>
                    </div>

                    <div className={"form-group row"}>
                        <label className={"col-sm-3 col-form-label"}>Route </label>
                        <div className={"col-sm-10"}>
                            <input id={"route"} type={"text"} className={"form-control"} placeholder={"starting point - ending point"}  required={true} onChange={onChangeRoute}  value={values.route}/>
                        </div>
                    </div>

                    <div className={"form-group row"}>
                        <label className={"col-sm-3 col-form-label"}>Description </label>
                        <div className={"col-sm-10"}>
                            <input id={"description"} type={"text"} className={"form-control"} placeholder={"Route Description"} required={true} onChange={onChangeDescription}  value={values.description}/>
                        </div>
                    </div>

                    <div className={"form-group row"}>
                        <label className={"col-sm-3 col-form-label"}>Distance</label>
                        <div className={"col-sm-10"}>
                            <input id={"distance"} type={"number"} className={"form-control"} placeholder={"48 Km"} required={true} onChange={onChangeDistance}  value={values.totDistance}/>
                        </div>
                    </div>

                    <div className={"form-group row"}>
                        <label className={"col-sm-3 col-form-label"}>Price </label>
                        <div className={"col-sm-10"}>
                            <input id={"price"} type={"number"} className={"form-control"} placeholder={"Rs: 2.5 per Km"} required={true}  onChange={onChangePrice_km} value={values.pricePerKm}/>
                        </div>
                    </div>

                    <div className={"form-group row"}>
                        <label className={"col-sm-3 col-form-label"}>Total Price</label>
                        <div className={"col-sm-10"}>
                            <input id={"totPrice"} type={"number"} className={"form-control"} placeholder={"Rs: 120 "} required={true} value={totPriceV} onClick={() => {
                                setValues({
                                    ...values,
                                    totPrice: totPriceV
                                })
                            }}/>
                        </div>
                    </div>
                    <br/>

                    <div className={"form-group"}>
                        <div className={"col-md-6"}>
                            <input id={"btnAdd"} type={"submit"} className={"btn btn-warning btn-block"} value={props.currentId ==''?"Add Route":"Update"}/>
                        </div>

                    </div>
                </form>

            </div>
        );
}

export default Add_routes;
