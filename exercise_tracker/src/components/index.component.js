import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {exercise: []};
    }

    componentDidMount(){
        axios.get('http://localhost:4000/exercise')
            .then(response => {
                this.setState({ exercise: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tabRow(){
        return this.state.exercise.map(function(object,i){
            return <TableRow obj={object} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3 align="center">Exercise List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thread>
                        <tr>
                            <th>Name</th>
                            <th>Weight</th>
                            <th>Sets</th>
                            <th>Reps</th>
                            <th colSpan ="2">Action</th>
                        </tr>
                    </thread>
                    <tbody>
                        { this.tabRow() }
                    </tbody>
                </table>
            </div>
        );
    }
}