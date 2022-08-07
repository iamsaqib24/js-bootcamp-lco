
// these two do the exact same thing!
function forLoopDoubler (array) {
    for (let i = 0; i < array.length; i++) {
      array[i] = array[i] * 2;
    }
    return array;
  };
  
  function whileLoopDoubler (array) {
    let i = 0;
    while (i < array.length) {
      array[i] = array[i] * 2;
      i++;
    }
    return array;
  };
  
  console.log(forLoopDoubler([1, 2, 3])); 
  console.log(whileLoopDoubler([1, 2, 3])); 
  