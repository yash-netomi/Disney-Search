import { useState, useEffect } from 'react';
import { Grid } from "@mui/material";
import profileIcon from "../../images/Profile.svg"
import sparkleIcon from "../../images/Sparkle.svg"
import divider from "../../images/Divider.svg"
import './index.css'
import Tags from '../../components/Tags';
import Button from '../../components/Button';

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
        {
            brands.length>0 && 
            <Grid container alignItems="center" style={{marginBottom:"11px"}}>
                <Grid item xs={2} />
                <Grid item xs={8}>
                    <span style={{marginRight:"20px", fontSize:"20px"}}>Brands:</span>
                    {brands.map((brand)=>{
                        return(
                            <Tags value={brand} />
                        )
                    })}
                </Grid>
            </Grid>
        }
        
        <Grid container alignItems="center">    
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
                <Grid container columnSpacing={1}>
                    <Grid 
                        item 
                        xs={6}
                        style={{
                            display:"flex"
                        }}
                        alignItems="center"
                    >
                    
                    {
                        sources.length>0 && 
                        <>
                            <span 
                                style={{
                                    marginRight:"20px",
                                    fontSize:"20px"
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
                    <Grid 
                        item 
                        xs={6} 
                        style={{
                            display:"flex"
                        }}
                        alignItems="center"
                        justifyContent="flex-end"
                    >
                        <Button variant="thumbsUp" onClick={()=>{}} style={{marginRight:"8px"}}/>
                        <Button variant="thumbsDown" onClick={()=>{}} />
                        <img 
                            src={divider} 
                            alt="Divider" 
                            style={{
                                marginLeft:"33px",
                                marginRight:"16px"
                            }}
                        />
                        <Button variant="text" value="Book now" onClick={()=>{}}/>
                    </Grid>
                </Grid>
                
            </Grid>
            <Grid item xs={2}></Grid>
        </Grid>
      </div>
    );
}

export default Results