
import React, { useState, useEffect } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink } from 'react-router-dom';
// import { adddata } from './context/ContextProvider';

const Home = () => {

    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);

    // const { udata, setUdata } = useContext(adddata);

    useEffect(() => {
        const getdata = async () => {
            try {
                const res = await fetch("/getdata", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });

                if (res.status === 422) {
                    console.log("Error: Data not found");
                    return;
                }

                const data = await res.json();
                setUserdata(data);
                console.log("Data Retrieved: ", data);
            } catch (error) {
                console.log("Error:", error);
            }
        };



        getdata();
    }, []);

    const deleteuser = async (id) => {
        const res2 = await fetch(`/deleteuser/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const deletedata = await res2.json();
        console.log(deletedata);

        if (res2.status === 422 || !deletedata) {
            console.log("error");
        } else {
            console.log("user deleted");

        }
    }



    return (
        <div className='mt-5'>
            <div className='container'>
                <div className='add_btn mt-2 mb-2'>
                    <NavLink to="/register" className='btn btn-primary'>Add Data</NavLink>
                </div>

                <table className="table">
                    <thead>
                        <tr className='table-dark'>
                            <th scope="col">Id</th>
                            <th scope="col">UserName</th>
                            <th scope="col">Email</th>
                            <th scope="col">Job Profile</th>
                            <th scope="col">Contact No.</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            getuserdata.map((element, id) => {
                                return (
                                    <>
                                        <tr>
                                            <th scope="row">{id + 1}</th>
                                            <td>{element.name}</td>
                                            <td>{element.email}</td>
                                            <td>{element.work}</td>
                                            <td>{element.mobile}</td>
                                            <td className='d-flex justify-content-between'>
                                                <NavLink to={`view/${element._id}`}> <button className='btn btn-success'><RemoveRedEyeIcon /></button></NavLink>
                                                <NavLink to={`edit/${element._id}`}> <button className='btn btn-primary'><CreateIcon /> </button></NavLink>
                                                <button className='btn btn-danger' onClick={() => deleteuser(element._id)}><DeleteIcon /> </button>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })
                        }


                    </tbody>

                </table>

            </div>
        </div>

    )
}


export default Home;