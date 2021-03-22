
import React,{Component} from 'react';



class KetQua  extends Component{
	mau()
	{
       return {
           color:this.props.color,
           borderColor:this.props.color,
           fontSize:this.props.fontSize
       };
	};
  render() {
    return(
         <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <p>{this.props.color}{this.props.fontSize}</p>
                        <div id="container" style={this.mau()}>
                              noi dung setting
                        </div>
                     </div>
      );
  }
}
export default KetQua;