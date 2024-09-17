import React from "react";
import PropTypes from "prop-types";

const CircleIcon = ({ type, iconColor, circleColor }) => {
  switch (type) {
    case "location":
      return (
        <svg
          className="w-full h-auto"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="27" cy="27" r="26" fill={circleColor} />
          <path
            fill={iconColor}
            transform="translate(11,11)"
            d="M16 0C8.772 0 2.912 5.86 2.912 13.088 2.912 20.428 9.276 25.27 16 32c6.724-6.732 13.088-11.572 13.088-18.912C29.088 5.86 23.228 0 16 0zm0 22.288c-5.302 0-9.602-4.298-9.602-9.602 0-5.302 4.298-9.602 9.602-9.602 5.302 0 9.602 4.298 9.602 9.602s-4.3 9.602-9.602 9.602z"
          />
        </svg>
      );
    case "phone":
      return (
        <svg
          className="w-full h-auto"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="27" cy="27" r="26" fill={circleColor} />
          <path
            fill={iconColor}
            transform="translate(11,11)"
            d="M6.067.655L1.328 5.39C-.696 7.413.196 9.679.196 9.679c2.156 4.733 5.134 9.182 9.03 13.076 3.898 3.893 8.35 6.87 13.087 9.024 0 0 2.195.964 4.293-1.132l4.739-4.736a2.229 2.229 0 0 0 0-3.156l-4.74-4.736a2.233 2.233 0 0 0-3.159 0l-2.665 2.664c-1.837-1.237-3.607-2.619-5.233-4.242-1.627-1.623-3.005-3.391-4.245-5.229l2.665-2.665a2.229 2.229 0 0 0 0-3.157L9.23.655a2.236 2.236 0 0 0-3.162 0z"
          />
        </svg>
      );
    case "email":
      return (
        <svg
          className="w-full h-auto"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="27" cy="27" r="26" fill={circleColor} />
          <path
            fill={iconColor}
            transform="translate(11,11)"
            d="M32 6c0-1.106-.894-2-2-2H2C.894 4 0 4.894 0 6l16 13L32 6z"
          />
          <path
            fill={iconColor}
            transform="translate(11,11)"
            d="M0 9v17c0 1.106.894 2 2 2h28c1.106 0 2-.894 2-2V8.968L16 22 0 9z"
          />
        </svg>
      );
    case "social":
      return (
        <svg
          className="w-full h-auto"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="27" cy="27" r="26" fill={circleColor} />
          <path
            fill={iconColor}
            transform="translate(11,11)"
            d="M7.813 3.936c0 2.175-1.749 3.937-3.906 3.937C1.749 7.873 0 6.111 0 3.936 0 1.762 1.75 0 3.907 0s3.906 1.762 3.906 3.936zm-.571 6.73H.635V32h6.607V10.667zm10.56 0h-6.336V32h6.336V20.801c0-3 1.382-4.785 4.026-4.785 2.43 0 3.598 1.714 3.598 4.785V32H32V18.492c0-5.714-3.24-8.476-7.766-8.476s-6.432 3.524-6.432 3.524v-2.873z"
          />
        </svg>
      );
    default:
      return null;
  }
};

CircleIcon.propTypes = {
  type: PropTypes.string.isRequired,
  iconSize: PropTypes.number.isRequired,
  iconColor: PropTypes.string.isRequired,
  circleColor: PropTypes.string.isRequired,
};

export default CircleIcon;
