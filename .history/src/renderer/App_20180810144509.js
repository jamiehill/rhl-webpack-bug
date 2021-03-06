import React from 'react'
import { hot } from 'react-hot-loader'

class App extends React.Component {
    constructor () {
        super()
        this.state = { count: 0 }
    }

    increment () {
        this.setState({ count: this.state.count + 1 })
    }

    render () {
        <div>
            <div>Hello Jamie</div>
            <button onClick={this.increment} />
            <div>{this.state.count}</div>
        </div>
    }
}

export default hot(module)(App)