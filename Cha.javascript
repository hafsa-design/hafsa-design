<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fuel Cost Calculator</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <!-- Main Container for the Calculator -->
  <div class="calculator-container">
    <h1>Fuel Cost Calculator</h1>

    <!-- Input field for cost of petrol per liter -->
    <div class="input-group">
      <label for="petrol-cost">Cost of Petrol per Liter (₹):</label>
      <input type="number" id="petrol-cost" value="1.72" step="0.01" placeholder="Enter petrol cost">
    </div>

    <!-- Input field for number of liters purchased -->
    <div class="input-group">
      <label for="liters-purchased">Number of Liters Purchased:</label>
      <input type="number" id="liters-purchased" value="0" step="0.01" placeholder="Enter liters purchased">
    </div>

    <!-- Button to calculate the total cost -->
    <button id="calculate-btn">Calculate Total Cost</button>

    <!-- Display the result (total cost) -->
    <p id="total-cost">Total Cost: ₹0.00</p>
  </div>

  <!-- External JavaScript -->
  <script src="script.js"></script>
</body>
</html>
