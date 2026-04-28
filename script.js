let rotations = {};

const foods = {
  monthlyWheel: [
    "Avocado",
    "Salmon",
    "Blueberries",
    "Spinach",
    "Oats",
    "Greek Yogurt",
    "Sweet Potato",
    "Almonds"
  ],
  dailyWheel: [
    "Apple",
    "Carrots",
    "Eggs",
    "Quinoa",
    "Banana",
    "Turkey",
    "Broccoli",
    "Lentils",
    "Tuna",
    "Walnuts"
  ]
};

function spinWheel(wheelId, resultId) {
  const wheel = document.getElementById(wheelId);
  const result = document.getElementById(resultId);

  if (!rotations[wheelId]) {
    rotations[wheelId] = 0;
  }

  const foodList = foods[wheelId];
  const randomIndex = Math.floor(Math.random() * foodList.length);
  const extraSpins = 360 * 5;
  const segmentSize = 360 / foodList.length;
  const finalRotation = extraSpins + randomIndex * segmentSize + Math.floor(Math.random() * segmentSize);

  rotations[wheelId] += finalRotation;
  wheel.style.transform = `rotate(${rotations[wheelId]}deg)`;

  result.textContent = "Spinning...";

  setTimeout(() => {
    result.textContent = `Your pick is: ${foodList[randomIndex]}!`;
  }, 3000);
}
