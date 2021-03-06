import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import { resetUser } from '../../actions/a-users';

class Logout extends React.Component{

    componentDidMount(){
        axios.delete('http://dct-user-auth.herokuapp.com/users/logout',{
            headers:{
                'x-auth' : localStorage.getItem('userAuthToken')
            }
        })
        .then(response => {
            console.log(response.data)
            localStorage.removeItem('userAuthToken')
            this.props.dispatch(resetUser())
            this.props.history.push('/users/login')
        })

    }

    render(){
        return(
            <p>{this.props.user.username} is logging out..</p>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        user:state.user
    }
}
export default connect(mapStateToProps)(Logout)



