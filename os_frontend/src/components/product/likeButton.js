import React from 'react'

export default class LikeButton extends React.Component{

    state = {
        like: 0,
        //votedUsers: []
    }

    handleLike = () => {
        //const index = this.state.votedUsers.indexOf(localStorage.getItem('uid'))
        //if(index>=0){
            //const users = [...this.state.votedUsers.slice(0, index),...this.state.votedUsers.slice(index+1)]
            if (this.state.like === 1) {
                return this.setState({
                    like: 0
                })
            }
            this.setState({like: 1})
        //}else{
            //const users = [...this.state.votedUsers, localStorage.getItem('uid')]
            //this.setState({like: this.state.like+1, votedUsers: users})
        //}
    }

    render(){
        return (<>
            <button onClick={this.handleLike}>Like</button> <p>{this.state.like}</p>
        </>)
    }
}