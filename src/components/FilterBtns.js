import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function FilterBtns(props) {
    function filterA() {
        let elems = document.getElementsByClassName("Unbranded");

        for (var i=0;i<elems.length;i+=1){
            elems[i].classList.add("hide");
          }

        props.closeFilters();
    }

    function filterAll() {
        let elems = document.getElementsByClassName("productCard");

        for (var i=0;i<elems.length;i+=1){
            elems[i].classList.remove("hide");
          }

        props.closeFilters();
    }
    
    return(
        <div className="mx-auto mt-2 flex-column filterBtns">
            <div className="border-solid border-2 flex justify-between items-center px-4 pt-3 pb-2">
                <h3 className="text-xl">Filter All</h3>
                <FontAwesomeIcon onClick={() => filterAll()} className="text-sm -mt-1 cursor-pointer ml-3" icon={faPlus}/>
            </div>
            <div className="border-solid border-t-0 border-2 flex justify-between items-center px-4 pt-3 pb-2">
                <h3 className="text-xl">Filter A</h3>
                <FontAwesomeIcon onClick={() => filterA()} className="text-sm -mt-1 cursor-pointer ml-3" icon={faPlus}/>
            </div>
            <div className="border-solid border-t-0 border-2 flex justify-between items-center px-4 pt-3 pb-2">
                <h3 className="text-xl">Filter B</h3>
                <FontAwesomeIcon onClick={() => filterA()} className="text-sm -mt-1 cursor-pointer ml-3" icon={faPlus}/>
            </div>
            <div className="border-solid border-t-0 border-2 flex justify-between items-center px-4 pt-3 pb-2">
                <h3 className="text-xl">Filter C</h3>
                <FontAwesomeIcon onClick={() => filterA()} className="text-sm -mt-1 cursor-pointer ml-3" icon={faPlus}/>
            </div>
        </div>
    )
}

export default FilterBtns