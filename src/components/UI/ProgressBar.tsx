import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { ValidationState } from 'src/models';


const ProgressBar: React.FC<ProgressBarProps> = ({ isLoading }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      { isLoading? <LinearProgress /> : null}
    </div>
  );
};

const mapStateToProps = (state: {
  auth: ValidationState
}) => ({
  isLoading: state.auth.isLoading
});

const connector = connect(mapStateToProps);

type ProgressBarProps = ConnectedProps<typeof connector>;

export default connector(ProgressBar);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
      marginTop: '50px'
    },
  }),
);