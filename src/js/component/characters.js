import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export const Characters = (props) => {
    return(
<div className="card m-2" style={{ minWidth: "18rem", maxWidth: "18rem", minHeight: "30rem" }}>
  <img src="..." className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">{props.obj.name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to = {`/single/${props.id}`}><button className="btn btn-primary">Go somewhere</button></Link>
  </div>
</div>)
}
Characters.propTypes = {
  obj: PropTypes.object,
  id:   PropTypes.number
};