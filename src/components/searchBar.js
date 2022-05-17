import React, { useState, useEffect } from 'react';
import  COUNTRIES_QUERY from '../queries/getcountries';
import { useLazyQuery } from "@apollo/client";
import { FaSearch } from 'react-icons/fa';



const SearchBar = () => {

    const [getCountries, result] = useLazyQuery(COUNTRIES_QUERY)
    const [countries, setCountries] = useState([])
    const [continent, setContinent] = useState(true)
    const [aux, setAux] = useState([])
   
  
  
    const handelChange = (e) => {
      let filterCountries = countries.filter((element) => {
        if (element.name.toString().toLowerCase().includes(e.target.value.toString().toLowerCase())){
          return element
        } 
      })
      setAux(filterCountries)
      if (e.target.value === "") {
        setAux([])
      }
    }
    
  
    const handelOptions = () => setContinent(!continent)
    
    
    useEffect(() => {
      getCountries()
      if (result.data) {
        setCountries(result.data.countries)
      }
  
    }, [result])
    const handleClick = (n) => {
      if (n === 1) {
        setContinent(true);
      } else if (n === 0) {
       setContinent(false);
      }
       
      
    }
    
  
    return ( 
  
      <div className="container">       
        <div className="containerInput">
        <p className='searchIcon'><FaSearch /></p>
          <input placeholder= 'Type and search all the countries by continent or language'
            onChange={handelChange}
          ></input>
        </div>
        <div className="buttons">          
        <button className={(handelOptions) ? 'activeButton' : ''} onClick={() => handleClick(1)}> Continent </button>
        <button className={!(handelOptions) ? 'activeButton' : ''} onClick={() => handleClick(0)}> Language </button>
        </div>
        <div className="dFlexCard">
        
        {
          aux.map((x) => {
            return (
              <>
              <div className="containALL">
                {continent ? <h3 className="tittle"> Continent: {x.continent.name} </h3> : (
                  <>
                    <h3>Languajes:</h3>
                    <ul className="dflex">
                      {x.languages.map(lan => <li key="uniqueId1"> | {lan.name} |</li>)}  
                      
                    </ul>
                    
                  </>
                )}
                <div className="containerCountries">
  
                  <div  className="flag">
                    <img alt="" 
                      src={`https://www.banderas-mundo.es/data/flags/w580/${x.code.toString().toLowerCase()}.webp`}
                    />
                  </div>
                  <div  className="countrieData">
                    <p className="countrieName">{x.emoji} {x.name}</p>     
                    <p> Capital: {x.capital}</p>                    
                    <p >Area Code: +{x.phone}</p>
                    <p className="currency">Currency: {x.currency}</p>
  
                  </div>
  
                </div>
              </div>
              </>
            )
          })
        }
        </div>
      </div>
      
  
    );
  };

export default SearchBar;