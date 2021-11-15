const expect = require('chai').expect;
const addNumbers = require('../src/main');


describe('addNumbers()',()=>{
     it('should get the sum of two numbers',()=>{
        let expected = 15;
        let actual = addNumbers(5,10);
        expect(actual).to.equal(expected);
     })
     it('should let the user know if theyve entered 2 booleans',()=>{
         let expected = "No booleans please";
         let actual = addNumbers(true, false);
         expect(actual).to.equal(expected);
     })

     it('should return if a user has entered a non number',()=>{
         let expected = 'Please enter two numbers';
         let actual = addNumbers('the','dog');
         expect(actual).to.equal(expected);
     })

     it('Should let user know if they have entered too many args',()=>{
         let expected = 'Too many numbers!';
         let actual = addNumbers(5,63,4,6,2,4,4);
         expect(actual).to.equal(expected);
     })

     it('should use default params of 0 if user does not pass in values',()=>{
         let expected = 0;
         let actual = addNumbers();
         expect(actual).to.equal(expected);
     })
    });