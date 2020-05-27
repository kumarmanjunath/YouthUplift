// import React, { Component } from "react";

// export default class mailsend extends Component {
//   constructor() {
//     super();
//     this.sendEmail = this.sendEmail.bind(this);
//   }
//   sendEmail() {
//     Email.send({
//       Host: `${SMTP_HOST}`,
//       Username: `${SMTP_GMAIL}`,
//       Password: `${SMTP_PASSWORD}`,
//       To: "hegdeaishwarya23@gmail.com",
//       From: "kumarmanjunath197@gmail.com",
//       Subject: "Test email",
//       Body:
//         "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>",
//     }).then((message) => alert(message));
//   }
//   render() {
//     return (
//       <div>
//         <input type='button' value='Send Email' onclick='sendEmail()'></input>
//       </div>
//     );
//   }
// }
