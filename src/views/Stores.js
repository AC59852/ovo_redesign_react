import React from 'react'
import eaton from '../img/eaton.jpg'
import squareone from '../img/squareone.jpg'

function Stores() {
    return (
        <section className="shopBck min-h-screen pt-12">
            <div className="storeCon mx-auto">
                <div className="mt-16">
                    <div className="border-2 border-solid storeImg">
                        <img src={eaton} className="pb-16"/>
                    </div>
                    <h2 className="text-center mt-5 mb-10 text-xl tracking-wider">eaton centre</h2>
                    <ul className="text-sm pb-6">
                        <li className="mb-2"><h3>220 yonge st</h3></li>
                        <li className="mb-2"><h3>toronto, on m5b 2h1</h3></li>
                        <li className="mb-2"><h3>canada</h3></li>
                        <li className="mb-2"><h3>mon - sat 11:00AM - 7:00PM</h3></li>
                        <li><h3>sun - 11:00AM - 6:00PM</h3></li>
                    </ul>
                </div>
                <div className="mt-10">
                <div className="border-2 border-solid storeImg">
                        <img src={squareone} className="pb-16"/>
                    </div>
                    <h2 className="text-center my-5 text-xl tracking-wider">square one</h2>
                    <ul className="text-sm">
                        <li className="mb-2"><h3>100 city centre drive</h3></li>
                        <li className="mb-2"><h3>mississauga, on l5b 2c9</h3></li>
                        <li className="mb-2"><h3>canada</h3></li>
                        <li className="pb-16"><h3>mon - sun 11:00AM - 7:00PM</h3></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Stores