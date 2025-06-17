import React from 'react';
import '../../index.css';

const AddUser = () => (
  <div className="addUser">
    <h3 style={{ color: 'red' }}>ADD NEW USER/CUSTOMER</h3>
    <form>
      <label htmlFor="uname">User_Name :</label>
      <input type="text" name="uname" id="uname" />
      <label htmlFor="uemail">User_Email :</label>
      <input type="email" name="uemail" id="uemail" />
      <label htmlFor="unumber">User_Number :</label>
      <input type="tel" name="unumber" id="unumber" pattern="[0-9]{10}" />
      <input type="hidden" name="upassword" value="2330" />
      <button type="submit">Add_User</button>
    </form>
  </div>
);

export default AddUser;
