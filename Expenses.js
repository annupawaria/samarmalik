import React from 'react'
import Expenseitem from './Expenseitem';
import './Expenses.css';

export default function Expenses(props) {
  return (
    <div className='expenses'>
      <Expenseitem title={props.item[0].title}
 amount={props.item[0].amount}
 date={props.item[0].date}></Expenseitem>

 <Expenseitem title={props.item[1].title}
 amount={props.item[1].amount}
 date={props.item[1].date}></Expenseitem>

 <Expenseitem title={props.item[2].title}
 amount={props.item[2].amount}
 date={props.item[2].date}></Expenseitem>

<Expenseitem title={props.item[3].title}
 amount={props.item[3].amount}
 date={props.item[3].date}></Expenseitem>
 {/* <Navbar title="My Todos List"/>
 <AddTodo addTodo={addTodo}/>
 <Todos todos={todos} onDelete={onDelete}/> */}s
 {/* <Footer/> */}
    </div>
  )
}
