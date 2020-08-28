import React, { Component } from 'react';

class HomeContainer extends Component {

  startBook = () => {
    return{
      // props.history.push()
    }
  }
  render(){
    return(
      <div className="home">
        <div className="home_box">
          <div className="title_home">My Story</div>
          <div className="book_btn" onClick={this.startBook}></div>
          <img className="ourbook" src={'./ourbook.jpg'} />
        </div>
      </div>
    )
  }
}
export default HomeContainer
