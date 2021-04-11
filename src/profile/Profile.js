
import PropTypes from "prop-types";
import me from './me.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';



 


export default function Profile({fullName, bio, profession,handleName}) {
    return (
   
      
      <div style ={{borderStyle:'solid',height:"715px",borderColor:"blue",backgroundColor:"grey ",justifyContent:"center"}}>
  
        <img style={{height:"200px",width:"200px",borderStyle:"solid",borderColor:"cyan",marginTop:"50px"}} src={me}  alt="mypic" />
      <h1 style={{color:"black" , marginTop:"150px",fontStyle:"italic"}} Name>  {fullName} </h1>
       <h3 style={{color:"black",fontStyle:"italic"}}bio>  {bio}</h3>
       <h3 style={{color:"black",fontStyle:"italic"}}  profession >  {profession}</h3>
      
       {/* <img style={{height:"200px",width:"200px",borderStyle:"solid",borderColor:"cyan"}} src={me}  alt="mypic" /> */}

       <button style={{marginTop:"50px",backgroundColor:"cyan",fontSize:"larger"}} onClick = {handleName}>Verify</button>
       {/* <button onClick={this.handleClick}></button> */}
      </div>
     
    );
  };

  Profile.defaultProps = {
      fullName:"someone",
      bio:"something",
      profession:"profession",
      handleName : function handleName(){
      alert(" name of profile user")
      }
  };
  Profile.propTypes = {
    fullName: PropTypes.string,
    bio:PropTypes.string,
    handleName: PropTypes.func,
    profession: PropTypes.string,
   };
