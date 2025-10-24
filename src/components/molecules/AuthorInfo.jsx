import React from "react";
import Avatar from "../atoms/Avatar";

const AuthorInfo = ({ name, role, image }) => (
  <div className="author">
    <Avatar src={image} alt={name} />
    <div>
      <h4 className="author-name">{name}</h4>
      <p className="author-role">{role}</p>
    </div>
  </div>
);

export default AuthorInfo;
