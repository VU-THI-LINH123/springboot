import React,{Component} from 'react';
class Product  extends Component{
  constructor(props)
  {
    super(props);
  }
  thanhcong=(text)=>{
    alert(text);
  }
   thanhcong1=()=>{    alert(this.props.name);

    this.props.hamcon("co len linh vu");
  }

  render() {
    var {name,age}=this.props;
    return(
          <div>
             <div className="row">
               <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <p>{name}</p>
                 {/* <a onClick={()=>{this.thanhcong("mua thanh cong")}}>mua thanh cong</a><br/>*/}
                  <a onClick={this.thanhcong1}>mua thanh cong</a>
               </div>
               <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                 <p>{age}</p>

               </div>
            </div>
           </div> 
      );
  }
}
export default Product;