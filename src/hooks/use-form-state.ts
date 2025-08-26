import { useForm } from "react-hook-form";

export const useFormState = <T extends Record<string, any>>(defaultValues: T) => {
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    getValues,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<T>({
    defaultValues: defaultValues as any,
  });

  const onSubmit = (callback: (data: T) => void) => handleSubmit(callback);

  return {
    control,
    handleSubmit,
    onSubmit,
    errors,
    watch,
    setValue,
    getValues,
    reset,
    clearErrors,
  };
};
