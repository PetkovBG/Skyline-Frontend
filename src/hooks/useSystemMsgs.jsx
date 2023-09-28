import { useState } from 'react';

const useSystemMsgs = () => {
    const [systemMsgs, setSystemMsgs] = useState([]);

    const addSystemMsg = (msg) => {
        setSystemMsgs((msgs) => [msg, ...msgs]);
        setTimeout(() => setSystemMsgs((msgs) => msgs.slice(0, -1)), 2500);
    };

    return {
        systemMsgs,
        addSystemMsg,
    };
};

export default useSystemMsgs;
