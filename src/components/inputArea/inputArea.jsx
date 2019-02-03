import React from 'react';

export class InputAreaComponent extends React.Component {
    render() {
        return (
            <div>
                <input type="text" test="123" onChange={(value)=>{this.props.changeMessage(value.target.value)}}></input>
                <button onClick={this.props.sendMessage}>Send</button>
            </div>
        )
    }
}