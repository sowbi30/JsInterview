
// Async/await:


const myusers = {   // global object declaration  // result will  be userlist: array 0 
    userList:[]
}

const users = async() => {
    const response = await fetch('https://6557461bbd4bcef8b6125d04.mockapi.io/book-details')
    const userData = await response.json() // api json ah convert panni save pana variable:userdata
    anotherFunction(userData) // anotherFunction ulla userdatava call panro
    return userData
}


// async function la await panum pothu readability koodum and and users call pana we will get the json data in the browser.


const anotherFunction = (data) => {
     myusers.userList=data
    console.log(myusers) 
    return data
}
users()
console.log(myusers) // result will be  userlist: array 16 protoype : object.
