import React,{Component} from 'react';
class Bai1
 extends Component{
 
       state={
	       //hjkhkj
             txtname:'',
             txtpassword:'',
             txtDesc:'',
             txtgioitinh:0,
             txttieng:'anh',
             txtcheck:false,
              };
       
   onHandleChange=(event)=>{
       var target=event.target;
       var name=target.name;
       var value=target.type==='checkbox'?target.checked :target.value;
       this.setState({
             [name]:value,
       });

    }
   
     
    onHandleSubmit=(event)=>{
       event.preventDefault();
       console.log(this.state);
    }
	render()
	{ 
		return (
              <div className="container">
              	<div className="row">
              		<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              			<div className="panel panel-primary">
              				<div className="panel-heading">
              					<h3 className="panel-title">Panel title</h3>
              				</div>
              				<div className="panel-body">
              					<form onSubmit={this.onHandleSubmit} >
              						
              					
              						<div className="form-group">
              							<label>ho va ten</label>
              							<input type="text"
                                                                className="form-control"
                                                                  name="txtname" 
                                                                  value={this.state.txtname}
                                                                  onChange={this.onHandleChange}
                                                                 placeholder="Input field"/>
                                                              
                                                               <label >password</label>
                                                               <input type="password"
                                                                className="form-control"
                                                                  name="txtpassword" 
                                                                  value={this.state.txtpassword}
                                                                  onChange={this.onHandleChange}
                                                                 placeholder="Input field"/>
                                                                 <label>Mo ta</label>
                                                                 <textarea name="txtDesc" 
                                                               className="form-control"
                                                                rows="3"
                                                                value={this.state.txtDesc}
                                                                onChange={this.onHandleChange} ></textarea>
                                                                <label>password</label>
                                                                 <select name="txtgioitinh" 
                                                                 className="form-control" 
                                                                 value={this.state.txtgioitinh} 
                                                                 onChange={this.onHandleChange}
                                                                 >
                                                                        <option value={0}>Nu</option>
                                                                        <option value={1}>Name</option>
                                                                 </select>
                                                                 <label>raddio</label>
                                                                 <div className="radio">
                                                                        <label>
                                                                               <input type="radio" name="txttieng" 
                                                                                value="anh" 
                                                                                onChange={this.onHandleChange}
                                                                                checked={this.state.txttieng==="anh"}/>
                                                                               tieng anh
                                                                        </label>
                                                                        <label>
                                                                               <input type="radio" name="txttieng" 
                                                                                value="viet" 
                                                                                onChange={this.onHandleChange}
                                                                                checked={this.state.txttieng==="viet"}/>
                                                                               tieng viet
                                                                        </label>
                                                                 </div>
                                                                 <div className="checkbox">
                                                                        <label>
                                                                               <input type="checkbox" 
                                                                               name="txtcheck"
                                                                               value={true}
                                                                               onChange={this.onHandleChange}
                                                                               />
                                                                        </label>
                                                                 </div>
              						</div>
              					
              						
              					
              						<button type="submit" className="btn btn-primary">Submit</button>
              					</form>
              				</div>
              			</div>
              		</div>
              	</div>
              </div>
			);
	}
}
export default Bai1;
