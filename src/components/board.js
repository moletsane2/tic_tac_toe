import React from 'react'
import Box from './box'


// creating a sqaure box in with grid layout
const style = {
    borderRadius:"10px",
    border:"solid",
	width: "350px",
	height: "350px",
	margin: "0 auto",
	display: "grid",
	gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};

// props has 'value' which is a array of 9 charectors that needs to de displayed in box.js
// and a 'onClick' function that needs to be called when button is clicked
// restoring array of box.js
const Board = (props) => (
    <div style={style}>
    {[ ...Array(9)].map((_, pos) =>
     <Box key={pos} name={pos} 
     onClick={()=>props.onClick(pos)} 
     value={props.value[pos]}/>)}
    </div>
)

export default Board