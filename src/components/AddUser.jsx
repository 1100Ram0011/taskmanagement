import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Dialog } from "@headlessui/react";
import ModalWrapper from "./ModalWrapper";
import Textbox from "./Textbox";
import Button from "./Button";

const AddUser = ({ open, setOpen, userData, addUser }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      title: "",
      email: "",
      role: "",
    },
  });

  useEffect(() => {
    if (userData) {
      reset(userData); // ✅ Edit case ke liye user data set karein
    } else {
      reset({ name: "", title: "", email: "", role: "" }); // ✅ Reset fields for new user
    }
  }, [userData, reset]);

  const handleOnSubmit = (data) => {
    console.log("Submitting Data:", data); // ✅ Debugging ke liye console log
    addUser(data);
    setOpen(false);
  };

  return (
    <ModalWrapper open={open} setOpen={setOpen}>
      <form onSubmit={handleSubmit(handleOnSubmit)} className="">
        <Dialog.Title as="h2" className="text-base font-bold leading-6 text-gray-900 mb-4">
          {userData ? "Update User" : "Add New User"}
        </Dialog.Title>

        <div className="mt-2 flex flex-col gap-6">
          <Textbox
            placeholder="Full name"
            type="text"
            name="name"
            label="Full Name"
            className="w-full rounded"
            register={register("name", { required: "Full name is required!" })}
            error={errors.name?.message}
          />
          <Textbox
            placeholder="Title"
            type="text"
            name="title"
            label="Title"
            className="w-full rounded"
            register={register("title", { required: "Title is required!" })}
            error={errors.title?.message}
          />
          <Textbox
            placeholder="Email Address"
            type="email"
            name="email"
            label="Email Address"
            className="w-full rounded"
            register={register("email", { required: "Email Address is required!" })}
            error={errors.email?.message}
          />
          <Textbox
            placeholder="Role"
            type="text"
            name="role"
            label="Role"
            className="w-full rounded"
            register={register("role", { required: "User role is required!" })}
            error={errors.role?.message}
          />
        </div>

        <div className="py-3 mt-4 sm:flex sm:flex-row-reverse">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 px-8 text-sm font-semibold text-white hover:bg-blue-700 sm:w-auto"
            label={isSubmitting ? "Submitting..." : "Submit"}
          />
          <Button
            type="button"
            className="bg-white px-5 text-sm font-semibold text-gray-900 sm:w-auto"
            onClick={() => setOpen(false)}
            label="Cancel"
          />
        </div>
      </form>
    </ModalWrapper>
  );
};

export default AddUser;
