import React, { useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';
//import "./StyleCurrency.css" ;
const Currency = (props) => {
  const [ currency,setCurrency ] = useState('');
  const { dispatch, } = useContext(AppContext);
  // const [name, setName] = useState('');
    
  /*
  const changeCurrency = (val)=>{
            dispatch({
                type: 'SET_CURRENCY',
                payload: val,
            })
    }
  */
  const updateCurrency = (event) => {
    /*console.log(currency+"....A..."+event.target.value);
    */
    dispatch({
          type: 'CHG_CURRENCY',
          payload: event.target.value,
        });
    setCurrency(event.target.value);
    return;
  }
  return (
    <div className='alert alert-secondary'>  
    <span>
    <label style={{marginLeft: '1rem' , backgroundColor:'#118A00', color:'white'}} >
     Currency {
      <select 
        className='btn btn-success dropdown-toggle'
        id='currency'
        onChange={(event) =>updateCurrency(event)}>Currency ({currency})
          <option value='£'>£ Pound</option>
          <option value='$'>$ Dollar</option>
          <option value='€'>€ Euro</option>
          <option value='₹'>₹ Rupee</option>
      </select>
        }
    </label>
      </span>
    </div>



  );
};
/*
export default Currency;
  return (
        <div className='alert alert-secondary'>
            <label style={{marginLeft: '1rem' , backgroundColor:'#33FF49', color:'white'}} >
                Currency {
                <select
                name="hover_color"
                id="Currency"
                onChange={(event) => changeCurrency(event.target.value)}
                style={{ marginLeft: '1rem' , backgroundColor:'#33FF49', color:'white'}}>
                <option style={{color:'black'}} value="£">(£) Pound</option>
                <option style={{color:'black'}} value="₹">(₹) Ruppee</option>
                <option style={{color:'black'}} value="€">(€) Euro</option>
                <option style={{color:'black'}} value="$">($) Dollar</option>
                </select>
            }</label>	
        </div>
    );
};
*/
export default Currency;