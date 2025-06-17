import React from 'react';
import '../../index.css';

const UpdateProduct = () => (
  <div className="updateProduct">
    <h3 style={{ fontWeight: 'bolder', color: 'seagreen' }}>UPDATE EXISTING PRODUCT :</h3>
    <form>
      <label htmlFor="pid">Product_Id:</label>
      <input type="hidden" name="pid" id="pid" /><br />
      <label htmlFor="pname">Product_Name :</label>
      <input type="text" name="pname" id="pname" /><br />
      <label htmlFor="pprice">Product_Price :</label>
      <input type="text" name="pprice" id="pprice" /><br />
      <label htmlFor="pdescription">Product_Desc :</label><br />
      <textarea name="pdescription" id="pdescription" cols="10" rows="1"></textarea><br />
      <button type="submit">Update_Product</button>
    </form>
  </div>
);

export default UpdateProduct;
