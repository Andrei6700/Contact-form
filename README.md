
# Form

This is a Form, where the user must enter a name, an email address and a text, where they must correspond to certain characteristics to be validated. The user has a checkbox to know if the message he is entering is an urgent one and when all the data are valid they are entered in the console. This is specially made to be used in React.
![image](https://user-images.githubusercontent.com/91980199/234413288-793d4b4a-849f-4cbc-b102-3e7e6f55d1a3.png)

## Install
Clone the project, enter the project's folder, do: ```npm install``` then ```npm start``` and it's up.

## Features
* Usage of React Hooks
* Form Validation using **YUP**
* Small size and no dependencies

## Apply validation
List of validation rules used:
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
