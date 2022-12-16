import './commands'
import 'cypress-xpath'
require('cypress-xpath')
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
module.exports = (on, config) => {
    on('file:preprocessor', createBundler())
}