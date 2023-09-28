import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

const useTheme = function () {
    const [theme, setTheme] = useLocalStorage('theme', 'light');
    const icon =
        theme === 'light' ? (
            <i className="fas text-indigo-400 text-2xl fa-sun"></i>
        ) : (
            <i className="fas text-indigo-400 text-2xl fa-moon"></i>
        );
    const handleThemeChange = () => {
        const newValue = theme === 'light' ? 'dark' : 'light';
        setTheme(newValue);
    };

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    return {
        handleThemeChange,
        icon,
    };
};

export default useTheme;
