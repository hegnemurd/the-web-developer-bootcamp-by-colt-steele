// The Callback Version
const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure("Connection Timeout");
    } else {
      success(`Here is your fake data from ${url}`);
    }
  }, delay);
};

//The Promise Version
const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timeout");
      } else {
        resolve(`Here is your fake data ${url}`);
      }
    }, delay);
  });
};

// -- fakeRequest with Callbacks --

// fakeRequestCallback(
//   "books.com/page1",
//   function (response) {
//     console.log("It worked");
//     console.log(response);
//     fakeRequestCallback(
//       "books.com/page2",
//       function (response) {
//         console.log("It worked again");
//         console.log(response);
//         fakeRequestCallback(
//           "books.com/page3",
//           function (response) {
//             console.log("It worked for the last time");
//             console.log(response);
//           },
//           function (err) {
//             console.log("Error for the last time", err);
//           }
//         );
//       },
//       function (err) {
//         console.log("Error Again", err);
//       }
//     );
//   },
//   function (err) {
//     console.log("Error", err);
//   }
// );

// -- fakeRequest with Promises --

// you can write the promise(s) with const or let:
// const request = fakeRequestPromise("yelp.com/api/coffee");

// you can write the promise(s) without const or let
// fakeRequestPromise("yelp.com/api/coffee/page1")
//   .then(() => {
//     console.log("It worked - Page1");
//     fakeRequestPromise("yelp.com/api/coffee/page2")
//       .then(() => {
//         console.log("It worked - Page2");
//         fakeRequestPromise("yelp.com/api/coffee/page3")
//           .then(() => {
//             console.log("It worked - page3");
//           })
//           .catch(() => {
//             console.log("Error - page3");
//           });
//       })
//       .catch(() => {
//         console.log("Error - Page2");
//       });
//   })
//   .catch(() => {
//     console.log("Error - Page1");
//   });

fakeRequestPromise("yelp.com/api/coffee/page1")
  .then((data) => {
    console.log("It worked - page1");
    console.log(data);
    return fakeRequestPromise("yelp.com/api/coffee/page2");
  })
  .then((data) => {
    console.log("It worked - page2");
    console.log(data);
    return fakeRequestPromise("yelp.com/api/coffee/page3");
  })
  .then((data) => {
    console.log("It worked - page3");
    console.log(data);
  })
  .catch((err) => {
    console.log("Error - Request Failed");
    console.log(err);
  });
