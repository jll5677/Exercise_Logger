import React, { Component } from 'react';

export default class Create extends Component {
    render() {
        return (
            <div style ={{marginTop: 10}}>
                <h3>Please log your exercise</h3>
                <form>
                    <div className="form-group">
                        <label>Exercise 1 Name:</label>
                        <input type="text"/>
                        <label>Exercise 1 Weight (lbs):</label>
                        <input type="number"/>
                        <label>Exercise 1 Sets:</label>
                        <input type="number"/>
                        <label>Exercise 1 Reps:</label>
                        <input type="number"/>
                    </div>
                    <div className="form-group">
                        <label>Exercise 2 Name:</label>
                        <input type="text"/>
                        <label>Exercise 2 Weight (lbs):</label>
                        <input type="number"/>
                        <label>Exercise 2 Sets:</label>
                        <input type="number"/>
                        <label>Exercise 2 Reps:</label>
                        <input type="number"/>
                    </div>
                    <div className="form-group">
                        <label>Exercise 3 Name:</label>
                        <input type="text"/>
                        <label>Exercise 3 Weight (lbs):</label>
                        <input type="number"/>
                        <label>Exercise 3 Sets:</label>
                        <input type="number"/>
                        <label>Exercise 3 Reps:</label>
                        <input type="number"/>
                    </div>
                    <div className="form-group">
                        <label>Exercise 4 Name:</label>
                        <input type="text"/>
                        <label>Exercise 4 Weight (lbs):</label>
                        <input type="number"/>
                        <label>Exercise 4 Sets:</label>
                        <input type="number"/>
                        <label>Exercise 4 Reps:</label>
                        <input type="number"/>
                    </div>
                    <div className="form-group">
                        <label>Exercise 5 Name:</label>
                        <input type="text"/>
                        <label>Exercise 5 Weight (lbs):</label>
                        <input type="number"/>
                        <label>Exercise 5 Sets:</label>
                        <input type="number"/>
                        <label>Exercise 5 Reps:</label>
                        <input type="number"/>
                    </div>
                    <div className="form-group">
                        <label>Exercise 6 Name:</label>
                        <input type="text"/>
                        <label>Exercise 6 Weight (lbs):</label>
                        <input type="number"/>
                        <label>Exercise 6 Sets:</label>
                        <input type="number"/>
                        <label>Exercise 6 Reps:</label>
                        <input type="number"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}