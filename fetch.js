//while fetching we get the promise


const users = fetch('https://6557461bbd4bcef8b6125d04.mockapi.io/book-details').then(response => {
    return response.json()
}).then(users =>{
    users.forEach(user => (console.log(user)))
})


console.log(users)  // first excute agum  promise : pending 

//note:

// second response execute agum  ?.then(response => { console.log(response) }) response: info ah iruku

// ? .then(response => {console.log(response.json())} promise:pending ah irukum

//  ? .then(response => {
//     return response.json()
// }).then(users =>{
//     console.log(users)
// })  actual api info varum. like an json format