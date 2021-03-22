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
  Card,
  Checkbox,
  TableSortLabel
} from "@material-ui/core";
import { getAllAdministrativeUnits, deleteAdministrativeUnit, getByPage } from "./AdministrativeUnitService";
import AdministrativeUnitEditorDialog from "./AdministrativeUnitEditorDialog";
import { Breadcrumb, ConfirmationDialog } from "egret";
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import shortid from "shortid";
import { saveAs } from 'file-saver';
class AdministrativeUnitTable extends Component {
  state = {
    rowsPerPage: 10,
    page: 0,
    administrativeList: [],
    item:{},
    shouldOpenEditorDialog: false,
    shouldOpenConfirmationDialog: false,
    selectAllItem:false,
    selectedList:[],
    totalElements:0,
    shouldOpenConfirmationDeleteAllDialog:false
  };
  numSelected =0;
  rowCount=0;
  
  setPage = page => {
    //this.setState({ page });
    this.setState({ page },function(){
      this.updatePageData();
     })
  };

  setRowsPerPage = event => {
   this.setState({ rowsPerPage: event.target.value, page:0},function(){
    this.updatePageData();
   })
  };

  handleChangePage = (event, newPage) => {
    this.setPage(newPage);
    //this.updatePageData();
  };

  updatePageData = () => {
    var params = this.state.page+"/"+this.state.rowsPerPage;
    getByPage(this.state.page,this.state.rowsPerPage).then(({ data }) => this.setState({
       administrativeList: [...data.content],selectAllItem:false, totalElements:data.totalElements
      }));
  };

  handleDownload = () => {
    var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "hello world.txt");    
  }
  handleDialogClose = () => {
    this.setState({
      shouldOpenEditorDialog: false,
      shouldOpenConfirmationDialog: false,
      shouldOpenConfirmationDeleteAllDialog:false
    });
    //this.updatePageData();
  };

  handleOKEditClose = () => {
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

  handleEditAdministrativeUnit = item => {
    this.setState({
      item:item,
      shouldOpenEditorDialog: true
    });
  };

  handleConfirmationResponse = () => {
    deleteAdministrativeUnit(this.state.id).then(() => {
      this.updatePageData();
      this.handleDialogClose();
    });
  };

  componentDidMount() {
    this.updatePageData();
  }

 
  handleClick = (event, adminUnit) => {
    let {administrativeList} =  this.state;
    if(adminUnit.checked==null){
      adminUnit.checked=true;
    }else {
      adminUnit.checked=!adminUnit.checked;
    }
    var selectAllItem=true;
    for(var i=0;i<administrativeList.length;i++){
      if(administrativeList[i].checked==null || administrativeList[i].checked==false){
        selectAllItem=false;
      }
      if(administrativeList[i].id==adminUnit.id){
        administrativeList[i]=adminUnit;
      }
    }
    this.setState({selectAllItem:selectAllItem, administrativeList:administrativeList});
    
  };
   handleSelectAllClick = (event) => {
    let {administrativeList} =  this.state;
    for(var i=0;i<administrativeList.length;i++){
      administrativeList[i].checked=!this.state.selectAllItem;
    }
     this.setState({selectAllItem:!this.state.selectAllItem, administrativeList:administrativeList});
  };

  async handleDeleteList(list){
    for(var i=0;i<list.length;i++){
      if(list[i].checked){
        await deleteAdministrativeUnit(list[i].id);
      }
    }    
  }
  handleDeleteAll = (event) => {
    let {administrativeList} =  this.state;
    this.handleDeleteList(administrativeList).then(()=>{  
      this.updatePageData();
      this.handleDialogClose();
    }
    );
  };

  // handleDeleteAll = (event) => {
  //   let {administrativeList} =  this.state;
  //   for(var i=0;i<administrativeList.length;i++){
  //     if(administrativeList[i].checked){
  //       deleteAdministrativeUnit(administrativeList[i].id);
  //     }
  //   }    
  //   this.updatePageData();
  //   this.handleDialogClose();
  // };

  render() {
    const { t, i18n } = this.props;
    let {
      rowsPerPage,
      page,
      administrativeList,
      shouldOpenConfirmationDialog,
      shouldOpenEditorDialog,
      shouldOpenConfirmationDeleteAllDialog
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
          onClick={() => this.setState({ shouldOpenEditorDialog: true,item:{} })}
        >
          {t('AdministrativeUnitTable.AddNew')}
        </Button>
        <Button
          className="mb-16"
          variant="contained"
          color="primary"
          onClick={() => this.setState({ shouldOpenConfirmationDeleteAllDialog: true})}
        >
          {t('Delete')}
        </Button>  
        <Button
          className="mb-16"
          variant="contained"
          color="primary"
          onClick={() => this.handleDownload()}
        >
          {t('Download')}
        </Button>        
        <TableContainer style={{maxHeight: 200}}>
          <Table stickyHeader className="crud-table" style={{ whiteSpace: "pre", minWidth: "750px" }}>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    //indeterminate={this.numSelected > 0 && this.numSelected < this.rowCount}
                    checked={this.state.selectAllItem}
                    onChange={this.handleSelectAllClick}
                    inputProps={{ 'aria-label': 'select all desserts' }}
                  />
                </TableCell>                
                <TableCell>{t('Name')}</TableCell>
                <TableCell>{t('Code')}</TableCell>
                <TableCell>{t('Level')}</TableCell>
                <TableCell>{t('Status')}</TableCell>
                <TableCell>{t('Action')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {administrativeList
                .map((adminUnit, index) => {
                  return(
                  <TableRow key={shortid.generate()}>
                    <TableCell padding="checkbox">
                      <Checkbox onClick={(event) => this.handleClick(event, adminUnit)}
                        checked={adminUnit.checked}
                      />
                    </TableCell>
                    <TableCell className="px-0">{adminUnit.name}</TableCell>
                    <TableCell className="px-0" align="left">
                      {adminUnit.code}
                    </TableCell>
                    
                    <TableCell className="px-0" align="left">
                      {adminUnit.level}
                    </TableCell>
                    <TableCell className="px-0">
                      {adminUnit.checked ? (
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
                          this.handleEditAdministrativeUnit(adminUnit)
                        }
                      >
                        <Icon color="primary">edit</Icon>
                      </IconButton>
                      <IconButton onClick={() => this.handleDeleteAdministrativeUnit(adminUnit.id)}>
                        <Icon color="error">delete</Icon>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                  )})}
            </TableBody>
          </Table>
          </TableContainer>
          <TablePagination
            className="px-16"
            rowsPerPageOptions={[1,2,5, 10, 25]}
            component="div"
            count={this.state.totalElements}
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
          />

          {shouldOpenEditorDialog && (
            <AdministrativeUnitEditorDialog
              handleClose={this.handleDialogClose}
              handleOKEditClose={this.handleOKEditClose}
              open={shouldOpenEditorDialog}
              item={this.state.item}
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

          {shouldOpenConfirmationDeleteAllDialog && (
            <ConfirmationDialog
              open={shouldOpenConfirmationDeleteAllDialog}
              onConfirmDialogClose={this.handleDialogClose}
              onYesClick={this.handleDeleteAll}
              text="Are you sure to delete all?"
            />
          )}          
        
      </div>
    );
  }
}

export default AdministrativeUnitTable;
