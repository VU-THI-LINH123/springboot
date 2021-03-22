import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { setLayoutSettings } from "app/redux/actions/LayoutActions";
import { withStyles } from "@material-ui/core";
import Scrollbar from "react-perfect-scrollbar";
import { isMdScreen, classList } from "utils";
import { renderRoutes } from "react-router-config";
import LayoutV1Topbar from "./LayoutV1Topbar";
import LayoutV1Sidenav from "./LayoutV1Sidenav";
import Footer from "../SharedCompoents/Footer";
import SecondarySidebar from "../SharedCompoents/SecondarySidebar";
import AppContext from "app/appContext";
import { useTranslation, withTranslation, Trans } from 'react-i18next';
//import React15TabulatorSample from '../../views/AdministrativeUnit/React15TabulatorSample';//Chỉ dùng để thử
// import {EgretLoadable} from "egret";

// const SecondarySidebar = EgretLoadable({
//   loader: () => import("../SharedCompoents/SecondarySidebar")
// });

// const Footer = EgretLoadable({
//   loader: () => import("../SharedCompoents/Footer")
// });

// const LayoutV1Topbar = EgretLoadable({
//   loader: () => import("./LayoutV1Topbar")
// });

// const LayoutV1Sidenav = EgretLoadable({
//   loader: () => import("./LayoutV1Sidenav")
// });
const ViewLayoutV1Topbar = withTranslation()(LayoutV1Topbar);
const styles = theme => {
  return {
    layout: {
      backgroundColor: theme.palette.background.default
    }
  };
};

class LayoutV1 extends Component {
  componentWillMount() {
    if (isMdScreen()) {
      this.updateSidebarMode({ mode: "close" });
    }
    // if (window) {
    //   // SET DIRECTION
    //   let { settings } = this.props;
    //   document.body.setAttribute("dir", settings.direction);
    // }
  }

  componentWillUnmount() {
    // if (window) {
    //   document.body.removeAttribute("dir");
    // }
  }

  updateSidebarMode = sidebarSettings => {
    let { settings, setLayoutSettings } = this.props;
    setLayoutSettings({
      ...settings,
      LayoutV1Settings: {
        ...settings.LayoutV1Settings,
        leftSidebar: {
          ...settings.LayoutV1Settings.leftSidebar,
          ...sidebarSettings
        }
      }
    });
  };

  render() {
    let { settings, classes, theme } = this.props;

    let { LayoutV1Settings } = settings;
    /*Nếu dùng đoạn code này thì sẽ conflict với các table*/
    // let layoutClasses = {
    //   [classes.layout]: true,
    //   [`${settings.activeLayout} sidenav-${LayoutV1Settings.leftSidebar.mode} theme-${theme.palette.type} flex`]: true,
    //   "topbar-fixed": LayoutV1Settings.topbar.fixed
    // };
    let layoutClasses = {
      [classes.layout]: true,
      [`${settings.activeLayout} sidenav-${LayoutV1Settings.leftSidebar.mode}`]: true,
      "topbar-fixed": LayoutV1Settings.topbar.fixed
    };    
    return (
      <AppContext.Consumer>
        {({ routes }) => (
          <div className={classList(layoutClasses)}>
            {LayoutV1Settings.leftSidebar.show && <LayoutV1Sidenav />}
            <div className="content-wrap position-relative">
              {LayoutV1Settings.topbar.show && LayoutV1Settings.topbar.fixed && (
                // <LayoutV1Topbar />
                <ViewLayoutV1Topbar/>
              )}

              {settings.perfectScrollbar && (
                /*Nếu dùng đoạn code này thì sẽ conflict với các table*/
                // <Scrollbar className="scrollable-content">
                //   {LayoutV1Settings.topbar.show &&
                //     !LayoutV1Settings.topbar.fixed && <LayoutV1Topbar />}
                //   <div className="content">
                //     {renderRoutes(routes)}
                //   </div>
                //   <div className="my-auto" />
                //   {settings.footer.show && !settings.footer.fixed && <Footer />}
                // </Scrollbar>
                <div  className="scrollable-content">
                  {LayoutV1Settings.topbar.show &&
                    !LayoutV1Settings.topbar.fixed && <LayoutV1Topbar />}
                  <div className="content">
                    {renderRoutes(routes)}
                  </div>
                  <div className="my-auto" />
                  {settings.footer.show && !settings.footer.fixed && <Footer />}                  
               </div>
              )}

              {!settings.perfectScrollbar && (
                <div className="scrollable-content">
                  {LayoutV1Settings.topbar.show &&
                    !LayoutV1Settings.topbar.fixed && <LayoutV1Topbar />}
                  <div className="content">{renderRoutes(routes)}</div>
                  <div className="my-auto" />
                  {settings.footer.show && !settings.footer.fixed && <Footer />}
                </div>
              )}

              {settings.footer.show && settings.footer.fixed && <Footer />}
            </div>
            {settings.secondarySidebar.show && <SecondarySidebar />}
            
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

LayoutV1.propTypes = {
  settings: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  setLayoutSettings: PropTypes.func.isRequired,
  settings: state.layout.settings
});

export default withStyles(styles, { withTheme: true })(
  connect(
    mapStateToProps,
    { setLayoutSettings }
  )(LayoutV1)
);
