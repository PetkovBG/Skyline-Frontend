import { statusColorEnum } from '../../../../utils/statusColorEnum';

function SimpleCard({ property, handleOnClick, selectedProperty }) {
    const { images, title, area, location, status } = property;
    const address = `${location.address}, ${location.city}`;
    const color = statusColorEnum[property.status];

    if (!property) {
        // TODO - Improve design if necessarry
        return <p>Loading...</p>;
    }

    return (
        <div
            onClick={() => handleOnClick(property)}
            className={`flex p-4 border-b dark:border-b-slate-500 items-center w-full cursor-pointer dark:hover:bg-slate-700 hover:bg-indigo-50 ${
                property === selectedProperty &&
                'bg-indigo-50 dark:bg-slate-700'
            }`}
        >
            <img src={images[0]} alt={title} className="w-20 rounded-md" />

            <div className="flex-grow ml-4">
                <p className="font-semibold">{title}</p>
                <p className="text-slate-500 capitalize">{address}</p>
            </div>
            <div>
                <p
                    className={`flex-shrink-0 text-center uppercase font-semibold rounded-full px-2 ${color}`}
                >
                    {status}
                </p>
                <p className="text-right text-slate-500">{area} sq m</p>
            </div>
        </div>
    );
}

export default SimpleCard;
