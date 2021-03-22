
import React,{Component} from 'react';

import TaskForm from './TaskForm';
import Controller from './Controller';
import Tasklist from './Tasklist';
import {connect} from 'react-redux';
import * as actions from './../trainning/actions/index';
class Bai16  extends Component{
  state={
     keyword:'',

  }
 
   themcv=()=>{
         var itemEditing=this.props.itemEditing;
         if(itemEditing && itemEditing.id!='')
         {
              this.props.onOpenForm();
         }else
        {this.props.onToggleFrom();}
        this.props.onCliesTask({
          id:'',
          name:'',
          status:true
        });
   }
   
   componentWillMount(){
      this.setState({
        mang: JSON.parse(localStorage.getItem('mang'))
      });
  }
   
  
   // onbatform=()=>{

   search1=(keyword)=>{
      this.setState({
        keyword:keyword,
      });
   }
  render() {
    var {keyword}=this.state;
    // console.log(filte);
    // if(this.state.filte)
    // {
    //   if(filte.name)
    //   {
    //     mang=mang.filter((nguoi)=>{
    //           return nguoi.name.toLowerCase().indexOf(filte.name)!==-1 ;
          
    //     });
    //   } 
    //   }
    //   mang=mang.filter((nguoi)=>{
    //     if(filte.status===-1)
    //     {
    //       return  nguoi;
    //     }else{
    //       return nguoi.status===(filte.status===1? true:false)
    //     }
    //   });
   
    //   if(keyword)
    // {
    //    mang=mang.filter((nguoi)=>{
    //          if(nguoi.name.toLowerCase().indexOf(keyword)!==-1)
    //          {
    //           return nguoi;
    //        }
    //     }); 
    //   }
    var {isDisplayform}=this.props;
    console.log(isDisplayform);
     // var dongmo=isDisplayform===true?<TaskForm />:'';
    
    
    return(
         
             <div className="container" >
        <div className="text-center">
            <h1>Quản Lý Công Việc</h1>
            <hr/>
        </div>
        <div className="row">
            <div className={isDisplayform?'col-xs-4 col-sm-4 col-md-4 col-lg-4':'col-xs-0 col-sm-0 col-md-0 col-lg-0'}>
              <TaskForm />
            </div>
            <div className={isDisplayform?'col-xs-8 col-sm-8 col-md-8 col-lg-8':'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                <button type="button" className="btn btn-primary" onClick={this.themcv}>
                    <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                </button>
                <button type="button" className="btn btn-primary" onClick={this.getdata} >
                    <span className="fa fa-plus mr-5" ></span>get data
                </button>
               <Controller search1={this.search1} />
                <div className="row mt-15">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <Tasklist
                      
                         />
                    </div>
                </div>
            </div>
        </div>
    </div>
      );
  }
}
const mapStatetoProps=(state)=>{
 
  return {
    isDisplayform:state.isDisplayform,
    itemEditing:state.itemEditing
  };
};
const mapDispatchToProps=(dispatch,props)=>{
  return {

    onToggleFrom:()=>{
      dispatch(actions.ToggleForm())
    },
     onCliesTask:(task)=>{
      dispatch(actions.EditTask(task));
    },
   onOpenForm:()=>{
     dispatch(actions.OpenForm());
   }
  };
};
export default connect(mapStatetoProps,mapDispatchToProps)(Bai16);