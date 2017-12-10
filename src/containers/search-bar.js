import React,{Component} from 'react';

class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state={
            term: ''
        };

        this.onInputChange=this.onInputChange.bind(this);
    }

    render(){
        return(
            <form className='input-group'>
                <input  
                    placeholder='Get a five day forecast'
                    className='form-control'
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className='input-group-btn'>
                    <button className='btn btn-secondary'>Submit</button>
                </span>
            </form>
        );
    }

    onInputChange(event){
        this.setState({term: event.target.value})
    }
}

export default SearchBar;