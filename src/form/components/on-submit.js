import axios from "axios";

export const OnSubmit = async (data) => {
  try {
    const response = await axios.post('/mail', data); // Modificați 'data' în loc de 'body'
    alert('Email Sent Successfully');
    console.log(response, data);

    window.location.reload();
  } catch (error) {
    console.log(error);
  }
}
