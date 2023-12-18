

// post method:
const usedata = [
    {
      book: 'Principal Functionality Executive',
      author: 'Jan Heidenreich',
      ISBNno: 63800,
      publishdate: '2066-11-01T16:16:07.517Z',
      authorname: 'Timmothy',
      id: 1
    },
    {
      book: 'Future Infrastructure Agent',
      author: 'Gustavo Gerhold',
      ISBNno: 62420,
      publishdate: '2018-09-07T03:31:21.604Z',
      authorname: 'Zoey',
      id: 2
    }
  ];
  
  const getUsers = async () => {
    try {
      const response = await fetch('http://httpbin.org/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Corrected header key
        },
        body: JSON.stringify(usedata.book) // Corrected variable name //payloads--
      });
  
      const jsonUsers = await response.json();
      console.log(jsonUsers);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  getUsers();

  //read api documents for post methods


//   //url-ex

//   const getDataFromForm =() =>{
//     const requestobj = {
//         firstName: 'Visit',
//         lastName : 'Sowbi',
//         limit : 3
//     }
//     return requestobj
//   }

//   const buildRequesturl = (requestData) => {
//     return `http://xxxxxxxxxxxxx.com?book=${requestData.book}&author=${requestData.author}&limitTo=${requestData.categories}`
//   }

//   const requestJoke = async (url) => {
//     const response = await fetch (url)
//     const jsonResponse = await response.json()
//     const joke = jsonResponse.value.joke
//     postjokeToPage(joke)
//   }
//   const postjokeToPage = (joke) => {
//     console.log(joke)
//   }


  // V8 ENGINE:

//   HEAP   CALL STACK  
//              ..main()

//   WEBAPIS
//   DOM
//   AJSX(XMLHttpRequest)
//   setImmediate
//   setTimeout
//   setInterval

//   event-loop   callbackqueue:
//                   onclick , onload, onDone


// ex api ninjas

// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/convertcurrency?want=EUR&have=USD&amount=5000',
//     headers: { 'X-Api-Key': 'YOUR_API_KEY'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });