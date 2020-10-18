import React, {Component, useEffect, useState} from "react";
import firebaseDB from '../../server/base';
import Register_vehical from "./register_vehical";

const Assaigning_routes = () => {

    var [routesObj, setRoutesObj] =  useState({});
    var [currentId, setCurrentId] = useState('');

    useEffect(() => {
        firebaseDB.child('routes').on("value", snapshot => {
            if(snapshot.val() != null){
                setRoutesObj({
                    ...snapshot.val()
                })
            }
            else
                setRoutesObj({})

        })
    },[])



    const addVehicle = obj => {
        firebaseDB.child('vehicles').push(
            obj,
            err => {
                if(err)
                    console.log(err);


            }
        )
    }

        return(
            <>
                <div className={"container"}>
                    <Register_vehical {...({addVehicle, currentId, routesObj})} />
                </div>
                <br/>
                <div className={"col-md-7"}>
                    <div><h4>Select a Route From here</h4></div>
                    <br/>
                    <table className={"table table-borderless table-stripped"}>
                        <thead className={"thead-light"}>
                        <tr>
                            <th>Code</th>
                            <th>Route</th>
                            <th>Description</th>
                            <th>Distance</th>
                            <th>Price(1KM)</th>
                            <th>Total Amount</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            Object.keys(routesObj).map(id => {
                                return <tr key={id}>
                                    <td>{routesObj[id].code}</td>
                                    <td>{routesObj[id].route}</td>
                                    <td>{routesObj[id].description}</td>
                                    <td>{routesObj[id].totDistance}</td>
                                    <td>{routesObj[id].pricePerKm}</td>
                                    <td>{routesObj[id].totPrice}</td>
                                    <td>
                                        <i className={"fa fa-bookmark fa-lg"} style={{color: "blue"}} onClick={() => {setCurrentId(id)} }/>

                                    </td>
                                </tr>
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </>


        );
    }


export default Assaigning_routes;
