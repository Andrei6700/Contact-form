import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from "react-hook-form";

export const useFormData = () => {
    const schema = yup.object().shape({
        name: yup.string().matches(/^[^\d]+$/, 'Invalid name')
            .max(64, 'Maxim 64 characters').required('Invalid form'),
        email: yup.string()
            .email('Invalid email').required('Invalid form'),
        message: yup.string().matches(/^[a-zA-Z\s]+$/, 'Invalid message')
            .max(1024, 'Maxim 1024 characters').required('Invalid form'),
        urgent: yup.boolean(),
    });
  
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    return { register, handleSubmit, errors};
  }