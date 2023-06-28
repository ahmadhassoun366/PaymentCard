import React, { useState } from 'react';
import logo from '../Assets/img1.png';
import bg from '../Assets/img2.jpg';

const Card = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cardOwner, setCardOwner] = useState('');
  const [cvc, setCVC] = useState('');
  const [formData, setFormData] = useState({
    cardNumber: '',
    expirationDate: '',
    cardOwner: '',
    cvc: ''
  });

  const handleCardNumberChange = (e) => {
    const formattedCardNumber = e.target.value.replace(/[^0-9]/g, '');
    const truncatedCardNumber = formattedCardNumber.slice(0, 16);
    const spacedCardNumber = truncatedCardNumber.replace(/\s/g, '').replace(/(.{4})/g, '$1 ');
  
    setCardNumber(spacedCardNumber);
    setFormData({ ...formData, cardNumber: spacedCardNumber });
  };

  const handleExpirationDateChange = (e) => {
    const formattedExpirationDate = e.target.value.replace(/[^0-9/]/g, '');
    setExpirationDate(formattedExpirationDate);
    setFormData({ ...formData, expirationDate: formattedExpirationDate });
  };

  const handleCardOwnerChange = (e) => {
    setCardOwner(e.target.value);
    setFormData({ ...formData, cardOwner: e.target.value });
  };

  const handleCVCChange = (e) => {
    const formattedCVC = e.target.value.replace(/[^0-9]/g, '');
    setCVC(formattedCVC);
    setFormData({ ...formData, cvc: formattedCVC });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex flex-col bg-[#282A37] md:flex-row  w-full md:w-2/4 m-5">
      {/* left Side */}
      <div className="px-8 pt-6 pb-8 mb-4 md:w-2/4">
        <div className="mb-6 bg-gradient-to-b from-gray-900 to-blue-900 bg-gradient-to-r px-6 py-2 rounded-lg">
          <div className="flex flex-col justify-between mb-4">
            <div className="text-gray-200 text-lg ">Credit Card</div>
            <img src={logo} alt="" className="h-16 w-16" />
            <div className="text-gray-200 text-lg text-center">
              {cardNumber || '#### #### #### ####'}
            </div>
          </div>
          <div className="flex justify-end items-center gap-1 mb-4">
            <div className="text-gray-200 text-sm">Valid Thru </div>
            <div className="text-gray-200">{expirationDate || ' MM/YY'}</div>
          </div>
          <div className="flex justify-between mb-4">
            <div className="text-gray-200">{cardOwner || 'Card Owner'}</div>
            <div className="text-gray-200">{cvc || 'cvc'}</div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              className="block text-[#C0C0C8] text-sm font-bold mb-2"
              htmlFor="cardOwner"
            >
              Name of credit card owner
            </label>
            <input
              className="shadow appearance-none rounded-lg w-full py-2 px-3 text-white bg-gray-700 leading-tight focus:shadow-outline"
              id="cardOwner"
              type="text"
              value={cardOwner}
              onChange={handleCardOwnerChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-[#C0C0C8] text-sm font-bold mb-2"
              htmlFor="cardNumber"
            >
              card number
            </label>
            <input
              className="shadow appearance-none rounded-lg w-full py-2 px-3 text-white bg-gray-700 leading-tight focus:shadow-outline"
              id="cardNumber"
              type="text"
              value={cardNumber}
              onChange={handleCardNumberChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-[#C0C0C8] text-sm font-bold mb-2"
              htmlFor="expirationDate"
            >
              expiration date
            </label>
            <input
              className="shadow appearance-none rounded-lg w-full py-2 px-3 text-white bg-gray-700 leading-tight focus:shadow-outline"
              id="expirationDate"
              type="text"
              value={expirationDate}
              onChange={handleExpirationDateChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-[#C0C0C8] text-sm font-bold mb-2"
              htmlFor="cvc"
            >
              cvc
            </label>
            <input
              className="shadow appearance-none rounded-lg w-full py-2 px-3 text-white bg-gray-700 leading-tight focus:shadow-outline"
              id="cvc"
              type="text"
              value={cvc}
              onChange={handleCVCChange}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-[#42BBFF] hover:bg-blue-700 bg-gray-700 font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Pay Now
            </button>
          </div>
        </form>
      </div>
      {/* Right Side */}
      <div className="w-full md:w-2/4 hidden md:block">
        <div className="relative h-full">
        <img src={bg} alt="" className="h-full opacity-25 " />
          <div className="flex flex-col md:flex-col justify-center items-center w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-2xl text-white font-bold mb-2">Title</h1>
            <p className="w-3/4 text-[#C0C0C8] text-justify ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet sint
              itaque quo ipsa ut! Doloribus rerum ullam quam qui deserunt, earum
              dolore adipisci perspiciatis labore quas est eligendi iusto eius.
            </p>
          </div>
          <div className="absolute bottom-0 right-0 text-right pr-4 pb-4">
        <p className="text-white text-5xl ">CF</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
