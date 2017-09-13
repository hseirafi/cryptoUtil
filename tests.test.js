"use Strict"; 
const Jest = require('jest'); 
import { hashPassword, randomPassWord, verifyPassword } from "../util";
import Config from "./conf";




// it("randomPassword should generate a random 8 character long string, when no argments are passed", () => {
//   expect(randomPassWord().length).toEqual(8);
// });
// it("randomPassword should generate a random 10 character long string, when 10 is passed", () => {
//   expect(randomPassWord(10).length).toEqual(10);
// });





// let tempPasswrd = Math.random()
// .toString()
// .slice(-Config.VERIFICATION_CODE_LENGTH);
// console.log(randomPassWord('string').length);

// let tempPasswrd = Math.random()
// .toString()
// .slice(-Config.VERIFICATION_CODE_LENGTH);
// hashPassword(tempPasswrd)((err, pass) => {
// if (err) {
//   console.log("error");
// }
// if (pass) {
//   console.log()
//   console.log("pass");
// }
// });
