import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
// import {adddata} from './context/ContextProvider';


const Register = () => {

    // const {udata,setUdata} = useContext(adddata);

    const [inpval, setInp] = useState({
        name: "",
        email: "",
        age: "",
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

    const addinpdata = async (e) => {
        e.preventDefault();

        const { name, email, age, mobile, address, work, description } = inpval;


        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, age, mobile, address, work, description
            })
        });

        const data = res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            alert("error");
            console.log("error");
        } else {
            // setUdata(data)
            alert("data added");
            console.log("data added");
        }
    }

    return (
        <div className='container'>
            <NavLink to="/path" activeClassName="active">Home</NavLink>
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
                    <button type="submit" onClick={addinpdata} class="btn btn-primary">Submit</button>
                </div>
            </form>

        </div>
    )
}

export default Register