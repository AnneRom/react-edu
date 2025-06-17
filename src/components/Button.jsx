
// const Button = () => {
//     const handleClick = () => {
//         alert("Ураа! Літо!");
//     }

//     return <button onClick={handleClick}>Click me</button>

// }
// export default Button;

// const Button = () => {

//     return <button onClick={() => alert("Ураа! Літо!")}>Click me</button>

// }
// export default Button;

// const CustomButton = ({ message, children} ) => {
//     return (
//         <button onClick={() => alert(message)}>
//             {children}
//         </button>
//     )
// }
// export default CustomButton;

// import { useState } from 'react'

// const Button = () => {
//     // let clicks = 0
//     const [ clicks, setClicks ] = useState(0)

//     const handleClick = () => {
//         setClicks(clicks + 1)
//     }

//     return <button onClick={handleClick}>Current: {clicks}</button>

// }
// export default Button;

const Button = ({ value, onUpdate }) => {

    return <button onClick={onUpdate}>Current: {value}</button>

}
export default Button;
