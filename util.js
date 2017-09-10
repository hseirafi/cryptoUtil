import { fromNullable, All} from './helpers';
const crypto = require(`crypto`),
  Config = require(`./conf`),

  // larger salt means hashed passwords are more resistant to rainbow table, but
  // you get diminishing returns pretty fa    // more iterations means an attacker has to take longer to brute force an
  // individual password, so larger is better. however, larger also means longer
  // to hash the password. tune so that hashing the password takes about a
  // secondst 
  config = { hashBytes: 32, saltByptes: 16, iterations: 27274, algo: `sha512`, encoding: `hex` }; 
  

const randomString = len => {
  len = (len || Config.RANDOM_PASS_MAX_LEN) + 1;
  const possible = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `w`, `x`, `y`, `z`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `W`, `X`, `Y`, `Z`, `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `.`, `_`, `!`],
   rnd = crypto.randomBytes(len),value = new Array(len);
  let pass = ``;
  while (--len) {
    pass += (possible[rnd[len] % possible.length]);
  }
  return pass;
};
function *indexingGenerator(val) {
  let map = {};
  let resetCount = 20;
  while (true) {
    if (!map[1]) {
      let count = 20;
      resetCount = 20; 
      while (--count) {
        map[count] = randomString(val); 
      }
    };
    resetCount--;
    yield map[resetCount];
    delete map[resetCount];
    }
};
const rng = indexingGenerator();

export const randomPassWord = len => typeof len === "undefined" ? reg.next().value: callback =>
  typeof callback === 'undefined' ? 'handel error:callback' : Number.isInteger(len) && len >= 5 ?
    callback((() => randomString(len))('you need to handle success/err on argument pass'))
    : callback(null, "must be an int greater than 5");

export const hashPassword = password => callback =>
  crypto.randomBytes(
    config.saltByptes,
    (err, salt) =>
      err
        ? callback(err)
        : (salt =
          salt.toString(config.encoding) &&
          crypto.pbkdf2(
            password,
            salt,
            config.iterations,
            config.hashBytes,
            config.algo,
            (err, hash) =>
              err
                ? callback(err)
                : callback(null, {
                  hash: hash.toString(config.encoding),
                  salt: salt
                })
          ))
  );
  
  export const verifyPassword = password => hash => salt => callback =>
    crypto.pbkdf2(
      password,
      salt,
      config.hashBytes,
      config.algo,
      (err, verify) =>
        (verify =
          verify.toString(config.encoding) && verify === hash
            ? callback()
            : callback("verification failed"))
    );

let tempPasswrd = Math.random()
  .toString()
  .slice(-Config.VERIFICATION_CODE_LENGTH);
   


   
// function curry(a) {
//   console.log(arguments)
//   console.log(this)
//   let arg= Array.prototype.slice.call(arguments,0)
//   console.log(arg)
//   console.log([...arguments])
//   return function (b) {
//     console.log(this)
//     arguments
//     arg = Array.prototype.slice.call(arguments, 1)
//     console.log(arg)
//    return  a+b}}

  //  console.log(curry(5)(6))





  //  function curry(fn, length) {
  //   length = length || fn.length;
  //   return function currified() {
  //     var args = [].slice.call(arguments);
  
  //     if (args.length === 0)
  //       return currified;
  
  //     if (args.length >= length)
  //       return fn.apply(this, args);
  
  //     var child = fn.bind.apply(fn, [this].concat(args));
  //     return curry(child, length - args.length);
  //   };
  //  }
  
  //  curry()



