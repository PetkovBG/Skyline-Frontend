import houseIllustration from '../../../../../assets/house-illustration.png';
import statsSVG from '../../../../../assets/stats.svg';
import percentSVG from '../../../../../assets/percent.svg';
import moneySVG from '../../../../../assets/money.svg';
import magnifyingGlassSVG from '../../../../../assets/magnifying-glass.svg';
import checkSVG from '../../../../../assets/check.svg';
import houseSVG from '../../../../../assets/house.svg';
import NewWayCard from './NewWayCard';

function NewWaySection() {
    return (
        <div className="container my-14 p-12 mx-auto flex items-center dark:bg-slate-900 transition-[background] bg-indigo-50 rounded-md">
            <div className="text-left flex-grow">
                <h2 className="text-5xl font-bold text-indigo-900 transition-all dark:text-indigo-400 max-w-lg leading-tight">
                    The new way to find your new home
                </h2>
                <p className="text-slate-500 text-xl max-w-[350px] mt-4 font-medium">
                    Find your dream place to live in with more than 10k+
                    properties listed.
                </p>
                <div className="flex gap-6 mt-10">
                    <NewWayCard
                        primaryIcon={percentSVG}
                        secondaryIcon={statsSVG}
                        primaryText={'7.4%'}
                        secondaryText={'property return rate'}
                    />
                    <NewWayCard
                        primaryIcon={houseSVG}
                        secondaryIcon={magnifyingGlassSVG}
                        primaryText={'3,856'}
                        secondaryText={'properties in sell & rent'}
                    />
                    <NewWayCard
                        primaryIcon={moneySVG}
                        secondaryIcon={checkSVG}
                        primaryText={'2,540'}
                        secondaryText={'daily completed transactions'}
                    />
                </div>
            </div>
            <div className="basis-[45%] flex-shrink-0">
                <img
                    src={houseIllustration}
                    alt="house-illustration"
                    className="h-auto w-full"
                />
            </div>
        </div>
    );
}

export default NewWaySection;
