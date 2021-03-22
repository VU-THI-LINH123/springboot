import React, { Component } from "react";
import {
  IconButton,
  Dialog,
  Button,
  Icon,
  Grid,
  DialogActions,
} from "@material-ui/core";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// CommonJS format
 // ES2015 module syntax

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {
  addNewEmploeyee,
  updateEmployee,
  nameWasUsed,
  getAllDepartmentTest,
} from "./Employee1Service";
import DialogContent from "@material-ui/core/DialogContent";
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Draggable from "react-draggable";
import Paper from "@material-ui/core/Paper";
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
toast.configure();
function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

class Employee1EditDialog extends Component {

  state = {
    listDepartmentTest:[],
    name: "",
    department2Dto: {
     },
    description: "",
    totalElements: 0,
    rowsPerPage: 25,
    page: 0,
    
  };
 
  handleChange = (event, source) => {
    event.persist();
    if (source === "switch") {
      this.setState({ isActive: event.target.checked });
      return;
    }
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleFormSubmit = () => {
    let { t } = this.props;
    let { id} = this.state;
    this.setState({ disabled: true });
    this.props.handleOKEditClose();
    console.log(this.state);
    if (id) {
      updateEmployee({
        ...this.state
      }).then(() => {
        this.props.handleClose();
      });
    } else {
      addNewEmploeyee({
        ...this.state
      }).then(() => {
        this.props.handleClose();
      });
    }
  };


  componentDidMount() {
    this.updatePageData();
    
  }

  updatePageData = () => {
    getAllDepartmentTest().then(({ data }) => this.setState({ listDepartmentTest: [...data] }));
    console.log(this.state.listDepartmentTest);
  };


  render() {
    
    let { id, name, disabled,listDepartmentTest,department2Dto} = this.state;
    let { open, t } = this.props;
    return (
      <Dialog
        open={open}
        PaperComponent={PaperComponent}
        maxWidth="sm"
        fullWidth="fullWidth"
      >
        <ValidatorForm ref="form" onSubmit={this.handleFormSubmit}>
          <div
            style={{ cursor: "move" }}
            id="draggable-dialog-title"
            className="flex flex-space-between flex-middle pl-16 pr-8 py-8 bg-primary"
          >
            <h4 className="m-0 text-white">
              {this.state.id
                ? t("employee.update")
                : t("employee.add")}
            </h4>
            <IconButton onClick={this.props.handleClose}>
              <Icon className="text-white">clear</Icon>
            </IconButton>
          </div>
          <DialogContent>
            <Grid className="mb-10" container spacing={3}>
              <Grid item md={6} sm={6} xs={6}>
                <TextValidator
                  className="w-100"
                  label={t("employee.name")}
                  onChange={this.handleChange}
                  type="text"
                  name="name"
                  value={name}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
                
                
              </Grid>
              <Grid item md={6} sm={6} xs={6}>
             {listDepartmentTest && (
                  <Autocomplete
                    options={listDepartmentTest}
                    disableClearable
                    defaultValue={() => {
                      const defaultCurrency = listDepartmentTest?.filter(
                        (item) => item?.id == department2Dto?.id
                      );
                      return defaultCurrency !== null && defaultCurrency?.length > 0
                        ? defaultCurrency[0]
                        : null;

                    }}
                    style={{ width: "100%" }}
                    onChange={(event, value) => {
                      this.setState({ department2Dto: value }) 
                    }}
                    getOptionLabel={(option) => `${option?.name}`}
                    getOptionSelected={(option, value) => option?.name === value?.name}
                    renderInput={(params) => (
                      <TextValidator
                        {...params}
                        label={<span>    {t("department2Dto.name")}{" "}
                          <span style={{ color: "red", }}>  {" "}*{" "} </span>  </span>
                        }
                        value={department2Dto}
                        validators={["required"]}
                        errorMessages={[
                          t("Validation.this_field_is_required"),
                        ]}
                      />
                    )}
                  />
                )}
               <Grid item sm={12} xs={12}>
               
              </Grid>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <div className="flex flex-space-between flex-middle mt-36">
              <Button
                variant="contained"
                color="secondary"
                className="mr-36"
                onClick={() => this.props.handleClose()}
              >
                {t("general.cancel")}
              </Button>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={disabled}
              >
                {t("general.save")}
              </Button>
            </div>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    );
  }
}

export default Employee1EditDialog;
