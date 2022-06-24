import axios from "axios"

const CreateGreeting = ()=>{
  const submitHandler = (e)=>{
    e.preventDefault()
    axios({
      method: "post",
      url: "http://localhost:3000/v1/greetings",
      data: {greetingmessage : e.target[0].value}
    });
  }
  return(<form onSubmit= {submitHandler}>
    <input name="message" placeholder="Enter the greeting here: "/>
    <button>Submit</button>
  </form>)
}

export default CreateGreeting;
