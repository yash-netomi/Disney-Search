import { useState, useEffect } from 'react';
import disneyNavbar from '../../images/DisneyNavbar.png'
import downArrow from '../../images/DownArrow.svg'
import { useSearchParams } from "react-router-dom";
import { Grid } from "@mui/material";
import './index.css'
import Results from '../Results';
import TextFieldBox from '../../components/TextFieldBox';

const SearchResults = () => {

    const [searchParams] = useSearchParams();
    const [question, setQuestion] = useState("")
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
            <Grid xs={2} style={{display:"flex", paddingRight:"17px"}} justifyContent="flex-end">
              <span className="downArrow" onClick={()=>setShowResults(!showResults)}>
                <img src={downArrow} alt="Down Arrow"/>
              </span>
              {showResults && <span className="hideSearchText">Hide Search widget</span>}
            </Grid>
          </Grid>
        </Grid>
        {
          showResults && 
          <>
            <div className="allResultsContainer">
              <Results searchQuery={searchQuery} />
            </div>
            <div className='greyDivider'/>
            <Grid container>
              <Grid xs={2} />
              <Grid xs={8} className="askQuestionContainer">
                <TextFieldBox 
                    value={question} 
                    setValue={setQuestion} 
                    style={{
                        borderRadius:"10px",
                        fontSize:"24px",
                        minHeight:"72px",
                        paddingTop:"15px",
                    }} 
                    placeholder="Ask a question..."
                    inputStyle={{
                        fontSize:"9",
                        paddingLeft:"15px"
                    }}
                />
              </Grid>
            </Grid>
          </>
        }
        
      </div>
    );
}

export default SearchResults