import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

function FilterBtns(props) {

    function filterA() {
        // terrible way of doing this, but idk the way to actually do it in react
        let elems = document.getElementsByClassName("productCard");
        let elems2 = document.getElementsByClassName("sweater");

        for (var i=0;i<elems.length;i+=1){ elems[i].classList.add("hide"); }
        for (var i=0;i<elems2.length;i+=1){ elems2[i].classList.remove("hide"); }
        props.closeFilters();
    }

    function filterB() {
        let elems = document.getElementsByClassName("productCard");
        let elems2 = document.getElementsByClassName("shirt");

        for (var i=0;i<elems.length;i+=1){ elems[i].classList.add("hide"); }
        for (var i=0;i<elems2.length;i+=1){ elems2[i].classList.remove("hide"); }
        props.closeFilters();
    }

    function filterC() {
        let elems = document.getElementsByClassName("productCard");
        let elems2 = document.getElementsByClassName("hat");

        for (var i=0;i<elems.length;i+=1){ elems[i].classList.add("hide"); }
        for (var i=0;i<elems2.length;i+=1){ elems2[i].classList.remove("hide"); }
        props.closeFilters();
    }

    function filterD() {
        let elems = document.getElementsByClassName("productCard");
        let elems2 = document.getElementsByClassName("bottoms");

        for (var i=0;i<elems.length;i+=1){ elems[i].classList.add("hide"); }
        for (var i=0;i<elems2.length;i+=1){ elems2[i].classList.remove("hide"); }
        props.closeFilters();
    }

    function filterE() {
        let elems = document.getElementsByClassName("productCard");
        let elems2 = document.getElementsByClassName("jacket");

        for (var i=0;i<elems.length;i+=1){ elems[i].classList.add("hide"); }
        for (var i=0;i<elems2.length;i+=1){ elems2[i].classList.remove("hide"); }
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
            <div onClick={() => filterAll()} className="border-solid border-2 flex justify-between items-center px-4 pt-3 pb-2">
                <h3 className="text-xl cursor-pointer">Filter All</h3>
                <FontAwesomeIcon className="text-sm -mt-1 cursor-pointer ml-3" icon={faMinus}/>
            </div>
            <div onClick={() => filterA()} className="border-solid border-t-0 border-2 flex justify-between items-center px-4 pt-3 pb-2">
                <h3 className="text-xl cursor-pointer">Sweaters</h3>
                <FontAwesomeIcon className="text-sm -mt-1 cursor-pointer ml-3" icon={faMinus}/>
            </div>
            <div onClick={() => filterB()} className="border-solid border-t-0 border-2 flex justify-between items-center px-4 pt-3 pb-2">
                <h3 className="text-xl cursor-pointer">Shirts</h3>
                <FontAwesomeIcon className="text-sm -mt-1 cursor-pointer ml-3" icon={faMinus}/>
            </div>
            <div onClick={() => filterC()} className="border-solid border-t-0 border-2 flex justify-between items-center px-4 pt-3 pb-2">
                <h3 className="text-xl cursor-pointer">Hats</h3>
                <FontAwesomeIcon className="text-sm -mt-1 cursor-pointer ml-3" icon={faMinus}/>
            </div>
            <div onClick={() => filterD()} className="border-solid border-t-0 border-2 flex justify-between items-center px-4 pt-3 pb-2">
                <h3 className="text-xl cursor-pointer">Bottoms</h3>
                <FontAwesomeIcon className="text-sm -mt-1 cursor-pointer ml-3" icon={faMinus}/>
            </div>
            <div onClick={() => filterE()} className="border-solid border-t-0 border-2 flex justify-between items-center px-4 pt-3 pb-2">
                <h3 className="text-xl cursor-pointer">Jackets</h3>
                <FontAwesomeIcon className="text-sm -mt-1 cursor-pointer ml-3" icon={faMinus}/>
            </div>
        </div>
    )
}

export default FilterBtns