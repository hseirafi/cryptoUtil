"use Strict"; 
jest.mock('../request');
import { hashPassword, randomPassWord, verifyPassword } from "../util";
import Config from "../conf";
it("randomPassword generator should generate an 8 character string, when no argments are passed", () => {
  let tempPasswrd = Math.random()
    .toString()
    .slice(-Config.VERIFICATION_CODE_LENGTH);
  expect(randomPassWord().length).toEqual(8);
});

  let tempPasswrd = Math.random()
    .toString()
    .slice(-Config.VERIFICATION_CODE_LENGTH);
  expect(randomPassWord(7).length).toEqual(7);
});


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
