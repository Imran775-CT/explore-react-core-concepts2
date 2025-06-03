export default function team(props) {
    const teamStyle = {
        border:'2px solid purple',
        maginBottom:'50px',
        padding:'10px',
        borderRadius:'15px'
    }
    return(
        <div style={teamStyle}>
            <h1>Players:{props.title}</h1>
        </div>
    )
}