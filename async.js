async function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Async data");
      }, 2000);
    });
  }
  
  async function fetchDataAndLog() {
    let result = await fetchData();
    console.log(result);
  }
  
  fetchDataAndLog();


  const users = async() => {
    const responses = await fetch('https://6557461bbd4bcef8b6125d04.mockapi.io/book-details')
    const userData = await responses.json()
    console.log(userData)
    return userData
}
users()

// async function la await panum pothu readability koodum and and users call pana we will get the json data in the browser.

