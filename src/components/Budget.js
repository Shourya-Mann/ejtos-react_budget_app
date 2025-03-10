import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
	const { budget,dispatch,expenses, currency } = useContext(AppContext);

	const changeBudget = (val)=>{
		const totalExpenses = expenses.reduce((total, item) => {
			return (total += item.cost);
		}, 0);

		
		if(val<totalExpenses) {
			alert("You cannot reduce the budget that is already allocated!");
		}else if (val > 20000) {
            alert("Budget cannot exceed 20000!");
        }else {
			dispatch({
				type: 'SET_BUDGET',
				payload: val,
			})
			}
	}
	
	return (

        <div className="alert alert-secondary">
        <label>
          Budget: {' '} 
          {currency}
          <input
            type="number"
            step="10"
            value={budget}
            onInput={event => changeBudget(event.target.value)}
          />
        </label>
		</div>
	);
};

export default Budget;
