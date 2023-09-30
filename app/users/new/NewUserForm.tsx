"use client";

import {FieldValues, useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

const schema = z.object({
  userName: z.string().min(3),
  userEmail: z.string().email(),
  userPhone: z.string().min(10),
  userWebsite: z.string().url(),
  userCompanyName: z.string(),
});

type FormData = z.infer<typeof schema>;

const NewUserForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({resolver: zodResolver(schema)});

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control w-full max-w-xs">
        <label htmlFor="name" className="label">
          <span className="label-text">Name</span>
          <span className="label-text-alt">*</span>
        </label>
        <input
          {...register("userName")}
          id="name"
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        {errors.userName && <p>{errors.userName.message}</p>}
      </div>

      <div className="form-control w-full max-w-xs">
        <label htmlFor="email" className="label">
          <span className="label-text">Email</span>
          <span className="label-text-alt">*</span>
        </label>
        <input
          {...register("userEmail")}
          id="email"
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        {errors.userEmail && <p>{errors.userEmail.message}</p>}
      </div>

      <div className="form-control w-full max-w-xs">
        <label htmlFor="phone" className="label">
          <span className="label-text">Phone Number</span>
          <span className="label-text-alt"></span>
        </label>
        <input
          {...register("userPhone")}
          id="phone"
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        {errors.userPhone && <p>{errors.userPhone.message}</p>}
      </div>

      <div className="form-control w-full max-w-xs">
        <label htmlFor="website" className="label">
          <span className="label-text">Website</span>
          <span className="label-text-alt"></span>
        </label>
        <input
          {...register("userWebsite")}
          id="website"
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        {errors.userWebsite && <p>{errors.userWebsite.message}</p>}
      </div>

      <div className="form-control w-full max-w-xs">
        <label htmlFor="companyName" className="label">
          <span className="label-text">Company Name</span>
          <span className="label-text-alt"></span>
        </label>
        <input
          {...register("userCompanyName")}
          id="companyName"
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>

      <button type="submit" className="btn btn-primary mt-3">
        Submit
      </button>
    </form>
  );
};

export default NewUserForm;