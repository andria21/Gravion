"use client";
import React, { useRef, useState, useEffect } from "react"; // Added useEffect
import { Button } from "../ui/button";
import { Pause, Play } from "lucide-react";

function VideoPlayer(props: Record<string, unknown>) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null); // Ref for the progress bar

  const [isPlaying, setIsPlaying] = useState(true); // Assuming autoPlay is true
  const [progress, setProgress] = useState(0); // Current progress percentage
  const [videoDuration, setVideoDuration] = useState(0); // Total video duration in seconds

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused || videoRef.current.ended) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setVideoDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (event: React.MouseEvent<HTMLDivElement>) => {
    if (progressBarRef.current && videoRef.current && videoDuration > 0) {
      const progressBarRect = progressBarRef.current.getBoundingClientRect();
      const clickPositionX = event.clientX - progressBarRect.left;
      const seekPercentage = (clickPositionX / progressBarRect.width);
      const newTime = seekPercentage * videoDuration;
      videoRef.current.currentTime = newTime;
      setProgress(seekPercentage * 100); // Immediately update progress for responsiveness
    }
  };

  // Effect to handle initial autoPlay state for isPlaying
  useEffect(() => {
    if (videoRef.current && videoRef.current.autoplay) {
        // If autoplay is true and video is not paused initially, set isPlaying to true.
        // Browsers might block autoplay, so we also check if it's paused.
        if (!videoRef.current.paused) {
            setIsPlaying(true);
        } else {
            // If autoplay was intended but blocked, reflect that it's not playing.
            setIsPlaying(false);
        }
    } else if (videoRef.current) {
        // If not autoplaying, initial state should be paused.
        setIsPlaying(!videoRef.current.paused);
    }
  }, []);


  return (
    <div className="relative group w-full h-full bg-black"> {/* Added bg-black for better visibility if video doesn't load */}
      <video
        ref={videoRef}
        src="https://res.cloudinary.com/djynatwlg/video/upload/v1747128968/xy5m2b6uhckarhqk0vy9.mp4"
        className="w-full h-full object-cover"
        preload="metadata"
        autoPlay
        loop
        muted
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onClick={togglePlayPause} // Clicking video toggles play/pause
        onTimeUpdate={handleTimeUpdate} // Update progress
        onLoadedMetadata={handleLoadedMetadata} // Get video duration
      >
        Your browser does not support the video tag.
      </video>

      {/* Centered Play/Pause button (appears on group hover) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <Button
          variant="ghost"
          size="icon"
          onClick={(e) => {
            e.stopPropagation(); // Prevent click from bubbling to video
            togglePlayPause();
          }}
          className="text-white bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full w-16 h-16 pointer-events-auto" // Added pointer-events-auto
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? (
            <Pause className="w-8 h-8" />
          ) : (
            <Play className="w-8 h-8" />
          )}
        </Button>
      </div>

      {/* Controls Bar (appears on group hover) */}
      <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/70 via-black/40 to-transparent pointer-events-none">
        {/* Progress Bar Container */}
        <div
          ref={progressBarRef}
          onClick={handleSeek}
          className="w-full h-1.5 bg-white/30 rounded-full cursor-pointer group/progress pointer-events-auto mb-2" // Added pointer-events-auto and group for progress hover effect
        >
          <div
            style={{ width: `${progress}%` }}
            className="h-full bg-primary rounded-full group-hover/progress:bg-red-400 transition-all duration-100" // Example: change color on progress bar hover
          >
            {/* Optional: Thumb/Scrubber element can be added here */}
            {/* <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-primary rounded-full opacity-0 group-hover/progress:opacity-100"></div> */}
          </div>
        </div>
        {/* You can add other controls here like volume, time display, etc. */}
      </div>
    </div>
  );
}

export default VideoPlayer;
