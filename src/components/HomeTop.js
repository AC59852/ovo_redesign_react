import React from 'react'
import drake from '../img/drake.png'

class HomeTop extends React.Component {
    render() {
        return (
        <div className="homeTop">
            <div className="w-full justify-center homeTopTitle">
                <div className="flex justify-center pt-24">
                    <span className="px-4">O</span><span className="px-4">V</span><span className="px-4">O</span>
                </div>
                <h1 className="text-center text-xl">october's very own</h1>
            </div>
            <div>
                <img className="flex ml-auto mt-10" src={drake}/>
            </div>
        </div>
        )
    }
}

export default HomeTop;