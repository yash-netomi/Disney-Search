import { Grid } from "@mui/material";
import { useState } from "react"
import TextFieldBox from "../../components/TextFieldBox";
import { validateQuestion } from "../../helpers/validations";


const SearchBox = () => {

    const [name, setName] = useState("");

    const submitOnEnter = (e) => {
        if(e.keyCode == 13 && validateQuestion(name)){
            const searchLink = "/search?searchQuery="+name;
            window.location.href = searchLink;
        }
    }

    return(   
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
                        borderRadius:"8px",
                        backgroundColor: "white"
                    }} 
                    placeholder="search disneyworld.com"
                    onKeyDown={(e)=>submitOnEnter(e)}
                    inputStyle={{
                        fontSize:9,
                        paddingLeft:"15px"
                    }}
                />
            </Grid>
            <Grid item xs={1}>
            </Grid>
        </Grid>
    )
}

export default SearchBox