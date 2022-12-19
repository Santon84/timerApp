import React, {memo} from 'react'
import TableCell from './TableCell';
import './TableCol.css'
function TableCol({colData = {}}) {

  const {colTitle, highQuality, productionTime, warranty, payments, totalCost} = colData;
  
  return (
    
    <div className='table__col'>
        <TableCell item={colTitle}/>
        <TableCell item={highQuality}/>
        <TableCell item={productionTime}/>
        <TableCell item={warranty}/>
        <TableCell item={payments}/>
        <TableCell item={totalCost}/>
    </div>
    
  )
}

export default memo(TableCol)
