
const { hashPassword,randomPassWord } =require('../util');
const Config =require('../conf');
     


it('randomPassword generator should generate an 8 character string, when no argments are passed', () => {
  let tempPasswrd = Math.random().toString().slice(-Config.VERIFICATION_CODE_LENGTH);
  expect(randomPassWord().length).toEqual(8);
})

it('randomPassword should generate a random string whose length is the value of the arguemnt passed',()=>{
  let tempPasswrd = Math.random().toString().slice(-Config.VERIFICATION_CODE_LENGTH);
  expect(randomPassWord(7).length).toEqual(7);
})


