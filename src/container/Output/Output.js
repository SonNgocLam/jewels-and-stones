import React, {Component} from 'react';
import './Output.scss';

class Output extends Component {
	constructor(props){
		super(props);
		this.state = {
			txtJewel : '',
			txtStones : '',
			limitText : 50,
			jewelInStones : 0
		};
	}

	onHandleChange = event => {
		var {id, value, name} = event.target;
		var i = 0;
		
		if(value.length > this.state.limitText){
			alert("You entered over allowed " + name);
			this.setState({
				[id] : value.substring(0,this.state.limitText),
			});
			event.target.value = value.substring(0,this.state.limitText);
		} else {
			this.setState({
				[id] : value
			});
		}
		if(id === 'txtJewel'){
			if(value.length > 1){
				for(i = 0; i < value.length - 1 ; i++){
					if(value.charAt(i) == value.charAt(value.length - 1)){
						alert('You entered the same types of jewels');
						event.target.value = value.substring(0,value.length - 1);
						break;
					}
				}
			}
		}
	}

	onHandleSubmit = event => {
		event.preventDefault();
		var numJewelsInStones = 0;
		var jewels = this.state.txtJewel;
		var stones = this.state.txtStones;
		var s = 0;
		var j = 0;

		for(s = 0; s < stones.length; s++){
			for(j = 0; j < jewels.length; j++){
				if(jewels.charAt(j) === stones.charAt(s)){
					numJewelsInStones ++;
					break;
				}
			}
		}
		this.setState({
			jewelInStones : numJewelsInStones
		});
	}

	render(){
		return (
		    <div className="output">
				<div className="result-range">
					<p>Type of Jewels: <b>{this.state.txtJewel}</b></p>
					<p>Your stones: <b>{this.state.txtStones}</b></p>
					<p id="result">Number of jewels in your stones: <b>{this.state.jewelInStones}</b></p>
				</div>
				<div className="input-range">
					<form onSubmit={this.onHandleSubmit}>
						<div className="form-group">
							<label>Enter types of jewels:</label>
							<input 
								type="text" 
								className="form-control" 
								id="txtJewel"
								name="amount of jewels "
								placeholder="Please input type of jewels here"
								onChange={this.onHandleChange}
							/>
						</div>
						<div className="form-group">
							<label>Enter your stones:</label>
							<input 
								type="text" 
								className="form-control" 
								id="txtStones"
								name="amount of stones"
								placeholder="Please input your stones here"
								onChange={this.onHandleChange}
							/>
						</div>
						<button type="submit" className="btn btn-primary" id="btn-count">Count your jewels</button>
					</form>
				</div>
		    </div>
		);
	}
}

export default Output;