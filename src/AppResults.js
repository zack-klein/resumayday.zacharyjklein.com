import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
  expansionHeading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  expansionSecondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function AppResults(props) {
  const classes = useStyles();
  const copyClipBoard = (event) => {
    navigator.clipboard.writeText(event.currentTarget.textContent).then(function() {
      console.log("Copied!");
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });

  };
  const keywordView = props.state.keywords.map((item, key) =>
    <ListItem key={item.id} button onClick={copyClipBoard}>
      <ListItemText>
        <Typography color="textPrimary">
          {item[1]}
        </Typography>
      </ListItemText>
      <ListItemSecondaryAction>
        <Typography color="secondary">
          {Math.round(item[0])}
        </Typography>
      </ListItemSecondaryAction>
    </ListItem>
  );
  const dataListView = props.state.jobs.map((item, key) =>
    <ExpansionPanel>
      <ExpansionPanelSummary>
        <Typography color="textPrimary" className={classes.expansionHeading}>
          {item.title}
        </Typography>
        <Typography align="right" color="textSecondary" className={classes.expansionSecondaryHeading}>
          {item.company}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography color="textSecondary">
        Job Description
        </Typography>
      </ExpansionPanelDetails>
      <ExpansionPanelDetails>
        <Typography>
          {item.summary}
        </Typography>
      </ExpansionPanelDetails>
      <ExpansionPanelDetails>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                  <TableCell>
                    Keyword
                  </TableCell>
                  <TableCell>
                    Score
                  </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {item.keywords.map((keyword) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell>
                      {keyword[1]}
                    </TableCell>
                    <TableCell>
                      {Math.round(keyword[0])}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </ExpansionPanelDetails>
      <ExpansionPanelActions>
      <Button size="small" href={item.link} color="secondary">
        See this job on Indeed <ChevronRightIcon />
      </Button>
      </ExpansionPanelActions>
    </ExpansionPanel>

  );

  return (
    <React.Fragment>
      <Typography color="secondary" variant="h6" gutterBottom>
        {props.state.jobTitle}s {'in'} {props.state.jobLocation} {'usually'}
        {' have these keywords in the job description:'}
      </Typography>
      <List disablePadding>
        {keywordView}
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Typography variant="h6" color="secondary" gutterBottom className={classes.title}>
            {props.state.jobs.length}{" jobs found for "}{props.state.jobTitle}{" in "}{props.state.jobLocation}{":"}
          </Typography>
          <br></br>
          {dataListView}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
