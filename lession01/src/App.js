
import React,{Component} from 'react';

import './App.css';
import Product from './component/Product';
import ColorPiker from './component/ColorPiker';
import SizeSetting from './component/SizeSetting';
import Reset from './component/Reset';
import KetQua from './component/KetQua';
import Bai1 from './component/Bai1';
import Bai16 from './component/Bai16';
class App  extends Component{

    ketqua=this.ketqua.bind(this);
    state={
            color:'red',
            fontSize:15,
            danhsach:[
             {
            id:1,
            name:'vu thi linh',
            age:24
            },
            {
            id:2,
            name:'vu thi dung',
            age:24
            },
            {
            id:3,
            name:'vu tri ta',
            age:25
          }
         ],
         hoatdong:true,

       };


   kq=()=>{
    // if(this.state.hoatdong===true)
    // {
    //    this.setState({
    //     hoatdong:false,
    //    });
    // }else{
    //   this.setState({
    //     hoatdong:true,
    //    });
    // }
    this.setState({
      hoatdong:!this.state.hoatdong,
    });
   }
  ketqua (){
     // console.log(this.refs.name.value);
     console.log("cn yeu me")
  }
  ShowProduct=(product)=>
  {
    if(product.status)
    {
      return <h3>
               ID:{product.id}<br/>
               Name:{product.name}<br/>
               price:{product.price}<br/>
               status:{product.status ?'active':'hihi'}
           </h3>
    }
    
  }
  reset=(value)=>{
    console.log(value);
    if(value){
    this.setState({
      color:'red',
      fontSize:15,
    });}
  }
  doikichthuoc=(doi)=>{ 
          this.setState({
            fontSize:(this.state.fontSize+doi<=36 && this.state.fontSize+doi>=10)?this.state.fontSize+doi:this.state.fontSize
          });
  }
  doimau=(color1)=>{
     this.setState({
        color:color1
     });
  }
 
    hamnhan=(text)=>{
      console.log(text);
    }
  render() {
    var product={
         id:1,
         name:'vu thi linh',
         price:15000,
         status:true
    };
   
    return(

             <div>
  
           <Bai16/>
             <div className="container mt-50">
             <Bai1/>
                  <div className="row">

                       <ColorPiker color={this.state.color} doimau={this.doimau}/>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                         <SizeSetting fontSize={this.state.fontSize} doikichthuoc={this.doikichthuoc}/>
                        <Reset reset={this.reset}/>
                    </div>
                     <KetQua color={this.state.color} fontSize={this.state.fontSize}/> 
                </div>

             </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        
              
              
                <div className="form-group">
                  <label>label</label>
                  <input type="text" className="form-control" id="" ref="name" placeholder="Input field"/>
                </div>
               <button type="submit" className="btn btn-primary" onClick={this.ketqua()}>Submit</button>
            
            </div>
           <Product name="thang cho le kim tan"  age="le kim tan"></Product>
            {this.ShowProduct(product)}
            {
            this.state.danhsach.map((use,index)=>{
                let check='';
                if(use.age===24){
                     return <Product key={use.id}
                             age={use.age}
                             name={use.name}
                             hamcon={this.hamnhan}
                             >

                             </Product>
                             console.log(check);
                }
                 
                 })
            }
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>id</th>
                  <th>name</th>
                  <th>age</th>
                </tr>
              </thead>
              <tbody>
                 {
               this.state.danhsach.map((use,index)=>{
                 var gan='';
                if(this.state.hoatdong){
                 
               gan=<tr key={use.id}>
                           <td>{use.id}</td> 
                           <td>{use.name}</td> 
                           <td>{use.age}</td> 
                       </tr>}
                return gan
                }
                )
             }
              </tbody>
            </table>
           
            <button onClick={this.kq}>ketqua{this.state.hoatdong===true?'true':'false'}</button>
          </div>
         
      );
  }
}
export default App;