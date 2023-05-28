export async function postNyeBolig(payload) {
  const url = "https://wimczkvwnsepkvefdtzp.supabase.co";
  const res = await fetch(url + "/rest/v1/nyebolig", {
    method: "POST",
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpbWN6a3Z3bnNlcGt2ZWZkdHpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUyNjY5NTYsImV4cCI6MjAwMDg0Mjk1Nn0.wKsEPjpUvAZEzzuau6t0gW8X5-F3kmoIvaAcoUV-BK4",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpbWN6a3Z3bnNlcGt2ZWZkdHpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUyNjY5NTYsImV4cCI6MjAwMDg0Mjk1Nn0.wKsEPjpUvAZEzzuau6t0gW8X5-F3kmoIvaAcoUV-BK4",
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(payload),
  });

  return await res.json();
}

// export async function patchNyeBolig(payload) {
//   const url = "https://wimczkvwnsepkvefdtzp.supabase.co";
//   const res = await fetch(url + "/rest/v1/nyebolig?id=eq.1", {
//     method: "PATCH",
//     headers: {
//       apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpbWN6a3Z3bnNlcGt2ZWZkdHpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUyNjY5NTYsImV4cCI6MjAwMDg0Mjk1Nn0.wKsEPjpUvAZEzzuau6t0gW8X5-F3kmoIvaAcoUV-BK4",
//       Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpbWN6a3Z3bnNlcGt2ZWZkdHpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUyNjY5NTYsImV4cCI6MjAwMDg0Mjk1Nn0.wKsEPjpUvAZEzzuau6t0gW8X5-F3kmoIvaAcoUV-BK4",
//       "Content-Type": "application/json",
//       Prefer: "return=minimal",
//     },
//     body: JSON.stringify(payload),
//   });

//   return await res.json();
// }

//

// Boliglån POST
/*
const options = {
  method: 'POST',
  headers: {
    apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpbWN6a3Z3bnNlcGt2ZWZkdHpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUyNjY5NTYsImV4cCI6MjAwMDg0Mjk1Nn0.wKsEPjpUvAZEzzuau6t0gW8X5-F3kmoIvaAcoUV-BK4',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpbWN6a3Z3bnNlcGt2ZWZkdHpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUyNjY5NTYsImV4cCI6MjAwMDg0Mjk1Nn0.wKsEPjpUvAZEzzuau6t0gW8X5-F3kmoIvaAcoUV-BK4',
    'Content-Type': 'application/json',
    Prefer: 'return=minimal'
  },
  body: '{"id":2,"type":"Andel","adresse":"Rubinsteinsvej 14, 2tv","postnr":2450,"by":"København","land":"Danmark","pris":400000,"betaling":1800000,"indkomst":70000,"gaeld":500000}'
};

fetch('https://wimczkvwnsepkvefdtzp.supabase.co/rest/v1/nyebolig', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
*/

//Here we fetch and return the data in the in the data base, sent by the form to the supabase.

//*************************************** */

// The (payload) argument of the function here ---> Is the object in the callback function in Payment.js
// The body here stringify that object.

//*********************************** */

// 10. We ask the function to return something, the array ( posted ? ).
// 11. We make the function async and create a const res with await for the fetching.

//*********************************** */

// 12. In CheckoutForm the submit function is the ASYNC and insertOrder() the AWAIT value of the const to be returned.
