import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { closeModal, noValue, signIn } from '../../redux/actions/actionCreator'
import Modal from '../../util/Modal'
import validator from 'email-validator'

const Login = () => {
    const modal = useSelector((state) => state.modal)
    const dispatch = useDispatch()

    const [person, setPerson] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setPerson({ ...person, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (person.email && person.password) {
            if (validator.validate(person.email)) {
                const newPerson = { ...person }
                setPerson({ email: person.email, password: '' })
                dispatch(signIn(newPerson))
            } else {
                dispatch({ type: 'NON_VAILED' })
            }
        } else {
            dispatch(noValue())
        }
    }

    return (
        <>
            <div id='sign' className='d-f d-flex'>
                <Container className='LoginForm p-5'>
                    {modal.isModalOpen && (
                        <Modal
                            modalContent={modal.modalContent}
                            closeModal={() => {
                                dispatch(closeModal())
                            }}
                        />
                    )}
                    <Form>
                        <Form.Group className='mb-3' controlId='formEmaill'>
                            <Form.Label>Email : </Form.Label>
                            <Form.Control
                                type='email'
                                name='email'
                                value={person.email}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formPasswordl'>
                            <Form.Label>Password :</Form.Label>
                            <Form.Control
                                type='password'
                                name='password'
                                value={person.password}
                                onChange={handleChange}
                            />
                            <Form.Text className='text-muted'>
                                Make Sure CapsLock is disapled
                            </Form.Text>
                        </Form.Group>
                        <Button
                            onClick={handleSubmit}
                            variant='primary'
                            type='submit'
                        >
                            Send Email
                        </Button>
                    </Form>
                </Container>
            </div>
        </>
    )
}
export default Login
