import React from 'react';

const Card = () => {
	return (
		<div className="w-[200px] relative bg-white rounded shadow border border-gray-100">
			<div className="w-full h-[98px] bg-purple-500 rounded-tl rounded-tr" />
			<div className="p-[16px]">
				<div className="text-blue-600 text-base font-semibold leading-normal">15 Coins</div>
				<div className="text-neutral-400 text-base font-normal leading-normal mt-[8px]">50% discount for every $100 top-up on your Shell Petrol Card</div>
			</div>

		</div>
	)
}

export default Card
