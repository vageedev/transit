import React, {Component, useEffect, useState} from "react";
import firebaseDB from "../../server/base";

const BusList = () =>{
    var [values, setValues] =  useState({});
    var [currentId, setCurrentId] = useState('');

    useEffect(() => {
        firebaseDB.child('vehicles').on("value", snapshot => {
            if(snapshot.val() != null){
                setValues({
                    ...snapshot.val()
                })
            }
            else
                setValues({})

        })
    },[])

    const onDelete = key => {
        if(window.confirm("Are you sure you want to delete this Information? ")){
            firebaseDB.child(`vehicles/${key}`).remove(
                err => {
                    if(err)
                        console.log(err);
                    else
                        setCurrentId('');
                }
            )
        }
    }
    return(
        <div>

            <div><h4>List of Routes</h4></div>
            <br/>
            <table className={"table table-borderless table-stripped"}>
                <thead className={"thead-light"}>
                <tr>
                    <th>Code</th>
                    <th>Route</th>
                    <th>Time</th>
                    <th>Type</th>
                    <th>Vehicle Number</th>
                    <th>Volume</th>
                    <th>Day</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    Object.keys(values).map(id => {
                        return <tr key={id}>
                            <td>{values[id].code}</td>
                            <td>{values[id].route}</td>
                            <td>{values[id].time}</td>
                            <td>{values[id].type}</td>
                            <td>{values[id].vehicleNumber}</td>
                            <td>{values[id].volume}</td>
                            <th>{values[id].workingDay}</th>
                            <th>
                                <i className={"fa fa-trash fa-lg"} style={{color:"red"}} onClick={() => {onDelete(id)}}/>
                            </th>
                        </tr>
                    })
                }
                </tbody>
            </table>
        </div>
    );

}

export default BusList;
