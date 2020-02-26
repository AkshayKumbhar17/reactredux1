import React, {Component} from 'react';
import Rainbow from '../hoc/Rainbow';

class About extends Component{
    render(){
        return(
            <div className="container center">
                <h4>About</h4>
                <p>this is About page here. this is About page here . this is About page here</p>
                
            </div>
        )
    }
}
export default Rainbow(About);