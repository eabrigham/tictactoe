/* Function which runs when a user enters data into signup form
Use getFormFields to get data from input
Verify that data is in correct format
Run fxn from API file to sign up user
*/
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('../')

const onSignUp = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  console.log(data)


}

module.exports = {
  onSignUp
}
