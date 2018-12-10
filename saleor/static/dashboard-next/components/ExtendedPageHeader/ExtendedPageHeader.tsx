import IconButton from "@material-ui/core/IconButton";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import * as classNames from "classnames";
import * as React from "react";
import { Back } from "../Navigator";

const styles = (theme: Theme) =>
  createStyles({
    action: {
      flex: "0 0 auto"
    },
    grid: {
      padding: theme.spacing.unit * 2
    },
    menuButton: {
      flex: "0 0 auto",
      marginLeft: theme.spacing.unit * -2,
      marginRight: theme.spacing.unit * 3,
      marginTop: -theme.spacing.unit * 2
    },
    root: {
      alignItems: "center",
      display: "flex",
      marginBottom: theme.spacing.unit * 3,
      marginTop: theme.spacing.unit * 3
    },
    subtitle: {
      alignItems: "center",
      display: "flex",
      marginBottom: theme.spacing.unit * 2
    },
    title: {
      flex: 1,
      paddingBottom: theme.spacing.unit * 2
    }
  });

interface ExtendedPageHeaderProps extends WithStyles<typeof styles> {
  back?: boolean;
  children?: React.ReactNode;
  className?: string;
  title?: React.ReactNode;
}

const ExtendedPageHeader = withStyles(styles, { name: "ExtendedPageHeader" })(
  ({ back, children, classes, className, title }: ExtendedPageHeaderProps) => (
    <div className={classNames(classes.root, className)}>
      {back && (
        <Back>
          {back => (
            <IconButton
              color="inherit"
              className={classes.menuButton}
              onClick={back}
            >
              <ArrowBackIcon />
            </IconButton>
          )}
        </Back>
      )}
      {title}
      <div className={classes.action}>{children}</div>
    </div>
  )
);
ExtendedPageHeader.displayName = "ExtendedPageHeader";
ExtendedPageHeader.defaultProps = {
  back: false
};
export default ExtendedPageHeader;
