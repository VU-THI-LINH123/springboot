
import React,{Component} from 'react';



class  SizeSetting  extends Component{
  tang(text)
  {
     this.props.doikichthuoc(text);
  }

  render() {
    return(
                 <div className="panel panel-warning">
                          <div className="panel-heading">
                            <h3 className="panel-title">{this.props.fontSize}px</h3>
                          </div>
                          <div className="panel-body">
                               <button type="button" className="btn btn-success" onClick={()=>this.tang(2)}>tang</button>
                               <button type="button" className="btn btn-success" onClick={()=>this.tang(-2)}>giam</button>

                          </div>
                   </div>
          
      );
  }
}
export default SizeSetting;