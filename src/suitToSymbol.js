export default suit => {
  switch (suit.toLowerCase()) {
    case "clubs":
      return "♣️";
    case "diamonds":
      return "♦";
    case "hearts":
      return "♥️";
    case "spades":
      return "♠️";
    default:
      return "";
  }
};
