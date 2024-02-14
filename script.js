// JavaScript functionality
document.getElementById('addExpenseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    const date = document.getElementById('date').value;
    const category = document.getElementById('category').value;

    // Create a new list item for the expense
    const listItem = document.createElement('li');
    listItem.textContent = `Amount: $${amount}, Date: ${date}, Category: ${category}`;

    // Append the new expense to the expense list
    document.getElementById('expenses').appendChild(listItem);

    // Clear the form fields
    document.getElementById('amount').value = '';
    document.getElementById('date').value = '';
    document.getElementById('category').value = '';
});
