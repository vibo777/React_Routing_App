import './Login.css';
import {Link} from 'react-router-dom';

function Login(){
    return(
        <div className="login">
             <div className="container">
                <div className="container-details">
                    <p className='title'>ALREADY MEMBERS</p>
                    <p className='title'>Need Help?</p>
                </div>
                <div className="main-container">
                    <input className="field" type="text" placeholder="Enter Username"></input>
                    <br/>
                    <br/>
                    <input className="field" type="password" placeholder="Enter Password"></input>        
                    <br/>
                    <br/>
                    <button className="btn"> SIGN IN</button>    
                </div>    
                <div className="registration-link">
                    <p className="details">Don't have an account yet?</p>
                    <p className="link"><Link to="/register">Create an account</Link></p>
                </div>
            </div> 
        </div>

    )
}
export default Login;