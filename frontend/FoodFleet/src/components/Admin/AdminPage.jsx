import React from 'react';
import '../../index.css';

const AdminPage = () => (
  <div className="adminPage">
    <a className="back" href="/login">Back</a>
    <section className="tables">
      <div className="admins">
        <h2>Admins :</h2>
        <table>
          <thead>
            <tr>
              <th>Admin_Id</th>
              <th>Admin_Name</th>
              <th>Admin_Email</th>
              <th>Admin_Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Map admin data here */}
          </tbody>
        </table>
        <a href="/addAdmin" className="btns">Add_Admin</a>
      </div>
      <div className="users">
        <h2>Users :</h2>
        <table>
          <thead>
            <tr>
              <th>User_Id</th>
              <th>User_Name</th>
              <th>User_Email</th>
              <th>User_Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Map user data here */}
          </tbody>
        </table>
      </div>
    </section>
  </div>
);

export default AdminPage;
