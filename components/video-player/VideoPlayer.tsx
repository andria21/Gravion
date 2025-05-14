"use client";
import React, { useRef, useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Pause, Play, Volume2, VolumeX, Maximize, Minimize } from "lucide-react"; // Added Maximize and Minimize icons

function VideoPlayer(props: Record<string, unknown>) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const hideControlsTimerRef = useRef<NodeJS.Timeout | null>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

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
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleSeek = (event: React.MouseEvent<HTMLDivElement>) => {
    if (progressBarRef.current && videoRef.current && videoDuration > 0) {
      const progressBarRect = progressBarRef.current.getBoundingClientRect();
      const clickPositionX = event.clientX - progressBarRect.left;
      const seekPercentage = (clickPositionX / progressBarRect.width);
      const newTime = seekPercentage * videoDuration;
      videoRef.current.currentTime = newTime;
      setProgress(seekPercentage * 100);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  // Function to show controls and reset the hide timer
  const showControlsTemporarily = () => {
    setShowControls(true);
    
    // Clear any existing timer
    if (hideControlsTimerRef.current) {
      clearTimeout(hideControlsTimerRef.current);
    }
    
    // Set a new timer to hide controls after 3 seconds
    hideControlsTimerRef.current = setTimeout(() => {
      setShowControls(false);
    }, 2000); // 2 seconds
  };

  // Handle user interaction with the video
  const handleVideoInteraction = () => {
    showControlsTemporarily();
    togglePlayPause();
  };

  // Handle user interaction with controls
  const handleControlsInteraction = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering video click
    showControlsTemporarily();
  };

  // Toggle fullscreen mode
  const toggleFullscreen = () => {
    if (!document.fullscreenElement && videoContainerRef.current) {
      // Enter fullscreen
      if (videoContainerRef.current.requestFullscreen) {
        videoContainerRef.current.requestFullscreen()
          .then(() => setIsFullscreen(true))
          .catch(err => console.error(`Error attempting to enable fullscreen: ${err.message}`));
      }
    } else if (document.fullscreenElement) {
      // Exit fullscreen
      document.exitFullscreen()
        .then(() => setIsFullscreen(false))
        .catch(err => console.error(`Error attempting to exit fullscreen: ${err.message}`));
    }
  };

  // Listen for fullscreen change events (e.g., when user presses Esc to exit)
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      if (hideControlsTimerRef.current) {
        clearTimeout(hideControlsTimerRef.current);
      }
    };
  }, []);

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
    <div 
      ref={videoContainerRef}
      className="relative w-full h-full bg-black" 
      onMouseEnter={showControlsTemporarily}
      onMouseMove={showControlsTemporarily}
      onTouchStart={showControlsTemporarily}
    >
      <video
        ref={videoRef}
        src="https://res.cloudinary.com/djynatwlg/video/upload/f_auto:video,q_auto/gravionv9"
        className="w-full h-full object-cover"
        preload="metadata"
        autoPlay
        loop
        muted
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onClick={handleVideoInteraction}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      >
        Your browser does not support the video tag.
      </video>

      {/* Centered Play/Pause button */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none ${showControls ? 'opacity-100' : 'opacity-0'}`}>
        <Button
          variant="ghost"
          size="icon"
          onClick={(e) => {
            e.stopPropagation();
            togglePlayPause();
            showControlsTemporarily();
          }}
          className="text-white bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full w-16 h-16 pointer-events-auto"
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
      <div 
        className={`absolute bottom-0 left-0 right-0 p-3 transition-opacity duration-300 bg-gradient-to-t from-black/70 via-black/40 to-transparent pointer-events-none ${showControls ? 'opacity-100' : 'opacity-0'}`}
        onClick={handleControlsInteraction}
      >
        <div className="flex items-center gap-3 pointer-events-auto">
          {/* Progress Bar Container */}
          <div
            ref={progressBarRef}
            onClick={(e) => {
              handleSeek(e);
              showControlsTemporarily();
            }}
            className="flex-grow h-1.5 bg-white/30 rounded-full cursor-pointer group/progress"
          >
            <div
              style={{ width: `${progress}%` }}
              className="h-full bg-primary rounded-full group-hover/progress:bg-red-400 transition-all duration-100"
            >
              {/* Optional: Thumb/Scrubber element can be added here */}
            </div>
          </div>

          {/* Mute/Unmute Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              toggleMute();
              showControlsTemporarily();
            }}
            className="text-white hover:bg-white/10 w-8 h-8"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </Button>

          {/* Fullscreen Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              toggleFullscreen();
              showControlsTemporarily();
            }}
            className="text-white hover:bg-white/10 w-8 h-8"
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          >
            {isFullscreen ? (
              <Minimize className="w-5 h-5" />
            ) : (
              <Maximize className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
