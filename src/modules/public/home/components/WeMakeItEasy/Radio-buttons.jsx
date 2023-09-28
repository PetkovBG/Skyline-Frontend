function RadioButtons({ option, setOption }) {
    // const [option, setOption] = useState('tenants');
    const styles = 'transition-all py-2 px-5 border cursor-pointer';

    const handleOnChange = (e) => {
        const { id } = e.target;
        setOption(id);
    };

    return (
        <div className="bg-indigo-50 transition-all dark:bg-slate-900 dark:border-slate-950 max-w-[288px] rounded-md border flex p-2 justify-between mb-8">
            <label
                className={`${styles} ${
                    option === 'tenants'
                        ? 'bg-white dark:bg-slate-800 dark:border-slate-500 rounded-md font-semibold text-indigo-400'
                        : 'text-slate-500 border-transparent'
                }`}
            >
                <input
                    onChange={handleOnChange}
                    type="radio"
                    name="tenants-landlords"
                    id="tenants"
                    hidden
                    className="w-full"
                    defaultChecked
                />
                For tenants
            </label>
            <label
                className={`${styles} ${
                    option === 'landlords'
                        ? 'bg-white dark:bg-slate-800 dark:border-slate-500 rounded-md font-semibold text-indigo-400'
                        : 'text-slate-500 border-transparent'
                }`}
            >
                <input
                    onChange={handleOnChange}
                    type="radio"
                    name="tenants-landlords"
                    id="landlords"
                    hidden
                    className="w-full"
                    checked={false}
                />
                For landlords
            </label>
        </div>
    );
}

export default RadioButtons;
