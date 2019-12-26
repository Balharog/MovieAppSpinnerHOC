import './App.css'
import React, { Component } from 'react'
import MovieApp from './component/MovieApp'

export default class App extends Component {
  state={
    Loading:true
  }
  componentDidMount() {
    setTimeout(()=>this.setState({Loading:false}),3000);
  }
  render() {
    return (
      <div className="main-div">
        <MovieApp isLoading={this.state.Loading}/>
      </div>
    )
  }
}
