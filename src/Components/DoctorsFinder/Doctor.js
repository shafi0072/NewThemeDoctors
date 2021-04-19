import React, { useEffect, useState } from 'react';
import Nav from '../Shared/Nav';
import Navbar from '../Shared/Navbar';
import DoctorsName from './DoctorsName';

const Doctor = () => {
    const [doctors, setDoctors] = useState([]);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [doctors])
    return (
        <div>
        <Nav/>
        <Navbar/>
        <div className='d-flex justify-content-center mt-5'>
            <div class="input-group mb-3" style={{width:'40%'}}>
                <input
                    type="text"
                    class="form-control"
                    placeholder="Search Your doctor or hospital"
                    aria-label="Search Your doctor or hospital"
                    aria-describedby="button-addon2"/>
                    <button class="btn btn-outline-success" type="button" id="button-addon2">Search</button>
                </div>
            </div>
           {
            doctors.map(data => <DoctorsName data={data} />)
           }
        </div>
    );
};

export default Doctor;