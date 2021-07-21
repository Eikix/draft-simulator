import BlueSelect from "./BlueSelect";
import ChampionCard from "./ChampionCard";
import RedSelect from "./RedSelect";
import {useState} from "react";
import BlueBan from "./BlueBan";
import RedBan from "./RedBan";

const ChampionSelect = ({championData}) => {
    const championList = Object.keys(championData);
    const [pickBanIndex, setPickBanIndex] = useState(1);
    const [blueChamp, setBlueChamp] = useState([]);
    const [redChamp, setRedChamp] = useState([]);
    const [blueBans, setBlueBans] = useState([]);
    const [redBans, setRedBans] = useState([]);

    const handleClick = chmp => {
        switch (pickBanIndex) {
            case 1:
            case 3:
            case 5:
            case 14:
            case 16:
                setBlueBans( prevBlueBans => {
                    const totalPickBans = [...blueChamp, ...redChamp, ...blueBans, ...redBans];
                    if ( !totalPickBans.includes(championData[chmp]) ) {
                        setPickBanIndex( prevIndex => prevIndex + 1);
                         return (
                            [...prevBlueBans, championData[chmp]]
                        );
                    } else {
                        return [...prevBlueBans];
                    }
                })
                
                break;
            case 2:
            case 4:
            case 6:
            case 13:
            case 15:
               setRedBans( prevRedBans => {
                    const totalPickBans = [...blueChamp, ...redChamp, ...blueBans, ...redBans];
                    if ( !totalPickBans.includes(championData[chmp]) ) {
                        setPickBanIndex( prevIndex => prevIndex + 1);
                        return (
                            [...prevRedBans, championData[chmp]]
                        );
                    } else {
                        return [...prevRedBans];
                    }
                })
                
                break;
            case 7:
            case 10:
            case 11:
            case 18:
            case 19:
                setBlueChamp( prevBlueChamp => {
                    const totalPickBans = [...blueChamp, ...redChamp, ...blueBans, ...redBans];
                    if ( !totalPickBans.includes(championData[chmp]) ) {
                        setPickBanIndex( prevIndex => prevIndex + 1);
                        return (
                            [...prevBlueChamp, championData[chmp]]
                        );
                    } else {
                        return [...prevBlueChamp];
                    }
                })
                break;
            case 8:
            case 9:
            case 12:
            case 17:
            case 20:
                setRedChamp( prevRedChamp => {
                    const totalPickBans = [...blueChamp, ...redChamp, ...blueBans, ...redBans];
                    if ( !totalPickBans.includes(championData[chmp]) ) {
                        setPickBanIndex( prevIndex => prevIndex + 1);
                        return (
                            [...prevRedChamp, championData[chmp]]
                        );
                        
                    } else {
                        return [...prevRedChamp];
                    }
                })
                break;
        }
    }

    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-around mt-10">
                <BlueBan blueBans={blueBans}/>
                <RedBan redBans={redBans}/>
            </div>
            <div className="flex justify-around align-items mt-10">
                <BlueSelect blueChamp={blueChamp}/>
                <div className="max-h-screen mt-3 grid xl:grid-cols-9 lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 gap-2 justify-items-center bg-gray-900 text-gray-300 p-8 overflow-y-scroll">
                    {championList.map(champion => {
                        return (
                            <div key={champion} onClick={() => handleClick(champion)}>
                                <ChampionCard champion={championData[champion]}/>
                            </div>
                        )
                    })}
                </div>
                <RedSelect redChamp={redChamp}/>
            </div>
        </div>
    )
}

export default ChampionSelect
