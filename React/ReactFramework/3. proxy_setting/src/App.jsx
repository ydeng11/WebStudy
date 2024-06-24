//创建外壳组件APP
import React,{Component} from 'react'
import './App.css'
import Footer from './component/footer/footer'
import Header from './component/header/header'
import List from './component/list/list'

export default class App extends Component{
    getStudentData = () => {
        axios.get("http://localhost:5000/api/user").then(
            response => console.log("OK", response.data)
            ,error => console.log("Error", error)
        )
    }
    render(){
        return (
            <div>
                <button onClick={this.getStudentData}>Get student data</button>
            </div>
        )
    }
}