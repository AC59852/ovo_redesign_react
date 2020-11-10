import React, {Component} from 'react'
import { Link } from "react-router-dom"
import hoodie from '../img/sweater.jpg'
import beanie from '../img/beanie.jpg'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Checkout extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count1:0,
        count2:0,
        show:true
      };
    }

    IncrementItemOne = () => {
        this.setState({ count1: this.state.count1 + 1 });
      }
      DecreaseItemOne = () => {
        if(this.state.count1 < 0){
            this.setState(prevState => 
                ({count: prevState.count1? prevState.count1: 0})
            )
         } else if(this.state.count1 > 0) {
            this.setState({ count1: this.state.count1 - 1 });
         }
         
      }

      IncrementItemTwo = () => {
        this.setState({ count2: this.state.count2 + 1 });
      }
      DecreaseItemTwo = () => {
        if(this.state.count2 < 0){
            this.setState(prevState => 
                ({count: prevState.count2? prevState.count2: 0})
            )
         } else if(this.state.count2 > 0) {
            this.setState({ count2: this.state.count2 - 1 });
         }
         
      }

    render() {
        function removeItemOne() {
           let hoodie = document.querySelector(".hoodie");
            hoodie.classList.add("hide");
        }

        function removeItemTwo() {
            let hoodie = document.querySelector(".beanie");
             hoodie.classList.add("hide");
         }


        return (
          <div className="pt-24 shopBck min-h-screen">
            <div className="checkoutCon mx-auto">
                <h1 className="text-center w-full py-3 text-4xl border-solid border-2 mb-16">Your Cart</h1>
                <div className="hoodie flex">
                    <img className="w-40 mr-12 border-solid border-2" src={hoodie}/>
                    <div className="text-center mt-4">
                        <h2 className="tracking-wider">ovo essentials hoddie</h2>
                        <h3 className="text-sm mt-4">medium</h3>
                        <h3 className="text-sm mt-3">$158.00</h3>
                        <div className="flex justify-center mt-4 mb-8">
                            <button onClick={this.DecreaseItemOne}><FontAwesomeIcon className="text-xs mx-2" icon={faMinus}/></button>
                                { this.state.show ? <h3 className="px-2 py-1 border-solid border-2">{ this.state.count1 }</h3> : '' }
                            <button onClick={this.IncrementItemOne}><FontAwesomeIcon className="text-xs mx-2" icon={faPlus}/></button>
                        </div>
                        <button className="border-solid border-2 w-full py-1 checkoutRemove" onClick={() => removeItemOne()}>remove</button>
                    </div>
                </div>
                <div className="beanie mt-16 flex">
                    <img className="w-40 mr-12 border-solid border-2" src={beanie}/>
                    <div className="text-center mt-4">
                        <h2 className="tracking-wider">ovo essentials hoddie</h2>
                        <h3 className="text-sm mt-4">medium</h3>
                        <h3 className="text-sm mt-3">$158.00</h3>
                        <div className="flex justify-center mt-4 mb-8">
                            <button onClick={this.DecreaseItemTwo}><FontAwesomeIcon className="text-xs mx-2" icon={faMinus}/></button>
                                { this.state.show ? <h3 className="px-2 py-1 border-solid border-2">{ this.state.count2 }</h3> : '' }
                            <button onClick={this.IncrementItemTwo}><FontAwesomeIcon className="text-xs mx-2" icon={faPlus}/></button>
                        </div>
                        <button className="border-solid border-2 w-full py-1 checkoutRemove" onClick={() => removeItemTwo()}>remove</button>
                    </div>
                </div>
                <div className="text-center mt-20 bg-white py-2 text-xl checkoutBtn tracking-wider"><Link to="/"><h3>checkout</h3></Link></div>
            </div>
          </div>
        );
      }
  }
  export default Checkout;