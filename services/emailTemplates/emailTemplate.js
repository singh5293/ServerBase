module.exports = mail => {
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>Below person tried contacting you. Please reach out to him</h3>
          <p>Customer Details</p>
          <div>
          <table style={border: "1px solid black"}>
          <thead>
          <tr>
          <th>Full Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Message</th>
          </tr>
          </thead>
          <tbody>
          <tr>
          <td>${mail.fullName}</td>
          <td>${mail.email}</td>
          <td>${mail.phone}</td>
          <td>${mail.message}</td>
          </tr>
          </tbody>
          </table>
          </div>
        </div>
      </body>
    </html>
  `;
};
