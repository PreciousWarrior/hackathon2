import React, {useState} from 'react'
import PageContainer from "../components/page"
import TextField from "@mui/material/TextField"
import TeacherSection from "../components/TeacherSection"
import Button from "@mui/material/Button"

import axios from "axios"



export default function Teacher(){
    let [data, setData] = useState({
        study: {},
        practice: {},
        title: ""
    })

    const sectionStyle = {
        paddingTop: "30px",
    }
    return (
        <PageContainer>

            <div style={sectionStyle}>
                <h1>Create lesson</h1>
            </div>

            <div style={sectionStyle}>
                <TextField onChange={v=>{
                    const d = data;
                    d.title = v.target.value;
                    setData(d)
                }} id="lesson-title" label="Lesson name" variant="outlined" />
            </div>


            <TeacherSection onChange={obj=>{
                const d = data;
                d.study = obj;
                setData(d)
            }} title="Study Material" />

            <TeacherSection onChange={obj=>{
                const d = data;
                d.practice = obj;
                setData(d)
            }} title="Practice Material" />

            <div style={sectionStyle}>
                <Button onClick={async ()=>{
                    const r = await axios.post("http://hackdemo.com:8080/create", data)
                    const id = r.data
                    window.open(`/lesson/${id}`, "_self")

                }} variant="contained">Submit</Button>
            </div>

        </PageContainer>
    )
}
