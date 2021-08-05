import React from 'react';
import { onHide } from '../common';
import close from '../img/close.svg';
import checkmark from '../img/checkmark.svg';

const Agreement = ({ agreementText }) => {
  const title = 'Terms & Conditions';

  const onCheckPosition = () => {
    const textElem = document.querySelector('.agreement__text');
    const { offsetHeight, scrollHeight, scrollTop } = textElem;

    if (offsetHeight + scrollTop === scrollHeight) {
      const agreeBtn = document.querySelector('.agreement__btn');
      agreeBtn.classList.remove('hidden');
      textElem.style['-webkit-mask-image'] = 'none';
    }
  };

  return (
    <div className="agreement card">
      <img
        src={close}
        alt="Close"
        className="agreement__close"
        onClick={() => onHide('.agreement')}
      />
      <div className="card__head">
        <h2 className="card__title">{title}</h2>
        <h5 className="agreement__subtitle card__subtitle">
          You should obliged to apply the {title} to use the service
        </h5>
      </div>

      <div
        onScroll={() => onCheckPosition()}
        className="agreement__text"
        dangerouslySetInnerHTML={{ __html: agreementText }}
      ></div>

      <div className="agreement__actions card__actions">
        <span className="agreement__btn card__btn btn hidden" onClick={() => onHide('.agreement')}>
          <img src={checkmark} className="agreement__icon card__icon" alt="Checkmark" />I agree
        </span>
      </div>
    </div>
  );
};

export default Agreement;
