const calculatePoints = (receipt) => {
  let points = 0;

  points += receipt.retailer.replace(/[^a-zA-Z0-9]/g, "").length;

  if (Number(receipt.total) % 1 === 0) {
    points += 50;
  }

  if (Number(receipt.total) % 0.25 === 0) {
    points += 25;
  }

  points += Math.floor(receipt.items.length / 2) * 5;

  receipt.items.forEach((item) => {
    const trimmedLength = item.shortDescription.trim().length;
    if (trimmedLength % 3 === 0) {
      points += Math.ceil(Number(item.price) * 0.2);
    }
  });

  const purchaseDay = new Date(receipt.purchaseDate).getDate();
  if (purchaseDay % 2 !== 0) {
    points += 6;
  }

  const [hours, minutes] = receipt.purchaseTime.split(":").map(Number);
  if ((hours === 14 || hours === 15) && minutes < 60) {
    points += 10;
  }

  return points;
};

module.exports = calculatePoints;
