import React, { Component } from "react";
import ReactDOM from "react-dom";
import BootstrapTable from "react-bootstrap-table-next";
//import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "./styles.css";
import { saveAs } from 'file-saver';
import { getAllAdministrativeUnits, deleteAdministrativeUnit } from "./AdministrativeUnitService";
import paginationFactory from 'react-bootstrap-table2-paginator';
class BsTableExample extends Component {
  state = {
    rowsPerPage: 10,
    page: 0,
    administrativeList: [],
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

  handleDeleteAdministrativeUnit = id => {
    this.setState({
      id,
      shouldOpenConfirmationDialog: true
    });
  };

  handleConfirmationResponse = () => {
    deleteAdministrativeUnit(this.state.id).then(() => {
      this.handleDialogClose();
    });
  };

  componentDidMount() {
    this.updatePageData();
  }

  updatePageData = () => {
    getAllAdministrativeUnits().then(({ data }) => this.setState({
       administrativeList: [...data.content], page:data.pageable.pageNumber+1
      }));
  };  
  columns = [
    {
      dataField: "id",
      text: "Product ID"
    },
    {
      dataField: "name",
      text: "Product Name"
    },
    {
      dataField: "price",
      text: "Product Price"
    }
    ,
    {
      dataField: "lastName",
      text: "Product Price"
    }
    ,
    {
      dataField: "firstName",
      text: "Product Price"
    }    
  ];  
  render() {
    // const products = [
    //   { id: 1, name: "Item 1", price: 100 },
    //   { id: 2, name: "Item 2", price: 102 },
    //   { id: 2, name: "Item 2", price: 102 },
    //   { id: 2, name: "Item 2", price: 102 },
    //     { id: 2, name: "Item 2", price: 102 },
    //     { id: 2, name: "Item 2", price: 102 },
    //     { id: 2, name: "Item 2", price: 102 },
    //     { id: 2, name: "Item 2", price: 102 },
    //     { id: 2, name: "Item 2", price: 102 },
    //     { id: 2, name: "Item 2", price: 102 },
    //     { id: 2, name: "Item 2", price: 102 },
    //     { id: 2, name: "Item 2", price: 102 },
    //     { id: 2, name: "Item 2", price: 102 },
    //     { id: 2, name: "Item 2", price: 102 }
    // ];
    let {
      rowsPerPage,
      page,
      administrativeList,
      shouldOpenConfirmationDialog,
      shouldOpenEditorDialog
    } = this.state;
    const options = {
      // pageStartIndex: 0,
      sizePerPage: 5,
      hideSizePerPage: false,
      hidePageListOnlyOnePage: false
    };
    return (
      <div>
        <div>
          <h1 className="h2">Products 2</h1>
        </div>
        <div  className="responsive">
          <BootstrapTable keyField="id" data={administrativeList} columns={this.columns} wrapperClasses="responsive" pagination={ paginationFactory(options) }/>
        </div>
    </div>
    );
    }
}
export default BsTableExample;