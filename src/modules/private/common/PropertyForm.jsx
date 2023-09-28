import ImageUploader from './ImageUploader';

const PropertyForm = ({
    property,
    setProperty,
    onSubmit,
    heading,
    handleInputKeyDown,
    removeFeature,
    addImageToBeDeleted,
}) => {
    return (
        <form
            onSubmit={onSubmit}
            className="flex flex-col w-full px-[10vw] md:px-[20vw] dark:text-white"
            autoComplete="off"
        >
            <h2 className="text-2xl text-center py-4 mb-4">{heading}</h2>
            {/* TODO - {error && (
        <p className="text-center text-2xl text-rose-400">{error}</p>
    )} */}

            {/* Property Status */}
            <div className="flex justify-between items-center m-3">
                <label
                    htmlFor="status"
                    className="font-bold text-lg text-left mb-1 pl-4"
                >
                    Status:
                </label>
                <div className="flex rounded-full overflow-hidden">
                    <button
                        type="button"
                        onClick={() =>
                            setProperty({ ...property, status: 'for-rent' })
                        }
                        className={`p-2 rounded-l-full ${
                            property.status === 'for-rent'
                                ? 'bg-indigo-600 text-white'
                                : 'bg-gray-300 text-black hover:bg-indigo-400'
                        } transition-all focus:outline-none`}
                    >
                        For Rent
                    </button>
                    <button
                        type="button"
                        onClick={() =>
                            setProperty({ ...property, status: 'for-sale' })
                        }
                        className={`p-2 rounded-r-full ${
                            property.status === 'for-sale'
                                ? 'bg-indigo-600 text-white'
                                : 'bg-gray-300 text-black hover:bg-indigo-400'
                        } transition-all focus:outline-none`}
                    >
                        For Sale
                    </button>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center m-3">
                {/* Property Title */}
                <div className="flex flex-col w-full md:w-[45%]">
                    <label
                        htmlFor="title"
                        className="font-bold text-lg text-left mb-1 pl-4"
                    >
                        Title:
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={property.title}
                        onChange={(e) =>
                            setProperty({
                                ...property,
                                title: e.target.value,
                            })
                        }
                        placeholder="Elegant 3-Bedroom Apartment in City Center"
                        className="rounded-lg border border-slate-500 dark:bg-slate-800 focus:outline-indigo-400 p-1 px-2 w-full"
                        required
                    />
                </div>
                {/* Property Type */}
                <div className="flex flex-col w-full md:w-[45%]">
                    <label
                        htmlFor="type"
                        className="font-bold text-lg text-left mb-1 pl-4"
                    >
                        Type:
                    </label>
                    <select
                        id="type"
                        value={property.type}
                        onChange={(e) =>
                            setProperty({
                                ...property,
                                type: e.target.value,
                            })
                        }
                        className="rounded-lg border border-slate-500 dark:bg-slate-800 focus:outline-indigo-400 p-1 px-2 w-full"
                        required
                    >
                        <option value="" disabled>
                            Select property type
                        </option>
                        <option value="Apartment">Apartment</option>
                        <option value="House">House</option>
                        <option value="Office">Office</option>
                        <option value="Garage">Garage</option>
                    </select>
                </div>
            </div>

            {/* Property Description */}
            <div className="flex flex-col w-full">
                <label
                    htmlFor="description"
                    className="font-bold text-lg text-left mb-1 pl-4"
                >
                    Description:
                </label>
                <textarea
                    id="description"
                    value={property.description}
                    onChange={(e) =>
                        setProperty({
                            ...property,
                            description: e.target.value,
                        })
                    }
                    cols={30}
                    rows={10}
                    placeholder="Spacious and modern apartment with stunning views..."
                    className="rounded-lg border border-slate-500 dark:bg-slate-800 focus:outline-indigo-400 p-1 px-2 w-full"
                    required
                ></textarea>
            </div>

            {/* Property Location */}
            <div className=" flex flex-col md:flex-row justify-between items-center m-3">
                <div className="flex flex-col w-full md:w-[45%]">
                    <label
                        htmlFor="address"
                        className="font-bold text-lg text-left mb-1 pl-4"
                    >
                        Address:
                    </label>
                    <input
                        type="text"
                        id="address"
                        value={property.location.address}
                        onChange={(e) =>
                            setProperty({
                                ...property,
                                location: {
                                    ...property.location,
                                    address: e.target.value,
                                },
                            })
                        }
                        placeholder="ul. Ivan Vazov 43"
                        className="rounded-lg border border-slate-500 dark:bg-slate-800 focus:outline-stone-800 p-1 px-2"
                        required
                    />
                </div>
                <div className="flex flex-col w-full md:w-[45%] mt-3 md:mt-0 md:ml-3">
                    <label
                        htmlFor="city"
                        className="font-bold text-lg text-left mb-1 pl-4"
                    >
                        City:
                    </label>
                    <input
                        type="text"
                        id="city"
                        value={property.location.city}
                        onChange={(e) =>
                            setProperty({
                                ...property,
                                location: {
                                    ...property.location,
                                    city: e.target.value,
                                },
                            })
                        }
                        placeholder="Sofia"
                        className="rounded-lg border border-slate-500 dark:bg-slate-800 focus:outline-stone-800 p-1 px-2"
                        required
                    />
                </div>
            </div>
            <div className=" flex flex-col md:flex-row justify-between items-center m-3">
                <div className="flex flex-col w-full md:w-[45%]">
                    <label
                        htmlFor="state"
                        className="font-bold text-lg text-left mb-1 pl-4"
                    >
                        State:
                    </label>
                    <input
                        type="text"
                        id="state"
                        value={property.location.state}
                        onChange={(e) =>
                            setProperty({
                                ...property,
                                location: {
                                    ...property.location,
                                    state: e.target.value,
                                },
                            })
                        }
                        placeholder="Sofia"
                        className="rounded-lg border border-slate-500 dark:bg-slate-800 focus:outline-stone-800 p-1 px-2"
                        required
                    />
                </div>
                <div className="flex flex-col w-full md:w-[45%] mt-3 md:mt-0 md:ml-3">
                    <label
                        htmlFor="zipcode"
                        className="font-bold text-lg text-left mb-1 pl-4"
                    >
                        Zipcode:
                    </label>
                    <input
                        type="text"
                        id="zipcode"
                        value={property.location.zipcode}
                        onChange={(e) =>
                            setProperty({
                                ...property,
                                location: {
                                    ...property.location,
                                    zipcode: e.target.value,
                                },
                            })
                        }
                        placeholder="1000"
                        className="rounded-lg border border-slate-500 dark:bg-slate-800 focus:outline-stone-800 p-1 px-2"
                        required
                    />
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center m-3">
                {/* Property Price */}
                <div className="flex flex-col w-full md:w-[45%]">
                    <label
                        htmlFor="price"
                        className="font-bold text-lg text-left mb-1 pl-4"
                    >
                        Price:
                    </label>
                    <input
                        type="number"
                        id="price"
                        min={0}
                        value={property.price}
                        onChange={(e) =>
                            setProperty({
                                ...property,
                                price: e.target.value,
                            })
                        }
                        placeholder="250000"
                        className="rounded-lg border border-slate-500 dark:bg-slate-800 focus:outline-indigo-400 p-1 px-2 w-full"
                        required
                    />
                </div>

                {/* Property Area */}
                <div className="flex flex-col w-full md:w-[45%]">
                    <label
                        htmlFor="area"
                        className="font-bold text-lg text-left mb-1 pl-4"
                    >
                        Area (sq m):
                    </label>
                    <input
                        type="number"
                        id="area"
                        min={0}
                        value={property.area}
                        onChange={(e) =>
                            setProperty({
                                ...property,
                                area: e.target.value,
                            })
                        }
                        placeholder="135"
                        className="rounded-lg border border-slate-500 dark:bg-slate-800 focus:outline-indigo-400 p-1 px-2 w-full"
                        required
                    />
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center m-3">
                {/* Property Bedrooms */}
                <div className="flex flex-col w-full md:w-[45%]">
                    <label
                        htmlFor="bedrooms"
                        className="font-bold text-lg text-left mb-1 pl-4"
                    >
                        Bedrooms:
                    </label>
                    <input
                        type="number"
                        id="bedrooms"
                        min={0}
                        value={property.bedrooms}
                        onChange={(e) =>
                            setProperty({
                                ...property,
                                bedrooms: e.target.value,
                            })
                        }
                        placeholder="2"
                        className="rounded-lg border border-slate-500 dark:bg-slate-800 focus:outline-indigo-400 p-1 px-2 w-full"
                        required
                    />
                </div>

                {/* Property Bathrooms */}
                <div className="flex flex-col w-full md:w-[45%]">
                    <label
                        htmlFor="bathrooms"
                        className="font-bold text-lg text-left mb-1 pl-4"
                    >
                        Bathrooms:
                    </label>
                    <input
                        type="number"
                        id="bathrooms"
                        min={0}
                        value={property.bathrooms}
                        onChange={(e) =>
                            setProperty({
                                ...property,
                                bathrooms: e.target.value,
                            })
                        }
                        placeholder="1"
                        className="rounded-lg border border-slate-500 dark:bg-slate-800 focus:outline-indigo-400 p-1 px-2 w-full"
                        required
                    />
                </div>
            </div>

            {/* Property Features */}
            <div className="flex flex-col justify-between items-center m-3">
                <label className="font-bold text-lg text-left mb-1 pl-4">
                    Features:
                </label>
                <div className="flex gap-2 items-center justify-start flex-wrap rounded-lg border border-slate-500 focus-within:border-indigo-400 p-2 px-3 w-[75vw] md:w-[50%]">
                    {property.features.map((feature) => (
                        <div
                            key={feature}
                            className="flex gap-3 bg-indigo-400 hover:bg-indigo-500 items-center px-2 py-1 rounded-lg text-white font-bold"
                        >
                            <p className="w-fit break-all">{feature}</p>
                            <button
                                onClick={() => removeFeature(feature)}
                                className="grid content-center rounded-full bg-white w-5 h-5"
                            >
                                <i className="fas fa-times text-xs text-black" />
                            </button>
                        </div>
                    ))}
                    <input
                        onBlur={(e) => handleInputKeyDown(e)}
                        type="text"
                        onKeyDown={handleInputKeyDown}
                        className="border-none outline-none bg-transparent flex-1"
                        placeholder="add feature"
                    />
                </div>
            </div>

            {/* Property Images */}

            <ImageUploader
                property={property}
                setProperty={setProperty}
                addImageToBeDeleted={addImageToBeDeleted}
            />

            {/* Submit Button */}
            <div className="flex flex-col justify-center items-center mt-5">
                <button
                    type="submit"
                    className="text-white mb-10 bg-indigo-400 hover:bg-indigo-500 active:scale-95 transition-all p-1.5 px-3 rounded-lg cursor-pointer"
                >
                    {heading}
                </button>
            </div>
        </form>
    );
};

export default PropertyForm;
