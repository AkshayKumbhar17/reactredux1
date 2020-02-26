import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Pokeball from '../pokeball.png';
import '../App.css';
import { connect } from 'react-redux';
  import '../popupPage/Popup.css'
  import PopupEx from '../popupPage/PopupEx'

class Home extends Component{
     state={
         id:'',
        title:'',
        body:'',
        showPopup: false
    }

    // this function is called when we clicked on **Add Product***
    togglePopup=()=> {
      this.setState({
        showPopup: !this.state.showPopup
      });
    }
    // componentDidMount(){
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => {console.log(res)
    //                 this.setState({
    //                     posts:res.data.slice(0,10)
    //                     })    
    //                 }
    //         )
    // }

    render(){
        // console.log(this.props)
        // here const {Posts} is rest operator ***
        const { posts } = this.props;
        // conditional if else used .if somthing data then get the value otherwise no post yet***
        const postList = posts.length ? (
            posts.map(value=>{
                return(
            // Here we can apply single key value for this main div ***
                    <div className="post card" key={value.id}>
                        <div className="card-content">
                            <img src={Pokeball} alt="upload pic" />
                            {/* here we click on this title then it redirected to its perticuler id and show its data  */}
                            <Link to = {'/home/' + value.id } > 
                            <span className="card-title blue-text">{value.title}</span>
                            </Link>
                            <p>{value.body}</p>
                        </div>
                    </div>
                )
            })
        ):(
            <div className="center">No post Yet </div>
        )
        return(
            <div className="container home">
    
                <button onClick={this.togglePopup.bind(this)} className="right">Add Products</button>
                {/* if button is clicked then get popup (simply redirect to PopupEx page) */}
                  {this.state.showPopup ? 
                  <PopupEx
                      text='Close Me'
                   closePopup={this.togglePopup}
                 />
                  : null
                  }
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}
// here we get the data from Reducer ***
const mapStateToProps = (state) => {
    return {
        posts : state.posts
    }
}
// connect is HOC which wrapped the Home component
export default connect(mapStateToProps)(Home);