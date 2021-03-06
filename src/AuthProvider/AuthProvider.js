import React, { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

const AuthProvider = ({reducer, initialState, children}) => {
    return (
        <AuthContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
