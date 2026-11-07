"use client"

import React, { useState, useRef, useEffect, useCallback } from "react"
import {
  Play,
  Pause,
  Volume2,
  Volume1,
  VolumeX,
  Maximize,
  Minimize,
} from "lucide-react"

interface CustomVideoPlayerProps {
  src: string
  poster?: string
  className?: string
  autoPlayPreview?: boolean
}

export function CustomVideoPlayer({
  src,
  poster,
  className = "",
  autoPlayPreview = true,
}: CustomVideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [isPreview, setIsPreview] = useState(autoPlayPreview)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [buffered, setBuffered] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(autoPlayPreview)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const [isHoveringVolume, setIsHoveringVolume] = useState(false)
  const [hoverTime, setHoverTime] = useState<number | null>(null)
  const [hoverPosition, setHoverPosition] = useState<number | null>(null)
  const [isScrubbing, setIsScrubbing] = useState(false)

  // Autoplay preview muted on mount
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (autoPlayPreview) {
      video.muted = true
      video.loop = true
      video.play().catch(() => {
        // Autoplay may be restricted in some browsers
      })
    }
  }, [autoPlayPreview])

  // Fullscreen change listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      const doc = document as any
      setIsFullscreen(
        Boolean(
          doc.fullscreenElement ||
          doc.webkitFullscreenElement ||
          doc.mozFullScreenElement ||
          doc.msFullscreenElement
        )
      )
    }
    document.addEventListener("fullscreenchange", handleFullscreenChange)
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange)
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange)
    }
  }, [])

  // Auto-hide controls
  const resetControlsTimeout = useCallback(() => {
    setShowControls(true)
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current)
    }
    if (isPlaying && !isPreview) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false)
        setIsHoveringVolume(false)
      }, 2500)
    }
  }, [isPlaying, isPreview])

  const handleMouseMove = () => {
    resetControlsTimeout()
  }

  const handleMouseLeave = () => {
    if (isPlaying && !isPreview && !isScrubbing) {
      setShowControls(false)
      setIsHoveringVolume(false)
    }
  }

  // Play / Pause toggle
  const togglePlay = useCallback(() => {
    const video = videoRef.current
    if (!video) return

    if (isPreview) {
      video.currentTime = 0
      video.muted = false
      video.loop = false
      video.volume = volume || 1
      setIsMuted(false)
      setIsPreview(false)
      video.play().then(() => {
        setIsPlaying(true)
      }).catch(console.error)
    } else {
      if (video.paused) {
        video.play().then(() => setIsPlaying(true)).catch(console.error)
      } else {
        video.pause()
        setIsPlaying(false)
      }
    }
    resetControlsTimeout()
  }, [isPreview, volume, resetControlsTimeout])

  const handleVideoClick = () => {
    if (isPreview) {
      togglePlay()
      return
    }
    if (!showControls) {
      setShowControls(true)
      resetControlsTimeout()
    } else {
      togglePlay()
    }
  }

  // Video updates
  const handleTimeUpdate = () => {
    const video = videoRef.current
    if (!video) return
    setCurrentTime(video.currentTime)

    if (video.buffered.length > 0 && video.duration > 0) {
      try {
        const bufferedEnd = video.buffered.end(video.buffered.length - 1)
        setBuffered((bufferedEnd / video.duration) * 100)
      } catch {
        // ignore
      }
    }
  }

  const handleLoadedMetadata = () => {
    const video = videoRef.current
    if (!video) return
    setDuration(video.duration)
  }

  const handleEnded = () => {
    if (isPreview) {
      const video = videoRef.current
      if (video) {
        video.currentTime = 0
        video.play().catch(console.error)
      }
    } else {
      setIsPlaying(false)
      setShowControls(true)
    }
  }

  // Volume
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value)
    const video = videoRef.current
    if (!video) return
    video.volume = newVol
    setVolume(newVol)
    if (newVol === 0) {
      video.muted = true
      setIsMuted(true)
    } else if (isMuted) {
      video.muted = false
      setIsMuted(false)
    }
    resetControlsTimeout()
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return
    if (isMuted) {
      video.muted = false
      setIsMuted(false)
      if (volume === 0) {
        setVolume(0.8)
        video.volume = 0.8
      }
    } else {
      video.muted = true
      setIsMuted(true)
    }
    resetControlsTimeout()
  }

  // Fullscreen
  const toggleFullscreen = () => {
    const container = containerRef.current
    if (!container) return

    const doc = document as any
    const isDocFullscreen = Boolean(
      doc.fullscreenElement ||
      doc.webkitFullscreenElement ||
      doc.mozFullScreenElement ||
      doc.msFullscreenElement
    )

    if (!isDocFullscreen) {
      if (container.requestFullscreen) {
        container.requestFullscreen().catch(console.error)
      } else if ((container as any).webkitRequestFullscreen) {
        (container as any).webkitRequestFullscreen()
      } else if ((container as any).msRequestFullscreen) {
        (container as any).msRequestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(console.error)
      } else if (doc.webkitExitFullscreen) {
        doc.webkitExitFullscreen()
      } else if (doc.msExitFullscreen) {
        doc.msExitFullscreen()
      }
    }
    resetControlsTimeout()
  }

  // Seeking
  const calculateScrubTime = (clientX: number) => {
    if (!progressBarRef.current || !duration) return 0
    const rect = progressBarRef.current.getBoundingClientRect()
    const pos = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
    return pos * duration
  }

  const handleProgressBarMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current || !duration) return
    const rect = progressBarRef.current.getBoundingClientRect()
    const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
    setHoverPosition(pos * 100)
    setHoverTime(pos * duration)
  }

  const handleProgressBarMouseLeave = () => {
    setHoverTime(null)
    setHoverPosition(null)
  }

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current
    if (!video || !duration) return
    const targetTime = calculateScrubTime(e.clientX)
    video.currentTime = targetTime
    setCurrentTime(targetTime)
    resetControlsTimeout()
  }

  // Touch scrubbing
  const handleTouchScrub = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!progressBarRef.current || !duration || !e.touches[0]) return
    const rect = progressBarRef.current.getBoundingClientRect()
    const touchX = e.touches[0].clientX
    const pos = Math.max(0, Math.min(1, (touchX - rect.left) / rect.width))
    const targetTime = pos * duration
    const video = videoRef.current
    if (video) {
      video.currentTime = targetTime
      setCurrentTime(targetTime)
    }
    setHoverPosition(pos * 100)
    setHoverTime(targetTime)
    setIsScrubbing(true)
    resetControlsTimeout()
  }

  const handleTouchEnd = () => {
    setIsScrubbing(false)
    setHoverTime(null)
    setHoverPosition(null)
    resetControlsTimeout()
  }

  // Keyboard controls
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const video = videoRef.current
    if (!video) return

    if (e.key === " " || e.key === "k" || e.key === "K") {
      e.preventDefault()
      togglePlay()
    } else if (e.key === "f" || e.key === "F") {
      e.preventDefault()
      toggleFullscreen()
    } else if (e.key === "m" || e.key === "M") {
      e.preventDefault()
      toggleMute()
    } else if (e.key === "ArrowLeft") {
      e.preventDefault()
      video.currentTime = Math.max(0, video.currentTime - 5)
      resetControlsTimeout()
    } else if (e.key === "ArrowRight") {
      e.preventDefault()
      video.currentTime = Math.min(video.duration, video.currentTime + 5)
      resetControlsTimeout()
    }
  }

  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds < 0) return "00:00"
    const m = Math.floor(seconds / 60)
    const s = Math.floor(seconds % 60)
    return `${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}`
  }

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative group/player overflow-hidden bg-black outline-none select-none transition-all duration-300 ${
        isFullscreen
          ? "fixed inset-0 z-50 w-screen h-screen flex items-center justify-center rounded-none border-none"
          : "rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
      } ${className}`}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className={`cursor-pointer block transition-all duration-300 ${
          isFullscreen
            ? "h-full w-auto max-h-screen aspect-[9/16] object-contain mx-auto"
            : "w-full h-auto max-h-[520px] aspect-[9/16] object-contain mx-auto"
        }`}
        playsInline
        preload="auto"
        onClick={handleVideoClick}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      >
        <source src={src} type="video/mp4" />
        Seu navegador não suporta a reprodução deste vídeo.
      </video>

      {/* Center Minimal Play Button (When in Preview or Paused) */}
      {(isPreview || !isPlaying) && (
        <div
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/30 backdrop-blur-[1px] transition-all duration-300 z-10"
        >
          <div className="relative group/playbtn flex items-center justify-center">
            {/* Subtle red glow */}
            <div className="absolute -inset-3 rounded-full bg-primary/30 blur-lg group-hover/playbtn:bg-primary/50 transition-all duration-300"></div>

            {/* Minimal Play circle */}
            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full backdrop-blur-md bg-black/60 border border-white/20 shadow-2xl flex items-center justify-center group-hover/playbtn:scale-105 group-hover/playbtn:border-primary transition-all duration-300">
              <Play className="w-7 h-7 md:w-8 md:h-8 text-white fill-white ml-1 group-hover/playbtn:text-primary group-hover/playbtn:fill-primary transition-colors" />
            </div>
          </div>
        </div>
      )}

      {/* Bottom Gradient Overlay for Controls Visibility */}
      <div
        className={`absolute inset-x-0 bottom-0 pointer-events-none transition-opacity duration-300 z-20 ${
          isFullscreen
            ? "h-36 max-w-[500px] mx-auto bg-gradient-to-t from-black/90 via-black/40 to-transparent"
            : "h-24 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
        } ${showControls && !isPreview ? "opacity-100" : "opacity-0"}`}
      />

      {/* Minimalist Bottom Control Bar */}
      <div
        className={`absolute bottom-0 inset-x-0 px-3 pb-3 pt-2 md:px-5 md:pb-4 transition-all duration-300 z-30 flex justify-center ${
          showControls && !isPreview
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        <div
          className={`backdrop-blur-xl bg-black/80 border border-white/10 rounded-xl px-3 py-2 md:px-4 md:py-2.5 shadow-2xl flex flex-col gap-2 w-full ${
            isFullscreen ? "max-w-[420px]" : ""
          }`}
        >
          {/* Progress / Scrubber Bar */}
          <div
            ref={progressBarRef}
            onClick={handleProgressBarClick}
            onMouseMove={handleProgressBarMouseMove}
            onMouseLeave={handleProgressBarMouseLeave}
            onTouchStart={handleTouchScrub}
            onTouchMove={handleTouchScrub}
            onTouchEnd={handleTouchEnd}
            className="group/scrubber relative h-1.5 hover:h-2 bg-white/15 rounded-full cursor-pointer flex items-center transition-all duration-200"
          >
            {/* Hover Timestamp Tooltip */}
            {hoverTime !== null && hoverPosition !== null && (
              <div
                style={{ left: `${hoverPosition}%` }}
                className="absolute -top-7 -translate-x-1/2 px-1.5 py-0.5 rounded bg-black/90 border border-white/20 text-[10px] font-mono text-white pointer-events-none whitespace-nowrap shadow-lg"
              >
                {formatTime(hoverTime)}
              </div>
            )}

            {/* Buffered Track */}
            <div
              style={{ width: `${buffered}%` }}
              className="absolute left-0 top-0 bottom-0 bg-white/25 rounded-full pointer-events-none"
            />

            {/* Played Progress Track */}
            <div
              style={{ width: `${progressPercent}%` }}
              className="absolute left-0 top-0 bottom-0 bg-primary rounded-full pointer-events-none shadow-[0_0_8px_rgba(255,26,26,0.6)]"
            />

            {/* Scrubber Handle */}
            <div
              style={{ left: `${progressPercent}%` }}
              className="absolute -translate-x-1/2 w-3 h-3 rounded-full bg-white shadow-md scale-0 group-hover/scrubber:scale-100 transition-transform duration-150 pointer-events-none"
            />
          </div>

          {/* Controls Row: Play, Volume, Time & Fullscreen */}
          <div className="flex items-center justify-between text-white gap-2">
            {/* Left: Play/Pause, Volume, Time */}
            <div className="flex items-center gap-2 md:gap-3">
              {/* Play / Pause button */}
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pausar" : "Reproduzir"}
                className="p-1 rounded-md text-white/90 hover:text-white hover:bg-white/10 transition-all"
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 fill-white text-white" />
                ) : (
                  <Play className="w-4 h-4 fill-white text-white ml-0.5" />
                )}
              </button>

              {/* Volume & Inline Slider */}
              <div
                className="flex items-center gap-1 group/vol"
                onMouseEnter={() => setIsHoveringVolume(true)}
                onMouseLeave={() => setIsHoveringVolume(false)}
              >
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? "Ativar som" : "Desativar som"}
                  className="p-1 rounded-md text-white/90 hover:text-white hover:bg-white/10 transition-all"
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX className="w-4 h-4 text-primary" />
                  ) : volume < 0.5 ? (
                    <Volume1 className="w-4 h-4" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-200 flex items-center ${
                    isHoveringVolume ? "w-14 opacity-100" : "w-0 opacity-0"
                  }`}
                >
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    aria-label="Volume"
                    className="w-full h-1 bg-white/20 accent-primary rounded-lg cursor-pointer"
                  />
                </div>
              </div>

              {/* Time Display */}
              <span className="text-[11px] font-mono text-white/70 tracking-tight">
                <span className="text-white font-medium">{formatTime(currentTime)}</span>
                <span className="mx-1 text-white/30">/</span>
                <span>{formatTime(duration)}</span>
              </span>
            </div>

            {/* Right: Fullscreen only (clean, no overflow) */}
            <div className="flex items-center">
              <button
                type="button"
                onClick={toggleFullscreen}
                aria-label={isFullscreen ? "Sair da tela cheia" : "Tela cheia"}
                className="p-1 rounded-md text-white/90 hover:text-white hover:bg-white/10 transition-all"
              >
                {isFullscreen ? (
                  <Minimize className="w-4 h-4" />
                ) : (
                  <Maximize className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
