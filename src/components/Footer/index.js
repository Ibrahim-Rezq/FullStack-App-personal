import React from 'react'
import { Container } from 'react-bootstrap'
import { BiCopyright } from 'react-icons/bi'
const Footer = () => {
    return (
        <>
            <div className='Footer p-3'>
                <Container className='d-f d-flex'>
                    <p className='lead ms-5 m-0'>
                        Made with ❤ and React 😊 by Ibrahim
                        <BiCopyright /> 2022
                    </p>
                </Container>
            </div>
        </>
    )
}
export default Footer
