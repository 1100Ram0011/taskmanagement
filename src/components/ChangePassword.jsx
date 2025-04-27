import { Dialog } from "@headlessui/react";
import React from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";
import ModalWrapper from "./ModalWrapper";
import Textbox from "./Textbox";
import { useChangePasswordMutation } from "../redux/slices/api/userApiSlice";
import { toast } from "sonner";
import Loading from "./Loader";

const ChangePassword = ({ open, setOpen }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [changeUserPassword, { isLoading }] = useChangePasswordMutation();

    const handleOnSubmit = async (data) => {
        if (data.password !== data.confirmPassword) {
            toast.warning("Passwords doesn't match");
            return
        }
        try {
            const res = await changeUserPassword(data).unwrap();
            toast.success("Password Changed Successfully");

            setTimeout(() => {
                setOpen(false);
            }, 1500);
        } catch (err) {
            console.log(err);
            toast.error(err?.data?.message || err.error);
        }
    };

    return (
        <ModalWrapper open={open} setOpen={setOpen}>
            <form onSubmit={handleSubmit(handleOnSubmit)} className=''>
                <Dialog.Title as='h2' className='text-base font-bold leading-6 text-gray-900 mb-4'>
                    Change Password
                </Dialog.Title>
                <div className='mt-2 flex flex-col gap-6'>
                    <Textbox
                        placeholder='New Password'
                        type='password'
                        name='password'
                        label='New Password'
                        className='w-full rounded'
                        register={register("password", {
                            required: "New Password is required!",
                        })}
                        error={errors.password ? errors.password.message : ""}
                    />
                    <Textbox
                        placeholder='Confirm New Password'
                        type='password'
                        name='confirmPassword'
                        label='Confirm New Password'
                        className='w-full rounded'
                        register={register("confirmPassword", {
                            required: "Confirm New Password is required!",
                        })}
                        error={errors.confirmPassword ? errors.confirmPassword.message : ""}
                    />
                </div>
                {isLoading ? (
                    <div className='py-5'>
                        <Loading />
                    </div>
                ) : (
                    <div className='py-3 mt-4 flex sm:flex-row-reverse'>
                        <Button
                            type='submit'
                            className='bg-blue-600 px-8 py-2 text-sm font-semibold text-white hover:bg-blue-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                            label='Save'
                        />
                        <button
                            type='button'
                            className='bg-white px-5 py-2 text-sm font-semibold text-gray-900 sm:w-auto rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                            onClick={() => setOpen(false)}
                        >
                            Cancel
                        </button>
                    </div>
                )}
            </form>
        </ModalWrapper>
    )
}
export default ChangePassword
