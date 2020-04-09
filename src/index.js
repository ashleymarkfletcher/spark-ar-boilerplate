// require your Spark modules normally
const Scene = require('Scene')

// add in your external modules either above or the es6 way below
import { helloWorld } from './hello'

// get the textbox in the project
const root = Scene.root
const helloText = root.find('hello')

// update the text using the function from our external module

const init = async () => {
  const text = await helloWorld()
  helloText.text = text
}

init()
