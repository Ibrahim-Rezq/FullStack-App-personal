import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Project from './Project'
import img from '../Image/BGG.png'

let proj = [
    {
        id: 1,
        name: 'hima',
        desc: `m a Passionate Web Developer who uses the sorcery of
                        code to create Amazing Websites, Always eager to learn
                        new skills and master already acquired ones, love To
                        write stories, make/play games in my spare time`,
        tech: ['html', 'css'],
        image: img,
    },
    {
        id: 2,
        name: 'MemeWebsite',
        desc: `m a Passionate Web Developer who uses the sorcery of
                        code to create Amazing Websites, Always eager to learn
                        new skills acquired ones, love To
                        write stories, make/play games in my spare time`,
        tech: ['Pug.js', 'Sass'],
        image: img,
    },
    {
        id: 3,
        name: 'Website',
        desc: `m a Passses the sorcery of
                        code to create Amazing Websites, Always eager to learn
                        new skills and master already acquired ones, love To
                        write stories, make/play games in my spare time`,
        tech: ['React.JS', 'Ja'],
        image: img,
    },
]

const Projects = () => {
    // const url = '/api/Projects'
    // const [loading, data] = useFetch(url)
    const [projData, setProjData] = useState([])
    useEffect(() => {
        setProjData(proj)
    }, [])

    return (
        <div id='Projects' className='d-flex  d-f'>
            <Container>
                <div className='d-flex flex-column p-3 d-f'>
                    {projData.map((proj, i) => {
                        return (
                            <Project num={i + 1} key={i} ProjectData={proj} />
                        )
                    })}
                </div>
            </Container>
        </div>
    )
}

export default Projects
