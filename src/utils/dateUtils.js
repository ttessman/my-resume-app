export const convertDateToText = (dateString) => {
  if (dateString.toLowerCase() === "current") {
    return "Current";
  }

  const date = new Date(dateString);
  if (isNaN(date)) {
    return dateString; // Return the original string if it's not a valid date
  }

  const options = { year: "numeric", month: "short" };
  return date.toLocaleDateString("en-US", options);
};
