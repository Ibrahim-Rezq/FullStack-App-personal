import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Project from './Project'
import { projectData } from '../../util/data'

const Projects = () => {
    // const url = '/api/Projects'
    // const [loading, data] = useFetch(url)
    const [projData, setProjData] = useState([])
    useEffect(() => {
        setProjData(projectData)
    }, [])

    return (
        <section id='Projects'>
            <div className='container'>
                {projData.map((proj, i) => {
                    return <Project num={i + 1} key={i} ProjectData={proj} />
                })}
            </div>
        </section>
    )
}

export default Projects
