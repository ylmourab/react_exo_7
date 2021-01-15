import React, { Component } from 'react'

export class Article extends Component {

    
    render() {
        return (
            <div>
                <h1>{this.props.nom}</h1>
                <span>{this.props.prix}</span>
            </div>
        )
    }
}

export default Article
