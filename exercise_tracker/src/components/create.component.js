import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
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
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const obj = {
            exercise_name: this.state.exercise_name,
            exercise_weight: this.state.exercise_weight,
            exercise_set: this.state.exercise_set,
            exercise_rep: this.state.exercise_rep
        };

        // uses axios to push data into database
        axios.post('http://localhost:4000/exercise/add', obj)
          .then(res => console.log(res.data));
           
        this.setState({
            exercise_name: '',
            exercise_weight: '',
            exercise_set: '',
            exercise_rep: ''
        })
    }


    render() {
        return (
            <div style ={{marginTop: 10}}>
                <h3>Please log your exercise</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Exercise 1 Name:</label>
                        <input 
                            type="text"
                            value={this.state.exercise_name}
                            onChange={this.onChangeExerciseName}
                        />
                        <label>Exercise 1 Weight (lbs):</label>
                        <input 
                            type="number"
                            value={this.state.exercise_weight}
                            onChange={this.onChangeExerciseWeight}
                        />
                        <label>Exercise 1 Sets:</label>
                        <input 
                            type="number"
                            value={this.state.exercise_set}
                            onChange={this.onChangeExerciseSet}
                        />
                        <label>Exercise 1 Reps:</label>
                        <input 
                            type="number"
                            value={this.state.exercise_rep}
                            onChange={this.onChangeExerciseRep}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register Exercise" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}