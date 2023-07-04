import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';
//import "./StyleCurrency.css" ;
const Currency = () => {
  const {dispatch } = useContext(AppContext);
  // const [name, setName] = useState('');
    
  
  const changeCurrency = (val)=>{
            dispatch({
                type: 'SET_CURRENCY',
                payload: val,
            })
    }
    /*
    const styles = {
        hover_color: {
          backgroundColor: '#04D719',
          color: '#FEFEFE',
          ':hover': {
            backgroundColor: '#EFE3EB',
            color: '#04D719',
          },
        },
      };
      */ 
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
export default Currency;