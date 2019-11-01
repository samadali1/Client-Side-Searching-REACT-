import React, { Component } from 'react';

export default class List extends Component {
    constructor() {
        super();

        this.state = {
            list: ['Pakistan', 'India', 'Australia', 'Newzealand', 'Kenya',"Austria", "Pakia"],
            result: [],
            text: ''
        }
    }

    search(e) {
        const { list } = this.state;
        const text = e.target.value;

        const result = list.filter((elem) => {
            const e = elem.split("").reverse().join("");
            return e.substring(0,text.length).toLowerCase().indexOf(text.toLowerCase()) !== -1
        })

        this.setState({result, text});
    }

    render() {
        const { list, result, text } = this.state;
        const arr = text.length ? result : list;

        return (
            <div>
                <input placeholder="Search..." onChange={this.search.bind(this)}/>

                {arr.map((elem, index) => {
                    return <p>{index + 1}) {elem}</p>
                })}
            </div>
        )
    }
}