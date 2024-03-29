import React from 'react'

function Alert(props) {
    const capatilise=(word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    } 
    return (
 <div style={{height:'50px'}}>
  { props.alert && <div class={`alert alert-${props.alert.type} d-flex align-items-center`} role="alert">
  <strong>{capatilise(props.alert.type)}</strong> :{props.alert.message}
  
</div>}
      </div>
  )
}

export default Alert
