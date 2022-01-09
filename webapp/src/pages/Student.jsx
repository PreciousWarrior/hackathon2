import React, {useState} from 'react'
import PageContainer from '../components/page'
import axios from "axios"


export default class Student extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            data : {},
            loaded: false
        }

        this.props = props;
    }

    componentDidMount(){
        const url = new URL(document.URL)
        const path = url.pathname.split("/")
        const id = path[path.length - 1]

        axios.get(`http://hackdemo.com:8080/fetch/${id}`).then(response=>{
            this.setState({data: response.data, loaded: true})
        })


    }

    render(){
        const sectionStyle = {
            paddingTop: "30px",
            position: "relative"
        }

        const d = this.state.data;
        console.log(d)
        return (
            <PageContainer>
                { this.state.loaded &&
                    <div>
                        <div style={sectionStyle}>
                            <h1>Lesson on {d.title}</h1>
                        </div>
                        <div style={sectionStyle}>
                            <h1>Study Material</h1>
                            <h3>Links</h3>
                            {d.study.links.map(link=><a href={link}>{link}</a>)}
                            <h3>Texts</h3>
                            {d.study.texts.map(text=><p>{text}</p>)}
                        </div>
                        <div style={sectionStyle}>
                            <h1>Practice Material</h1>
                            <h3>Links</h3>
                            {d.practice.links.map(link=><a href={link}>{link}</a>)}
                            <h3>Texts</h3>
                            {d.practice.texts.map(text=><p>{text}</p>)}
                        </div>
                    </div>

                }
                { !this.state.loaded &&
                    <h1>Loading</h1>
                }
            </PageContainer>
        )
    }

}

