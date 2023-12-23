const AccountId = "122333" //use const for data whose value will remain constant throughout
let AccountEmail = "isha@gmail.com" //for storing variable data ALWAYS use let
var AccountPass = "pass" //var is outdated to use for variable data as it does not have fixed scope
AccountCity = "Noida" //it is messy to store variabale data like this

let AccountPrice; //if data is not initialized in the beginning, js will show undefined

console.log(AccountId);

/*
use table to print out multiple line in table form
*/

console.table([AccountEmail,AccountId,AccountPass,AccountPrice,AccountCity])