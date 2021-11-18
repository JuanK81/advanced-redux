import { useDispatch } from 'react-redux';

import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {
 const dispatch = useDispatch();
console.log(dispatch);
  const toggleCartHandler = () => {
    console.log('clicked');
    console.log("aquí", dispatch(uiActions.toggle()));
    dispatch(uiActions.toggle());
    
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
