import React, {useState} from "react";
import {Modal, Button} from 'react-bootstrap';
import DatePicker from 'sassy-datepicker';
import { LogWorkout } from "@/logworkouts";

// import  'react-dater/dist/index.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

function InfoModal() {
    
    const [showBtn, setShowBtn] = useState(true);
    var [pickedDate, currentDateFormatted] = useState("06/10/2022");

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const WorkoutDate = (date) => {

        const currentDate = new Date();
    
        var currentMonth = currentDate.getMonth() + 1;
    
        if(currentMonth <= 9)
        currentMonth = '0' + currentMonth;  
    
        currentDateFormatted = `${currentDate.getFullYear()}-${currentMonth}-${currentDate.getDate()}`;
    
        var month = date.getMonth() + 1;
        if(month <= 9)
        month = '0' + month;  
    
        pickedDate = `${date.getFullYear()}-${month}-${date.getDate()}`;

    }

    function setVisibility() {

        console.log(pickedDate);
        console.log(currentDateFormatted);
        LogWorkout();
    
    }


  return (
    <>
    {} {showBtn ? (
      <Button onClick={() => {setShowBtn(!showBtn); handleShow();}} style={{width: '200px', marginTop: 'auto', marginBottom: 'auto', marginLeft: 'auto', marginRight: 'auto'}} className="nextButton">
         Add Workout.
      </Button>
    ) : <></> }

        <>
            <Modal style={{fixed: 'absolute', width: '250px', left: 'calc(50% - 125px)', top: '25%'}} show={show} onHide={handleClose}>
                <Modal.Header style={{ marginLeft: 'auto', marginRight: 'auto'}}>
                    <Modal.Title style={{marginTop: '10px', fontSize: '12px'}}>Which day are you working out?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <DatePicker style={{zoom: '.65', marginLeft: 'auto', marginRight: 'auto'}} onChange={WorkoutDate}/>
                </Modal.Body>
                <Modal.Footer>
                <Button onClick={() => {setShowBtn(!showBtn); handleClose();}} variant="secondary">
                    Cancel
                </Button>
                <Button variant="primary" onClick={() => {handleClose(); setVisibility();}}>
                    Next
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    </>
  );
}

export { InfoModal };
