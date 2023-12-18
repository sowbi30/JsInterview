// async : GET method

const getUsers = async () => {
    try {
      const response = await fetch('https://6557461bbd4bcef8b6125d04.mockapi.io/book-details', 
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const jsonUsers = await response.json();
      console.log(jsonUsers);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  
  getUsers();
  

// api json ah convert pani save pana variable:userdata...
// json ilama text ah irundha text/pain
//response.text();