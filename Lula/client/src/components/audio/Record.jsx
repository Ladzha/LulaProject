import React from 'react';
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';

const Record = () => {
  const recorderControls = useAudioRecorder()
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
  };

  return (
    <div className='homeContainer'>
      <AudioRecorder 
        onRecordingComplete={(blob) => addAudioElement(blob)}
        recorderControls={recorderControls}
      />
      <button onClick={recorderControls.stopRecording}>Stop recording</button>
    </div>
  )
}

export default Record