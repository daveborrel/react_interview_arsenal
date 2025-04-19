export const PriceCalculator = () => {

    return (
      <div>
        <label htmlFor="type">Select Type:</label>
        <select id="type" name="type" value="standard" onChange={}>
          <option value="standard">Standard</option>
          <option value="seasonal">Seasonal</option>
          <option value="weight">Weight</option>
        </select>
  
        <label htmlFor="weight">Weight (kg):</label>
        <input type="number" id="weight" name="weight" step="0.01" />
  
        <label htmlFor="totalPrice">Total Price ($):</label>
        <input type="number" id="totalPrice" name="totalPrice" step="0.01"/>
  
        <div>Discounted price:<span id="discountedPrice">{/*discounted price expected here */}</span></div>
      </div>
    );
  };