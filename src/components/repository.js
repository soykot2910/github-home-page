import React from "react";

const Repository = (props) => {
  return (
    <div className="row my-4 text-center d-flex justify-content-center">
      {props.repo.map((singleRepo, index) => {
        return (
          <div key={index} className="p-4 card text-left">
            <div>
              <h3>{singleRepo.name}</h3>
              <p>{singleRepo.description}</p>
              <p>
                <a href={singleRepo.html_url}>Github repository link</a>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Repository;
