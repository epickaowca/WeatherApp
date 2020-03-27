import React,{Component} from 'react';
import './App.css';
import Form from "./Form";
import Result from "./Result"

const APIKey = '661fa227036d06598b2bf1a9f43aea8c'


class App extends Component{
  state = {
    value: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    err: '',
  }

  handleInputChange=(e)=>{
    this.setState({
      value: e.target.value
    })
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.value !== this.state.value){
      alert("update")
      const API=`https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`
  
      fetch(API)
      .then(res => {
        if(res.ok){
          return res
        }
        throw Error("nie udało się")
      })
      .then(res => res.json())
      .then(res =>{
        this.setState({
          err:false,
          sunrise: res.sys.sunrise,
          sunset: res.sys.sunset,
          temp: res.main.temp,
          pressure: res.main.pressure,
          wind: res.wind.speed,
          city: this.state.value,
        })
      })
      .catch(err => {
        this.setState({
          err:true,
          city: this.state.value
        })
      })
      }
  }

  render(){
    return(
      <div>
      <Form
       value={this.state.value} 
       change={this.handleInputChange}
       />
      <Result weather={this.state}/>
    </div>
    )
  }
}


export default App;
