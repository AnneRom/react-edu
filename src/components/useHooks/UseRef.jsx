import ReactPlayer from 'react-player';
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
//   const playerRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isMuted, setIsMuted] = useState(true);

//   console.log("Render", { isPlaying, isMuted });

//   const play = () => {
//     console.log("play clicked");
//     setIsPlaying(true);
//   };

//   const pause = () => {
//     console.log("pause clicked");
//     setIsPlaying(false);
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "1rem" }}>
//       <ReactPlayer
//         ref={playerRef}
//         url={source}
//         playing={isPlaying}
//         muted={isMuted}
//         controls
//         width="480px"
//         height="270px"
//         onReady={() => console.log("Player ready")}
//         onPlay={() => {
//           console.log("onPlay event triggered");
//           setIsMuted(false);
//         }}
//         onPause={() => console.log("onPause event")}
//         onError={(e) => console.error("Player error:", e)}
//       />

//       <div style={{ marginTop: "10px" }}>
//         <button onClick={play}>Play</button>
//         <button onClick={pause}>Pause</button>
//       </div>
//     </div>
//   );
const playerRef = useRef();

  const play = () => playerRef.current.play();

  const pause = () => playerRef.current.pause();

  return (
    <div>
      <video ref={playerRef} src={source}>
        Sorry, your browser does not support embedded videos.
      </video>
      <div>
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
      </div>
    </div>
  );

}
export default UseRef;