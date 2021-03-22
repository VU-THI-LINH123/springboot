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
import Autocomplete from "@material-ui/lab/Autocomplete";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {
  addNewEmploeyee,
  updateEmployee,
  nameWasUsed,
  getAllDepartmentTest,
} from "./EmployeeCloneService";
import DialogContent from "@material-ui/core/DialogContent";
import Draggable from "react-draggable";
import Paper from "@material-ui/core/Paper";
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

class EmployeeCloneEditDialog extends Component {
  state = {
    listDepartmentTest: [],
    name: "",
    code: "",
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
    let { id, code, name } = this.state;
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

  selectListDepartmentTest = (departmentTestListSelected) => {
    let listDepartmentTest = [];
    listDepartmentTest.push(departmentTestListSelected);
    this.setState({ listDepartmentTest });
  };

  componentDidMount() {
    this.setState({
      ...this.props.item,
    });
    getAllDepartmentTest()
      .then(({ data }) => {
        this.setState({
          listDepartmentTest: data,
        });
      })
      .catch((err) => {
        toast.warning(err + "");
      });
  }

  render() {
    let { id, code, name, email, age, phone, departmentTestCode, departmentTestId, disabled, listDepartmentTest } = this.state;
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
                 <TextValidator
                  className="w-100 mb-10"
                  label={t("employee.code")}
                  onChange={this.handleChange}
                  type="text"
                  name="code"
                  value={code}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
                 <TextValidator
                  className="w-100 mb-10"
                  label={t("employee.code")}
                  onChange={this.handleChange}
                  type="text"
                  name="code"
                  value={code}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
                <TextValidator
                  className="w-100"
                  label={t("employee.email")}
                  onChange={this.handleChange}
                  type="text"
                  name="email"
                  value={email}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
              </Grid>
              <Grid item md={6} sm={6} xs={6}>
                {/* <TextValidator
                  className="w-100"
                  label={t("employee.phone")}
                  onChange={this.handleChange}
                  type="text"
                  name="phone"
                  value={phone}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
                <TextValidator
                  className="w-100 mb-10"
                  label={t("employee.age")}
                  onChange={this.handleChange}
                  type="number"
                  name="age"
                  value={age}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                /> */}
                {/* <TextValidator
                  className="w-100"
                  label={t("employee.departmentTestCode")}
                  onChange={this.handleChange}
                  type="text"
                  name="departmentTestCode"
                  value={departmentTestCode}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />  */}
               <Grid item sm={12} xs={12}>
                {listDepartmentTest && (
                  <Autocomplete
                    style={{ width: "100%" }}
                    id="combo-box-demo"
                    defaultValue={listDepartmentTest[0]}
                    options={listDepartmentTest}
                    getOptionSelected={(option, value) =>
                      option.id === value.id
                    }
                    getOptionLabel={(option) => option.code}
                    onChange={(event, value) => {
                      this.selectListDepartmentTest(value);
                    }}
                    renderInput={(params) => (
                      <TextValidator
                        {...params}
                        value={listDepartmentTest[0]}
                        label={
                          <span>
                            {t("employee.departmentTestCode")}{" "}
                            <span style={{ color: "red" }}> * </span>
                          </span>
                        }
                        fullWidth
                        validators={["required"]}
                        errorMessages={[t("employee.departmentTestCode")]}
                      />
                    )}
                  />
                )}
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

export default EmployeeCloneEditDialog;
