import React from 'react';

class ImportData extends React.Component{

    constructor(props){ 
        super(props) 
        // Set initial state 
        this.state = {column : Object.keys(this.props.TableData[0])}   
      } 



 // get table heading data
ThData(){
    
     return this.state.column.map((data,i)=>{
         return <th key={i}>{data}</th>
     })
 }

// get table row data
tdData(){
   
     return this.props.TableData.map((data,i)=>{
       return(
           <tr key={i}>
                {
                   this.state.column.map((v,i)=>{
                       return <td>{data[v]}</td>
                   })
                }
           </tr>
       )
     })
}

render(){
  return (
      <table className="table">
        <thead>
         <tr>{this.ThData()}</tr>
        </thead>
        <tbody>
        {this.tdData()}
        </tbody>
       </table>
  )}
}
export default ImportData;