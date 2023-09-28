import React from 'react';

export const useScrollLock = () => {
    const scrollYRef = React.useRef(0);

    const lockScroll = React.useCallback(() => {
        scrollYRef.current = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollYRef.current}px`;
        document.body.style.overflowY = 'scroll';
    }, []);

    const unlockScroll = React.useCallback(() => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.overflowY = '';
        window.scrollTo(0, scrollYRef.current);
    }, []);

    return {
        lockScroll,
        unlockScroll,
    };
};
