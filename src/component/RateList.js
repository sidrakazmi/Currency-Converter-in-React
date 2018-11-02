
import React, { Component } from 'react';

class RateList extends Component {

    state = {

        currencies: [],
    };

    componentDidMount() {
        this.getRateList();
    }

    getRateList = () => {

        fetch('https://api.exchangeratesapi.io/latest')
            .then((response) => {
                return response.json();
            }).then((myJson) => {
                console.log(myJson.rates);

                let currencyAr = []
                for (const key in myJson.rates) {
                    console.log(key, myJson.rates[key]);
                    currencyAr.push({ key, value: myJson.rates[key]})
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
        <h2>Currency Rate List </h2>

         <ul> 
             Rate of Euro to
            {this.state.currencies.map(currency => (
                        <li key={currency.key}>
                            {currency.key} : {currency.value} ;
                         </li>
                    ))}
                </ul>
        </div>

        );
    }
}

export default RateList;