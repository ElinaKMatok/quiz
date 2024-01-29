import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    supportFile: false,
  },
})

// export default defineConfig({
//   component: {
//     devServer: {
//       framework: "react",
//       bundler: "webpack",
//     },
//   },
// });

// module.exports = {
//   component: {
//     devServer: {
//       framework: "react",
//       bundler: "webpack",
//     },
//   },
// }
