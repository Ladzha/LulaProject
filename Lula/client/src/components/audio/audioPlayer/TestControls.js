import React from 'react'
import PlayButton from '../../../img/play-icon.svg'
import PauseButton from '../../../img/play-icon.svg'
import NextButton from '../../../img/play-icon.svg'
import PrevButton from '../../../img/play-icon.svg'
import Template from '../../../img/template.svg'

const TestControls = ({
    isPlaying,
      onPlayPauseClick,
    onPrevClick,
    onNextClick,
  }) => {
  return (
    <div className="audio-controls">
    <button
      type="button"
      className="prev"
      aria-label="Previous"
      onClick={onPrevClick}
    >
      <PrevButton />
    </button>
    {isPlaying ? (
      <button
        type="button"
        className="pause"
        onClick={() => onPlayPauseClick(false)}
        aria-label="Pause"
      >
        <PauseButton />
      </button>
    ) : (
      <button
        type="button"
        className="play"
        onClick={() => onPlayPauseClick(true)}
        aria-label="Play"
      >
        <PlayButton />
      </button>
    )}
    <button
      type="button"
      className="next"
      aria-label="Next"
      onClick={onNextClick}
    >
      <NextButton />
    </button>
  </div>
  )
}

export default TestControls