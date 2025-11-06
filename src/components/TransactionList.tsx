import react from "react";
import {Transaction} from '../types/transaction'

const TransactionList = ({transactions}: Transaction[]) => {

    return (
        <>
            <h1>Transaction List</h1>
            <table>
            <tr>
                <th>Transaction ID</th>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
            </tr>
            {
            transactions.map((tr: Transaction) => (
                <tr>
                    <td>{tr.id}</td>
                    <td>{tr.date}</td>
                    <td>{tr.description}</td>
                    <td>{tr.amount}</td>
                </tr>
            ))
            }
            </table>
        </>
        
    )
}

export default TransactionList
