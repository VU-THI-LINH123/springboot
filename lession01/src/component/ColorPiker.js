import React,{Component} from 'react';

class ColorPiker extends Component{
	
		state={
			colors:[
               'red',
               'green',
               'blue',
               '#ccc'
			],
		   }
	
	vemau(mau)
	{

		// console.log(this.props.color)
		return{
               backgroundColor:mau,
           
		};
	};
	doimau(mau)
	{
       console.log(mau);
      this.props.doimau(mau);
	}
	render()
	{ 
		var danhsachmau=this.state.colors.map((mau,index)=>{
			return <span  key={index} 
			        style={this.vemau(mau)}
			        className={this.props.color===mau? 'active' : ''}
			        onClick={()=>{this.doimau(mau)}}
			         >
			        
			      
                     
			      </span>
                 
		});
		return (
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                       <div className="panel panel-primary">
                        <div className="panel-heading">
                          <h3 className="panel-title">Panel title</h3>
                        </div>
                        <div className="panel-body ">
                            {danhsachmau}
                        </div>
                       </div>
                    </div>
			);
	}
}
export default ColorPiker;