import React from "react";
import { connect } from "react-redux";

const Poardetails = props => {
 
  const showlist = props.fetched ? (
      <h3>Airport Name:{props.airport.airport_name}<br/> 
      IATA Code:{props.airport.IATA_code}
      </h3>

      
      ) 
  : (
   ''
  );
  
  return <ul className="list-group">{showlist}</ul>;
};






const mapStateToProps = state => {
  return {
    airport:state.selectedReducer.airport,
    fetched:state.selectedReducer.fetched,
  };
};

export default connect(mapStateToProps)(Poardetails);
