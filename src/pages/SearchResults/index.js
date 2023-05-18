import { useState, useEffect } from 'react';
import disneyNavbar from '../../images/DisneyNavbar.png'
import downArrow from '../../images/DownArrow.svg'
import { useSearchParams } from "react-router-dom";
import { Grid } from "@mui/material";
import './index.css'
import Results from '../Results';

const SearchResults = () => {

    const [searchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState("");
    const [showResults, setShowResults] = useState(true)
  
    // const loadData = async () => {
    //   const countryRes = await getCountryData();
    //   const stateRes = await getStateData();
    //   setCountries(countryRes.data);
    //   setStateList(stateRes.data);
    // };
  
    useEffect(() => {
      // loadData();
      setSearchQuery(searchParams.get("searchQuery"));
    }, []); 
  
    return (
      <div className="">
        <img src={disneyNavbar} alt="Disney Navbar logo" width={"100%"}/>
        <Grid container className='pageBackground'>
          <Grid container>
            <Grid xs={2}></Grid>
            <Grid xs={10}>
              <div className='searchResultsText'>Search Results</div>
            </Grid>
          </Grid>
          <Grid container>
            <Grid xs={10}></Grid>
            <Grid xs={2}>
              <span className="downArrow" onClick={()=>setShowResults(!showResults)}>
                <img src={downArrow} alt="Down Arrow"/>
              </span>
              {showResults && <span className="hideSearchText">Hide Search Results</span>}
            </Grid>
          </Grid>
        </Grid>
        <div className="allResultsContainer">
          {showResults && <Results searchQuery={searchQuery} />}
          <div className='greyDivider'/>
        </div>
      </div>
    );
}

export default SearchResults