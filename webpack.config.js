const path = require('path')

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'sparkTest', 'scripts')
  },
  externals: {
    Animation: 'commonjs Animation',
    Diagnostics: 'commonjs Diagnostics',
    FaceTracking: 'commonjs FaceTracking',
    Reactive: 'commonjs Reactive',
    Scene: 'commonjs Scene',
    Time: 'commonjs Time',
    TouchGestures: 'commonjs TouchGestures',
    CameraInfo: 'commonjs CameraInfo',
    Materials: 'commonjs Materials',
    Textures: 'commonjs Textures'
  }
}
