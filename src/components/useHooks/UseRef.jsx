import { useRef, useState, useEffect } from 'react';

const UseRef = ({ source }) => {
    // const [count, setCount] = useState(0);
    // const countRef = useRef(0);

    // const handleClick = () => {
    //         setCount(count + 1);
    //         // countRef.current = countRef.current + 1;
    //         countRef.current += 1;
    //         console.log('State count:', count);
    //         console.log('Ref count:', countRef.current);
    // };
     
    // return (
    //     <>
    //     <button onClick={handleClick}> Натисни мене </button>
    //     <p> State count: {count} </p>
    //     <p> Ref count: {countRef.current} </p>
    //     </>
    // );

    /////////////////////////////////////
//     const [value, setValue] = useState(0);
//     const btnRef = useRef();

//   // Буде undefined на першому рендері
//   // і посиланням на DOM-елемент всі наступні
//     console.log("App: ", btnRef.current);

//     useEffect(() => {
//     // Ефект виконується після монтування,
//     // тому завжди буде посиланням на DOM-елемент
//     console.log("useEffect: ", btnRef.current);
//   });

//     const handleClick = () => {
//     // Кліки будуть після монтування,
//     // тому завжди буде посиланням на DOM-елемент
//     console.log("handleClick: ", btnRef.current);
//   };

//   return (
//     <>
//       <button onClick={() => setValue(value + 1)}>
//         Update value to trigger re-render
//       </button>
//       <button ref={btnRef} onClick={handleClick}>
//         Button with ref
//       </button>
//     </>
//   );
//////////////////////////////////////////////

    const playerRef = useRef();

    const play = () => playerRef.current.play();
    const pause = () => playerRef.current.pause();

    return (
        <>
        <video
            ref={playerRef}
            width="400"
            src={source}>

        </video>
        <button onClick={play}>PLAY</button>
        <button onClick={pause}>PAUSE</button>
        </>
    )
}
export default UseRef;