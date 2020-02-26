export  const deletePost = (id) => {
    return {
        type : "DELETE_POST",
        id
    }
    
}

export const addPost = () => {
    return {
        type : "ADD_POST",
        
    }
}