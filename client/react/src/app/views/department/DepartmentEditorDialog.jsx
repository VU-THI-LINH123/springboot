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
import TextField from '@material-ui/core/TextField';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import {
  addNewEmploeyee,
  updateEmployee,
  nameWasUsed,
  getAllDepartmentTest,
} from "./DepartmentService";
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

class DepartmentEditorDialog extends Component {
  state = {
    employee1Dto:{},
    listEmployee: [],
    name: "",
    dtos:[],
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
    let { id,  name } = this.state;
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
    getAllDepartmentTest().then(({ data }) => this.setState({ listEmployee: [...data] }));
    console.log(this.state.listEmployee);
  };
  
  render() {
    let { id, name,disabled,dtos} = this.state;
    let { open, t } = this.props;
    let listEmployee=this.state.listEmployee;
    const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
   const checkedIcon = <CheckBoxIcon fontSize="small" />;
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
                : t("Department.add")}
            </h4>
            <IconButton onClick={this.props.handleClose}>
              <Icon className="text-white">clear</Icon>
            </IconButton>
          </div>
          <DialogContent>
            <Grid className="mb-10" container spacing={3}>
              <Grid item md={12} sm={12} xs={12}>
                <TextValidator
                  className="w-100"
                  label={t("department.name")}
                  onChange={this.handleChange}
                  type="text"
                  name="name"
                  value={name}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
                <Autocomplete
             multiple
           id="checkboxes-tags-demo"
          options={listEmployee}
           disableCloseOnSelect
          getOptionLabel={(option) => option.employee1Dto.name}
           renderOption={(option, { selected }) => (
           <React.Fragment>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.employee1Dto.name}

        </React.Fragment>
         )}
          style={{ width: 500 }}
          onChange={(event, value) => {
            this.setState({dtos: value }) 
          }}
          renderInput={(params) => (
        <TextField {...params}  label="Checkboxes" placeholder="Favorites" />
         )}
    />
              
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

export default DepartmentEditorDialog;
