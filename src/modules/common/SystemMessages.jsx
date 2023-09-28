function SystemMessages({ systemMsgs }) {
    return (
        <div className=" flex flex-col fixed z-50 bottom-0 right-0 items-center justify-end w-1/5">
            {systemMsgs.map((msg, i) => {
                return (
                    <div
                        key={i}
                        className={`z-20 w-11/12 rounded-md capitalize p-3 mb-4 overflow-hidden transition-all
                         ${
                             msg.type === 'success'
                                 ? 'bg-green-200 text-green-700'
                                 : 'bg-red-200 text-red-700'
                         }`}
                    >
                        {msg.text}
                    </div>
                );
            })}
        </div>
    );
}

export default SystemMessages;
