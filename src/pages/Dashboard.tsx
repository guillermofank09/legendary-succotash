import {useEffect, useState} from "react";
import transactionData from "../data/transactions"
import {Transaction} from '../types/transaction'
import TransactionList from "../components/TransactionList"


const Dashboard = () => {

    const [transactions, setTransactions] = useState<Transaction[]>([])
    const [error, setError] = useState<string>("")

    useEffect(() => {
        try{
            const data = new Promise(()=> Promise.resolve(data)); 
            setTransactions(transactionData)
        }
        catch(errorMsg: any){
            setError(errorMsg);
        }
    },[transactions])

    return (
        <div>
            <button onClick={()=> orderTransactions()}> Order Transactions </button>
            <TransactionList transactions={transactions} />
            {error && <div style={{color: "red"}}>{error}</div>}
        </div>
    )
}

export default Dashboard