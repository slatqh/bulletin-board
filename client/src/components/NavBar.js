import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Button, Toolbar, Grid } from '@material-ui/core/';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const NavBar = ({ byDates, byVotes, byTags }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Bulletin
          </Typography>
          <Grid
            container
            item
            xs={12}
            sm={5}
            lg={4}
            xl={2}
            justify="center"
            direction="row"
          >
            <Grid
              justify="space-around"
              container
              item
              sm={10}
              lg={6}
              xl={10}
              xs={12}
            >
              <Button
                variant="contained"
                color="default"
                size="small"
                onClick={byDates}
              >
                BY DATE{' '}
              </Button>
              <Button
                variant="contained"
                color="default"
                size="small"
                onClick={byVotes}
              >
                BY VOTES{' '}
              </Button>
              <Button
                variant="contained"
                color="default"
                size="small"
                onClick={byTags}
              >
                BY TAGS{' '}
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};
