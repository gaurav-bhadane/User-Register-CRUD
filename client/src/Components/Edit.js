import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

const Edit = () => {

    // const [getuserdata, setUserdata] = useState([]);
    // console.log(getuserdata);

    // const history = useHistory("");

    const [inpval, setInp] = useState({
        name: "",
        email: "",
        password: "",
        mobile: "",
        work: "",
        address: "",
        description: ""
    })

    const setdata = (r) => {
        console.log(r.target.value);
        const { name, value } = r.target;
        setInp((preval) => {
            return {
                ...preval,
                [name]: value
            }


        })
    }
    const { id } = useParams();
    console.log(id);


    const getdata = async () => {
        try {
            const res = await fetch(`/getuser/${id}`, {
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
            setInp(data);
            console.log("Data Retrieved: ", data);
        } catch (error) {
            console.log("Error:", error);
        }
    };

    useEffect(() => {
        getdata();
    }, []);

    const updateuser = async (e) => {
        e.preventDefault();

        const { name, email, work, address, mobile, description, age } = inpval;

        const res2 = await fetch(`/updateuser/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, work, address, mobile, description, age
            })
        });

        const data2 = await res2.json();
        console.log(data2);

        if (res2.status === 422 || !data2) {
            alert("fill the data");
        } else {
            alert("data added");
            // history.push("/")
        }
    }

    return (
        <div className='container'>
            <NavLink to="/path" activeClassName="active">Home2</NavLink>
            <form className='mt-5'>
                <div className='row'>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" value={inpval.name} onChange={setdata} name='name' class="form-control" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" value={inpval.email} onChange={setdata} name='email' class="form-control" />
                    </div>

                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Age</label>
                        <input type="number" value={inpval.age} onChange={setdata} name='age' class="form-control" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Mobile</label>
                        <input type="number" value={inpval.mobile} onChange={setdata} name='mobile' class="form-control" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Work</label>
                        <input type="text" value={inpval.work} onChange={setdata} name='work' class="form-control" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Address</label>
                        <input type="text" value={inpval.address} onChange={setdata} name='address' class="form-control" />
                    </div>
                    <div class="mb-3 col-lg-12 col-md-12 col-12">
                        <label for="exampleInputPassword1" class="form-label">Desciprtion</label>
                        <textarea name='description' value={inpval.description} onChange={setdata} className='form-control' id='' cols="30" rows="5"></textarea>
                    </div>
                    <button type="submit" onClick={updateuser} class="btn btn-primary">Submit</button>
                </div>
            </form>

        </div>
    )
}

export default Edit
