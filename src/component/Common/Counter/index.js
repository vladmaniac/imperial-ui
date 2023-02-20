import React from 'react'
// Import Counter Component
import Counter from '../../Home_One/About/Counter'


const CounterData = [
    {
        countStart: 100,
        countEnd: 2010,
        heading: "COSTITUISCE LA SOCIETA'",
        icon: " fas fa-building"
    },
    {
        countStart: 100,
        countEnd: 6500,
        heading: "PACHI CONSEGNATI",
        icon: "fas fa-globe"
    },
    {
        countStart: 1,
        countEnd: 25,
        heading: "DIPENDENTI",
        icon: " fas fa-building"
    },
]
const HomeTwoCounter = () => {
    return (
        <>
            <section id="counter_area_main">
                <div className="container">
                    <div className="row">
                        {CounterData.map((data, index) => (
                            <Counter countStart={data.countStart} countEnd={data.countEnd} heading={data.heading}
                                     icon={data.icon} key={index}/>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeTwoCounter
