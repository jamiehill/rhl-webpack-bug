import React from 'react'
import { hot, setConfig } from 'react-hot-loader'

setConfig({ logLevel: 'debug',
  // pureSFC: true,
  onComponentRegister: (type, name, file) =>
    console.warn(`${type} - ${name} - ${file}`)
})

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
                <div>Hello Jamidfdfdfsdsdfddfe</div>
                <button onClick={this.increment.bind(this)} />
                <div>{this.state.count}</div>
            </div>
        )
    }
}

export default hot(module)(App)