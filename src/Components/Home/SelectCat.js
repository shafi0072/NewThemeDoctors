import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

import StorefrontIcon from '@material-ui/icons/Storefront';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import PhoneIcon from '@material-ui/icons/Phone';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DescriptionIcon from '@material-ui/icons/Description';


const SelectCat = () => {
    return (
        <div className='container'>
        <div className='row  mt-5'>
        <div className="col-md-3">
            <PersonIcon style={{fontSize:'320%', color:'blue'}}/>
            <h6>Find Your Doctors</h6>
        </div>
        <div className="col-md-3">
            <LocalHospitalIcon style={{fontSize:'320%', color:'blue'}}/>
            <h6>Local Hospital</h6>
        </div>
        <div className="col-md-3">
            <StorefrontIcon style={{fontSize:'320%', color:'blue'}}  />
            <h6>Find your Medicine</h6>
        </div>
        <div className="col-md-3">
            <HomeWorkIcon style={{fontSize:'320%', color:'blue'}}/>
            <h6>your Medical Test Report</h6>
        </div>
    </div>
    <div className="row mt-5">
        <div className="col-md-3">
            <PhoneIcon style={{fontSize:'320%', color:'blue'}}/>
            <h6>Call emargency Ambulance</h6>
        </div>
        <div className="col-md-3">
            <SentimentVerySatisfiedIcon  style={{fontSize:'320%', color:'blue'}}/>
            <h6>Your Previous Appoinment</h6>
        </div>
        <div className="col-md-3">
            <FavoriteIcon style={{fontSize:'320%', color:'blue'}}/>
            <h6>Favorite Doctor or Hospital</h6> 
        </div>
        <div className="col-md-3">
            <DescriptionIcon style={{fontSize:'320%', color:'blue'}} />
            <h6>Your Pescription</h6>
        </div>
    </div>
        </div>
    );
};

export default SelectCat;