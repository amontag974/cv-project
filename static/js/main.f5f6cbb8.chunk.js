(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(2),r=a.n(l),c=(a(9),a(3));a(10);var o=function(e){var t=e.information.title,a=e.fields.map((function(t,a){return i.a.createElement("p",{key:a},i.a.createElement("span",{className:"display-label"},e.createLabel(t),":")," ",e.information[t].value)}));return i.a.createElement("div",{className:"displayed-data"},i.a.createElement("h1",null,t),a,i.a.createElement("button",{type:"button",onClick:e.undoSubmit,id:"btn-edit-".concat(e.information.sectionID)},"Edit"))};var u=function(e){return i.a.createElement("div",{className:"field-container"},i.a.createElement("label",null,e.label," "),i.a.createElement("input",{id:e.detailKey,type:e.type,onChange:e.handleChange,value:e.value,required:!0}))};var s=function(e){var t=e.information,a=t.title,n=t.sectionID,l=e.fields.map((function(t,a){return i.a.createElement(u,{key:a,label:e.createLabel(t),detailKey:t,type:e.information[t].type,value:e.information[t].value,handleChange:e.onChange})}));return i.a.createElement("div",null,i.a.createElement("form",{onSubmit:e.onSubmit,id:"form-".concat(n)},i.a.createElement("fieldset",null,i.a.createElement("legend",null,a),l,i.a.createElement("button",{type:"submit"},"Submit"))))};var m=function(){var e=Object(n.useState)({generalInfo:{title:"General Information",sectionID:"generalInfo",submitted:!1,firstName:{value:"",type:"text"},lastName:{value:"",type:"text"},email:{value:"",type:"email"},phoneNumber:{value:"",type:"tel"}},education:{title:"Education",sectionID:"education",submitted:!1,schoolName:{value:"",type:"text"},titleEarned:{value:"",type:"text"},schoolStartDate:{value:"",type:"date"},schoolEndDate:{value:"",type:"date"}},experience:{title:"Work Experience",sectionID:"experience",submitted:!1,companyName:{value:"",type:"text"},jobTitle:{value:"",type:"text"},jobDescription:{value:"",type:"text"},positionStartDate:{value:"",type:"date"},positionEndDate:{value:"",type:"date"}}}),t=Object(c.a)(e,2),a=t[0],l=t[1],r=function(e){var t=e.target.id,n=u(t),i=Object.assign({},a[n]);i[t].value=e.target.value;var r=Object.assign({},a);r[n]=i,l(r)},u=function(e){for(var t=Object.keys(a),n=0;n<t.length;n++)if(a[t[n]].hasOwnProperty(e))return t[n]},m=function(e){e.preventDefault();var t=e.target.id.slice(5),n=Object.assign({},a[t]);n.submitted=!0;var i=Object.assign({},a);i[t]=n,l(i)},d=function(e){var t=e.target.id.slice(9),n=Object.assign({},a[t]);n.submitted=!1;var i=Object.assign({},a);i[t]=n,l(i)},p=function(e){var t=e.replace(/([a-z])([A-Z])/g,"$1 $2").replace(/([A-Z])([A-Z])/g,"$1 $2");return t=t.charAt(0).toUpperCase()+t.slice(1)},v=function(e){return Object.keys(e).filter((function(t){return void 0!==e[t].value}))};return Object.keys(a).map((function(e,t){return a[e].submitted?i.a.createElement(i.a.Fragment,null,i.a.createElement(o,{key:t,createLabel:p,fields:v(a[e]),information:a[e],undoSubmit:d})):i.a.createElement(i.a.Fragment,null,i.a.createElement(s,{key:t,createLabel:p,fields:v(a[e]),information:a[e],onChange:r,onSubmit:m}))}))};r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(m,null)),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.f5f6cbb8.chunk.js.map