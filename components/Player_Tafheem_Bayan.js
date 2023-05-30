import React, { useState, useRef } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { useEffect } from 'react';
import styles from "./Player.module.css";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';



const  Player_Tafheem_Bayan = ({audioList, tafheem, Display}) => {
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [Img, setImg] = useState("Images/Repeat.png");
  const [flag, setflag] = useState(false);
  const [showbookmark, setShowBookmark] = useState(false);
  const [flag2, setflag2] = useState(false);
  const [bookmark, setBookmark] = useState({Title: "", SurahRef: 0, AyatRef: 0, RepeatCount: 0, EndAyatRef: 0, RType: 0, ReciterId: 0});
  const audioRef = useRef(null);
  const audioSrcList = [];
  audioList.map((audio, index) => (
    audioSrcList[index] =  "/assets/" + audio.ReciterRef + "/" + audio.AudioFile
  )) 

  const playAudio = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };
const onAudioCanPlay = () => {
    playAudio();
  };
  const pauseAudio = () => {
    audioRef.current.pause();
    setIsPlaying(false);
    setflag2(true)

  };

  const handleNext = () => {
    if(flag == true)
    {
      playAudio();
    }
    else{
    // setCurrentAudioIndex((prevIndex) => (prevIndex + 1) % audioSrcList.length);
    }
    audioRef.current.currentTime += 5;
  };

  const handlePrevious = () => {
    // setCurrentAudioIndex((prevIndex) => (prevIndex + audioSrcList.length - 1) % audioSrcList.length);
    audioRef.current.currentTime -= 5;
  };

  const handleTimeUpdate = () => {
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    setProgress((currentTime / duration) * 100);
  };

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * audioRef.current.duration;
    audioRef.current.currentTime = seekTime;
    setProgress(e.target.value);
  };

  useEffect(() => {
    if (isPlaying) {  
      setInterval(() => {
        setflag2(true)
        const _duration = Math.floor(audioRef?.current?.duration);
        const _elapsed = Math.floor(audioRef?.current?.currentTime);

        setDuration(formatTime(_duration));
        setElapsed(formatTime(_elapsed));
      });
      }
    setCurrentAudioIndex(0)
  }, [audioList]);

  function formatTime(time) {
    if (time && !isNaN(time)) {
      const minutes =
        Math.floor(time / 60) < 10
          ? `0${Math.floor(time / 60)}`
          : Math.floor(time / 60);
      const seconds =
        Math.floor(time % 60) < 10
          ? `0${Math.floor(time % 60)}`
          : Math.floor(time % 60);

      return `${minutes}:${seconds}`;
    }
    return "00:00";
  }
  const handleBookmarkClose = () => 
  {
    setShowBookmark(false);
  }
  const handleBookmarkCloseOnSave = async () => 
  {
    setShowBookmark(false);
    try{
      const Options = {
          method : 'POST',
          headers : { 'Content-Type': "application/json"},
          body: JSON.stringify(bookmark)
      }
      
      const response = await fetch("/api/bookmark", Options)
      const json = await response.json()
      if(response.status == 200)
        alert("Bookmark Created")
      ;
  }catch(error){
      return error;
  }
  }
  const handleBookmarkShow = () => {
    if(flag2) {
      if(tafheem){
        setBookmark(prevstate => ({
          ...prevstate,
          Title: "Bookmark_" + audioList[currentAudioIndex].SurahRef + "_" + audioList[currentAudioIndex].ReciterRef,
          AyatRef : audioList[currentAudioIndex].AyatFrom,
          EndAyatRef: audioList[currentAudioIndex].AyatTo,
          SurahRef: audioList[currentAudioIndex].SurahRef,
          ReciterId: audioList[currentAudioIndex].ReciterRef,
          RType: 3
        })
        )
      }
      else {
        setBookmark(prevstate => ({
          ...prevstate,
          Title: "Bookmark_" + audioList[currentAudioIndex].SurahRef + "_" + audioList[currentAudioIndex].ReciterRef,
          AyatRef : audioList[currentAudioIndex].AyatFrom,
          EndAyatRef: audioList[currentAudioIndex].AyatTo,
          SurahRef: audioList[currentAudioIndex].SurahRef,
          ReciterId: audioList[currentAudioIndex].ReciterRef,
          RType: 2
        })
        )
      }
      }
    setShowBookmark(true);
  }

  function handelChange(e)  {
      e.preventDefault();
    setBookmark({...bookmark, [e.target.name]: e.target.value, ReciterId: audioList[currentAudioIndex].ReciterRef,SurahRef: audioList[currentAudioIndex].SurahRef})
  }
 
  

  return (
    <>
        <Row>
        <Col md sm xs = {2} >
        <span className = {styles.duration}>{elapsed} </span>
        </Col>
        <Col md sm xs = {8}  className="d-flex align-items-center">
        
          <input
            type="range"
            className={styles.progressbar}
            value={progress}
            onChange={handleSeek}
            min="0"
            max="100"
            step="0.01"
          />
        </Col>
        <Col md sm xs = {2}>
        <span>{duration}</span>
        </Col>
      </Row>
      <Row className= {styles.player_controls}>
      <Col  md sm xs= {3}></Col>
        <Col  md sm xs= {6}className="d-flex align-items-center justify-content-center">
        <img id = "prevoius" src = "/Images/backward.png"  className = {styles.player_controlss} alt = "Backward"  onClick={handlePrevious} />
            
            {isPlaying ? (
              <img id = "Pause" src = "/Images/pause-button-hi.png"  className = {styles.player_controlss} alt = "Pause"  onClick={pauseAudio} />
    
            ) : (
              <img id = "play" src = "/Images/playbutton.png"  className = {styles.player_controlss} alt = "Play"  onClick={playAudio} /> 
            )}
            <img id = "next" src = "/Images/farward.png"  className = {styles.player_controlss} alt = "Next"  onClick={handleNext} />
        </Col>
        <Col  md sm xs= {3}></Col>
        </Row>
        <Row>
        <Col md sm xs = {6} >
        </Col>

        <Col md sm xs = {6} >
          {Display ? (
          <img id = "BookMark" className = {styles.img2} src = "/Images/bookmark.png" alt = "Bookmark" onClick={handleBookmarkShow}/>
          ): ("")}
        </Col>
        </Row>
      <audio
        ref={audioRef}
        src={audioSrcList[currentAudioIndex]}
        onCanPlayThrough={onAudioCanPlay}
        onEnded={handleNext}
        onTimeUpdate={handleTimeUpdate}
      />

      {/* Bookmark */}
      {flag2 ? (
        <Modal show={showbookmark} onHide={handleBookmarkClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Bookmark</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group className="mb-3">
          <Form.Label>Bookmark Name</Form.Label>
          <Form.Control type="text" name = "Title" onChange={handelChange}
           value={bookmark.Title} required= {true}/>
        </Form.Group>
        {/* <Form.Group className="mb-3">
          <Form.Label >Ayat From</Form.Label>
          <Form.Control type="text" name = "AyatRef"  value = {bookmark.AyatRef} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label >Ayat To</Form.Label>
          <Form.Control type="text" name = "EndAyatRef" value = {bookmark.EndAyatRef}  />
        </Form.Group> */}

     </Form>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleBookmarkCloseOnSave}>
            Add Bookmark
          </Button>
        </Modal.Footer>
        
      </Modal>
      ) : ("")}
      </>
  );
};

export default Player_Tafheem_Bayan;
