import React from 'react';
import '../../index.css';

const AddProduct = () => (
  <div className="addProducts">
    <h3 style={{ fontWeight: 'bolder', color: 'seagreen' }}>ADD NEW PRODUCT :</h3>
    <form>
      <label htmlFor="pname">Product_Name :</label>
      <input type="text" name="pname" id="pname" placeholder="Enter Product Name....." /><br />
      <label htmlFor="pprice">Product_Price :</label>
      <input type="text" name="pprice" id="pprice" placeholder="Enter Product Price...." /><br />
      <label htmlFor="pdescription">Product_Desc :</label><br />
      <textarea name="pdescription" id="pdescription" cols="15" rows="1" placeholder="Enter Product Description.."></textarea><br />
      <button type="submit">Add_Product</button>
    </form>
  </div>
);

export default AddProduct;
