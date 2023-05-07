# Contact form

This is a Contact form, where the user must enter a name, an email address and a text, where they must correspond to certain characteristics to be validated. The user has a checkbox to know if the message he is entering is an urgent one and when all the data are valid they are entered in the console. This is specially made to be used in React.

Here are 2 examples, in the first image all our fields are valid and it displays them in the console, and in the 2nd example the message field is invalid.


![Examples](https://user-images.githubusercontent.com/91980199/235313385-9e616966-ab2b-41dc-af9c-79edf690a9bf.png)




## Install
Clone the project, enter the project's folder, do: ```npm install``` then ```npm start``` and it's up.

## Features
* Usage of React Hooks
* Form Validation using **YUP**

## Apply validation
List of validation rules used:
* required
* min
* max
* matches
* validate

```javascript
export const Form = () => {
  const schema = yup.object().shape({
    name: yup.string().matches(/^[^\d]+$/, 'Invalid name')
      .max(64, 'Maxim 64 characters').required('Invalid form'),
    email: yup.string()
      .email('Invalid email').required('Invalid form'),
    message: yup.string().matches(/^[a-zA-Z\s]+$/, 'Invalid message')
      .max(1024, 'Maxim 1024 characters').required('Invalid form'),
    urgent: yup.boolean(),
  });
```
