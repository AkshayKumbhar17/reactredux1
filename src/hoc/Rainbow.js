import React from 'react';

const Rainbow = (Component) => {
    
    // math.flor this get the real value***
    // math.random get randomly array number***

    const colours = ['red','yellow','green','pink','blue','orange'];
    const randomcolor = colours[Math.floor(Math.random()*5)];
    const className = randomcolor + '-text';
    return (props) =>{
     return(
          <div className={className}>
              <Component {...props} />
            </div>
     )
    }
}
export default Rainbow;
