import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import PostForm from './postForm'
import {removePost} from '../../actions/a-posts'
import {Link} from 'react-router-dom'


const Profile=(props)=>{

    const handleRemove = (id)=>{
        const confirm = window.confirm('Are you sure?')
        if(confirm){
            axios.delete(`http://dct-user-auth.herokuapp.com/posts/${id}`,{
                headers: {
                    'x-auth': localStorage.getItem('userAuthToken')
                }})

                .then(response=>{
                    props.dispatch(removePost(id))
                })
            }
                      
    }

    return(
        <div>
            Profile component
            <p>{props.user.username}</p>
            <h2>Total Posts - {props.posts.length}</h2>
            <ul>
                {
                    props.posts.map(post=>{
                        return <li key={post._id}> <Link to = {`/posts/${post._id}`} >{post.title}</Link><button onClick= {
                            ()=>{
                                handleRemove(post._id)
                            }
                        }>remove</button> </li>
                    })
                }
            </ul>
            <h2>Add post</h2>
            <PostForm/>
        </div>
    )

}


const mapStateToProps=(state)=>{
    return{
        user:state.user,
        posts: state.posts
    }
}


export default connect(mapStateToProps)(Profile)