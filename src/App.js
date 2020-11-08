import React from 'react'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'

const App = () => {
    return (
        <div>
            <Header />
            <div className="app__body">
                <Sidebar />
            </div>
        </div>
    )
}

export default App
