import { Grid } from "@mui/material";
import { useState } from "react"
import TextFieldBox from "../../components/TextFieldBox";
import { createSearchParams, useNavigate } from "react-router-dom";


const HomePage = () => {

    const [name, setName] = useState("");
    const navigate = useNavigate();

    const submitOnEnter = (e) => {
        if(e.keyCode == 13){
            navigate({
                pathname: "form",
                search: createSearchParams({
                    searchQuery: name
                }).toString()
            });
        }
    }

    return(   
        <div className="App">
            <Grid container>
                <Grid item xs={8}>
                </Grid>
                <Grid 
                    item 
                    xs={2} 
                    style={{
                        paddingLeft:"10px",
                        paddingRight:"10px",
                        marginTop:"6px",
                        marginLeft:"28px"
                    }}
                    justifyContent="center"
                >
                    <TextFieldBox 
                        value={name} 
                        setValue={setName} 
                        style={{
                            borderRadius:"8px"
                        }} 
                        placeholder="search disneyworld.com"
                        onKeyDown={(e)=>submitOnEnter(e)}
                    />
                </Grid>
                <Grid item xs={1}>
                </Grid>
            </Grid>
        </div>
    )
}

export default HomePage