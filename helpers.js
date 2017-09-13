export const Right = x => ({
    chain: f => f(x),
    map: f => Right(f(x)),
    fold: (f, g) => g(x),
    inpsect: () => `Right(${x})`
  }),
  Left = x => ({
    chain: f => Left(x),
    map: f => Left(x),
    fold: (f, g) => f(x),
    inspect: () => `Left(${x}`
  }),
  fromNullable = x => (x != null ? Right(x) : Left(null)),
  tryCatch = f => {
    try {
      return Right(f());
    } catch (e) {
      return Left(e);
    }
  },
  // semi groups that are associateve;
  Sum = x => ({
    x,
    concat: ({ x: y }) => Sum(x + y),
    inspect: () => `Sum(${x})`
  }),
  All = x => ({
    x,
    concat: ({ x: y }) => All(x && y),
    inspect: () => `All(${x})`
  }),
  First = x => ({
    x,
    concat: _ => First(x),
    inspect: () => `First(${x})`
  }),
  curryn = n => f => {
    const next = (n, args) => n === 0
     ? f(...args)
     : x => next(n - 1, [...args, x]);
    
    return next(n, []);
  },
  curry = f => curryn(f.length)(f).
  map = (f, xs) => xs.map(x => f(x)),
  ifElse = pred => f => g => x => pred(x) ? f(x) : g(x);
  
//   const comp = f => g => x => f(g(x));
//   const inc = x => x + 1;
//   const hello = () => 'I am an Item';
//   const randomPassWord = len => ({
//     num: val => ({ 
//     }) => callback => { 
//       val
//       len
//       callback
//      // return callback
//     }
//   }) 
  
//   let mo = hello();
//   console.log(hello)
//   console.log(randomPassWord(5).num(hello)(6)(5)) 
//   const mine = hello => 'hello' + hello;
//   const curryn = n => f => {
//     const next = (n, args) => n === 0
//      ? f(...args)
//      : x => next(n - 1, [...args, x]);
    
//     return next(n, []);
//   };
  


// //monoid are neutrial element;
// Sum.empty = () => Sum(0);
// All.empty = () => All(true);
