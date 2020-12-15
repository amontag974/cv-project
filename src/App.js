import React, { useState } from 'react';
import './App.css';
import DisplayedData from './components/DisplayedData';
import SubmissionForm from './components/SubmissionForm';

function App() {
  let initialData = {
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

  const [data, setData] = useState(initialData);

  const handleChange = e => {
    const targetField = e.target.id;
    const targetSection = getTargetSection(targetField);
    const targetObject = Object.assign({}, data[targetSection]);
    targetObject[targetField].value = e.target.value;

    let tempData = Object.assign({}, data);
    tempData[targetSection] = targetObject;
    setData(tempData);
  }

  const getTargetSection = targetField => {
    const sections = Object.keys(data);

    for (let sectIndex = 0; sectIndex < sections.length; sectIndex++) {
      if ( data[sections[sectIndex]].hasOwnProperty(targetField) ) {
        return sections[sectIndex];
      }
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    let buttonId = e.target.id
    let targetSection = buttonId.slice(5);

    const targetObject = Object.assign({}, data[targetSection]);
    targetObject.submitted = true;

    let tempData = Object.assign({}, data);
    tempData[targetSection] = targetObject;
    setData(tempData);
  }

  const undoSubmit = e => {
    let buttonId = e.target.id
    let targetSection = buttonId.slice(9);

    const targetObject = Object.assign({}, data[targetSection]);
    targetObject.submitted = false;

    let tempData = Object.assign({}, data);
    tempData[targetSection] = targetObject;
    setData(tempData);
  }

  const createLabel = key => {
    let label = key
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/([A-Z])([A-Z])/g, "$1 $2");

    label = label.charAt(0).toUpperCase() + label.slice(1);

    return label;
  }

  const getFields = information => {
    let keys = Object.keys(information);
    let fields = keys.filter( key => {
      return information[key].value !== undefined;
    });
  
    return fields;
  }

  const sections = Object.keys(data);

  //render submission form for each section where submitted equals false
  //render displayed data for each section where submitted equals true
  let page = sections.map( (section, index) => {
    if (data[section].submitted) {
      return (
        <>
          <DisplayedData 
            key={index}
            createLabel={createLabel}
            fields={getFields(data[section])}
            information={data[section]}
            undoSubmit={undoSubmit}            
          />
        </>
      )
    }
    return (
      <>
        <SubmissionForm
          key={index}
          createLabel={createLabel}
          fields={getFields(data[section])}
          information={data[section]}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </>
    )
  });

  return page;  
}

export default App;
