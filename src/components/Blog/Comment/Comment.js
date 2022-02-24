import { Button, Container } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'

const Comment = ({ comment, handleDelete }) => {
    const { id, commentContent, commenterId } = comment
    const sign = useSelector((state) => state.sign)

    return (
        <Container className='pb-3'>
            <h4 className='lead'>{commenterId}</h4>
            <div className='d-f-b d-flex'>
                <p className='text-danger'>{commentContent}</p>
                {sign.isSigndIn && sign.username == commenterId && (
                    <div>
                        <Button
                            variant='link'
                            onClick={() => {
                                handleDelete(id)
                            }}
                        >
                            delete
                        </Button>
                    </div>
                )}
            </div>
        </Container>
    )
}

export default Comment
