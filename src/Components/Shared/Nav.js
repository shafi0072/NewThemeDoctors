import React from 'react';

const Nav = () => {
    return (
        <div className='bg-dark'>
        <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Emargency Country Support</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Emargency Doctors Support</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Emargency City Ambulance Support</a>
        </li>
        
      </ul>
        </div>
    );
};

export default Nav;