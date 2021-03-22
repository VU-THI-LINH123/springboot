import * as types from './../constants/ActionTypes';
var data=JSON.parse(localStorage.getItem('mang'));
var initialState=data?data:[];
 var s4=()=>
   {
     return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
   }
 var  getlayid=()=>
   {
    return s4()+s4()+'-'+s4()+'-'+s4();
   }
   var findIndex=(mang,id)=>
   {
       var  check=0;
       
       var check=-1;
        mang.forEach((pt,index)=>{   //chu y foreach lap lai vo han return gia tri tra ve nhung van lap c2
            if(pt.id===id)
              {
                  
                   check=index;
               }
           }
          );
       return check;

      // for(let i=0;i<mang.length;i++) //khi gap return thi vong lap for duoc thoat
      // {
      //   if(mang[i].id===id)
      //   {
      //     return i;
      //   }
      // }
      // return -1;
   }
var myReducer=(state=initialState,action)=>{
	switch(action.type)
	{
		case types.LIST_ALL:
		return state;
		case types.ADD_TASK:
     var id=action.task.id;
      if(id===''){
           action.task.id=getlayid();
           state.push(action.task);
           console.log(action);
          }
           else{
            var index=findIndex(state,id);
             state[index]=action.task;
             
           }
            localStorage.setItem('mang',JSON.stringify(state));
           return [...state];
		return state;
		case types.UPDATE_STATUS:
		var id=action.id;
		var index=findIndex(state,id);
		console.log(state[index].status);
		// state[index].status=!state[index].status;
		var closetask={...state[index],
            status:!state[index].status
		};
		// closetask.status=!closetask.status;cach 2
		state[index]=closetask;
		localStorage.setItem('mang',JSON.stringify(state));
		console.log(state[index].status);
		return[...state];
		case types.DELETE_FORM:
		var id=action.id;
		var index=findIndex(state,id);

		if(index!==-1)
		{
			
	        state.splice(index,1);
	       
			localStorage.setItem('mang',JSON.stringify(state));
		}
		return [...state];
		default: return state;
	}
    
}
export default myReducer;