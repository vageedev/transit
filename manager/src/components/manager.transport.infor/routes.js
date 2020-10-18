import React, {useState, useEffect} from "react";
import Add_routes from "./add_routes";
import firebaseDB from '../../server/base';



const Routes = () => {

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

    const addOrEdit = obj => {
        if(currentId == '')
            firebaseDB.child('routes').push(
                obj,
                err => {
                  if(err)
                      console.log(err);
                  else
                      setCurrentId('');
             }
            )
        else
            firebaseDB.child(`routes/${currentId}`).set(
                obj,
                err => {
                    if(err)
                        console.log(err);
                    else
                        setCurrentId('');
                }
            )
    }

    const onDelete = key => {
        if(window.confirm("Are you sure you want to delete this route? ")){
            firebaseDB.child(`routes/${key}`).remove(
                err => {
                    if(err)
                        console.log(err);
                    else
                        setCurrentId('');
                }
            )
        }
    }

    return (
        <>
            <div className={"row"}>
                <div className={"col-md-5"}>
                    <Add_routes {...({addOrEdit, currentId, routesObj})}/>
                </div>
                <div className={"col-md-7"}>
                    <div><h4>List of Routes</h4></div>
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
                                        <i className={"fa fa-edit fa-lg"} style={{color: "blue"}} onClick={() => {setCurrentId(id)} }/>
                                        <br/>
                                        <i className={"fa fa-trash fa-lg"} style={{color:"red"}} onClick={() => {onDelete(id)}}/>

                                    </td>
                                </tr>
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Routes;
