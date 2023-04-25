
# Form

This is a Form, where the user must enter a name, an email address and a text, where they must correspond to certain characteristics to be validated. The user has a checkbox to know if the message he is entering is an urgent one and when all the data are valid they are entered in the console. This is specially made to be used in React.
## Dependencies
Excluding React, none.

## Install
Clone the project, enter the project's folder, do:
```npm install```
```npm install react-hook-form-yup```
```npm install @hookform/resolvers```
then ```npm start```  and it's up.

## Features
* Usage of React Hooks
* Form Validation using **YUP**
* Small size and no dependencies
* Dynamic StylingYUP

## Apply validation
List of validation rules supported:
* required
* min
* max
* matches
* validate

```javascript
const schema = yup.object().shape({
   name: yup.string().matches(/^[^\d]+$/, 'Formular invalid')
    .max(64,'Maxim 64 de caractere').required('Formular invalid'),
      email: yup.string()
    .email('Invalid email').required('Formular invalid'),
      message: yup.string().matches(/^[^\d]+$/, 'Formular invalid')
    .max(1024,'maxim 1024 de caractere').required('Formular invalid')  
  }
);
```
