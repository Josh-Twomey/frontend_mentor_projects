import { useState } from "react";

export default function Form(props) {
    
const [formData, setFormData] = useState({
 mortgageAmount: "",
 mortgageTerm: "",
 interestRate: "",
 calculationType:"repayment"
})

const handleInputChange = (e) => {
 const { name, value } = e.target;
 setFormData({...formData, [name]: value});
 };


const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log(calculateMortgageValues(formData.mortgageAmount,(formData.interestRate/1200),(formData.mortgageTerm*12),(formData.calculationType)))
  };

const clearForm = () => {
  props.clearInfo()
  setFormData({
    mortgageAmount: "",
    mortgageTerm: "",
    interestRate: "",
    calculationType: "repayment",
  });
}

  function calculateMortgageValues(mortgageAmount,interestRate,term,calculationType) {
    const monthlyPayment =
      ((mortgageAmount * (interestRate * Math.pow(1 + interestRate, term))) / (Math.pow(1 + interestRate, term) - 1));
    const totalLoanAmount = monthlyPayment * term
    const interestAmount = totalLoanAmount - mortgageAmount
    if (calculationType === "interest") {
      props.addInterest(interestAmount.toFixed(2),totalLoanAmount.toFixed(2))
    } else {
      props.addRepayment(monthlyPayment.toFixed(2), totalLoanAmount.toFixed(2));
    }
  }
 
    return (
      <div className="w-full bg-white p-6 rounded-l-3xl">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-Jakarta font-bold text-Blue-900">
            Mortgage Calculator
          </h1>
          <button
            onClick={clearForm}
            className="font-Jakarta font-normal text-sm underline text-Blue-900 cursor-pointer"
          >
            Clear All
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <label className="form-control w-full pt-4" htmlFor="mortgage-amount">
            <div className="label">
              <span className="text-base font-Jakarta font-medium text-Blue-900">
                Mortgage Amount
              </span>
            </div>
            <div className="group flex justify-center items-center active:border-Lime active:cursor-pointer hover:border-black w-full border-gray-500 border rounded-md">
              <div className="font-Jakarta font-bold p-4 group-active:bg-Lime bg-Blue-100 text-Blue-700 rounded-l-md">
                R
              </div>
              <input
                id="mortgage-amount"
                name="mortgageAmount"
                onChange={handleInputChange}
                value={formData.mortgageAmount}
                type="number"
                className="rounded-r-md w-full h-full active:cursor-pointer focus:outline-none font-Jakarta font-bold text-lg text-Blue-900 p-4 border-transparent arrow-hide"
                required
              />
            </div>
          </label>
          <div className="flex justify-between align-middle mt-4 mb-8">
            <label className="form-control w-45" htmlFor="mortgage-term">
              <div className="label">
                <span className="text-base font-Jakarta font-medium text-Blue-900">
                  Mortgage Term
                </span>
              </div>
              <div className="group flex justify-center items-center active:border-Lime active:cursor-pointer hover:border-black w-full border-gray-500 border rounded-md">
                <input
                  id="mortgage-term"
                  name="mortgageTerm"
                  onChange={handleInputChange}
                  value={formData.mortgageTerm}
                  type="number"
                  className="rounded-l-md w-full h-full active:cursor-pointer focus:outline-none font-Jakarta font-bold text-lg text-Blue-900 p-4 border-transparent arrow-hide"
                  required
                />
                <div className="font-Jakarta font-bold p-4 group-active:bg-Lime bg-Blue-100 text-Blue-700 rounded-r-md">
                  years
                </div>
              </div>
            </label>
            <label className="form-control w-45" htmlFor="interest-rate">
              <div className="label">
                <span className="text-base font-Jakarta font-medium text-Blue-900">
                  Interest Rate
                </span>
              </div>
              <div className="group flex justify-center items-center active:border-Lime active:cursor-pointer hover:border-black w-full border-gray-500 border rounded-md">
                <input
                  id="interest-rate"
                  name="interestRate"
                  onChange={handleInputChange}
                  value={formData.interestRate}
                  type="number"
                  step="0.01"
                  min={0}
                  max={100}
                  className="rounded-l-md w-full h-full active:cursor-pointer focus:outline-none font-Jakarta font-bold text-lg text-Blue-900 p-4 border-transparent arrow-hide"
                  required
                />
                <div className="font-Jakarta font-bold p-4 group-active:bg-Lime bg-Blue-100 text-Blue-700 rounded-r-md">
                  %
                </div>
              </div>
            </label>
          </div>
          <label className="form-control w-full pt-4" htmlFor="calculationType">
            <div className="label">
              <span className="text-base font-Jakarta text-Blue-900 font-medium">
                Mortgage Type
              </span>
            </div>

            <label
              className={`label cursor-pointer flex flex-row justify-start form-control w-full border rounded-md p-3 ${
                formData.calculationType == "repayment"
                  ? "border-Lime bg-Lime bg-opacity-30"
                  : "border-Blue-700"
              }`}
            >
              <input
                type="radio"
                name="calculationType"
                className="radio checked:bg-Lime"
                value="repayment"
                checked={formData.calculationType === "repayment"}
                onChange={handleInputChange}
              />
              <span className="text-base font-Jakarta font-medium text-Blue-900 pl-2">
                Repayment
              </span>
            </label>

            <label
              className={`label cursor-pointer flex flex-row justify-start form-control w-full border rounded-md p-3 mt-2 ${
                formData.calculationType == "interest"
                  ? "border-Lime bg-Lime bg-opacity-30"
                  : "border-Blue-700"
              }`}
            >
              <input
                type="radio"
                name="calculationType"
                className="radio checked:bg-Lime"
                value="interest"
                checked={formData.calculationType === "interest"}
                onChange={handleInputChange}
              />
              <span className="text-base font-Jakarta font-medium text-Blue-900 pl-2">
                Interest Only
              </span>
            </label>
          </label>
          <button
            className="flex items-start ml-0 py-2 px-6 rounded-full m-5 bg-Lime font-Jakarta font-bold text-base text-Blue-900"
            type="submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#133041"
                d="M18.75 2.25H5.25a1.5 1.5 0 0 0-1.5 1.5v16.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V3.75a1.5 1.5 0 0 0-1.5-1.5Zm-10.5 16.5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 18.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 15a1.125 1.125 0 1 1 0-2.25A1.125 1.125 0 0 1 12 15Zm3.75 3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm1.5-5.25a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v3.75Z"
              />
            </svg>
            &nbsp; Calculate Repayments
          </button>
        </form>
      </div>
    );
}