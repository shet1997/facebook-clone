import React, { useState, useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import fire from "../firebase";
import "firebase/auth";


function Createaccount({ open, handleClose }) {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [useremail, setEmail] = useState("");
    const [userpassword, setPassword] = useState("");


    const handleSignUp = (e) => {
      e.preventDefault();
      let email = useremail;
      let password = userpassword;
      fire.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        console.log(errorCode);
        var errorMessage = error.message;
        // ..
      });      
    }

    const styles = (theme) => ({
        root: {
          margin: 0,
          padding: theme.spacing(2),
        },
        closeButton: {
          position: 'absolute',
          right: theme.spacing(1),
          top: theme.spacing(1),
          color: theme.palette.grey[500],
        },
      });
      
      const DialogTitle = withStyles(styles)((props) => {
        const { children, classes, onClose, ...other } = props;
        return (
          <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
              <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                <CloseIcon />
              </IconButton>
            ) : null}
          </MuiDialogTitle>
        );
      });

    return (
        <div>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    <b>Sign Up</b> <br />
                    <p style={{ margin: "0" }}>It's quick and easy</p>
                </DialogTitle>
                <DialogContent dividers>
                <form onSubmit={handleSignUp}>
                    <div className="user_name">
                      <input type="text" name="first_name" value={firstname} onChange={(e) => setFirstname(e.target.value)} placeholder="first_name" />
                      <input type="text" name="last_name" value={lastname} onChange={(e) => setLastname(e.target.value)} placeholder="last_name" />
                    </div>
                    <div className="create_acc_form">
                      <input type="text" name="email_number" placeholder="Email address or phone number" value={useremail} onChange={(e) => setEmail(e.target.value)} />
                      <input type="password" name="password" placeholder="Password" value={userpassword} onChange={(e) => setPassword(e.target.value)} /> <br />
                    </div>
                    <div className="signup_btn">
                        <Button type="submit" variant="contained" className="create_Account">
                            Sign Up
                        </Button>
                    </div>
                </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Createaccount
