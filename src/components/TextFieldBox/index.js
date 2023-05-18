import { TextField } from '@mui/material';

const TextFieldBox = (props) => {
    return(
        <TextField
            id="outlined-basic"
            variant="standard"
            fullWidth
            style={{ 
                backgroundColor: 'white', 
                ...props.style
            }}
            value={props.value}
            onChange={e => props.setValue(e.target.value)}
            InputProps={{ 
                disableUnderline: true,
                endAdornment: props.inputStyle.endAdornment ? props.inputStyle.endAdornment : ""
            }}
            inputProps={{
                style:
                {
                    fontSize: props.inputStyle.fontSize,
                    paddingLeft: props.inputStyle.paddingLeft,
                }
            }}
            placeholder={props.placeholder || ""}
            onKeyDown={props.onKeyDown || {}}
        />
    )
}

export default TextFieldBox;