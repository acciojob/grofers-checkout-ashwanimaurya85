const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here


Function to calculate and update the total price
function updateTotalPrice() {
  const prices = document.querySelectorAll('.price');
  let total = 0;

  prices.forEach(priceElement => {
    total += parseFloat(priceElement.textContent);
  });

  const totalRow = document.createElement('tr');
  totalRow.innerHTML = `<td><strong>Total:</strong></td><td>${total.toFixed(2)}</td>`;

  const table = document.getElementById('groceryTable');
  table.appendChild(totalRow);
}

// Call the function initially to calculate and display the total price
updateTotalPrice();

	
  
};

getSumBtn.addEventListener("click", getSum);

