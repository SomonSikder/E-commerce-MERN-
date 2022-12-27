// import axios from "axios";
// import React, { useState } from "react";

// const Registration = () => {
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios("http://localhost:4000/api/user", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json ",
//       },
//       body: JSON.stringify(data),
//     })
//       .then((res) => res.json())
//       .then((result) => console.log(result));
//   };

//   const onChange = (e) => {
//     setData({
//       ...data,
//       [e.target.name]: e.target.value,
//     });
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           {" "}
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={data.name}
//             onChange={onChange}
//           />
//         </div>

//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={data.email}
//             onChange={onChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             name="password"
//             placeholder="******"
//             value={data.password}
//             onChange={onChange}
//           />
//         </div>
//         <input type="submit" value="Registar" />
//       </form>
//     </div>
//   );
// };

// export default Registration;
