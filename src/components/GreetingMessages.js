import React from "react"
import PropTypes from "prop-types"
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import store from "../redux/configureStore";
const GENERATE_RANDOME_GREETING_REQUEST = "GENERATE_RANDOME_GREETING_REQUEST"
const GENERATE_RANDOME_GREETING = "GENERATE_RANDOME_GREETING"
function getThings(){
    store.dispatch({type: GENERATE_RANDOME_GREETING_REQUEST});
    return fetch(`http://localhost:3000/api/v1/greetings`).then(response=>response.json()).then(json=>store.dispatch(getThingsSuccess(json))).catch(error=>console.log(error))

};
class GreetingMessages extends React.Component {

  render () {
    console.log(this.props)
    const {greeting} =this.props
    return (
      <React.Fragment>
        Greeting: {greeting}
        <br/>
        <button className="generateRandomeGreeting" onClick={()=>getThings()}>Generate Greeting</button>
      </React.Fragment>
    );
  }
}
const structuredSelector = createStructuredSelector({
  greeting: state =>state.greeting,
});
GreetingMessages.propTypes = {
  greeting: PropTypes.string
};
const mapDispatchToProps = {getThings};
export function getThingsSuccess(json){
  return {type:GENERATE_RANDOME_GREETING,
  json};
}
export default connect(structuredSelector,mapDispatchToProps)(GreetingMessages);
