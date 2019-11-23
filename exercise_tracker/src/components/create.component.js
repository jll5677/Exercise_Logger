import React, { Component } from 'react';

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangeExerciseName = this.onChangeExerciseName.bind(this);
        this.onChangeExerciseWeight = this.onChangeExerciseName.bind(this);
        this.onChangeExerciseSet = this.onChangeExerciseSet.bind(this);
        this.onChangeExerciseRep = this.onChangeExerciseRep.bind(this);

        this.state = {
            Exercise_name: '',
            Exercise_weight: '',
            Exercise_set: '',
            Exercise_rep: ''
        }
    }

    onChangeExerciseName(e) {
        this.setState({
            Exercise_name: e.target.value
        });
    }

    onChangeExerciseWeight(e) {
        this.setState({
            Exercise_weight: e.target.value
        });
    }

    onChangeExerciseSet(e) {
        this.setState({
            Exercise_set: e.target.value
        });
    }

    onChangeExerciseRep(e) {
        this.setState({
            Exercise_rep: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        console.log('The values are ${this.state.Exercise_name}, ${this.state.Exercise_weight}, ${this.state.Exercise_set}, ${this.state.Exercise_rep}');
        this.setState({
            Exercise_name: '',
            Exercise_weight: '',
            Exercise_set: '',
            Exercise_rep: ''
        });
    }


    render() {
        return (
            <div style ={{marginTop: 10}}>
                <h3>Please log your exercise</h3>
                <form>
                    <div className="form-group">
                        <label>Exercise 1 Name:</label>
                        <input 
                            type="text"
                            value={this.state.Exercise_name}
                            onChange={this.onChangeExerciseName}
                        />
                        <label>Exercise 1 Weight (lbs):</label>
                        <input 
                            type="number"
                            value={this.state.Exercise_weight}
                            onChange={this.onChangeExerciseWeight}
                        />
                        <label>Exercise 1 Sets:</label>
                        <input 
                            type="number"
                            value={this.state.Exercise_set}
                            onChange={this.onChangeExerciseSet}
                        />
                        <label>Exercise 1 Reps:</label>
                        <input 
                            type="number"
                            value={this.state.onChangeExerciseRep}
                            onChange={this.onChangeExerciseRep}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}