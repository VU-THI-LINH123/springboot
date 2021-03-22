
import React,{Component} from 'react';
import Taskitem from './Taskitem';
import {connect} from 'react-redux';
import * as actions from './../trainning/actions/index';
class Tasklist  extends Component{
    state={
        filtername:'',
        filterStatus:-1//all -1,active:1,deactive:0
    }
   onChange=(event)=>{
     var target=event.target;
     var name=target.name;
     var value=target.value;
     // this.props.onFilter(name==='filtername'?value:this.state.filtername,name==='filterStatus'?value:this.state.filterStatus);
     this.props.onFilterTable({
      name:name==='filtername'?value:this.state.filtername,
          status:name==='filterStatus'?value:this.state.filterStatus
     });
    this.setState({
        [name]:value,
    });
    // console.log(this.state);
       // this.props.onFilter(this.state.filtername,this.state.filterStatus);c1
   }
  
  render() {
    var mang=this.props.tasks;
    var {filtername,filterStatus}=this.state;
     var{filterTable}=this.props;
     console.log(filterTable);
   
     if(filterTable)
    {
      if(filterTable.name)
      {
        mang=mang.filter((nguoi)=>{
              return nguoi.name.toLowerCase().indexOf(filterTable.name)!==-1 ;
          
        });
      } 
      }
      mang=mang.filter((nguoi)=>{
        if(filterTable.status===-1)
        {
          return  nguoi;
        }else{
          return nguoi.status===(filterTable.status===1? true:false)
        }
      });

    return(
        <table className="table table-bordered table-hover mt-15">
                            <thead>
                                <tr>
                                    <th className="text-center">STT</th>
                                    <th className="text-center">Tên</th>
                                    <th className="text-center">Trạng Thái</th>
                                    <th className="text-center">Hành Động</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td>
                                        <input type="text" className="form-control" name="filtername" value={filtername} onChange={this.onChange}/>
                                    </td>
                                    <td>
                                        <select className="form-control" name="filterStatus"value={filterStatus} onChange={this.onChange}>
                                            <option value="-1">Tất Cả</option>
                                            <option value="0">Ẩn</option>
                                            <option value="1">Kích Hoạt</option>
                                        </select>
                                    </td>
                                    <td></td>
                                </tr>
                                {
                                  mang.map((nguoi,index)=>{
                                    return  <Taskitem 
                                     index={index}
                                      key={index}
                                     
                                      onDelete={this.props.onDelete}
                                      onUpdate={this.props.onUpdate}
                                      nguoi={nguoi}
                                      />
                                  })
                                }

                            </tbody>
                        </table>
      );
  }
 
}
const map=state=>{
  return {
  tasks:  state.tasks,
  filterTable:state.filterTable
  }
};
const mapDispatchProps=(dispatch,props)=>{
  return {
    onFilterTable:(filter)=>{
      dispatch(actions.filterTask(filter));
    },
  }

};
export default connect(map,mapDispatchProps)(Tasklist);