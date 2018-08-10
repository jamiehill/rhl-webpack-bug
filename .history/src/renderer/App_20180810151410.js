import React from 'react'
import { hot, setConfig } from 'react-hot-loader/dist/react-hot-loader.development.js'

class App extends React.Component {
    constructor () {
        super()
        this.state = { count: 0 }
    }

    increment () {
        this.setState({ count: this.state.count + 1 })
    }

    render () {
        return (
            <div>
                <div>Hello sdfsdf</div>
                <button onClick={this.increment.bind(this)} />
                <div>{this.state.count}</div>
            </div>
        )
    }
}

export default hot(module)(App)