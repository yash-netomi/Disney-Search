import thumbsUp from "../../images/ThumbsUp.svg"
import thumbsDown from "../../images/ThumbsDown.svg"
import { useState } from "react"

const Button = (props) => {
    const [isThumbs] = useState(props.variant === "thumbsUp" || props.variant === "thumbsDown");

    return(
        <span
            style={{
                display:"flex",
                justifyContent: "center", 
                alignItems: "center",
                backgroundColor: isThumbs ? "white" : "#2658A6",
                fontSize:"16px",
                borderRadius:"24px",
                color:"white",
                cursor:"pointer",
                border:isThumbs ? "1px solid #1E6FF1": "",
                height: "38px",
                width: isThumbs ? "54px" : "",
                paddingLeft: !isThumbs ? "24px" : "",
                paddingRight: !isThumbs ? "24px" : "",
                ...props.style
            }}   
            onClick={()=>props.onClick()} 
        >
            {props.variant === "thumbsUp" && 
                <img 
                    src={thumbsUp} 
                    alt="Thumbs up" 
                    height="19px"  
                    width="21px"
                />
            }
            {props.variant === "thumbsDown" && 
                <img 
                    src={thumbsDown} 
                    alt="Thumbs Down" 
                    height="19px"  
                    width="21px"
                />
            }
            {
                props.variant === "text" && 
                <span>
                    {props.value}
                </span>
            } 
        </span>
    )
}

export default Button