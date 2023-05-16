import { useState, useEffect } from 'react';
import { Grid } from "@mui/material";
import profileIcon from "../../images/Profile.png"
import sparkleIcon from "../../images/Sparkle.png"
import './index.css'
import Tags from '../../components/Tags';

const Results = (props) => {
  
    const [brands, setBrands] = useState(["DLR"]);
    const [sources, setSources] = useState(["Disney Theme", "3+"]);
  
    // useEffect(() => {
    // }, []); 
  
    return (
      <div className="resultsContainer">
        <Grid 
            container 
            style={{
                    margin:"33px 0px 10px 0px",
                    paddingLeft:"22px"
                }} 
        >
            <Grid item xs={2}></Grid>
            <Grid item xs={10} style={{display:"flex"}} alignItems="center">
                <span className="profileImageContainer">
                    <img 
                        src={profileIcon} 
                        alt="Profile Image" 
                        height="30px" 
                        width="30px"
                    />
                </span>
                <span className='searchQuestion'>
                    {props.searchQuery}
                </span>
            </Grid>
        </Grid>
        <Grid container style={{marginBottom:"11px"}}>
            <Grid item xs={2}></Grid>
            <Grid item xs={8} className="answerContainer">
                <Grid container>
                    <Grid item xs={1}>
                        <img 
                            src={sparkleIcon} 
                            alt="Sparkle Image" 
                            height="33px" 
                            width="33px"
                        />
                    </Grid>
                    <Grid item xs={11} style={{marginLeft:"-15px", fontSize:"16px"}}>
                        WDW Cost of theme park ticket is $109.00 per ticket. We have multiple unique theme parks at Walt Disney World Resort near Orlando, Florida—theres plenty of fun for a multi-day stay. Prices are for a one-day ticket unless otherwise noted before tax, for ages 10+. To view or make changes to tickets you've already purchased, visit My Plans. DCL You can book cruise tickets here. 
                    </Grid>
                </Grid>
            </Grid> 
            <Grid item xs={2}></Grid>
        </Grid>
        <Grid container alignItems="center">    
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
                {
                    brands.length>0 && 
                    <>
                        <span style={{marginRight:"20px"}}>Brands:</span>
                        {brands.map((brand)=>{
                            return(
                                <Tags value={brand} />
                            )
                        })}
                    </>
                }
                {
                    sources.length>0 && 
                    <>
                        <span 
                            style={{
                                marginRight:"20px",
                                marginLeft:brands.length>0 ? "26px" : "0px"
                            }}
                        >
                            Sources:
                        </span>
                        {sources.map((source)=>{
                            return(
                                <Tags value={source} />
                            )
                        })}
                    </>
                }
            </Grid>
            <Grid item xs={2}></Grid>
        </Grid>
      </div>
    );
}

export default Results