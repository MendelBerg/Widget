import React from 'react';
import { Link } from 'react-router-dom';
import borrower from '../img/borrower.svg';
import lender from '../img/lender.svg';

const Choose = () => {
  return (
    <div className="card">
      <div className="card__head">
        <h2 className="card__title">Choose your role</h2>
        <h5 className="card__subtitle">Please, choose your role in service.</h5>
      </div>

      <div className="card__actions">
        <Link to="/role/borrower">
          <span className="card__btn btn btn_medium">
            <img src={borrower} className="card__icon" alt="Borrower" />
            The borrower
          </span>
        </Link>
        <Link to="/role/lender">
          <span className="card__btn btn btn_medium">
            <img src={lender} className="card__icon" alt="Lender" />
            The lender
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Choose;
