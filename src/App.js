import React from 'react';
import './App.css';
import DisplayedData from './components/DisplayedData';
import SubmissionForm from './components/SubmissionForm';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      generalInfo: {
        title: "General Information",
        sectionID: "generalInfo", 
        submitted: false,
        firstName: {
          value: "",
          type: "text"
        },
        lastName: {
          value: "",
          type: "text"
        },
        email: {
          value: "",
          type: "email"
        },
        phoneNumber: {
          value: "",
          type: "tel"
        }
      },
      education: {
        title: "Education",
        sectionID: "education", 
        submitted: false,
        schoolName: {
          value: "",
          type: "text"
        },
        titleEarned: {
          value: "",
          type: "text"
        },
        schoolStartDate: {
          value: "",
          type: "date"
        },
        schoolEndDate: {
          value: "",
          type: "date"
        }
      },
      experience: {
        title: "Work Experience",
        sectionID: "experience",
        submitted: false,
        companyName:  {
          value: "",
          type: "text"
        },
        jobTitle:  {
          value: "",
          type: "text"
        },
        jobDescription:  {
          value: "",
          type: "text"
        },
        positionStartDate:  {
          value: "",
          type: "date"
        },
        positionEndDate:  {
          value: "",
          type: "date"
        }
      }
    }
  }

  handleChange = (e) => {
    const targetField = e.target.id;
    const targetSection = this.getTargetSection(targetField);
    const targetObject = Object.assign({}, this.state[targetSection]);
    targetObject[targetField].value = e.target.value;

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
    let targetSection = buttonId.slice(5);

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


  createLabel = key => {
    let label = key
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/([A-Z])([A-Z])/g, "$1 $2");

    label = label.charAt(0).toUpperCase() + label.slice(1);

    return label;
  }

  getFields = information => {
    let keys = Object.keys(information);
    let fields = keys.filter( key => {
      return information[key].value !== undefined;
    });
  
    return fields;
  }

  render() {
    const sections = Object.keys(this.state);

    //render submission form for each section where submitted equals false
    //render displayed date for each section where submitted equals true
    let page = sections.map( (section, index) => {
      if (this.state[section].submitted) {
       return (
        <>
          <DisplayedData 
            key={index}
            createLabel={this.createLabel}
            fields={this.getFields(this.state[section])}
            information={this.state[section]}
            undoSubmit={this.undoSubmit}            
          />
        </>
      )
      }
      return (
        <>
          <SubmissionForm
            key={index}
            createLabel={this.createLabel}
            fields={this.getFields(this.state[section])}
            information={this.state[section]}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
        </>
      )
    });

    return page;
  }
}

export default App;
