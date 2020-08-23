import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default function AppDescription() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        The backstory
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
        <Typography variant="subtitle1">
          {'It has always bothered me how silly applying for jobs '}
          {'online these days has become. Some of the smartest, most hardworking '}
          {'people I know have had no success applying for jobs online, while many certainly '}
          {'less deserving folks have been wildly successful. How could this be?!'}
          <br></br>
          <br></br>
          {'People (quite understandably) get really upset when they '}
          {"\"spray and pray\" online job applications and don't get any responses. "}
          {'To these people - today is your lucky day. When you submit an application online, '}
          {'your application is automatically entered into an '}
          {'Applicant Tracking System (ATS) that "pre screens" applicants for the '}
          {'position. These systems usually use the job description (and '}
          {'maybe a few other similar things) to "score" candidates based on '}
          {'a keyword match with the resume. The problem with this system '}
          {'is that 1) good candidates with good resumes that phrase '}
          {'things differently than the job description and 2) good '}
          {'candidates that apply for jobs that have terrible job '}
          {'descriptions get penalized, while less deserving candidates '}
          {'(or those who know how to game the system) succeed. '}
          <br></br>
          <br></br>
          {'This is a perfect example of well intentioned technology letting us down. '}
          {"I'm very passionate about using technology to level the "}
          {"playing field for people who wouldn't ordinarily think about "}
          {"how terrible some of the digital solutions we use are - so "}
          {"I built a tool that can help people looking for jobs "}
          {"craft their resume in a way that the computers will like."}
        </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
