const Diagnostics = require('Diagnostics')
const Scene = require('Scene')
import { helloWorld } from './a'

const root = Scene.root
const plane = root.find('plane0')

Diagnostics.log(helloWorld())
