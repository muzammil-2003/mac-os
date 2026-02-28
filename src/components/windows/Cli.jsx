import React from 'react'
import MacWindow from './MacWindow'
import Terminal from 'react-console-emulator'
import './cli.scss'

const Cli = ({windowName, setWindowState}) => {
    const commands = {
        echo: {
            description: 'Echo a passed string.',
            usage: 'echo <string>',
            fn: (...args) => args.join(' ')
        },
        danger: {
            description: 'This command returns HTML. It will only work with terminals that have danger mode enabled.',
            usage: 'danger',
            fn: () => '<span style="color: red">This is a dangerous command!</span>'
        },
        async: {
            description: 'This command runs an asynchronous task.',
            fn: async () => {
                const asyncTask = async () => 'Hello from a promise!'
                const result = await asyncTask()
                return result
            }
        },
        date: {
            description: 'Returns the current date and time.',
            usage: 'date',
            fn: () => new Date().toString()
        },
        whoami: {
            description: 'Returns the current user.',
            usage: 'whoami',
            fn: () => 'Muzammil Ahmed Mangrio'
        }
    }
    return (
        <MacWindow windowName={windowName} setWindowState={setWindowState}>
            <div className="cli-window">
                <Terminal
                    commands={commands}
                    welcomeMessage={'Welcome to the React terminal!'}
                    promptLabel={'me@React:~$'} />
            </div>
        </MacWindow>
    )
}

export default Cli