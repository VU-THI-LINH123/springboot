
import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './../trainning/actions/index';


class Taskitem  extends Component{

 onUpdatestatus=()=>{
 
  this.props.onUpdateState(this.props.nguoi.id);

 }
 onDelete=()=>{
  this.props.onDeleteForm(this.props.nguoi.id);
 }
 onUpdate=()=>{
  // this.props.onUpdate(this.props.nguoi.id);
   this.props.onOpenForm();
  this.props.onEditTask(this.props.nguoi);
   
    
 }
  render() {
    var nguoi=this.props.nguoi;
    
    return(
         <tr>
           <td>{this.props.index}</td>
            <td>{nguoi.name}</td>
              <td className="text-center">
                 <span className={nguoi.status===true?'label label-danger':'label label-success'}
                     onClick={this.onUpdatestatus}
                  >
                      {nguoi.status===true?'kich hoat':'het hang'}
                  </span>
                  </td>
                  <td className="text-center">
                  <button type="button" className="btn btn-warning" onClick={this.onUpdate}>
                  <span className="fa fa-pencil mr-5" ></span>Sửa
                  </button>
                  &nbsp;
                <button type="button" className="btn btn-danger" onClick={this.onDelete}>
                <span className="fa fa-trash mr-5" ></span>Xóa
                </button>
              </td>
            </tr>
      );
  }
}
const mapStartToProps=start=>{
   return {

   }
};
const mapDispatchProps=(dispatch,props)=>{
  return {
    onUpdateState:(id)=>{
      dispatch(actions.UpdateState(id));
    },
    
    onDeleteForm:(id)=>{
      dispatch(actions.DeleteForm(id));
    },
     onCloseForm:()=>{
      dispatch(actions.CloseForm());
    },
      onOpenForm:()=>{
      dispatch(actions.OpenForm());
    },
    onEditTask:(task)=>{
      dispatch(actions.EditTask(task));
    }
  }

}
export default connect (mapStartToProps,mapDispatchProps) (Taskitem);