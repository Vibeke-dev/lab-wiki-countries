import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function CountryDetails(props) {
  //console.log(props);
  const [countries, setCountries] = useState(props.countries);
  const [borders, setborders] = useState([]);
  //const [foundCountry, setFoundCountry] = useState([]);

  const { countryId } = useParams();

  //find specific country
  const country = countries.find((countryObj) => {
    //console.log(countryObj.borders);
    return countryObj.alpha3Code === countryId;
  });

//   Border name - not done
//   if (!country) {
//       const borderCountry = country.borders.find((countryName) => {
//           return countryName.borders === countries.border
//       }) 
//       console.log(borderCountry)
//   }

  //find specific country
  // useEffect(() => {
  //     const country = countries.find((countryObj) => {
  //         console.log(countryObj.alpha3Code);
  //         return countryObj.alpha3Code === countryId;
  //       });
  //     setFoundCountry([country]);
  // }, []);

  return (
    <div class="col-5">
      <div class="col-7">
        <h1>{country.name.common}</h1>
        <table class="table">
          <thead></thead>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area}km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {country.borders.map((border) => {
                    return (
                      <li key={border}>
                        <Link to={`/${border}`}>{border}</Link>
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CountryDetails;
