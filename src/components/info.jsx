import React from "react";

const Info = (props) => {
  return (
    <div className="row py-4">
      <div className=" col-md-4">
        <img
          className="img-fluid mb-4"
          alt=" not found"
          src={props.info.avatar_url}
          fluid
        />
      </div>
      <div className="col-md-6 text-left">
        <h2>Name: {props.info.name}</h2>
        <h2>Followers: {props.info.followers}</h2>
        <h2>Following: {props.info.following}</h2>
        <h2>Twitter Username: {props.info.twitter_username} </h2>
      </div>
    </div>
  );
};

export default Info;
