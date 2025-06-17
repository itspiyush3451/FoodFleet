import React from 'react';
import '../../index.css';

const UpdateAdmin = () => (
  <div className="updateAdmin">
    <h3 style={{ color: 'red' }}>UPDATE EXISTING ADMIN / PARTNER DETAILS</h3>
    <form>
      <label htmlFor="adminId">Admin_Id :</label>
      <input type="hidden" name="adminId" id="adminId" /><br />
      <label htmlFor="adminName">Admin_Name :</label>
      <input type="text" name="adminName" id="adminName" /><br />
      <label htmlFor="adminNumber">Admin_Number :</label>
      <input type="tel" name="adminNumber" id="adminNumber" pattern="[0-9]{10}" /><br />
      <label htmlFor="adminEmail">Admin_Email :</label>
      <input type="email" name="adminEmail" id="adminEmail" /><br />
      <button type="submit">Update_Admin</button>
    </form>
  </div>
);

export default UpdateAdmin;
