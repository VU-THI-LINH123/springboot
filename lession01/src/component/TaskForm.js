
import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './../trainning/actions/index';

class TaskForm  extends Component{
  state={
     id:'',
    name:'',
    status:true
  }
  onChange=(e)=>{
        var  target=e.target;
        var name=target.name;
        var  value=target.value;
        if('status'===target.name)
        {
         value=target.value==='true'? true:false;
          // console.log(target.value);
        }
        this.setState({
          [name]:value,
        });
      
  }
  componentWillMount(){
    console.log(this.props.itemEditing);
    if(this.props.itemEditing)
       this.setState({
           id:this.props.itemEditing.id,
           name:this.props.itemEditing.name,
           status:this.props.itemEditing.status
       });
     console.log("hihi");
  }

  onSubmit=(e)=>{
       e.preventDefault();
      this.props.onAddTask(this.state);
      
       this.dongform();
        this.setState({
        id:"",
        name:"",
        status:false,
      });
  }
   componentWillReceiveProps(nextProps)
    {
        if(nextProps && nextProps.itemEditing)
        {
          this.setState({
            id:nextProps.itemEditing.id,
            name:nextProps.itemEditing.name,
            status:nextProps.itemEditing.status
          });
          // console.log(this.state);
        }else if(nextProps && !nextProps.itemEditing)
        {
          this.setState({
            id:"",
            name:"",
            status:true
          });
        }
     }
  dongform=()=>{
     // this.props.tatform();
    this.props.onCloseForm();
  }

  render() {
    if(!this.props.isDisplayform) return '';
    return(
          <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">Thêm Công Việc</h3>
                        <span className="fa fa-times-circle text-right" onClick={this.dongform}>hi</span>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Tên :</label>
                                <input type="text" className="form-control" name="name" onChange={this.onChange} value={this.state.name}/>
                            </div>
                            <label>Trạng Thái :</label>
                            <select className="form-control" required="required" name="status" onChange={this.onChange} value={this.state.status}>
                                <option value={true}>Kích Hoạt</option>
                                <option value={false}>Ẩn</option>
                            </select>
                            <br/>
                            <div className="text-center">
                                <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
                                <button type="button" className="btn btn-danger" onClick={this.cliesxoa}>Hủy Bỏ</button>
                            </div>
                        </form>
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
const mapDispatchProps=(dispatch,props)=>{
  return {
    onAddTask:(task)=>{
      dispatch(actions.addTask(task));
    },
    onCloseForm:()=>{
      dispatch(actions.CloseForm());
    },
  }

}
export default connect (mapStatetoProps,mapDispatchProps) (TaskForm);
