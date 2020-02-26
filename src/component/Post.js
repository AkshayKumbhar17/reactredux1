import React from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import  {deletePost} from '../action/ActionPost'

class Post extends React.Component{
    // state={
    //     posts:''
    // }
    // componentWillMount(){
    //     console.log(this.props)
    //     let id = this.props.match.params.post_id;
    //     axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
    //     .then(res => 
    //         this.setState({posts:res.data}))
    //  }

    handleClick = () => {
        // This deletePost function will get some action . This will send to reducer***  
        this.props.deletePost(this.props.posts.id);
        // console.log(this.props)
        this.props.history.push('/')
        // here when data is deleted then page is redirected to home page***
    }
        render(){
            const { posts } = this.props;
             console.log(this.props)
            const getpost = this.props.posts ? (
                <div className="posts">
                    <h4 className="center"> { posts.title } </h4>
                        <p className="center"> { posts.body } </p>
                <div className="center">
                    <button className="btn light blue" onClick={this.handleClick}>DELETE POST
                        </button> 
                </div>
                </div>
            ):(
                <div className="center">Loading post...</div>
            )
            return(
                <div className="container">
                        {getpost} 
                </div>
            )
        }
}

const mapStateToProps = (state , ownProps) => {
    // here ownProps is used only for its perticuler component..***
    let id = ownProps.match.params.post_id;
    return{
        // '===' is carefully used to cheak value as well as data type.*** 
        posts: state.posts.find(posts => posts.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        // deletePost : (id) => {dispatch({ type : "DELETE_POST", id : id})}
        deletePost: (id) => {dispatch(deletePost(id))}
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Post);