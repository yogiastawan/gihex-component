const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// module.exports = {
//   mode: "development",
//   entry: "./src/components/contributor-card.ts",
//   output: {
//     filename: "component.js",
//     path: path.resolve(__dirname, "dist")
//   },
//   module: {
//     rules: [
//       {
//         test: /\.scss$/,
//         use: [
//           'raw-loader',
//           {
//             loader:'sass-loader',
//             options: { 
//               sassOptions:{
//                 includePaths: [path.resolve(__dirname, 'node_modules')]
//               }
//             }
//           }
//         ]  
//       }
//     ]
//   }
// };

module.exports = {
    mode: "production",
    entry: {"contributor-card": "./src/components/contributor-card.ts"},
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist/components")
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    "sass-to-string",
                    {
                        loader: "sass-loader",
                        options: {
                            sassOptions: {
                                outputStyle: "compressed",
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(scss|css)$/,
                // Excluding the `.styles.scss` extension
                exclude: [/\.scss$/, /node_modules/],
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "sass-loader",
                    },
                ],
            },
        ],
    },
};