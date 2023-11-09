import React, { useEffect, useState } from 'react';

function Data() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Function to fetch items from the server
    async function fetchData() {
      try {
        const response = await getTransactions();
        setTransactions(response);
        console.log(response); // Log the response data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData(); // Call the async function
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  // Function to fetch items from the server
  function getTransactions() {
    return fetch("http://localhost:3000/transactions")
      .then(response => response.json())
      .then(data => data);
  }

  const showData = transactions.map(transaction => (
    <tr key={transaction.id}>
      <td style={{color: 'blue'}}>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
    </tr>
  ));

  return (
    <div>
      <h2>Transactions</h2>
      <table style={{width:'90%',borderCollapse: 'collapse'}}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {showData}
        </tbody>
      </table>
    </div>
  );
}

export default Data;
