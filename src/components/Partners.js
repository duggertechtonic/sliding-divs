import React from "react";

const Partners = props => {
  const { show, id, content } = props;
  <div className="dark">{show === id && <div>content</div>}</div>;
};

export default Partners;
