/* Function which runs when a user enters data into signup form
Use getFormFields to get data from input
Verify that data is in correct format
Run fxn from API file to sign up user
*/
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')

const onSignUp = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  console.log(data)
  if (data.credentials.email === '') {
    // TODO: make this log to user
    console.log('Please provide email')
  }
  // TODO: verify password & same as confirmation
  else {
    api.signUp(data)
      .then(function (response) {
        console.log(response)
      })
      .catch(function (err) {
        console.error(err)
      })
    // TODO: add then catch statements
  }
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  // TODO verify data format
  api.signIn(data)
    .then(function (response) {
      console.log(response)
    })
    .catch(function (err) {
      console.error(err)
    })
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(function (response) {
      console.log(response)
    })
    .catch(function (err) {
      console.error(err)
    })
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.changePassword(data)
    .then(function (response) {
      console.log(response)
    })
    .catch(function (err) {
      console.error(err)
    })
}



module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword
}
