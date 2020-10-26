import React from 'react';
import './App.css';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      generalInfo: {
        submitted: false,
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: ""
      },
      education: {
        submitted: false,
        schoolName: "",
        titleOfStudy: "",
        schoolStartDate: "",
        schoolEndDate: "",
      },
      experience: {
        submitted: false,
        companyName: "",
        jobTitle: "",
        jobDescription: "",
        jobStartDate: "",
        jobEndDate: ""
      }
    }
  }

  handleChange = (e) => {
    const targetField = e.target.id;
    const targetSection = this.getTargetSection(targetField);
    const targetObject = Object.assign({}, this.state[targetSection]);
    targetObject[targetField] = e.target.value;

    this.setState({
      [targetSection]: targetObject
    });
  }

  getTargetSection = (targetField) => {
    const sections = Object.keys(this.state);

    for (let sectIndex = 0; sectIndex < sections.length; sectIndex++) {
      if ( this.state[sections[sectIndex]].hasOwnProperty(targetField) ) {
        return sections[sectIndex];
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let buttonId = e.target.id
    let targetSection = buttonId.slice(11);

    const targetObject = Object.assign({}, this.state[targetSection]);
    targetObject.submitted = true;

    this.setState( {
      [targetSection]: targetObject
    });
  }

  undoSubmit = (e) => {
    let buttonId = e.target.id
    let targetSection = buttonId.slice(9);

    const targetObject = Object.assign({}, this.state[targetSection]);
    targetObject.submitted = false;

    this.setState( {
      [targetSection]: targetObject
    });
  }

  render() {
    return (
      <>
      <div>
        <GeneralInfo
          information={this.state.generalInfo}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          undoSubmit={this.undoSubmit}
        />
      </div>
      <div>
        <Education
          information={this.state.education}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          undoSubmit={this.undoSubmit}
        />
      </div>
      <div>
        <Experience
          information={this.state.experience}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          undoSubmit={this.undoSubmit}
        />
      </div>
    </>
    )
  }
}

export default App;
