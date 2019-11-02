import React from "react";
import { connect } from "react-redux";
import {fetchleadsapi,fetchairport} from "../reducers/api"
import {  fetchleads, receiveleads,fetchport, receiveport } from "../actions/leadsactions";

class Citylist extends React.Component {
  componentDidMount() {
    this.props.user();
  }
  render(){

    const showlist = this.props.fetched ? (
      this.props.leads.city.map((item,i) => (
        <option key={i.toString()} value={item}> 
    {item}
  </option>
      ))) 
  : (
    <option>Please wait while loading...</option>
  );
  
  return (

    
  <ul className="list-group">

<div className="form-group">
  <label >Select City:</label>
  <select className="form-control" onChange={e=>this.props.selected(e)}>
  {showlist}
  </select>
</div>


  

  </ul>
  )

}

};

const mapDispatchToProps = dispatch => {
  return {
    user:()=>{
      dispatch(fetchleads());
      fetchleadsapi().then(result=>dispatch(receiveleads(result.data)))
    },
    selected:(e)=>{
      dispatch(fetchport());
      fetchairport(e.target.value).then(result=>dispatch(receiveport(result.data[0])))
    }
  };
};

const mapStateToProps = state => {
  return {
    fetched: state.fetchcities.fetched,
    status:state.fetchcities.status,
    leads:state.fetchcities
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Citylist);
