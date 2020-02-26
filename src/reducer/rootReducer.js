const initstate={
    posts : [
          {"id": "1" , "title": "sunt aut facere repellat " , "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae"      },
          {"id": "2" , "title": "qui est esse" , "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque"},
          {"id": "3" , "title": "ea molestias quasi exerc " , "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem aut"},
          {"id": "4" , "title": "eum et est occaecati" , "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda "},
          {"id": "5" , "title": "nesciunt quas odio" , "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat site"}
        ]
}

const rootReducer = ( state = initstate , action ) => {
    //  console.log(action);
    if(action.type === "DELETE_POST"){
        let newPost = state.posts.filter(posts =>{
            return action.id !== posts.id
        });
        return {
            ...state,
            posts: newPost
        }
    }
    return state;
}
export default rootReducer;


// import React from 'react'; 
// import axios from 'axios';

// class rootReducer extends React.Component{
// state={
//         posts: []
//     }
//     componentDidMount = () => {
//         axios.get('https://jsonplaceholder.typicode.com/posts')
//         .then(res => {console.log(res)
//                     this.setState({
//                         posts:res.data.slice(0,10)
//                         })    
//                     }
//             )
//     }

// render(){
//     return (
//         <div>
//             {this.state}
//         </div>
//     )
// }
// }
// export default rootReducer;