// <script>
// methods: {
//  async registerUser() {
//  await fetch("http://localhost:3000/api/user/register", {
//  method: "POST",
//  headers: { "Content-Type": "application/json" },
//  body: JSON.stringify({
//  name: "this.userInfo.name",
//  email: "this.userInfo.email",
//  password: "this.userInfo",
//  }),
//  });
//  },
//  },
//  </script>

//  <script>
// import axios from "axios";
// export default {
//  name: "register",
//  data() {
//  return {
//  name: "",
//  email: "",
//  password: "",
//  };
//  },
//  methods: {
//  async registerUser() {
//  await axios.post("http://localhost:3000/api/user/register", {
//  name: this.name,
//  email: this.email,
//  password: this.password,
//  });
//  },
//  },
// };
// </script>

// export default {
//   name: "register",
//   data() {
//     return {
//       name: "",
//       email: "",
//       password: "",
//     };
//   },
//   methods: {
//     async registerUser() {
//       await fetch("http://localhost:3000/api/user/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           name: "this.name",
//           email: "this.email",
//           password: "this.password",
//         }),
//       });
//     },
//   },
// };
// </script>