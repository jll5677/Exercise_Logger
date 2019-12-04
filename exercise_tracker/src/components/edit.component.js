import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.onChangeExerciseName = this.onChangeExerciseName.bind(this);
        this.onChangeExerciseWeight = this.onChangeExerciseWeight.bind(this);
        this.onChangeExerciseSet = this.onChangeExerciseSet.bind(this);
        this.onChangeExerciseRep = this.onChangeExerciseRep.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            exercise_name: '',
            exercise_weight: '',
            exercise_set: '',
            exercise_rep: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/exercise/edit/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    exercise_name: response.data.exercise_name,
                    exercise_weight: response.data.exercise_weight,
                    exercise_set: response.data.exercise_set,
                    exercise_rep: response.data.exercise_rep
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeExerciseName(e) {
        this.setState({
            exercise_name: e.target.value
        })
    }

    onChangeExerciseWeight(e) {
        this.setState({
            exercise_weight: e.target.value
        })
    }

    onChangeExerciseSet(e) {
        this.setState({
            exercise_set: e.target.value
        })
    }

    onChangeExerciseRep(e) {
        this.setState({
            exercise_rep: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            exercise_name: this.state.exercise_name,
            exercise_weight: this.state.exercise_weight,
            exercise_set: this.state.exercise_set,
            exercise_rep: this.state.exercise_rep
        };
        axios.post('http://localhost:4000/exercise/update/'+this.props.match.params.id, obj)
            .then(res => {
                console.log(res.data);
                this.props.history.push('/index');
            });
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3 align="center">Update Exercise</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Exercise Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.exercise_name}
                            onChange={this.onChangeExerciseName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Exercise Weight:</label>
                        <input 
                            type="number"
                            className="form-control"
                            value={this.state.exercise_weight}
                            onChange={this.onChangeExerciseWeight}
                        />
                    </div>
                    <div className="form-group">
                        <label>Exercise Set:</label>
                        <input
                            type="number"
                            className="form-control"
                            value={this.state.exercise_set}
                            onChange={this.onChangeExerciseSet}
                        />
                    </div>
                    <div className="form-group">
                        <label>Exercise Rep:</label>
                        <input
                            type="number"
                            className="form-control"
                            value={this.state.exercise_rep}
                            onChange={this.onChangeExerciseRep}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="submit"
                            value="Update Exercise"
                            className="btn btn-primary"
                        />
                    </div>
                </form>
            </div>
        )
    }
}