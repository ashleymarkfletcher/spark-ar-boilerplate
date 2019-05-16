# spark-ar-boilerplate
A boilerplate Spark AR project with Webpack.

Most of the magic is in the webpack config.

Adding the built in modules like "Materials" as externals allows webpack to skip them when bundling everything together.

## Getting Started

- Clone or download this repository
- run `npm i` in the root folder

## Usage

### Development
- run `npm run dev`
- this will watch your files for changes and automatically build the code
- when the code is rebuilt Spark AR should refresh on code change

### Production
- run `npm run build`
- this just runs the build once and outputs a minified file