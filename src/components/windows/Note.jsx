import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import MacWindow from './MacWindow'
import './note.scss'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierCaveDark, idea } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const Note = ({windowName, setWindowState}) => {
    const [markDown, setmarkDown] = useState(null)
    useEffect(() => {
        fetch('/note.txt')
            .then(res => res.text())
            .then(text => setmarkDown(text))
    }, [])
    return (
        <MacWindow windowName={windowName} setWindowState={setWindowState}>
            <div className="note-window">
                <SyntaxHighlighter language="javascript" style={atelierCaveDark}>
                    {/* <Markdown> */}
                        {markDown}
                    {/* </Markdown> */}
                </SyntaxHighlighter>
            </div>
        </MacWindow>
    )
}

export default Note