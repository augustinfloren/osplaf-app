import React, { createContext, useContext, useRef, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const RefContext = createContext({});

export const RefProvider = ({ children }) => {
  const sectionRef = useRef(null);
  const [sectionInView, setSectionInView] = useState(false);

  const { ref: inViewRef, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5
  });

  useEffect(() => {
    setSectionInView(inView);
  }, [inView]);

  return (
    <RefContext.Provider value={{ sectionRef, sectionInView, setSectionInView }}>
      {children}
    </RefContext.Provider>
  );
};

export const useRefs = () => useContext(RefContext);