import React from 'react';

export class MessageComponent extends React.Component {
    render() {
        return (
            <div>
                <span>{this.props.text}</span>
            </div>
        )
    }
}