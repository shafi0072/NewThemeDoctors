import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import StorefrontIcon from '@material-ui/icons/Storefront';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import PhoneIcon from '@material-ui/icons/Phone';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DescriptionIcon from '@material-ui/icons/Description';
import  './SelectCat.css'
import { Link } from 'react-router-dom';

const SelectCat = () => {
    return (
        <div className='container'>
        <div className='row  mt-5'>
        <Link className="col-md-3 text-center selectHove text-Style" to="/doctor">
        <PersonIcon style={{fontSize:'320%', color:'blue'}}/>
        <h6 className=''>Find Your Doctors</h6>
       </Link>
        
        <div className="col-md-3 text-center">
            <LocalHospitalIcon style={{fontSize:'320%', color:'blue'}}/>
            <h6>Local Hospital</h6>
        </div>
        <div className="col-md-3 text-center">
            <StorefrontIcon style={{fontSize:'320%', color:'blue'}}  />
            <h6>Find your Medicine</h6>
        </div>
        <div className="col-md-3 text-center">
            <HomeWorkIcon style={{fontSize:'320%', color:'blue'}}/>
            <h6>your Medical Test Report</h6>
        </div>
    </div>
    <div className="row mt-5">
        <div className="col-md-3 text-center">
            <PhoneIcon style={{fontSize:'320%', color:'blue'}}/>
            <h6>Call emargency Ambulance</h6>
        </div>
        <div className="col-md-3 text-center">
            <SentimentVerySatisfiedIcon  style={{fontSize:'320%', color:'blue'}}/>
            <h6>Your Previous Appoinment</h6>
        </div>
        <div className="col-md-3 text-center">
            <FavoriteIcon style={{fontSize:'320%', color:'blue'}}/>
            <h6>Favorite Doctor or Hospital</h6> 
        </div>
        <div className="col-md-3 text-center">
            <DescriptionIcon style={{fontSize:'320%', color:'blue'}} />
            <h6>Your Pescription</h6>
        </div>
    </div>
        </div>
    );
};

export default SelectCat;