function NewWayCard({
    primaryIcon,
    secondaryIcon,
    primaryText,
    secondaryText,
}) {
    return (
        <div className="flex flex-col items-center">
            <div className="w-[90px] h-[90px] relative flex justify-center items-center rounded-full outline transition-all outline-1 outline-slate-200 dark:outline-none dark:bg-slate-800 bg-indigo-100  border-4 border-slate-50 dark:border-slate-500">
                <img src={primaryIcon} className="h-12" alt="primary-icon" />
                <div className="w-9 h-9 flex items-center justify-center rounded-full p-1 absolute -bottom-2 -right-2 bg-indigo-400">
                    <img
                        src={secondaryIcon}
                        className="w-full"
                        alt="secondary-icon"
                    />
                </div>
            </div>
            <p className="text-2xl font-bold dark:text-white mt-4">
                {primaryText}
            </p>
            <p className="text-slate-500 capitalize font-semibold">
                {secondaryText}
            </p>
        </div>
    );
}

export default NewWayCard;
