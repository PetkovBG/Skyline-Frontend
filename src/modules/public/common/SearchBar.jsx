import useForm from '../../../hooks/useForm';

function SearchBar({ onSearchHandler }) {
    const { values, onSubmit, onChangeHandler } = useForm(
        {
            city: '',
            bedrooms: '',
            price: '',
            type: '',
        },
        onSearchHandler
    );

    return (
        <form
            onSubmit={onSubmit}
            className="bg-white dark:bg-slate-800 transition-[background] flex p-6 text-left mb-10 items-center rounded-md"
        >
            <div className="border-r-2 transition-[border] dark:border-r-slate-600 flex-1 px-4">
                <label htmlFor="location" className="font-semibold">
                    Location
                </label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    value={values.city}
                    onChange={onChangeHandler}
                    className="w-full font-bold border-b text-lg outline-none dark:bg-slate-800 transition-[background]"
                    placeholder="Enter a location..."
                />
            </div>
            <div className="border-r-2 transition-[border] dark:border-r-slate-600 flex-1 px-4">
                <label htmlFor="bedrooms" className="font-semibold">
                    Bedrooms
                </label>
                <input
                    type="text"
                    id="bedrooms"
                    name="bedrooms"
                    value={values.bedrooms}
                    onChange={onChangeHandler}
                    className="w-full font-bold border-b text-lg outline-none  dark:bg-slate-800 transition-[background]"
                    placeholder="Enter bedrooms..."
                />
            </div>
            <div className="border-r-2 transition-[border]  dark:border-r-slate-600 flex-1 px-4">
                <label htmlFor="price" className="block font-semibold">
                    Price
                </label>

                <input
                    type="text"
                    id="price"
                    name="price"
                    value={values.price}
                    onChange={onChangeHandler}
                    className="w-full font-bold border-b text-lg outline-none  dark:bg-slate-800 transition-[background]"
                    placeholder="Enter price..."
                />
            </div>
            <div className="border-r-2 transition-[border]  dark:border-r-slate-600 flex-1 px-4">
                <label htmlFor="type" className="block font-semibold">
                    Property Type
                </label>
                <select
                    value={values.type}
                    name="type"
                    id="type"
                    className="w-full outline-none text-lg font-bold cursor-pointer border-b  dark:bg-slate-800 transition-[background]"
                    onChange={onChangeHandler}
                >
                    <option value=""></option>
                    <option value="House" className="font-semibold">
                        House
                    </option>
                    <option value="Apartment" className="font-semibold">
                        Apartment
                    </option>
                    <option value="Office" className="font-semibold">
                        Office
                    </option>
                    <option value="Garage" className="font-semibold">
                        Garage
                    </option>
                </select>
            </div>
            <div className="flex-1 px-4">
                <button className="text-white mx-auto w-full font-semibold py-4 rounded-md bg-indigo-400 hover:bg-indigo-500 active:scale-95 transition-all">
                    Search
                </button>
            </div>
        </form>
    );
}
export default SearchBar;
