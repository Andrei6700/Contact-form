import { useForm } from "react-hook-form";
import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export const Form = () => {    
         const schema = yup.object().shape({
            name: yup.string()
                .max(64,'Maxim 64 de caractere').required('Formular invalid'),
            email: yup.string()
                .email('Invalid email').required('Formular invalid'),
            message: yup.string()
                .max(1024,'maxim 1024 de caractere').required('Formular invalid')  
        });
        const [Urgent, setUrgent] = useState(false);

const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema)}
        );

const bordercolor = (input) => {
        return errors[input] ? 'red' : 'black';
        }

        const onSubmit = (data) => {
            if (Urgent) {
              console.log(data, "Mesaj Urgent !");
            } else {
              console.log(data);
            }
          };
          

        return(
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="name"  placeholder="Your name"  style={{borderColor: bordercolor('name')}} {...register("name")}/>
                <p className="errors">{errors.name?.message}</p>

                    <input className="email" placeholder="Your email"  style={{borderColor: bordercolor('email')}} {...register("email")}/>
                    <p className="errors">{errors.email?.message}</p>

                        <input className="text"  placeholder="Your message" style={{borderColor: bordercolor('message')}}{...register("message")}/>
                        <p className="errors">{errors.message?.message}</p>


            <div style={{justifyContent:'space-between',display:'flex'}}>
                <label style={{ fontSize: '15px' }}>
                Mesaj Urgent <input className="check" checked={Urgent} onChange={(e) => setUrgent(e.target.checked)} type="checkbox"/> 
                </label>
                <input className="submit" type="submit" value="Trimite" />
            </div>
                
          </form>
            )       
}


  