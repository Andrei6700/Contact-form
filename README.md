# Contact form

This is a Contact form, where the user must enter a name, an email address and a text, where they must correspond to certain characteristics to be validated. The user has a checkbox to know if the message he is entering is an urgent one and when all the data are valid they are entered in the console and the data from the form will be sent to an email. This is specially made to be used in React.

Here are 3 examples, 2 wich are based on the Form and the other on the Server. In the first image all our fields are valid and it displays them in the console, and in the 2nd example the message field is invalid.
The last image shows the message, with the data entered by the user.

![image](https://github.com/Andrei6700/Contact-form/assets/91980199/2a05bfea-f930-4ae9-b832-45837e19d356)

#
## Install
Clone the project, enter the project's folder, do: ```npm install``` then ```npm start``` and it's up.

#
## Start
Before to start this repo, you need to change the config.js :
```javascript
module.exports = {
    USER: 'user',
    PASS: 'password'
}
```
After you change the config.js you need to open 2 terminals:
 In the first terminal you will write ```npm start``` which will start the frontend and in secondary terminal you need to be in  backend directory and run  `npm node.js`, which will start the backend.

# 
## Features
* Usage of React Hooks
* Form Validation using **YUP**
* Sending messages

# 
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
    message: yup.string().matches(/^[a-zA-Z\s.,!?]+$/, 'Invalid message')
      .max(1024, 'Maxim 1024 characters').required('Invalid form'),
    urgent: yup.boolean(),
  });
```
# 
## Built With
* [React](https://reactjs.org/) - Front-end framework
* [Node.js](https://nodejs.org/en/) - Back-end framework
* [Express](https://expressjs.com/) - Back-end framework
* [React Bootstrap](https://react-bootstrap.github.io/) - Front-end framework
* [Axios](https://github.com/axios/axios) - Back-end framework
* [Nodemailer](https://nodemailer.com/about/) - Back-end framework

 