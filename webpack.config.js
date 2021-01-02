module.exports = {
  entry: [
    './src/index.js',
    './src/index.css'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "script-loader"
        }
      },
       {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  }
};