import React, { Component } from 'react';

class Converter extends Component {

  state = {
    inputAmount: "",
    result: "",
    conversionFrom: "EUR",
    toCurrency: "",
    currencies: [],
  };

  getRates = () => {  // fetches rates from api but because it has to be used furter in the program so we have to wait
    // for it to complete the fetch so we wrap it around the promise and return promise from this method

    return new Promise((resolve, reject) => {
      fetch('https://api.exchangeratesapi.io/latest')
        .then((response) => {
          return response.json();
        })
        .then((myJson) => {
          //console.log(myJson.rates);
          if (myJson.rates.hasOwnProperty(this.state.toCurrency)) {
            resolve(myJson.rates[this.state.toCurrency]);
          } else {
            reject('Currency not found!');
          }

          /*   this is to be used to show which currrencies are available and to choose ebtween them
          const currencyAr = []
             for (const key in myJson.rates) {
               currencyAr.push(key)
             }
             
             this.setState({ currencies: currencyAr })
   */
        }).catch(err =>
          reject(err));
    });
  }

  selectConversion = (e) => {
    this.setState({ toCurrency: e.target.value }, () => {
    });

    /*if (e.target.value === "GBP") {
      loop in the currencies arrays n sets the to currency to that selection
      this.setState({ toCurrency: e.target.value }, () => {
        this.convertCurrency();
      });
    }*/
  }

  convertCurrency = () => {
    let val;
    this.getRates().then(res => {
      val = res * this.state.inputAmount
     
      this.setState({ result: val });
      console.log("this is reslut = " + this.state.result);
    }).catch(err => console.log(err));

  };

  handleInput = event => {
     
    this.setState({ inputAmount: event.target.value });
  }

  render() {
    return (
      <div className="converter">
        <h1><span>Currency </span> Converter <span role="img" aria-label="money">&#x1f4b5;</span> </h1>
        <div className="form">
          <input name="input" type="text" placeholder="Enter amount in Euro here" onChange={this.handleInput} value={this.state.inputAmount} />
         </div>
       
        <div className="column-left col-md-6">
        <p>Choose currency </p>
          <select name="to" onChange={this.selectConversion}>
          <option value="choose" defaultValue> --- </option>
            <option value="NOK">NOK</option>
            <option value="USD">US Dollar</option>
            <option value="GBP">GBP</option> 
            <option value="SEK">SEK</option>  
          </select>
          <button className="btn" onClick={this.convertCurrency} > Convert now ! </button>
         <h2>{this.state.result}</h2>
        </div>    
      </div>
      
    );
  }
}

export default Converter;