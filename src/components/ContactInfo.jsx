import React from "react";
import PropTypes from "prop-types";
import CircleIcon from "@components/CircleIcon"; // Import the new CircleIcon component

const ContactInfo = ({ contact }) => {
  if (!contact) {
    return <div>No contact information available.</div>;
  }

  const iconColor = "#ffffff"; // White icon color
  const circleColor = "#016b5d"; // Green circle background

  const renderContactItem = (iconType, text, link) => (
    <div className="flex items-center">
      <div className="iconSvg w-[25px] lg:w-[35px] shrink-0">
        <CircleIcon
          type={iconType}
          iconColor={iconColor}
          circleColor={circleColor}
        />
      </div>
      <a
        href={link}
        className="ml-2 text-[0.65rem] lg:ml-4 lg:text-sm font-semibold no-underline hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    </div>
  );

  return (
    <div className="contact-info grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-2 lg:flex lg:flex-row lg:space-x-6 space-y-4 sm:space-y-0 lg:space-y-0 mb-8">
      {renderContactItem(
        "location",
        contact.address.display,
        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          contact.address.full
        )}`
      )}
      {renderContactItem("phone", contact.phone, `tel:${contact.phone}`)}
      {renderContactItem("email", contact.email, `mailto:${contact.email}`)}
      {renderContactItem(
        "social",
        contact.social[0].text,
        contact.social[0].link
      )}
    </div>
  );
};

ContactInfo.propTypes = {
  contact: PropTypes.shape({
    address: PropTypes.shape({
      display: PropTypes.string.isRequired,
      full: PropTypes.string.isRequired,
    }).isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    social: PropTypes.arrayOf(
      PropTypes.shape({
        platform: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default ContactInfo;
