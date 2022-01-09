export default function PageContainer(props){
    const containerStyle = {
        margin: "30px 200px 0px",
        overflow: "auto",
    }
    return (<div style={containerStyle}>
        {props.children}
    </div>)

    
}
