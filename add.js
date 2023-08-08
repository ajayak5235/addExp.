
const expenseForm = document.getElementById('expense-form');
const expenseAmountInput = document.getElementById('expense-amount');
const expenseNameInput = document.getElementById('expense-name');

const expenseList = document.getElementById('expense-list');


expenseForm.addEventListener('submit', addExpense);


function addExpense(event) {
    event.preventDefault();

    const expenseName = expenseNameInput.value;
    const expenseAmount = parseFloat(expenseAmountInput.value);

    if (expenseName && expenseAmount) {
        const expenseItem = document.createElement('li');
        expenseItem.classList.add('list-group-item');
        expenseItem.innerHTML = `${expenseAmount.toFixed(2)} - ${expenseName}  `;
        
        expenseList.appendChild(expenseItem);

       
        saveExpenseToLocalStorage(expenseAmount , expenseName);

        
        expenseAmountInput.value = '';
        expenseNameInput.value = '';
        
    }
}


function saveExpenseToLocalStorage( amount,name) {
   
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    
   
    expenses.push({ amount , name});
    
   
    localStorage.setItem('expenses', JSON.stringify(expenses));
}
