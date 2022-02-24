import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CountriesList(props) {
  //   console.log(props);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(props.countries);
  }, [props.countries]);

  return (
    <div class="col-5">
      {countries.map((country) => {
        return (
          <div key={country.alpha3Code} class="list-group">
            {/* <a class="list-group-item list-group-item-action" href="/ABW"
           >🇦🇼 Aruba</a> */}
            <p class="list-group-item list-group-item-action">
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt="the office gif"
                className="page-img"
              />
              <br></br>
              <Link to={`/${country.alpha3Code}`}>{country.name.common}</Link>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
