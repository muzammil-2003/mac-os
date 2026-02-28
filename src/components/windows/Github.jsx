import React from 'react'
import gitHubData from '../../assets/github.json'
import MacWindow from './MacWindow'
import './Github.scss'
import GithubCard from '../GithubCard'

const Github = ({windowName, setWindowState}) => {
  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState}>
        <div className="cards">
            {gitHubData.map((card, idx)=> (
                <GithubCard key={idx} repos={card}/>
            ))}
        </div>
    </MacWindow>
  )
}

export default Github