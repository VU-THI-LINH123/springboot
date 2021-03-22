import React, { Component } from "react";
import { MDBDataTableFooter} from '../GlobitsDatatableMDB/DataTableFooter';
import { MDBDataTable} from '../GlobitsDatatableMDB/DataTable';
import { MDBContainer } from 'mdbreact';
import { saveAs } from 'file-saver';
import { getAllItems, deleteItem,addNewItem, updateItem } from "./MDBDataTableService";
import DatatableEditorDialog from "./DatatableEditorDialog";
import shortid from "shortid";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Icon,
  TablePagination,
  TableContainer
} from "@material-ui/core";
class DatatablePage extends Component {
  state = {
    rowsPerPage: 10,
    page: 0,
    itemList: [],
    shouldOpenEditorDialog: false,
    shouldOpenConfirmationDialog: false
  };
  setPage = page => {
    this.setState({ page });
  };

  setRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  handleChangePage = (event, newPage) => {
    this.setPage(newPage);
  };
  handleDownload = () => {
    var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "hello world.txt");    
  }
  handleDialogClose = () => {
    this.setState({
      shouldOpenEditorDialog: false,
      shouldOpenConfirmationDialog: false
    });
    this.updatePageData();
  };
  handleEdit =item=>{
    this.setState({
      id: item.id,
      item:item,
      shouldOpenEditorDialog: true
    })
  }
  handleDeleteItem = id => {
    alert(id);
    this.setState({
      id,
      shouldOpenConfirmationDialog: true
    });
  };

  handleConfirmationResponse = () => {
    deleteItem(this.state.id).then(() => {
      this.handleDialogClose();
    });
  };

  componentDidMount() {
    this.updatePageData();
  }

  updatePageData = () => {
    getAllItems().then(({ data }) => this.setState({
       itemList: [...data.content], page:data.pageable.pageNumber+1
      }));
  };    
  render(){
    const divStyle={
      overflowX: 'scroll',
      //border:'1px solid red',
      position:'relative'
    };
    let {
      rowsPerPage,
      page,
      itemList,
      shouldOpenConfirmationDialog,
      shouldOpenEditorDialog,
    } = this.state;    
    let rows =[];
    for (var j = 0; j < itemList.length; j++) { 
      var item = itemList[j];
      let action =
      <span>
      <button onClick={() =>
          this.handleEdit(item)
        }>Edit {item.name}</button>
      <button onClick={() =>
          this.handleDeleteItem(item.id)
        }>Delete {item.id}</button>     
      </span>;        
      item.action=action;
      rows.push(item);
  }    
    let data = {
        columns:[
          {
            label: 'Name',
            field: 'name',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Code',
            field: 'code',
            sort: 'asc',
            width: 270
          },
          {
            label: 'Level',
            field: 'level',
            sort: 'asc',
            width: 270
          }
          ,
          {
            label: 'Action',
            field: 'action',
            sort: 'asc',
            width: 270
          }
      ],
      rows:rows
    }
    console.log(rows);
    return (
      <div>
      <MDBContainer>
      {shouldOpenEditorDialog && (
            <DatatableEditorDialog
              handleClose={this.handleDialogClose}
              open={shouldOpenEditorDialog}
              item={this.state.item}
            />
          )}           
        <MDBDataTableFooter scrollY scrollX maxHeight="300px"
          striped
          bordered
          small
          data={data}
          exportToCSV={true}
          info={false}
          visibleLabel={false}
          
          />
      </MDBContainer>
      </div>

    );
  }
  
}
export default DatatablePage;