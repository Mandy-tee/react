import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Vishwas'
        }
        console.log('LifeCycleA constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifeCycleA componentDidMount')
    }

    changeState = () => {
        this.setState({
            name: 'Codevolution'
        })
    }

    shouldComponentUpdate() {
        console.log('LifeCycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifeCycleA componentDidUpdate')
    }

    render() {
        console.log('LifeCycleA render')
        return (<div>
            <div>LifeCycle A</div>
            <button onClick={this.changeState}>Change state</button>
            <LifeCycleB />
        </div>)
    }
}

export default LifeCycleA
