import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Banner from 'react-js-banner';
import bank from '../Images/build.png'

function HomePage() {
  return (
    <div className='welcome'>
      <div className='form-inner'>
        <Banner
          title={<h1>Credit Control App</h1>}
          image={bank}
          imageClass="App-logo"
        />
        <h3>
          Credit Control is an credit control application that assist businesses
          with assessing trade credit applications with meaningful data.
        </h3> <br></br>
        <h3>
          Unlike conventional methods of gaining access to credit reports,
          Credit Control retrieves real-time bank transaction data of potential
          debtors for a more current financial health view.
        </h3>
        <br></br>
        <div className='nav'>
          <button>
            <a href='https://www.csdata.com.au/register' target='_blank'>
              Create User Account
            </a>
          </button>
          <button>
            <a href='https://www.csdata.com.au/' target='_blank'>
              User Sign In
            </a>
          </button>


          <Link to='/Contact'>
            <button>Contact Us</button>{' '}
          </Link>
          <Link to='/LoginForm'>
            <button>Webmaster Sign In</button>
          </Link>
          <Link to='/About'>
            <button>About Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
