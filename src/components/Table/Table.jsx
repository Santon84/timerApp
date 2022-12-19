import React from 'react'
import TableCol from './TableCol'
import { userData } from './data/userData';


const Table = () => {
console.log('TABLE RENDER');
  return (
    <div>
        <TableCol colData = {userData[0]} />
    </div>
  )
}

export default Table
