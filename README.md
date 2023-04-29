# Contact form

This is a Contact form, where the user must enter a name, an email address and a text, where they must correspond to certain characteristics to be validated. The user has a checkbox to know if the message he is entering is an urgent one and when all the data are valid they are entered in the console. This is specially made to be used in React.

Here are 2 examples, in the first image all our fields are valid and it displays them in the console, and in the 2nd example the message field is invalid.

![image](https://user-images.githubusercontent.com/91980199/234423262-d956445a-0eb8-44a3-991c-de5bf16160f8.png)
![image](https://user-images.githubusercontent.com/91980199/234423480-0119a30e-e5d6-405d-8501-9f32a38a6077.png)


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
