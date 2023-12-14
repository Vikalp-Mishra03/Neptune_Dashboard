import React from 'react'
import './expense.scss'
import ExpenseTable from '../table/ExpenseTable'
import GrowthTable from '../table/GrowthTable'


export default function Expense() {
    return (
        <div className='expense'>
            <div className="inner">
                <h5>Expense Summary</h5>

                <div className="expenseSummaryTable">
                    <ExpenseTable />
                    <GrowthTable />
                    <ExpenseTable />
                </div>
            </div>
        </div>
    )
}
