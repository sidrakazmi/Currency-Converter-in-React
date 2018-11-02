
import React, { Component } from 'react';

class RateList extends Component {

  state = {
    currencies: [],
  };

  getRateList = () => { 
      fetch('https://api.exchangeratesapi.io/latest')
        .then((response) => {
          return response.json();
        }).then((myJson) => {
            resolve(myJson.rates);       
                console.log(myJson.rates);

          let currencyAr = []
             for (const key in myJson.rates) {
               currencyAr.push(key)
             }
 
             this.setState({ currencies: currencyAr })

        })
  }
/*
  changeColor = (e) => {
    this.setState({ toCurrency: e.target.value }, () => {
    });
  }
*/


  render() {
    return (
      <div className="list">
        <h1>Currency Rate List </h1>

          <button className="btn" onClick={this.getRateList} > Click me! </button>
          <h2>{this.state.currencies}</h2>

        </div>    
      
    );
  }
}

export default RateList;