"use client";
import React, { useRef, useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Pause, Play, Volume2, VolumeX } from "lucide-react"; // Added Volume2 and VolumeX

function VideoPlayer(props: Record<string, unknown>) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(true); // Initialize based on video's muted prop

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
      setIsMuted(videoRef.current.muted); // Sync initial mute state
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

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      // Initial isPlaying state
      if (videoRef.current.autoplay && !videoRef.current.paused) {
        setIsPlaying(true);
      } else {
        setIsPlaying(!videoRef.current.paused);
      }
      // Initial isMuted state
      setIsMuted(videoRef.current.muted);
    }
  }, []);


  return (
    <div className="relative group w-full h-full bg-black">
      <video
        ref={videoRef}
        src="https://res.cloudinary.com/djynatwlg/video/upload/v1747128968/xy5m2b6uhckarhqk0vy9.mp4"
        className="w-full h-full object-cover"
        preload="metadata"
        autoPlay
        loop
        muted // Video starts muted by default
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onClick={togglePlayPause}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      >
        Your browser does not support the video tag.
      </video>

      {/* Centered Play/Pause button */}
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

      {/* Controls Bar */}
      <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/70 via-black/40 to-transparent pointer-events-none">
        <div className="flex items-center gap-3 pointer-events-auto"> {/* Wrapper for controls */}
          {/* Progress Bar Container */}
          <div
            ref={progressBarRef}
            onClick={handleSeek}
            className="flex-grow h-1.5 bg-white/30 rounded-full cursor-pointer group/progress" // Removed mb-2, using flex gap
          >
            <div
              style={{ width: `${progress}%` }}
              className="h-full bg-primary rounded-full group-hover/progress:bg-red-400 transition-all duration-100"
            >
              {/* Optional: Thumb/Scrubber element can be added here */}
              {/* <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-primary rounded-full opacity-0 group-hover/progress:opacity-100"></div> */}
            </div>
          </div>

          {/* Mute/Unmute Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
                e.stopPropagation(); // Prevent interference if other click handlers are on parent
                toggleMute();
            }}
            className="text-white hover:bg-white/10 w-8 h-8" // Adjusted size for control bar
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </Button>
          {/* You can add other controls here like time display, fullscreen, etc. */}
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
