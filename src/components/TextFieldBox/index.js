import { TextField } from '@mui/material';

const TextFieldBox = (props) => {
    return(
        <TextField
            id="outlined-basic"
            variant="standard"
            fullWidth
            style={{ 
                backgroundColor: 'white', 
                paddingLeft:"15px", 
                ...props.style
            }}
            value={props.value}
            onChange={e => props.setValue(e.target.value)}
            InputProps={{ 
                disableUnderline: true
            }}
            inputProps={{
                style:{fontSize: 9}
            }}
            placeholder={props.placeholder || ""}
            onKeyDown={props.onKeyDown || {}}
        />
    )
}

export default TextFieldBox;