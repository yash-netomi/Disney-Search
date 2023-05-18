import thumbsUp from "../../images/ThumbsUp.svg"
import thumbsDown from "../../images/ThumbsDown.svg"
import { useState } from "react"

const Button = (props) => {
    const [isThumbs] = useState(props.variant === "thumbsUp" || props.variant === "thumbsDown");

    return(
        <span
            style={{
                display:"inline-block",
                backgroundColor: isThumbs ? "white" : "#2658A6",
                padding:props.variant === "thumbsUp" ? "8px 16px" : props.variant === "thumbsDown" ? "8px 16px 6px 16px" : "8px 24px",
                fontSize:"14px",
                borderRadius:"24px",
                color:"white",
                cursor:"pointer",
                border:isThumbs ? "1px solid #1E6FF1": "",
                ...props.style
            }}   
            onClick={()=>props.onClick()} 
        >
            {props.variant === "thumbsUp" && 
                <img 
                    src={thumbsUp} 
                    alt="Thumbs up" 
                    height="15px"  
                />
            }
            {props.variant === "thumbsDown" && 
                <img 
                    src={thumbsDown} 
                    alt="Thumbs Down" 
                    height="15px"  
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