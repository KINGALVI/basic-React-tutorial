/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import './RestCountries.css';
import { addWhitelistCountry, getWhitelistCountry, removeWhitelistCountry } from "./LocalStroge";

export default function RestCountries() {
    return (
        <section>
            <h1>KING ALVI</h1>
            <TotalCountryAPI />
        </section>
    );
}

function TotalCountryAPI() {
    const [country, setCountry] = useState([]);
    const [visitedCountry, setVisitedCountry] = useState([]);

    // Load and display API data
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/independent?status=true')
            .then(response => response.json())
            .then(data => setCountry(data))
            .catch(error => console.error('Error fetching countries:', error));
    }, []);

    // Load cart from local storage
    useEffect(() => {
        const savedCountries = getWhitelistCountry();
        if (savedCountries.length > 0 && country.length > 0) {
            const savedCountryDetails = savedCountries
                .map(cca2 => country.find(whitelistCountry => whitelistCountry.cca2 === cca2))
                .filter(Boolean);
            setVisitedCountry(savedCountryDetails);
        }
    }, [country]);

    const handleVisitedCountries = (country) => {
        const newVisitedCountry = [...visitedCountry, country];
        setVisitedCountry(newVisitedCountry);
        addWhitelistCountry(country.cca2);
    };

    const handleRemoveVisitedCountries = (id) => {
        removeWhitelistCountry(id);
        const updatedVisitedCountry = visitedCountry.filter(country => country.cca2 !== id);
        setVisitedCountry(updatedVisitedCountry);
    };

    return (
        <section>
            {
                visitedCountry.length === 0 ? <h1>Whitelist Some Visited Countries!!</h1> : <h1>{visitedCountry.length} Countries You Have Visited!!</h1>
            }
            {
                visitedCountry.map(country =>
                    <div key={country.ccn3}>
                        <h2>{country.name.common}</h2>
                        <img style={{ width: '100px' }} src={country.flags.png} alt={country.name.common} />
                        <br />
                        <button onClick={() => handleRemoveVisitedCountries(country.cca2)}>Remove Item</button>
                    </div>
                )
            }
            {
                country.length > 0 ? country.map(country =>
                    <CountryAPIDetail
                        key={country.cca2}
                        handleVisitedCountries={() => handleVisitedCountries(country)}
                        allCountry={country}
                    />
                ) : <h1>LOADING PAGE....</h1>
            }
        </section>
    );
}

function CountryAPIDetail({ allCountry, handleVisitedCountries }) {
    const { name, region, subregion, capital, flags, population } = allCountry;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    };

    return (
        <div className={visited ? 'visited-country-container' : 'visit-country-container'}>
            <hr />
            <img src={flags?.png} alt={flags?.alt || "Flag"} />
            <h2 style={{ backgroundColor: visited ? 'purple' : 'black' }}>{name?.common}</h2>
            <h3>Official Name: {name?.official}</h3>
            <h3>Capital: {capital && capital[0]}</h3>
            <h3>Region: {region}</h3>
            <h3>Subregion: {subregion}</h3>
            <h3>Population: {population}</h3>
            <button onClick={handleVisitedCountries}>Mark As Visited</button>
            <br /><br />
            <button onClick={handleVisited}>{visited ? 'Visit Done' : 'Visit'}</button>
            <br /><br />
            {visited ? "You have visited this country!!" : "You haven't visited this country"}
            <hr />
        </div>
    );
}
