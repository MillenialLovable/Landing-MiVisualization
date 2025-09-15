
export interface Challenge {
    icon: string;
    title: string;
    description: string;
}

const ChanllengeCard = ({ challenge }: { challenge: Challenge }) => {
    return (
        <div className="h-64 w-72 rounded-lg shadow-sm shadow-black py-2 px-4">
            <img src={challenge.icon} alt="" className="h-20 w-22 my-4 mx-2" />
            <div>
                <h4 className="font-bold">{challenge.title}</h4>
            </div>
            <div className="my-4">
                <p className="font-thin text-[#607E9F]">
                    {challenge.description}
                </p>
            </div>
        </div>
    )
}

export default ChanllengeCard;