import React from 'react'

const style = {
    marginTop:"30px",
	width: "200px",
	margin: "0 auto",
	display: "grid",
	fontSize: "29px",
	fontWeight: "100",
    borderRadius:"20px"
};

const Refresh = (props) => <button name={"btn"} style={style} onClick={props.onClick}>{props.value}</button>

export default Refresh