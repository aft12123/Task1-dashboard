import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const profileSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  pricing: z.number().min(1, "Pricing must be greater than zero"),
  availability: z.string().min(3, "Availability required"),
});

const EditProfileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(profileSchema),
  });

  const onSubmit = (data) => {
    console.log("Profile Updated:", data);
  };

  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold">Edit Profile</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <input {...register("name")} placeholder="Name" className="w-full p-2 border rounded" />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        <input {...register("email")} placeholder="Email" className="w-full p-2 border rounded" />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <input {...register("pricing")} placeholder="Pricing" type="number" className="w-full p-2 border rounded" />
        {errors.pricing && <p className="text-red-500">{errors.pricing.message}</p>}

        <input {...register("availability")} placeholder="Availability" className="w-full p-2 border rounded" />
        {errors.availability && <p className="text-red-500">{errors.availability.message}</p>}

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default EditProfileForm;