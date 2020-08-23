import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const defaultJobTitles = [
  "Cloud Expert",
  "Finance Wizard",
  "Wonder Kid",
  "Tour Manager",
  "Data Guy",
];

const defaultJobLocations = [
  "Austin or 10001",
  "Christchurch or 10001",
  "San Francisco or 10001",
  "Boston or 10001",
  "New York or 10001",
];

var randomJobTitle = defaultJobTitles[Math.floor(Math.random()*defaultJobTitles.length)];
var randomJobLocation = defaultJobLocations[Math.floor(Math.random()*defaultJobLocations.length)];

export default function AppForm(props) {

  const setJobTitle = (event) => {
    props.updater(
      {   ...props.state, jobTitle: event.target.value }
    );
  };

  const setJobLocation = (event) => {
    props.updater(
      {   ...props.state, jobLocation: event.target.value }
    );
  };

  const onSubmit = () => {
    console.log(null);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Let's job hunt!
      </Typography>
      <br></br>
      <ValidatorForm
          onError={errors => console.log(errors)}
          onSubmit={onSubmit}
      >
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
            <TextValidator
                label="I want to be a..."
                placeholder={randomJobTitle}
                onChange={setJobTitle}
                value={props.state.jobTitle}
                validators={['required']}
                errorMessages={['This field is required!']}
                variant="outlined"
            />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextValidator
              label="In..."
              placeholder={randomJobLocation}
              onChange={setJobLocation}
              value={props.state.jobLocation}
              validators={['required']}
              errorMessages={['This field is required!']}
              variant="outlined"
          />
        </Grid>
      </Grid>
      </ValidatorForm>
    </React.Fragment>
  );
}
