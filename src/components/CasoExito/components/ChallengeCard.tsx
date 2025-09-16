
export interface Challenge {
    icon: string;
    title: string;
    description: string;
}

const ChanllengeCard = ({ challenge }: { challenge: Challenge }) => {
    return (
        <div className="h-[315px] w-72 rounded-lg shadow-[#5F7EFF40] shadow-xl bg-white py-4 px-6 md:py-2 md:px-4">
            <img src={challenge.icon} alt="" className="h-20 w-22 my-4 mx-2 md:h-10 md:w-12 lg:h-20 lg:w-20" />
            <div>
                <h4 className="font-bold text-xl md:text-sm lg:text-base xl:text-2xl 2xl:text-xl">{challenge.title}</h4>
            </div>
            <div className="my-4">
                <p className="font-normal text-[#607E9F] md:text-sm xl:text-base">
                    {challenge.description}
                </p>
            </div>
        </div>
    )
}

export default ChanllengeCard;