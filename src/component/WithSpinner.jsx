import React from 'react'
import { Spin } from 'antd';

const WithSpinner= WrappedComponent=>{
 return function withSpinner({isLoading}) {
    if (isLoading) {
    return (<div className="spinner-container"><Spin size="large" /></div>)
    }
    else
    return (<WrappedComponent/>)
    
    
    
}
}

export default WithSpinner
