import React, { useState } from 'react'

const Form = (props) => {
    const [ firstName, setFirstName ] = useState("")
    const [lastName, setLastName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ confirmPassword, setConfirmPassword ] = useState("")

return (
    <div>
        <form onSubmit={()=> {}}>
            <div>
                <label htmlFor="firstName">First Name </label>
                <input type="text" onChange={ (e) => setFirstName(e.target.value) }/>
            </div>
            {firstName.length < 2 && firstName.length > 0 ? <p>First Name Must Be No Less Than 2 Charaters Minimum!</p> : null }
            <div>
            <label htmlFor="lastName">Last Name </label>
            <input type="text" onChange={ (e) => setLastName(e.target.value) }/>
            </div>
            {lastName.length < 2 && lastName.length > 0  ? <p>Last Name Must Be No Less Than 2 Charaters Minimum!</p> : null }
            <div>
            <label htmlFor="email">Email </label>
            <input type="text" onChange={ (e) => setEmail(e.target.value) }/>
            </div>
            {email.length < 5 && email.length > 0  ? <p>Email Must Be No Less Than 5 Charaters Minimum!</p> : null }
            <div>
            <label htmlFor="password">Password </label>
            <input type="password"  onChange={ (e) => setPassword(e.target.value) }/>
            </div>
            {password.length < 8 && password.length > 0  ? <p>Password Must Be No Less Than 8 Charaters Minimum!</p> : null }
            <div>
            <label htmlFor="confirmPassord">Confirm Password </label>
            <input type="password" onChange={ (e) => setConfirmPassword(e.target.value) }/>
            </div>
            {confirmPassword !== password ? <p>Passwords Must Match!</p> : null }
        </form>
    <br />
        <h3>Your Form Data</h3>
        <p><label>First Name: </label>{ firstName }</p>
        <p><label>Last Name: </label>{ lastName }</p>
        <p><label>Email: </label>{ email }</p>
        <p><label>Password: </label>{ password }</p>
        <p><label>Confirm Password: </label>{ confirmPassword }</p>
    </div>
)
}

export default Form