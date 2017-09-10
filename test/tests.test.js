"use Strict"; 
//jest.mock('../request');
import { hashPassword, randomPassWord, verifyPassword } from "../util";
import Config from "../conf";

it("randomPassword should generate an 8 character string, when no argments are passed", () => {
  let tempPasswrd = Math.random()
    .toString()
    .slice(-Config.VERIFICATION_CODE_LENGTH);
  expect(randomPassWord().length).toEqual(8);
});
it("randomPassword should generate an 8 character string, when 8 int is passed", () => {
  let tempPasswrd = Math.random()
    .toString()
    .slice(-Config.VERIFICATION_CODE_LENGTH);
  expect(randomPassWord(8)((success,error)=>success?success:error).length).toEqual(8);
});








it("randomPassword should generate 9 character string, when any number between 6 and 20 is passed", () => {
 
  expect(randomPassWord(9).length).toEqual(9);
});

it("randomPassword generator should generate an 8 character string, when no argments are passed", () => {
  let tempPasswrd = Math.random()
    .toString()
    .slice(-Config.VERIFICATION_CODE_LENGTH);
  expect(randomPassWord().length).toEqual(8);
});


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
