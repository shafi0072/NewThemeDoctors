import React from 'react';
import Nav from '../Shared/Nav';
import Header from './Header';
import SelectCat from './SelectCat';

const Home = () => {
    return (<div>
        <Header/>
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
            <SelectCat/>
        </div>
        );
};

export default Home;