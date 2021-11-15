function addNumbers(x=0, y=0) {    // what if x and y don't exist or are undefined
    if(arguments.length >2) return 'Too many numbers!'
    //what if x and y are boolean values
    if(typeof x ==='boolean' || typeof y ==='boolean'){
        return "No booleans please";
    }
    // what if x and y are stringified numbers
    let num1 = Number(x);
    let num2 = Number(y);
    // what if x and y arent numbers
    if(isNaN(num1) || isNaN(num2)){
        return 'Please enter two numbers';
    }

    let sum = x + y;
    return sum;
  }

  module.exports = addNumbers;