import React, { createContext, useState } from 'react';

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
    const [hasLoaded, setHasLoaded] = useState(false);

    return (
        <LoadingContext.Provider value={{ hasLoaded, setHasLoaded }}>
            {children}
        </LoadingContext.Provider>
    );
};

export default LoadingContext;
