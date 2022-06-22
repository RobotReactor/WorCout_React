import React, {useState} from "react";
import { MainScreen } from '@/mainscreen';
import {Modal, Button} from 'react-bootstrap';

import { accountService } from '@/_services';

function Calculator()  {

    const user = accountService.userValue;
    var isUserOne = false;

    const [showBtn, setShowBtn] = useState(true);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function dis(val)
		{
			document.getElementById("result").value+=val
		}

		//function that evaluates the digit and return result
		function solve()
		{
			let x = document.getElementById("result").value
			let y = eval(x)
			document.getElementById("result").value = y
		}

		//function that clear the display
		function clr()
		{
			document.getElementById("result").value = ""
		}

        function salad() {
            // Import result is the URL of your image
            return <img src={salad} alt="Logo" />;
          }
          function isUserOne () {

          }

    return (

        <MainScreen>
            <div style={{backgroundImage: `url("https://i.pinimg.com/originals/69/00/ea/6900ea579e3526954c80b70487a78680.gif")`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height:"100vh", display: "flex",flexDirection: "column"}} >
            
            {} {user.id === 2 ? (
            <div style={{marginLeft: "auto", marginRight: "auto"}}>YOUR TOTAL CALORIES ARE 2600</div>) : 
            <div style={{marginLeft: "auto", marginRight: "auto"}}>YOUR TOTAL CALORIES ARE 5100</div>
            }

            <div className="title" style={{marginLeft: "auto",marginRight: "auto"}}>
                    <table border="1">
                        <thead>
                            <td colspan="3"><input type="text" id="result" /></td>
                            <td><input type="button" value="c" onclick="clr()" style={{marginRight: "11px"}} /> </td>
                        </thead>
                        <thead>
                            <td><input type="button" value="1" onclick="dis('1')" /> </td>
                            <td><input type="button" value="2" onclick="dis('2')" /> </td>
                            <td><input type="button" value="3" onclick="dis('3')" /> </td>
                            <td><input type="button" value="/" onclick="dis('/')" /> </td>
                        </thead>
                        <thead>
                            <td><input type="button" value="4" onclick="dis('4')" /> </td>
                            <td><input type="button" value="5" onclick="dis('5')" /> </td>
                            <td><input type="button" value="6" onclick="dis('6')" /> </td>
                            <td><input type="button" value="-" onclick="dis('-')" /> </td>
                        </thead>
                        <thead>
                            <td><input type="button" value="7" onclick="dis('7')" /> </td>
                            <td><input type="button" value="8" onclick="dis('8')" /> </td>
                            <td><input type="button" value="9" onclick="dis('9')" /> </td>
                            <td><input type="button" value="+" onclick="dis('+')" /> </td>
                        </thead>
                        <thead>
                            <td><input type="button" value="." onclick="dis('.')" /> </td>
                            <td><input type="button" value="0" onclick="dis('0')" /> </td>
                            <td><input type="button" value="=" onclick="solve()" />  </td>
                            <td><input type="button" value="*" onclick="dis('*')" /> </td>
                        </thead>
                    </table>
            </div> 
            <div style={{marginLeft: "auto",marginRight: "auto"}}>
            {} {showBtn ? (
                <Button onClick={() => {setShowBtn(!showBtn); handleShow(); checkUser();}} style={{width: '200px', marginTop: 'auto', marginBottom: 'auto', marginLeft: 'auto', marginRight: 'auto'}} className="nextButton">
                    Get Calories
                </Button> ) : null }
            </div>
                <Modal style={{ overflowY: 'scroll',fixed: 'absolute', width: '250px', height: '400px', left: 'calc(50% - 125px)', top: '25%'}} show={show} onHide={handleClose}>
                    <Modal.Header style={{ marginLeft: 'auto', marginRight: 'auto'}}>
                        <Modal.Title style={{marginTop: '10px', fontSize: '12px'}}>Diet Options:</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ marginLeft: 'auto', marginRight: 'auto'}}>
                   {} {user.id === 2 ? (
                   <>
                        <h3>Breakfast:</h3>
                            <img src="public/images/fruitsmoothie.png" width="150" height="150"/>
                            <p>240cals</p>
                            <img src="public/images/OETB.png" width="150" height="150" />
                            <p>340cals</p>
                            <img src="public/images/Proteincereal.png"  width="150" height="150" /> 
                            <p>160cals</p>
                        <h3 style={{ marginLeft: 'auto', marginRight: 'auto'}}>Lunch:</h3>
                            <img src="public/images/salad.png" width="150" height="150"/>
                            <p>20cals</p>
                            <img src="public/images/TilapiaAsparagus.png" width="150" height="150"/>
                            <p>130cals</p>
                            <img src="public/images/chickenbreast.png" width="150" height="150"/>
                            <p>268cals</p>
                        <h3 style={{ marginLeft: 'auto', marginRight: 'auto'}}>Dinner:</h3>
                            <img src="public/images/chickenbroccoli.png" width="150" height="150"/>
                            <p>180cals</p>
                            <img src="public/images/SteakRice.png" width="150" height="150"/>
                            <p>319cals</p>
                            <img src="public/images/salmonasparagus.png" width="150" height="150"/>
                            <p>200cals</p>
                        <h3 style={{ marginLeft: 'auto', marginRight: 'auto'}}>Total Calories: 2600</h3> 
                    </>  ) : 
                    <>
                        <h3 style={{ marginLeft: 'auto', marginRight: 'auto'}}>Breakfast:</h3>
                            <img src="public/images/pancakes.jpg" width="150" height="150"/>
                            <p>420cals</p>
                            <img src="public/images/quesadilla.jpg" width="150" height="150" />
                            <p>300cals</p>
                            <img src="public/images/burrito.jpg"  width="150" height="150" /> 
                            <p>250cals</p>
                        <h3 style={{ marginLeft: 'auto', marginRight: 'auto'}}>Lunch:</h3>
                            <img src="public/images/bigmac.jpg" width="150" height="150"/>
                            <p>540cals</p>
                            <img src="public/images/taco.jpg" width="150" height="150"/>
                            <p>310cals</p>
                            <img src="public/images/pizza.jpg" width="150" height="150"/>
                            <p>260cals per slice</p>
                        <h3 style={{ marginLeft: 'auto', marginRight: 'auto'}}>Dinner:</h3>
                            <img src="public/images/lobster.jpg" width="150" height="150"/>
                            <p>340cals</p>
                            <img src="public/images/ricebowl.jpg" width="150" height="150"/>
                            <p>319cals</p>
                            <img src="public/images/fishy.jpg" width="150" height="150"/>
                            <p>260cals</p>
                        <h3 style={{ marginLeft: 'auto', marginRight: 'auto'}}>Total Calories: 5100</h3> 
                    </> }
                    </Modal.Body>
                    <Modal.Footer>
                    <Button onClick={() => {setShowBtn(!showBtn); handleClose();}} variant="secondary">
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleClose}>Okay</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </MainScreen>
    )
}

export{ Calculator };