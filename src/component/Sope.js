import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreater } from '../state';
import { useSelector } from 'react-redux';


function Sope() {
 const dispatch=useDispatch()
 const {WithrowMoney,DepositeMoney} =bindActionCreators(actionCreater,dispatch)
 const balance=useSelector(state=>state.amount)

  return <div>
      <h2> Deposite/Withrow Money  </h2>
      {/* <button type="button" className="btn btn-primary mx-2" onClick={()=>{ dispatch(actionCreater.DepositeMoney(100))}}>+</button>
           Update Your balance
      <button type="button" className="btn btn-primary mx-2" onClick={()=>{ dispatch(actionCreater.WithrowMoney(100))}}>-</button> */}

       <button type="button" className="btn btn-primary mx-2" onClick={()=>{WithrowMoney(100)}}>-</button>
           Update Your balance is ({balance})
      <button type="button" className="btn btn-primary mx-2" onClick={()=>{DepositeMoney(100)}}>+</button>

  </div>;
}

export default  Sope;

