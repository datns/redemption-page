import React from 'react'
import Card from "../Card";



const Carousel = ({ title }) => {
    return (
        <div className="flex flex-col bg-white">
            <div className="h-[72px] pl-6 pr-[72px] py-6 justify-start items-center inline-flex p-[24px]">
                <div className="text-gray-900 text-lg font-semibold leading-normal">{title}</div>
            </div>
            <div
                className="flex overflow-x-scroll pb-[24px] hide-scroll-bar"
            >
                <div
                    className="flex flex-nowrap"
                > {
                    [1, 2, 3, 4].map(value=> {
                        return (
                            <div className="inline-block ml-[24px]" key={value}>
                                <Card />
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default Carousel
