import Button from "@mui/material/Button"
import React, {useState} from 'react'
import TextField from "@mui/material/TextField"

export default function TeacherSection(props){
    let [materials, setMaterials] = useState({
        texts: [],
        files: [],
        links: [],
    })
    let [linkActivated, activateLink] = useState(false)
    let [textActivated, activateText] = useState(false)

    let [linkContent, setLinkContent] = useState("")
    let [textContent, setTextContent] = useState("")

    const sectionStyle = {
        paddingTop: "30px",
        position: "relative"
    }
    const buttonStyle = {
    }

    return (
        <div style={sectionStyle}>
            <div>
                <h1 >{props.title}</h1>
            </div>
            <div>
                <Button onClick={()=>{
                    activateText(false)
                    activateLink(true)
                }} style={buttonStyle}>Add Link</Button>
                <Button style={buttonStyle}>Add file</Button>
                <Button onClick={()=>{
                    activateLink(false)
                    activateText(true)
                }} style={buttonStyle}>Add text</Button>
            </div>
            { textActivated &&
                <div style={sectionStyle}>
                    <TextField multiline={true} style={{width: "900px"}} onChange={v=>setTextContent(v.target.value)} label="Text" />
                    <Button onClick={()=>{
                        const m = materials
                        m.texts.push(textContent)
                        props.onChange(m)
                        setMaterials(m)
                        activateText(false)
                    }}>Add</Button>
                </div>
            }
            {linkActivated &&
                <div style={sectionStyle}>
                    <TextField onChange={v=>setLinkContent(v.target.value)} label="Link" />
                    <Button onClick={()=>{
                        const m = materials
                        m.links.push(linkContent)
                        props.onChange(m)
                        setMaterials(m)
                        activateLink(false)
                    }}>Add</Button>
                </div>
            }



        </div>
    )
}
