
import "./LogIn.css"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlineIcon from '@mui/icons-material/LockOutline';

function LogIn() {
    return (
        <>

            <div className="logInContainer">
                <div className="item1 contentCenter">
                    <div className="logInDetailsContainer">
                        <div>
                            <img src="/assets/NetworkLOGO.png" alt="logo" />
                        </div>
                        <div className="my-text">
                            log into your account
                        </div>
                        <div className="EmailContainer ">
                            <div className="email1 my-text">
                                Email Address
                            </div>

                            <div className="email2">

                            </div>

                            <div className="email3 contentCenter">
                                <MailOutlineIcon style={{fontSize:"18px"}} />
                            </div>
                        </div>
                        <div className="EmailContainer">
                            <div className="email1 my-text">
                                Password
                            </div>

                            <div className="email2">

                            </div>

                            <div className="email3 contentCenter">
                                <LockOutlineIcon style={{fontSize:"18px"}} />
                            </div>
                        </div>
                        
                        <div className="loginNow contentCenter">
                            Login Now
                        </div>

                        <div className="or contentCenter">
                            or
                        </div>

                        <div className="signupNow contentCenter">
                            Sign Up Now
                        </div>
                    </div>
                </div>
                <div className="item2 contentCenter">
                    <img src="/assets/login.png" alt="login" />
                </div>
            </div>

        </>
    );
}

export default LogIn;