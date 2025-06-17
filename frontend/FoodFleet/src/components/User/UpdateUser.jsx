import React from 'react';
import '../../index.css';

const UpdateUser = () => (
  <div className="updateUser">
    <h3 style={{ color: 'red' }}>UPDATE EXISTING USER/CUSTOMER</h3>
    <form>
      <label htmlFor="uid">User_Id :</label>
      <input type="hidden" name="uid" id="uid" /><br />
      <label htmlFor="uname">User_Name :</label>
      <input type="text" name="uname" id="uname" /><br />
      <label htmlFor="uemail">User_Email :</label>
      <input type="email" name="uemail" id="uemail" /><br />
      <label htmlFor="unumber">User_Number :</label>
      <input type="tel" name="unumber" id="unumber" pattern="[0-9]{10}" /><br />
      <button type="submit">Update_User</button>
    </form>
  </div>
);

export default UpdateUser;
