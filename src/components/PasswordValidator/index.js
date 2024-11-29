// Write your code here
import {useState} from 'react'
import {Main, Card, Heading, Para, ErrorMsg, Input} from './styledComponents'
const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const onChangeInput = event => {
    setPassword(event.target.value)
  }

  return (
    <Main>
      <Card>
        <Heading>Password Validator</Heading>
        <Para>Check how strong and secure is your password</Para>
        <Input type="password" value={password} onChange={onChangeInput} />
        {password.length < 8 && (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </Card>
    </Main>
  )
}

export default PasswordValidator
