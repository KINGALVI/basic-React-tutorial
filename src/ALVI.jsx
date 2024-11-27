/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"

export default function ALVI() {
    return (
        <section>
            <h1>KING ALVI</h1>
            <TotalCountryAPI></TotalCountryAPI>
        </section>
    )
}


////1. Example of useing api with the help of useEffect and useState

//Load and display api
function TotalCountryAPI() {

    const [country, allCountry] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/independent?status=true')
            .then(responce => responce.json())
            .then(Data => {
                console.log(Data)
                allCountry(Data)
            })
    }, [])

    return (
        <section>

            {
                country.length > 0 ? country.map(country => <CountryAPIDetail key={country.cca2} allCountry={country}></CountryAPIDetail>) : <h1> LODING PAGE....</h1>
            }

        </section>
    )
}

//Destructuring api
function CountryAPIDetail({ allCountry }) {
    const { name, region, subregion, capital, flags } = allCountry;
    return (
        <div>
            <hr />
            <img src={flags.png} alt={flags.alt} />
            <h2>{name.common}</h2>
            <h3>Official Name : {name.official}</h3>
            <h3>Capital : {capital[0]}</h3>
            <h3>Region : {region}</h3>
            <h3>Region : {subregion}</h3>
            <hr />
        </div>
    )
}