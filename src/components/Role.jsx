import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { onHide } from '../common';
import close from '../img/close.svg';
import guide from '../img/guide.svg';

const Role = () => {
  const { roleId } = useParams();
  const title = `the ${roleId[0].toUpperCase()}${roleId.slice(1)}`;

  return (
    <div className="role">
      <div className="role__body card">
        <div className="card__head">
          <h2 className="card__title">{title}</h2>
          <h5 className="card__subtitle">
            You have chosen the role - <span>{title}.</span>
          </h5>
        </div>

        <div className="card__actions">
          <Link to="/agreement">
            <span href="#" className="card__btn btn btn_medium">
              <img src={`/src/img/${roleId}.svg`} className="card__icon" alt="Borrower" />
              Go to cabinet
            </span>
          </Link>
          <span
            href="#"
            className="card__btn btn btn_white btn_medium"
            onClick={() => onHide('.role__body')}
          >
            <img src={close} className="card__icon" alt="Lender" />
            Cancel
          </span>
        </div>
      </div>

      <div className="role__advertising advertising">
        <Link to="/agreement">
          <span href="#" className="advertising__btn btn btn_medium">
            <img src={guide} className="advertising__icon" alt="Lender" />
            Guide flow
          </span>
        </Link>

        <p className="advertising__description">
          Study the guide flow for the convenience of using the service.
        </p>
      </div>
    </div>
  );
};

export default Role;
