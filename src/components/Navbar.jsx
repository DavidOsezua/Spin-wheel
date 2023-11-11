import React from 'react';
import './Styles/navbar.scss';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='flex'>
          <div className='title'>
            <h2>Bet App</h2>
          </div>

          <div className='amount'>
            <div className='amount-wallet'>
              <input type='text' readOnly />
              <button>Withdraw</button>
            </div>
          </div>

          <div className='user'>
            <img src='' alt='userImage' />
            <span>David</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
