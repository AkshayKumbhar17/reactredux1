import React from 'react';
import Rainbow from '../hoc/Rainbow';

const Contact =(props)=>{
    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 2000);
        return(
            <div className="container center">
                <h4>Contact</h4>
                <p>this is Contact page here. this is Contact page here . this is Contact page here</p>
                
            </div>
        )
    }

export default Rainbow(Contact);