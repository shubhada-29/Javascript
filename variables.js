const accountId = 121212
let accountEmail = "shubhada@gmail.com"
var accountPassword = "232323"
accountCity = "Kolhapur"
let accountSate;

// accountId = 11111   //Not allowed
console.log(accountId);


/*
  prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "sb@gamil.com"
acoountPassword = "121212"
accountCity = "Sangli"

console.table([accountId,accountEmail, accountPassword,accountCity,accountSate])
