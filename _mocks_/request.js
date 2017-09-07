
'use strict';

// const users = {
//   4: {name: 'james'},
//   5: {name: 'muler'},
// };

// export default function request(url) {
//   return new Promise((resolve, reject) => {
//     const userID = parseInt(url.substr('/users/'.length), 10);
//     process.nextTick(
//       () =>
//         users[userID]
//           ? resolve(users[userID])
//           : reject({
//               error: 'User with ' + userID + ' not found.',
//             })
//     );
//   });
// }