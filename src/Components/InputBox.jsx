import { useId } from "react";
import React from "react";

function InputBox({
  label,
  amount,
  currencyDisabled = false,
  amountDisabled = false,
  onCurrencyChange,
  onAmountChange,
  currencyOptions = [],
  selectCurrency = "usd",

  className = "", //user can inject their own css
}) {
  const amountInputId = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          id={amountInputId}
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount} //default value
          onChange={
            (e) => onAmountChange && onAmountChange(Number(e.target.value)) //&& is used to act as a checker whether onAmountChange value already exists or not //and value is converted to a number(imp)
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency} //default value
          disabled={currencyDisabled}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} //string
        >
          {currencyOptions.map(
            (
              currency //looping through currencies using map
            ) => (
              <option value={currency} key={currency}>
                {currency}
              </option>
            ) //key for loops in react for performance and we display that currency in the loop
          )}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
