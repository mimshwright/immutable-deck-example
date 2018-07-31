export default value => {
  switch (value.toLowerCase()) {
    case "jack":
      return "J";
    case "queen":
      return "Q";
    case "king":
      return "K";
    case "ace":
      return "A️";
    default:
      return value;
  }
};
