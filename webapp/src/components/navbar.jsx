import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import logo from "../icon.png"

export default function Navbar(props){
    const buttonStyle = {
        float: "right",
        marginRight: "10px",
        marginTop: "5px",
        marginBottom: "5px"

    }
    const logoStyle = {
        position: "fixed",
        float: "left",
    }
    return (
        <div>
        <div style={{overflow: 'auto', position: "fixed", width: "100%", height: "50px"}}> 
            <div style={{position: "absolute", top: "0", left: "0", right: "0", bottom: "0", backgroundColor: "rgb(238,238,238)"}}/>

            <div style={logoStyle} onClick={()=>window.open("/", "_self")}>
                <img height="50px"src={logo} alt="Logo"/>
            </div>
            <Button style={buttonStyle} variant="contained" color="primary" onClick={()=>props.onClick("getStarted") }>
                Get started
            </Button>
            <Button style={buttonStyle} variant="text" onClick={()=>props.onClick("faq")}>
                FAQ
            </Button>

        </div>
        <div style={{width: "100%", height: "50px"}} div/>
        </div>
    )
}

