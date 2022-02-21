import React from 'react'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'
import { useSelector } from 'react-redux'
const Sign = () => {
    const sign = useSelector((state) => state.sign)

    return (
        <div id='sign' className='d-f d-flex'>
            {(sign.isSigningIn && !sign.isSigningUp && <LoginForm />) ||
                (!sign.isSigningIn && sign.isSigningUp && <RegisterForm />)}
        </div>
    )
}

export default Sign
