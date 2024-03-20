import { Button, TextField } from '@mui/material';
import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { motion } from 'framer-motion';

type Props = {}

// const validationSchema = yup.object({
//     email: yup
//       .string('Enter your email')
//       .email('Enter a valid email')
//       .required('Email is required'),
//     password: yup
//       .string('Enter your password')
//       .min(8, 'Password should be of minimum 8 characters length')
//       .required('Password is required'),
//   });

function Form({ }: Props) {
    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            multiline: '',
        },
        // validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} className='grid grid-cols-12 gap-4 md:gap-5'>
            <div className='col-span-6'>
                <TextField
                    fullWidth
                    id="name"
                    name="name"
                    label="Enter your name"
                    type="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    variant="filled"
                    color="secondary"
                    InputProps={{
                        disableUnderline: true,
                        style: {
                            background: "white",
                            borderRadius: "10px",
                            border: 'none'
                        }
                    }}
                    sx={{
                        "& fieldset": { border: 'none' },
                    }}
                />
            </div>
            <div className='col-span-6 '>
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Enter your email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    variant="filled"
                    color="secondary"
                    InputProps={{
                        disableUnderline: true,
                        style: {
                            background: "white",
                            borderRadius: "10px",
                            color: 'black'
                        },
                    }}
                    sx={{
                        "& fieldset": { border: 'none' },
                    }}
                />
            </div>
            <div className='col-span-12 '>
                <TextField
                    fullWidth
                    id="multiline"
                    name="multiline"
                    label="Tell us your idea"
                    value={formik.values.multiline}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.multiline && Boolean(formik.errors.multiline)}
                    helperText={formik.touched.multiline && formik.errors.multiline}
                    variant="filled"
                    color="secondary"
                    InputProps={{
                        disableUnderline: true,
                        style: {
                            background: "white",
                            borderRadius: "10px",
                            border: 'none',
                        }
                    }}
                    multiline
                    rows={9}
                    sx={{
                        "& fieldset": { border: 'none' },
                    }}
                />
            </div>
            <div className='col-span-12'>
                <motion.button whileTap={{ scale: 0.85 }} className='bg-black text-white uppercase w-full rounded-xl py-3 hover:bg-stone-800 ease-in duration-300'>Submit</motion.button>
                {/* <Button color="primary" variant="contained" fullWidth type="submit">
                    Submit
                </Button> */}
            </div>
        </form>
    )
}

export default Form