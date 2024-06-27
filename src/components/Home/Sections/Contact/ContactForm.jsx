import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";

function ContactForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const [disabled, setDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [alertInfo, setAlertInfo] = useState({
        display: false,
        message: '',
        type: '',
    });
    
    // Shows alert message for form submission feedback
    const toggleAlert = (message, type) => {
        setAlertInfo({ display: true, message, type });

        // Hide alert after 5 seconds
        setTimeout(() => {
        setAlertInfo({ display: false, message: '', type: '' });
        }, 5000);
    };

    // Function called on submit that uses emailjs to send email of valid contact form
    const onSubmit = async (data) => {
        // Destrcture data object
        const { name, email, subject, message } = data;
        try {
        // Disable form while processing submission
        setDisabled(true);

        setIsLoading(true);

        // Define template params
        const templateParams = {
            name,
            email,
            subject,
            message,
        };

        // Use emailjs to email contact form data
        await emailjs.send(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            templateParams,
            import.meta.env.VITE_PUBLIC_KEY,
        );

        // Display success alert
        toggleAlert('Message envoyé !', 'success');
        } catch (e) {
        console.error(e);
        // Display error alert
        toggleAlert('Message non envoyé. Merci de réessayer.', 'danger');
        } finally {
        // Re-enable form submission
        setDisabled(false);
        setIsLoading(false);
        // Reset contact form fields after submission
        reset();
        }
    };

    return (
        <div>
            <form 
                className='contact-form'
                onSubmit={handleSubmit(onSubmit)}
                noValidate
            >
                <div
                    className='contact-form__name'
                >
                    <input 
                        placeholder='Nom'
                        type='text'
                        name='name'
                        {...register('name', {
                            required: {
                                value: true,
                                message: "Vous devez saisir un nom.",
                            },
                            maxLength: {
                                value: 30,
                                message: 'Le nom ne doit pas excéder 30 caractères.',
                            },
                        })}
                    ></input>
                    {errors.name && (
                        <span className='errorMessage'>
                            {errors.name.message}
                        </span>
                    )}
                </div>
                
                <div
                    className='contact-form__mail' 
                >
                    <input 
                        placeholder='Mail'
                        type='email'
                        name='email'
                        {...register('email', {
                            required: true,
                            pattern:
                                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        })}
                    ></input>
                    {errors.email && (
                        <span className='errorMessage'>
                        Vous devez saisir une adresse mail valide.
                        </span>
                    )}
                </div>

                <div
                    className='contact-form__objet' 
                >
                    <input 
                        placeholder='Objet'
                        type='text'
                        name='subject'
                        {...register('subject', {
                            required: {
                                value: true,
                                message: 'Vous devez saisir un objet.',
                            },
                            maxLength: {
                                value: 75,
                                message: "L'objet ne doit pas excéder 30 caractères.",
                            },
                        })}
                    ></input>
                    {errors.subject && (
                        <span className='errorMessage'>
                        {errors.subject.message}
                        </span>
                    )}
                </div>

                <div className='contact-form__message'>
                    <div>
                        <textarea 
                            placeholder='Message'
                            name='message'
                            {...register('message', {
                                required: true,
                            })}
                        ></textarea>
                    </div>
                    
                    {errors.message && (
                        <span className='errorMessage'>
                            Vous devez saisir un message.
                        </span>
                    )}
                </div>
                
                <div  
                    className='contact-form__submit-btn'
                >
                    {isLoading 
                        ? <motion.span
                            animate={{ rotate: 360 }}
                            transition={{
                                repeat: Infinity,
                                duration: 1,
                                ease: "linear"
                            }}
                            style={{
                                width: "48px",
                                height: "48px",
                                border: "5px solid #FFE5E5",
                                borderBottomColor: "transparent",
                                borderRadius: "50%",
                                display: "inline-block",
                            }}
                            > 
                            </motion.span>

                        : <motion.button
                            disabled={disabled}
                            type='submit'
                            whileHover={{ 
                                scale: 0.9, 
                                backgroundColor: "#5637BF",
                                color: "#FFE5E5",
                                fontWeight: 600,
                                transition: {
                                    duration: 0.3,
                                    scale: { type: 'spring', stiffness: 1000, damping: 50, bounce: 5 }
                                }
                            }}
                            whileTap={{ 
                                scale: [0.9, 1.2, 0.9], 
                            }}
                            >
                            Envoyer
                        </motion.button>
                    }
                </div>
                {alertInfo.display && (
                <div
                    className={`alert alert-${alertInfo.type}`}
                    role='alert'
                >
                    {alertInfo.message}
                </div>
            )}
            </form>
        </div>
    )
}

export default ContactForm;