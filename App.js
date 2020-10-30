import React, { useEffect } from 'react';
import alanBtn from "@alan-ai/alan-sdk-web";

const alankey = '9d6375a69132c157152c4c491483a0e02e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = () => {
    useEffect(() => {
        alanBtn({
            key: alankey,
            onCommand: ({ command }) => {
                if (command === 'testCommand') {
                    alert('This code was executed');
                }
            }
        })
    }, [])
    return (
        <div>
            <h1>Alan AI News Application</h1>
        </div>
    );
}

export default App;