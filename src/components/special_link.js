import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";

const SpecialLink = ({ to, title, location }) => {

  const getRef = () => {
    if(location.pathname.startsWith("/de/")) {
      return "/de" + to;
    }
    return "/en" + to;
  };

  return (
    <div>
      <Link to={getRef()}>
        {title} {"<Link>"}
      </Link>
      &nbsp;
      |
      &nbsp;
      <a href={getRef()}>
        {title} {"<a>"}
      </a>
    </div>
  );
};

SpecialLink.propTypes = {
  location: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default SpecialLink;
