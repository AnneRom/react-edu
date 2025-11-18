import { useRef, useState } from "react";

export default function VideoPlayer({ src, width = "100%", height = "360px" }) {
  if (!src) return null;

  const isYouTube = /(?:youtube\.com\/watch\?v=|youtu\.be\/)/i.test(src);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  // YouTube
  if (isYouTube) {
    const match = src.match(/(?:v=|\/)([A-Za-z0-9_-]{11})/);
    const id = match ? match[1] : null;
    const embed = id ? `https://www.youtube.com/embed/${id}?autoplay=${playing ? 1 : 0}` : src;

    return (
      <div style={{ maxWidth: "650px" }}>
        <iframe
          src={embed}
          title="youtube-player"
          width={width}
          height={height}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <button onClick={() => setPlaying(!playing)} style={{ margin: "10px" }}>
          {playing ? "Pause" : "Play"}
        </button>
      </div>
    );
  }

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (playing) {
        videoRef.current.pause();
    } else {
        videoRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div style={{ maxWidth: "650px" }}>
      <video
        ref={videoRef}
        src={src}
        width={width}
        height={height}
        controls
        style={{ display: "block" }}
      />
      <button onClick={handlePlayPause} style={{ margin: "10px" }}>
        {playing ? "Pause" : "Play"}
      </button>
    </div>
  );
}
