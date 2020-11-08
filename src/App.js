import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chat from './components/Chat/Chat';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
    const [user, setUser] = useState(null);

    return (
        <>
            <Router>
                {!user ? (
                    <Login />
                ) : (
                    <>
                        <Header />
                        <div className="app__body">
                            <Sidebar />
                            <Switch>
                                <Route path="/channel/:channelId"> 
                                    <Chat />
                                </Route>
                                <Route path="/"> 
                                    <h1>Welcome to our service</h1>
                                </Route>
                            </Switch>
                        </div>
                    </>
                )}
            </Router>

        </>
    );
};

export default App;
