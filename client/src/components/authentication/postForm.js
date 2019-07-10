import React from 'react'
import axios from 'axios'
import {addPosts} from '../../actions/a-posts'
import {connect} from 'react-redux'

class PostForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        e.persist()
        this.setState(()=>({title: e.target.value }))
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        const formData = {
            title: this.state.title
        }
        axios.post('http://dct-user-auth.herokuapp.com/posts',formData, {
            headers: {
                'x-auth': localStorage.getItem('userAuthToken')
            }
        })
            .then(response=>{
                const posts = response.data
                console.log(posts)
                this.props.dispatch(addPosts(posts))
            })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        TITLE:
                        <input type='text' value = {this.state.title} onChange={this.handleChange}/>
                    </label>
                    <label>
                        <input type='submit'/>
                    </label>
                </form>
            </div>
        )
    }
}

export default connect()(PostForm)
