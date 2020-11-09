import React from 'react'

function SizeBtns(props) {

    function filter() {
        props.closeFilters();
    }
    
    return(
        <div className="mx-auto mt-2 flex-column text-center filterBtns" onClick={() => filter()}>
            <div className="border-solid border-2 pt-2 pb-1">
                <h3 className="text-xl">Small</h3>
            </div>
            <div className="border-solid border-t-0 border-2 pt-2 pb-1" onClick={() => filter()}>
                <h3 className="text-xl">Medium</h3>
            </div>
            <div className="border-solid border-t-0 border-2 pt-2 pb-1" onClick={() => filter()}>
                <h3 className="text-xl">Large</h3>
            </div>
            <div className="border-solid border-t-0 border-2 pt-2 pb-1" onClick={() => filter()}>
                <h3 className="text-xl">X-Large</h3>
            </div>
        </div>
    )
}

export default SizeBtns