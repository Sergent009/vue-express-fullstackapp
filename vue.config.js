/* this line of code will tell our front-end that
all requests going on localhost 8000 should be
treated as if they were going to the same origin
that our front-end app is running at
*/

module.exports = {
  devServer: {
    proxy: 'http://localhost:8000'
  }
}

// module.exports = {
//   devServer: {
//     proxy: {
//       '/api': {
//         target: 'http://localhost:8000',
//         changeOrigin: true,
//       },
//     },
//   },
// };
