/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import './RestCountries.css'
import { addWhitelistCountry, getWhitelistCountry } from "./LocalStroge";

export default function RestCountries() {
    return (
        <section>
            <h1>KING ALVI</h1>
            <TotalCountryAPI></TotalCountryAPI>
        </section>
    )
}


////1. Example of useing api with the help of useEffect and useState


function TotalCountryAPI() {

    const [country, allCountry] = useState([]);

    //Load and display api
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/independent?status=true')
            .then(responce => responce.json())
            .then(Data => allCountry(Data))
    }, [])


    const [visitedCountry, setVisitedCountry] = useState([]);

    //load cart from local stroage 
    useEffect(() => {
        // Step 1: Retrieve saved country IDs from local storage
        const savedCountries = getWhitelistCountry();

        // Step 2: Check if both saved countries and country data are available
        if (savedCountries.length > 0 && country.length > 0) {

            // Step 3: Map saved country IDs to full country details
            const savedCountryDetails = savedCountries.map(cca2 => country.find(whitelistCountry => whitelistCountry.cca2 === cca2))
                .filter(Boolean); // Filter out any undefined values

            // Step 4: Update state with the full details of visited countries
            setVisitedCountry(savedCountryDetails);
        }
    }, [country]); // Dependency array ensures this runs when 'country' changes


    const handelVisitedCountrys = (country) => {
        const newvisitedCountry = [...visitedCountry, country];
        setVisitedCountry(newvisitedCountry);

        //get local stroage data .
        addWhitelistCountry(country.cca2);
    }

    return (
        <section>
            {
                visitedCountry.length === 0 ? <h1>Whitelist Some Visited Countrys !!</h1> : <h1>{visitedCountry.length} Countrys You Have Been Visited !!</h1>
            }


            {
                visitedCountry.map(country =>
                    // eslint-disable-next-line react/jsx-key
                    <div>
                        <h2 key={country.cca2}>{country.name.common}</h2>
                        <img style={{ width: '100px' }} key={country.cca2} src={country.flags.png} alt={country.alt} />
                    </div>

                )
            }


            {
                country.length > 0 ? country.map(country => <CountryAPIDetail key={country.cca2} handelVisitedCountrys={() => handelVisitedCountrys(country)} allCountry={country}></CountryAPIDetail>) : <h1> LODING PAGE....</h1>
            }

        </section>
    )
}

//Destructuring api
function CountryAPIDetail({ allCountry, handelVisitedCountrys }) {

    const { name, region, subregion, capital, flags, population } = allCountry;
    console.log(allCountry)

    const [visited, setVisited] = useState(false);

    const handelVisited = () => {
        setVisited(!visited);
    }

    return (
        // example of using conditional class
        <div className={visited ? 'visited-country-containar' : 'visit-country-containar'}>
            <hr />

            <img src={flags.png} alt={flags.alt} />

            {/* example of using conditional css inside html */}
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