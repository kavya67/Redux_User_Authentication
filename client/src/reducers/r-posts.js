const postInitialValue = []
const postsReducer = (state=postInitialValue, action)=>{
    switch(action.type){
        case 'SET_POSTS':{
            return [...action.payload]
        }
        case 'ADD_POSTS': {
            return [...state, action.payload]
        }
        case 'REMOVE_POST': {
            return state.filter(post=>{
                return post._id !== action.payload
            })
        }
        default: {
            return [...state]
        }
    }
}

module.exports = postsReducer