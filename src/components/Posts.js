import React from 'react'
import { Container } from 'react-bootstrap'
import Post from './Post'

let postData = [
    {
        id: 1,
        title: 'A CatchyTitle',
        summary: `m a Passses the sorcery of code to create Amazing
                        Websites, Always eager to learn new skills and master
                        already acquired ones, love To write stories, make/play
                        games in my spare time`,
        puplished: '20-1-2020',
        updated: '20-1-2020',
        auther: 'Ibrahim',
        tags: ['tech', 'tip', 'code'],
    },
    {
        id: 2,
        title: 'A CatchyTitle CocaDoodlyDo',
        summary: `m a Passses the sorcery of code to create Amazing
                        Websites, Always eager to learn new skills and master
                        already acquired ones, love To write stories, make/play
                        games in my spare time`,
        vewis: 560,
        likes: 777,
        puplished: '20-1-2020',
        updated: '25-8-2022',
        auther: 'Ahmed',
        tags: ['stories', 'funnny', 'clacky'],
    },
    {
        id: 3,
        title: 'A CatchyTitle',
        summary: `m a Passses the sorcery of code to create Amazing
                        Websites, Always eager to learn new skills and master
                        already acquired ones, love To write stories, make/play
                        games in my spare time`,
        vewis: 100,
        likes: 100,
        puplished: '20-1-2020',
        updated: '20-1-2020',
        auther: 'Ibrahim',
        tags: ['tech', 'tip', 'code'],
    },
]

function Posts() {
    return (
        <>
            <div id='Posts' className='bg-info d-flex d-f'>
                <Container className='d-flex d-f flex-wrap p-3 h-100'>
                    {postData.map((post, i) => {
                        return <Post key={post.id} postData={post} />
                    })}
                </Container>
            </div>
        </>
    )
}

export default Posts
