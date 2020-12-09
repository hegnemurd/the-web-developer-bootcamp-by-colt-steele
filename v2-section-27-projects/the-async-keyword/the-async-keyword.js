// async function hello() {

// }

// const sing = async () => {
//   //   throw new Error("Error");
//   //   throw "Error";
//   return "lalala";
// };

// sing()
//   .then((data) => {
//     console.log("Promise resolved with:", data);
//   })
//   .catch((err) => {
//     console.log("Error", err);
//   });

const login = async (username, password) => {
  if (!username || !password) throw "Missing Credentials";
  if (password === "password123") return "Welcome";
  throw "Invalid Password";
};

login("Abcd1234", "password123")
  .then((msg) => {
    console.log("Logged in");
    console.log(msg);
  })
  .catch((err) => {
    console.log("Error");
    console.log(err);
  });
