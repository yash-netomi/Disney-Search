import { useState, useEffect } from 'react';
import disneyNavbar from '../../images/DisneyNavbar.png'
import { useSearchParams } from "react-router-dom";
import { Grid } from "@mui/material";
import './index.css'

const SearchResults = () => {

    const [searchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState("");
  
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
      <div className="pageBackground">
        <img src={disneyNavbar} alt="Disney Navbar logo" width={"100%"}/>
        <Grid container>
          <Grid xs={2}></Grid>
          <Grid xs={10}>
            <div className='searchResultsText'>Search Results</div>
          </Grid>
        </Grid>

        {/* <div className="send">
          Can you please provide your personal details? 
        </div>
        <br/>
        <div>
          <Grid container>
            <Grid
              container
              xs={12}
            >
              <Grid
                xs={12}
                className="form-field"
              >
                <div className="textholder">Name</div>
                <TextFieldBox value={name} setValue={setName} />
              </Grid>
              <Grid
                xs={12}
                className="form-field"
                justifyContent="center"
              >
                <div className="textholder">Date of Birth</div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    value={dob}
                    onChange={(newValue) => {
                    setDob(newValue);
                    }}
                    renderInput={(params) => <TextField id="outlined-basic" variant="outlined" fullWidth style={{ backgroundColor: 'white' }} {...params} />}
                />
                </LocalizationProvider>
              </Grid>
              <Grid
                xs={12}
                className="form-field"
              >
                <div className="textholder">Contact Number</div>
                <TextFieldBox value={contact} setValue={setContact} />
              </Grid>
              <Grid
                xs={12}
                className="form-field"
              >
                <div className="textholder">Country</div>
                <Select
                    className="dropdown-container"
                    value={country.country}
                    onChange={e => setCountry(countries.find((item) => item.country === e.target.value))}
                >
                    {countries.map((item) => {
                        return(
                          <MenuItem key={item.id} value={item.country}>{item.country}</MenuItem>  
                        )
                    })}
                </Select>
              </Grid>
              <Grid
                xs={12}
                className="form-field"
              >
                <div className="textholder">State</div>
                <Select
                    className="dropdown-container"
                    value={state.state}
                    onChange={e => setState(stateList.find((item) => item.state === e.target.value))}
                >
                    {stateList.filter((item) => item.countryId === country.id).map((item) => {
                        return(
                          <MenuItem key={item.id} value={item.state}>{item.state}</MenuItem>  
                        )
                    })}
                </Select>
              </Grid>
              <Grid
                xs={12}
                className="form-field"
              >
                <div className="textholder">Your email</div>
                <TextFieldBox value={email} setValue={setEmail} />
              </Grid>
              <Grid
                container
                xs={12}
                style={{ marginRight: '20px' }}
              >
                <Grid
                  xs={4}
                  md={2}
                  container
                  justifyContent="center"
                  alignItems="center"
                  className="button"
                  onClick={handleSubmitClick}
                >
                  Submit
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div> */}
      </div>
    );
}

export default SearchResults