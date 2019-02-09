import React from 'react'


class ResultBox extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const results = this.props.resultList;
        if (this.props.resultList === undefined){
            return (<h3> Nothing to show here </h3>)
        } else {
            return (<h3> I got results! yay</h3>)
        }
    }
}

export default ResultBox
