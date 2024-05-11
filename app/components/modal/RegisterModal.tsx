'use client'

import axios from "axios"
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc"
import { useCallback , useState } from "react"
import {
    FieldValues,
    SubmitHandler,
    useForm
} from "react-hook-form"

import userRegisterModal from "@/app/hook/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../input/input";
import toast from "react-hot-toast";
import Button from "../Button";
import userLoginModal from "@/app/hook/useLoginModal";
// toast for alert some thing


const RegisterModal = () => {
    const registerModal = userRegisterModal()
    const loginModal = userLoginModal()
    const [isLoading , setIsLoading] = useState(false)

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)

        axios.post('/api/register', data)
        .then(() => {
            registerModal.onClose()
        })
        .catch ((error) => {
            toast.error('some thing is not correct')
        })
        .finally(() => {
            setIsLoading(false)
        })
    }

    const toggle = useCallback(() => {
        registerModal.onClose()
        loginModal.onOpen()
    }, [ registerModal, loginModal])

    const bodyContent = (
        <div className= "flex flex-col gap-4">
        <Heading 
        title="Welcome to Pasin App"
        subtitle="Create account"
        />
        <Input 
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        />
        <Input 
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        />
        <Input 
        id="password"
        type="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        />
        </div>
    )

    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr />
            <Button 
            outline
            label = "Connect with Google"
            icon = {FcGoogle}
            onClick={() => {}}
            />
            <Button 
            outline
            label = "Connect with Github"
            icon = {AiFillGithub}
            onClick={() => {}}
            />
            <div className="text-neutral-500 text-center mt-4 font-light">
                <div className="justify-center flex flex-row items-center gap-2">
                    <div>
                        Already have an account?
                    </div>
                    <div 
                    onClick={toggle}
                    className="text-neutral-800 cursor-pointer hover:underline"
                    >
                        Log in
                    </div>
                </div>
            </div>
        </div>
    )

    return ( 
        <Modal 
        disabled={isLoading}
        isOpen={registerModal.isOpen}
         title="Register"
         actionLabel="Continue"
         onClose={registerModal.onClose}
         onSubmit={handleSubmit(onSubmit)}
         body={bodyContent}
         footer = {footerContent}
        />
     );
}
 
export default RegisterModal;