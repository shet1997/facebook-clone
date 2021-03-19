import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import "../css/signup.css";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import fire from "../firebase";
import "firebase/auth";
import Createaccount from './Createaccount';



function Signup() {
    const [useremail, setEmail] = useState("");
    const [userpassword, setPassword] = useState("");
    // const [phone, setPhone] = useState("");
    // const [emailerr, setEmailerr] = useState("");
    // const [passworderr, setPassworderr] = useState("");
    // const [phoneerr, setPhoneerr] = useState("");
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }


    const handleLogin = (e) => {
        e.preventDefault();
        let email = useremail;
        let password = userpassword;

        fire.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log(user)
            // ...
            })
            .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode)
            });
 
    }

    return (
        <div className="signup_body">
            <Container>
                <div className="signup_wrapper">
                    <div className="signup_info">
                        <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="logo"height="106px" width="300px" />
                        <h2 style={{fontWeight: "initial", margin: 0, fontSize: "28px"}}>Facebook helps you connect and share <br />with the people in your life.</h2>
                    </div>
                    <div>
                        <Card style={{ maxWidth: "400px" }}>
                            <CardContent>
                                <form onSubmit={handleLogin}>
                                    <input type="text" name="email_number" placeholder="Email address or phone number" value={useremail} onChange={(e) => setEmail(e.target.value)} />
                                    <input type="password" name="password" placeholder="Password" value={userpassword} onChange={(e) => setPassword(e.target.value)} /> <br />
                                    <Button type="submit" variant="contained" className="login_button">
                                        Login
                                    </Button>
                                </form>
                                <div className="forgot_password">
                                    <a href="">forgotten password?</a>
                                </div>
                                <Divider variant="middle" />
                                <div style={{ textAlign: "center" }}>
                                    <Button variant="contained" className="create_Account" onClick={handleClickOpen}>
                                        Create New Account
                                    </Button>
                                    {open ? <Createaccount open={open} handleClose={handleClose} /> : null}
                                </div>
                            </CardContent>
                        </Card>
                        <div style={{ textAlign: "center" }}>
                            <p><b><a href="" className="page">Create a page</a></b>,for a celebrity, band or business.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Signup
