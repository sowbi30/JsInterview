
function one(cb) {
    cb('sowmi');
  }
  
  function two(name) {
    console.log(`Hello, ${name}`);
  }
  
  one(two);

  // op : Hello, sowmi