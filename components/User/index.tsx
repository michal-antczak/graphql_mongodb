
import {useState} from 'react'
import styled from 'styled-components'

export default function UserComponent() {

  const [userName, setUserName] = useState("")

  function getUser(e){
    e.preventDefault()
    console.log(userName)
  }

  return (
    <User>
      <SearchUserForm onSubmit={getUser}>
        <label htmlFor="user">User Name:</label>
        <input type="text" name='user' onChange={(e)=>setUserName(e.target.value)} />
        <button type='submit'>Get User Data</button>
      </SearchUserForm>
    </User>
  )
}

const User = styled.div`
  display: flex;
  flex-direction: column;
`
const SearchUserForm = styled.form`
  display: flex;
  flex-direction: column;

  label{

  }
`
