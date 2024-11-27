/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import './ALVI.css'

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

    // const [visitedCountry , setVisitedCountry] = useState([]);

    const handelVisitedCountrys = (countryList) => {
        alert('alvi', countryList)
    }

    return (
        <section>
            <h1>Countrys That I Visited !!</h1>
            <ul>

            </ul>
            {
                country.length > 0 ? country.map(country => <CountryAPIDetail key={country.cca2} handelVisitedCountrys={handelVisitedCountrys} allCountry={country}></CountryAPIDetail>) : <h1> LODING PAGE....</h1>
            }

        </section>
    )
}

//Destructuring api
function CountryAPIDetail({ allCountry, handelVisitedCountrys }) {

    const { name, region, subregion, capital, flags, population } = allCountry;

    const [visited, setVisited] = useState(false);

    const handelVisited = () => {
        setVisited(!visited);
    }

    return (
        // example of using conditional class
        <div className={visited ? 'visited-country-containar' : 'visit-country-containar'}>
            <hr />

            <img src={flags.png} alt={flags.alt} />
            <h2 style={{ backgroundColor: visited ? 'purple' : 'black' }}>{name.common}</h2>
            <h3>Official Name : {name.official}</h3>
            <h3>Capital : {capital[0]}</h3>
            <h3>Region : {region}</h3>
            <h3>Region : {subregion}</h3>
            <h3>Population : {population}</h3>

            <button onClick={handelVisitedCountrys}>Mark As Visited</button>

            <br /> <br />
            {/* example of using conditional button */}
            <button onClick={handelVisited}>{visited ? 'visit Done' : 'Visit'}</button>
            <br /> <br />
            {visited ? "You have visited this country !!" : "You haven't visited this country"}

            <hr />
        </div>
    )
}