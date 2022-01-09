import Close from "@mui/icons-material/Close"
import IconButton from "@mui/material/IconButton"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import React, { useState } from "react"

export default function Popup(props){
    // entering student information (lesson ID)
    const [isStudent, setStudent] = useState(false)

    const display = props.display ? "block" : "none"
    const modalStyle = {
        display,
        position: "fixed",
        zIndex: "1",
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
        overflow: "auto",
        backgroundColor: "rgba(0, 0, 0, 0.3)"

    }
    const contentStyle = {
        width: "60%",
        maxWidth: "150px",
        maxHeight: "200px",
        height: "40%",
        backgroundColor: "#fefefe",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        padding: "5%"
    }
    const buttonStyle = {
        margin: "5px",
        padding: "5px"
        
    }
    const closeButtonStyle = {
        top: "0px",
        right: "0px",
        position: "absolute"
    }

    return (
        <div style={modalStyle}>
            <div style={contentStyle}>
                <IconButton aria-label="Exit" onClick={()=>{setStudent(false); props.onClose()}} style={closeButtonStyle}>
                    <Close/>
                </IconButton>
                <h2>Welcome!</h2>
                { !isStudent &&
                <div>
                    <Button onClick={()=>setStudent(true)} style={buttonStyle} variant="contained">Continue as student</Button>
                    <Button onClick={()=>window.open("new", "_self")} style={buttonStyle} variant="contained">Continue as teacher</Button>
                </div>
                }
                { isStudent && 
                    <div>
                        <TextField autoFocus="autofocus" label="Lesson ID" variant="outlined" id="lesson-id-input" />
                        <Button style={buttonStyle} variant="contained" onClick={()=>{
                            const lesson_id = document.getElementById("lesson-id-input").value;
                            window.open(`/lesson/${lesson_id}`, "_self")

                        }}>Let's Go!</Button>
                    </div>
                }
            </div>
        </div>
    )
}
