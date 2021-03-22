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
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {
  addNewData,
  updateData,
  codeWasUsed,
  nameWasUsed,
} from "./CategoriesService";
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

class CategoriesDialog extends Component {
  state = {
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
    let { id } = this.state;
    let { t } = this.props;
    let { code } = this.state;
    let { name } = this.state;
    let checkcode = { id, code };
    let checkname = { id, name };
    this.setState({ disabled: true });
    this.props.handleOKEditClose();
    //Nếu trả về false là code chưa sử dụng có thể dùng
    codeWasUsed(checkcode).then((result) => {
      if (result && result.data !== null && result.data === false) {
        nameWasUsed(checkname).then((result) => {
          if (result && result.data !== null && result.data === false) {
            if (!id) {
              addNewData({
                ...this.state,
              }).then(() => {
                this.setState({ loading: false });
                this.props.handleOKEditClose();
                var { t } = this.props;
                toast.success(t("general.success"));
              }).catch((err) => {
                toast.warning(err + "");
              });
            } else {
              updateData({
                ...this.state,
              }).then(() => {
                this.setState({ loading: false });
                this.props.handleOKEditClose();
                var { t } = this.props;
                toast.success(t("general.success"));
              }).catch((err) => {
                toast.warning(err + "");
              });
            }

            this.props.handleClose();
          } else {
            toast.error(t("Category.name_in_used"));
          }
        }).catch((err) => {
          toast.warning(err + "");
        });
      } else {
        toast.error(t("Category.checkCode"));
        this.setState({ disabled: true });
      }
    }).catch((err) => {
      toast.warning(err + "");
    });
  };

  componentWillMount() {
    this.setState({
      ...this.props.item,
    });
  }

  render() {
    let { name, code, disabled } = this.state;
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
                ? t("Category.dialog.titleUpdate")
                : t("Category.dialog.titleCreate")}
            </h4>
            <IconButton onClick={this.props.handleClose}>
              <Icon className="text-white">clear</Icon>
            </IconButton>
          </div>
          <DialogContent>
            <Grid className="mb-10" container spacing={3}>
              <Grid item md={12} sm={12} xs={12}>
                <TextValidator
                  className="w-100 mb-10"
                  label={t("Category.code")}
                  onChange={this.handleChange}
                  type="text"
                  name="code"
                  value={code}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
                <TextValidator
                  className="w-100"
                  label={t("Category.name")}
                  onChange={this.handleChange}
                  type="text"
                  name="name"
                  value={name}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
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

export default CategoriesDialog;
