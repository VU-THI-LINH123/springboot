import React, { useState, Component } from "react";
import ReactDOM from "react-dom";
import ReactDataGrid from "react-data-grid";
import createRowData from "./createRowData";
import AdministrativeUnitEditorDialog from "./AdministrativeUnitEditorDialog";
import { getAllAdministrativeUnits, deleteAdministrativeUnit } from "./AdministrativeUnitService";
import "./styles.css";
import {
  IconButton,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Icon,
  TablePagination,
  TableContainer,
  Button,
  Card
} from "@material-ui/core";
//import PageGuide from "./PageGuide";
class AdazzleTable extends Component {
  state = {
    rowsPerPage: 10,
    page: 0,
    administrativeList: [],
    shouldOpenEditorDialog: false,
    shouldOpenConfirmationDialog: false
  };
  defaultColumnProperties = {
    width: 160
  };
  rows=createRowData(50);
  // columns = [
  //   {
  //     key: "id",
  //     name: "ID"
  //   },
  //   {
  //     key: "firstName",
  //     name: "First Name"
  //   },
  //   {
  //     key: "lastName",
  //     name: "Last Name"
  //   },
  //   {
  //     key: "jobTitle",
  //     name: "Job Title"
  //   },
  //   {
  //     key: "jobArea",
  //     name: "Job Area"
  //   },
  //   {
  //     key: "jobType",
  //     name: "Job Type"
  //   },
  //   {
  //     key: "email",
  //     name: "Email"
  //   },
  //   {
  //     key: "street",
  //     name: "Street"
  //   },
  //   {
  //     key: "zipCode",
  //     name: "ZipCode"
  //   },
  //   {
  //     key: "date",
  //     name: "Date"
  //   },
  //   {
  //     key: "catchPhrase",
  //     name: "Catch Phrase"
  //   }
  // ].map(c => ({ ...c, ...this.defaultColumnProperties }));

  columns = [
    {
      key: "id",
      name: "ID"
    },
    {
      key: "name",
      name: "Name"
    },
    {
      key: "code",
      name: "Code"
    }
  ].map(c => ({ ...c, ...this.defaultColumnProperties }));
  
 firstNameActions = [
    {
      icon: <span className="glyphicon glyphicon-remove" />,
      callback: () => {
        alert("Deleting");
      }
    },
    {
      icon: "glyphicon glyphicon-link",
      actions: [
        {
          text: "Option 1",
          callback: () => {
            this.showModal();
            alert("Option 1 clicked");
          }
        },
        {
          text: "Option 2",
          callback: () => {
            alert("Option 2 clicked");
            //toggleModal();
          }
        }
      ]
    }
  ];
  
 getCellActions=(column, row)=> {
    this.setState({item:row});
    const cellActions = {
      firstName: this.firstNameActions
    };
    //return row.id % 2 === 0 ? cellActions[column.key] : null;
    return cellActions[column.key];
  }

  state = { show: false };

  showModal = () => {
    alert('showModal');
    this.shouldOpenEditorDialog =true;
    this.setState({ show: true,shouldOpenEditorDialog: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  handleDialogClose = () => {
    this.setState({
      shouldOpenEditorDialog: false,
      shouldOpenConfirmationDialog: false
    });
    this.updatePageData();
  };
  
  componentDidMount() {
    this.updatePageData();
    if(this.state.administrativeList!=null)
      alert(this.state.administrativeList.length);
  }  
  updatePageData = () => {
    getAllAdministrativeUnits().then(({ data }) => this.setState({
       administrativeList: [...data.content], page:data.pageable.pageNumber+1
      }));
  };  
  render() {
    const ROW_COUNT = 50;
    let {
      rowsPerPage,
      page,
      administrativeList,
      shouldOpenConfirmationDialog,
      shouldOpenEditorDialog
    } = this.state;   
    return (
      <div> 
          {shouldOpenEditorDialog && (
            <AdministrativeUnitEditorDialog
              handleClose={this.handleDialogClose}
              open={shouldOpenEditorDialog}
              item={this.state.item}
            />
          )}           
        <ReactDataGrid
          columns={this.columns}
          rowGetter={i => this.rows}
          rowsCount={ROW_COUNT}
          minHeight={500}
          getCellActions={this.getCellActions}
        />
          {/* <TablePagination
            className="px-16"
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={administrativeList.length}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
              "aria-label": "Previous Page"
            }}
            nextIconButtonProps={{
              "aria-label": "Next Page"
            }}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.setRowsPerPage}
          />         */}
      </div>
    );
  }
}
export default AdazzleTable;
//const container = document.createElement("div");
//document.body.appendChild(container);
//ReactDOM.render(<Dashboard />, container);