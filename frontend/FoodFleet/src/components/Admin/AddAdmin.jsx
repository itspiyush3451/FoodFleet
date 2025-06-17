import React from 'react';
import '../../index.css';

const AddAdmin = () => (
  <div className="addAdmin">
    <form>
      <input type="email" name="adminEmail" placeholder="Enter email..." className="adminEmail" required /><br />
      <label htmlFor="adminNumber">Admin_Number :</label>
      <input type="tel" name="adminNumber" id="adminNumber" placeholder="Enter 10 digit mobile number..." className="adminNumber" pattern="[0-9]{10}" required /><br />
      <input type="hidden" name="adminPassword" value="1234" />
      <button type="submit">Add_Admin</button>
    </form>
  </div>
);

export default AddAdmin;
