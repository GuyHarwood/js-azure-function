const moment = require('moment')

module.exports = function (context, req) {
  context.log('Node JS function deployed by VSTS.')
  context.log(`current datetime is ${moment()}`)
  context.done()
}
