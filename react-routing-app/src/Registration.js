import './Registration.css';

function Registration(){
    return(
        <div className="registration">
             <div className="container">
                <div className="container-details">
                    <p className='title'>Registration</p>
                </div>
                <div className="main-container">
                    <input className="field" type="text" placeholder="Enter Name"></input>
                    <br/>
                    <br/>
                    <input className="field" type="email" placeholder="Enter Email"></input>        
                    <br/>
                    <br/>
                    <input className="field" type="text" placeholder="Enter Username"></input>
                    <br/>
                    <br/>
                    <input className="field" type="password" placeholder="Enter Password"></input>        
                    <br/>
                    <br/>
                   
                    <button className="btn">Register</button>   
                    <p className='details'>Already have an account? Log in</p> 
                </div>    
                
            </div> 
        </div>

    )
}
export default Registration; 