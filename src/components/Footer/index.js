import { FaReact, FaHeart, FaRegCopyright } from 'react-icons/fa'
const Footer = () => {
    return (
        <>
            <section id='Footer'>
                <div className='container'>
                    <p>
                        Made with <FaHeart className='heart' /> and React{' '}
                        <FaReact className='my-heart' /> by Ibrahim{' '}
                        <FaRegCopyright className='copyright' /> 2022
                    </p>
                </div>
            </section>
        </>
    )
}
export default Footer
