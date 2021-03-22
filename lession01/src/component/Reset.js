import React,{Component} from 'react';
class Reset extends Component{
	reset=()=>{
		this.props.reset(true);
	}
	render()
	{ 
		return (
             <button type="button" className="btn btn-primary" onClick={this.reset}>button</button>
			);
	}
}
export default Reset;