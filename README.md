# Form
## 


## Dependencies
Excluding React, none.

## Running the example
Clone the project, enter the project's folder, do ```npm install```,```npm install react-hook-form-yup``` and ```npm install @hookform/resolvers``` then npm start and it's up.

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
      message: yup.string()
    .max(1024,'maxim 1024 de caractere').required('Formular invalid')  
  }
);
```
