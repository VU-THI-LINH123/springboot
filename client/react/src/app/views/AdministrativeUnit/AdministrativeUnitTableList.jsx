import React, { Component } from "react";
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
import { getAllAdministrativeUnits, deleteAdministrativeUnit } from "./AdministrativeUnitService";
import AdministrativeUnitEditorDialog from "./AdministrativeUnitEditorDialog";
import { Breadcrumb, ConfirmationDialog } from "egret";
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import shortid from "shortid";
import { saveAs } from 'file-saver';
import ReactDataGrid from "react-data-grid";
class AdministrativeUnitTable extends Component {
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

  render() {
    // var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
    // saveAs(blob, "hello world.txt");
    const { t, i18n } = this.props;
    let {
      rowsPerPage,
      page,
      administrativeList,
      shouldOpenConfirmationDialog,
      shouldOpenEditorDialog
    } = this.state;
    return (
      <div className="m-sm-30">
        
        <div  className="mb-sm-30">
          <Breadcrumb routeSegments={[{ name: "AdministrativeUnit Table" }]} />
        </div>

        <Button
          className="mb-16"
          variant="contained"
          color="primary"
          onClick={() => this.setState({ shouldOpenEditorDialog: true })}
        >
          {t('AdministrativeUnitTable.AddNew')}
        </Button>
        <Button
          className="mb-16"
          variant="contained"
          color="primary"
          onClick={() => this.handleDownload()}
        >
          {t('Download')}
        </Button>        
        <TableContainer>
          <Table className="crud-table" style={{ whiteSpace: "pre", minWidth: "750px" }}>
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Birthdate</TableCell>
                <TableCell>Company</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {administrativeList
                .map((adminUnit, index) => (
                  <TableRow key={shortid.generate()}>
                    <TableCell className="px-0" align="left">
                      {adminUnit.firstName}
                    </TableCell>
                    <TableCell className="px-0">{adminUnit.lastName}</TableCell>
                    <TableCell className="px-0" align="left">
                      {adminUnit.birthDate}
                    </TableCell>
                    
                    <TableCell className="px-0" align="left">
                      {adminUnit.company}
                    </TableCell>
                    <TableCell className="px-0">
                      {adminUnit.isActive ? (
                        <small className="border-radius-4 bg-primary text-white px-8 py-2 ">
                          active
                        </small>
                      ) : (
                        <small className="border-radius-4 bg-light-gray px-8 py-2 ">
                          inactive
                        </small>
                      )}
                    </TableCell>
                    <TableCell className="px-0 border-none">
                      <IconButton
                        onClick={() =>
                          this.setState({
                            uid: adminUnit.id,
                            shouldOpenEditorDialog: true
                          })
                        }
                      >
                        <Icon color="primary">edit</Icon>
                      </IconButton>
                      <IconButton onClick={() => this.AdministrativeUnit(adminUnit.id)}>
                        <Icon color="error">delete</Icon>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        {/* <ReactDataGrid
          columns={this.columns}
          rowGetter={i =>administrativeList}
          rowsCount={administrativeList}
          minHeight={500}
          getCellActions={this.getCellActions}
        /> */}
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
          /> */}

          {shouldOpenEditorDialog && (
            <AdministrativeUnitEditorDialog
              handleClose={this.handleDialogClose}
              open={shouldOpenEditorDialog}
              uid={this.state.uid}
            />
          )}
          {shouldOpenConfirmationDialog && (
            <ConfirmationDialog
              open={shouldOpenConfirmationDialog}
              onConfirmDialogClose={this.handleDialogClose}
              onYesClick={this.handleConfirmationResponse}
              text="Are you sure to delete?"
            />
          )}
        </TableContainer>
      </div>
    );
  }
}

export default AdministrativeUnitTable;
