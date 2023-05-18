import { useState, useEffect } from 'react';
import disneyNavbar from '../../images/DisneyNavbar.png'
import relevantArticles from '../../images/RelevantArticles.png'
import downArrow from '../../images/DownArrow.svg'
import { useSearchParams } from "react-router-dom";
import { Grid } from "@mui/material";
import Results from '../Results';
import TextFieldBox from '../../components/TextFieldBox';
import enterIcon from "../../images/Enter.svg"
import './index.css'

const SearchResults = () => {

    const [searchParams] = useSearchParams();
    const [question, setQuestion] = useState("")
    const [queries, setQueries] = useState([]);
    const [showResults, setShowResults] = useState(true)
  
    // const loadData = async () => {
    //   const countryRes = await getCountryData();
    //   const stateRes = await getStateData();
    //   setCountries(countryRes.data);
    //   setStateList(stateRes.data);
    // };

    const addQuestion = () => {
      const newQueries = [question, ...queries];
      setQueries(newQueries);
      setQuestion("");
    }

    const submitOnEnter = (e) => {
        if(e.keyCode == 13) addQuestion();
    }
  
    useEffect(() => {
      // loadData();
      setQueries([searchParams.get("searchQuery")]);
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
              {queries.map((query) => {
                return(
                  <Results searchQuery={query} />
                )
              })}
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
                        border:"1px solid #2C2C2C",
                        marginBottom:"26px"
                    }} 
                    placeholder="Ask a question..."
                    inputStyle={{
                        fontSize:"24px",
                        paddingLeft:"15px",
                        endAdornment: <img src={enterIcon} height="35px" width="36px" className='enterIcon' onClick={()=>addQuestion()} />
                    }}
                    multiline
                    maxRows={4}
                    onKeyDown={(e)=>submitOnEnter(e)}
                />
              </Grid>
            </Grid>
          </>
        }
        <Grid container style={{backgroundColor:"white"}}>
          <Grid item xs={2} />
          <Grid item xs={10}>
            <span className='relevantText'>Relevant Articles: 24 results</span>
          </Grid>
          <img src={relevantArticles} alt="Relevant Articles" width={"100%"}/>
        </Grid>
      </div>
    );
}

export default SearchResults