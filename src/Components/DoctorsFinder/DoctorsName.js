import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const DoctorsName = (props) => {
    const {name} = props.data
    return (
        <div className='d-flex justify-content-center'>
            <div className ='d-flex justify-content-between'>
                <AccountCircleIcon/>
                 <h5>{name}</h5>
            </div>
        </div>
    );
};

export default DoctorsName;