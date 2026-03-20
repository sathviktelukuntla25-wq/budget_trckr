let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function addExpense() {
  let desc = document.getElementById("desc").value;
  let amount = document.getElementById("amount").value;

  if (!desc || !amount) return;

  let expense = { desc, amount: parseFloat(amount) };
  expenses.push(expense);

  localStorage.setItem("expenses", JSON.stringify(expenses));
  displayExpenses();
}

function displayExpenses() {
  let list = document.getElementById("list");
  let total = 0;
  list.innerHTML = "";

  expenses.forEach(e => {
    let li = document.createElement("li");
    li.textContent = `${e.desc} - ₹${e.amount}`;
    list.appendChild(li);
    total += e.amount;
  });

  document.getElementById("total").textContent = total;
}

displayExpenses();