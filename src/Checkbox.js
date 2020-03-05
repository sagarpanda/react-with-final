import React from "react";
import PropTypes from 'prop-types';

// const withBreakpoints = (Component) => {
//   return (props) => {
//     const media = useBreakpoints();
//     return <Component {...props} media={media} />
//   };
// }
//
// export default withBreakpoints;

const Checkbox = () => {
  return <div>Checkbox</div>;
};

Checkbox.propTypes = {
  username: PropTypes.string,
  Logout: PropTypes.func
};

export default Checkbox;
