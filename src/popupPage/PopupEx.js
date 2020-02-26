import React, { Component } from 'react';
import './Popup.css'
import { connect } from 'react-redux';

class PopupEx extends Component {
  state={
    id:'',
   title:'',
   body:'',
   showPopup:false
}

togglePopup=()=> {
  
 this.setState({
   showPopup: !this.state.showPopup
 });
}
simple =()=>{
 return(
   <div>
        {this.state.showPopup ?
              (
                this.togglePopup
              ) :(
                null)
                  }
   </div>
 )
}

  addSubmit=(e)=>{
    e.preventDefault();
    console.log(this.state)
    console.log(this.props)
    const { id, title, body} = this.state;
    let addList = {id, title, body};
    this.props.posts.push(addList);
    this.props.closePopup();
    

  }
  render() {
    const {id, title, body } = this.state;
    return (
      <div className="container ">
      <div className='popup'>
        <div className='popup_inner'>
             <form onSubmit={(e)=>this.addSubmit(e)}>
                 <input type="text" 
                 value={id}
                onChange={(e) => {
                this.setState({id:e.target.value})}}
                 name="id" />

               <input type="text"
                value={title}
                onChange={(e) => {
                this.setState({title:e.target.value})}}
                 name="title" />

               <input type="text" 
                  value={body}
                  onChange={(e) => {
                  this.setState({body:e.target.value})}}
                  name="body"/>

                  <button >
                         Add it</button>
                 
                  <button onClick={this.props.closePopup}>
                         cancel</button>
            </form>
        
        </div>
      </div>
      </div>
    );
  }
}
const mapStateToProps = (state ) => {
  return{
      posts: state.posts
  }
}
export default connect(mapStateToProps)(PopupEx);