const Tags = (props) => {
    return(
        <span
            style={{
                display:"inline-block",
                backgroundColor:"white",
                padding:"8px 20px 8px 20px",
                fontSize:"18px",
                borderRadius:"8px",
                marginRight:"16px"
            }}    
        >
            {props.value}
        </span>
    )
}

export default Tags;