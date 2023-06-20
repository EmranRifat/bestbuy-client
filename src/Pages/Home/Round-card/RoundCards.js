import React from 'react';
import round1 from "../../../assets/cap.png"
import round2 from "../../../assets/phone.png"
import round3 from "../../../assets/watch.png"
import round4 from "../../../assets/shart.png"
import RoundCard from './RoundCard';
const RoundCards = () => {
    const cardData=[
        {
            id:1,
            image:round3,
            name:"Mobile Phone & Accessories"
        },
        {
            id:2,
            image:round2,
            name:"Mobile Phone & Accessories"
        },
        {
            id:3,
            image:round1,
            name:"Mobile Phone & Accessories"
        },
        {
            id:4,
            image:round4,
            name:"Mobile Phone & Accessories"
        }
    ]
    return (
        <div className="mx-4">
            <div className='grid mt-4 lg:grid-cols-4 md:grid-cols-2 rounded shadow-xl bg-base-100'>
            {
                cardData.map(card=><RoundCard card={card} key={card.id}></RoundCard>)
            }
        </div>
        </div>
    );
};

export default RoundCards;