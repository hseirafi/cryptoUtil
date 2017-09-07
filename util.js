const crypto = require(`crypto`),
 Config = require(`./conf`),
    // larger salt means hashed passwords are more resistant to rainbow table, but
    // you get diminishing returns pretty fa    // more iterations means an attacker has to take longer to brute force an
    // individual password, so larger is better. however, larger also means longer
    // to hash the password. tune so that hashing the password takes about a
    // secondst
  config = { hashBytes: 32, saltByptes: 16, iterations: 27274, algo: `sha512`, encoding: `hex` },
  possible = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `w`, `x`, `y`, `z`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `W`, `X`, `Y`, `Z`, `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `.`, `_`, `!`];

export const randomPassWord = len => {
    len = (len || Config.RANDOM_PASS_MAX_LEN) + 1;
    let pass = ``;
    while (--len) {
      pass += possible[Math.floor(Math.random() * possible.length)];
    }
    return pass;
  },
 hashPassword = password => callback =>
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
    ),
  verifyPassword = password => hash => salt => callback =>
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