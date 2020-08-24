import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expensesWord = expenseCount === 1 ? 'expense' : 'expenses';
    const totalPrice = numeral(expensesTotal / 100).format('$0,0.00');
    return (
        <div>
            <h2>Viewing {expenseCount} {expensesWord} totalling {totalPrice}  </h2>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: expensesTotal(visibleExpenses)
    };
  };

export default connect(mapStateToProps)(ExpensesSummary);
