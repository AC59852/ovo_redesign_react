import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function FilterBtns(props) {

    function filterA() {
        // terrible way of doing this, but idk the way to actually do it in react
        let elems = document.getElementsByClassName("productCard");
        let elems2 = document.getElementsByClassName("Unbranded");

        for (var i=0;i<elems.length;i+=1){ elems[i].classList.add("hide"); }
        for (var i=0;i<elems2.length;i+=1){ elems2[i].classList.remove("hide"); }
        props.closeFilters();
    }

    function filterB() {
        let elems = document.getElementsByClassName("productCard");
        let elems2 = document.getElementsByClassName("Small");

        for (var i=0;i<elems.length;i+=1){ elems[i].classList.add("hide"); }
        for (var i=0;i<elems2.length;i+=1){ elems2[i].classList.remove("hide"); }
        props.closeFilters();
    }

    function filterC() {
        let elems = document.getElementsByClassName("productCard");
        let elems2 = document.getElementsByClassName("Refined");

        for (var i=0;i<elems.length;i+=1){ elems[i].classList.add("hide"); }
        for (var i=0;i<elems2.length;i+=1){ elems2[i].classList.remove("hide"); }
        props.closeFilters();
    }

    function filterD() {
        let elems = document.getElementsByClassName("productCard");
        let elems2 = document.getElementsByClassName("Handcrafted");

        for (var i=0;i<elems.length;i+=1){ elems[i].classList.add("hide"); }
        for (var i=0;i<elems2.length;i+=1){ elems2[i].classList.remove("hide"); }
        props.closeFilters();
    }

    function filterE() {
        let elems = document.getElementsByClassName("productCard");
        let elems2 = document.getElementsByClassName("Tasty");

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
            <div className="border-solid border-2 flex justify-between items-center px-4 pt-3 pb-2">
                <h3 className="text-xl">Filter All</h3>
                <FontAwesomeIcon onClick={() => filterAll()} className="text-sm -mt-1 cursor-pointer ml-3" icon={faPlus}/>
            </div>
            <div className="border-solid border-t-0 border-2 flex justify-between items-center px-4 pt-3 pb-2">
                <h3 className="text-xl">Sweaters</h3>
                <FontAwesomeIcon onClick={() => filterA()} className="text-sm -mt-1 cursor-pointer ml-3" icon={faPlus}/>
            </div>
            <div className="border-solid border-t-0 border-2 flex justify-between items-center px-4 pt-3 pb-2">
                <h3 className="text-xl">Shirts</h3>
                <FontAwesomeIcon onClick={() => filterB()} className="text-sm -mt-1 cursor-pointer ml-3" icon={faPlus}/>
            </div>
            <div className="border-solid border-t-0 border-2 flex justify-between items-center px-4 pt-3 pb-2">
                <h3 className="text-xl">Hats</h3>
                <FontAwesomeIcon onClick={() => filterC()} className="text-sm -mt-1 cursor-pointer ml-3" icon={faPlus}/>
            </div>
            <div className="border-solid border-t-0 border-2 flex justify-between items-center px-4 pt-3 pb-2">
                <h3 className="text-xl">Bottoms</h3>
                <FontAwesomeIcon onClick={() => filterD()} className="text-sm -mt-1 cursor-pointer ml-3" icon={faPlus}/>
            </div>
            <div className="border-solid border-t-0 border-2 flex justify-between items-center px-4 pt-3 pb-2">
                <h3 className="text-xl">Jackets</h3>
                <FontAwesomeIcon onClick={() => filterE()} className="text-sm -mt-1 cursor-pointer ml-3" icon={faPlus}/>
            </div>
        </div>
    )
}

export default FilterBtns