const validatePassowrd = (password) => {
  const specialCharacterCheck = /!/
  const numberCheck = /\d/
  const upperCaseCheck = /[A-Z]/
  const lowerCaseCheck = /[a-z]/

  if (specialCharacterCheck.test(password)) {
    if (numberCheck.test(password)) {
      if (upperCaseCheck.test(password)) {
        if (lowerCaseCheck.test(password)) {
          if (password.length >= 8) {
            return true
          }
        }
      }
    }
  }
  return false
}
module.exports = validatePassowrd