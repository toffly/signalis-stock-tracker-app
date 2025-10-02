'use client'

import {useForm, SubmitHandler} from "react-hook-form"
import InputField from "@/components/forms/InputField";
import {Button} from "@/components/ui/button";
import FooterLink from "@/components/forms/FooterLink";

const SignIn = () => {
    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<SignInFormData>({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onBlur'
    },);

    const onSubmit = async (data: SignInFormData) => {
        try {
            console.log(data)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <section>
            <h1 className="form-title">Log In Your Account</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <InputField
                    name="email"
                    label="Email"
                    placeholder="contact@jsmastery.com"
                    register={register}
                    error={errors.email}
                    validation={{ required: 'Email is required', pattern: /^\w+@\w+\.\w+$/ }}
                />
                < InputField
                    name="password"
                    label="Password"
                    placeholder="Enter a strong password"
                    register={register}
                    error={errors.password}
                    validation={{ required: 'Password is required', minLength: 8 }}/>

                <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
                    {isSubmitting ? 'Creating account' : 'Start Your Investing Journey'}
                </Button>

                <FooterLink text="Don't have an account?" linkText="Sign up" href="/sign-up"/>
            </form>
        </section>
    )
}
export default SignIn
