import React from 'react'
import './windows/Github.scss'

const GithubCard = ({repos}) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={repos.image} alt={repos.title} />
            </div>

            <div className="card-content">
                <h3 className="card-title">{repos.title}</h3>
                <p className="card-description">{repos.description}</p>

                <div className="card-tags">
                    {repos.tags.map((tag, index) => (
                        <span key={index} className="tag">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="card-links">
                    <a href={repos.repoLink} target="_blank" rel="noreferrer">
                        Repo
                    </a>
                    <a href={repos.demoLink} target="_blank" rel="noreferrer">
                        Demo
                    </a>
                </div>
            </div>
        </div>
    );
}

export default GithubCard