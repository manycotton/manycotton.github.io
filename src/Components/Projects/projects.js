import React from 'react'
import './projects.css'
import project_data from '../../Data/project.json'

export const Projects = (props) => {
    return(
    <>
    <div className='projects'>
        <div className='title'>Research Projects</div>
        {/* <div className='explanation'>I highlight a selection of projects where I played a leading role. These projects predominantly focus on enhancing the accessibility and inclusivity of AI technologies for individuals with disabilities. For a comprehensive view of all my collaborative efforts and detailed insights into each project, please visit the publications section of this website.</div> */}
        <div className='project_all'>
            {
                project_data.map((data, index) => (
                <div className='project_each'>
                    <img className='project_image' src={data.project_image} alt='projectimage'/>
                    <div className='project_title'>{data.project_title}</div>
                    <div className='project_description'>{data.project_description}</div>
                    <a className='related_pub' href={data.pub_link}>{data.related_pub}</a>
                    <div className='button-bar'>
                        {
                            data.project_tag?.map((tag, index) => (
                                <div className='button'>{tag}</div>
                            ))
                        }
                    </div>
                </div>
                ))
            }
        </div>

    </div>
    </>
    )
}

