export * as z from "zod";

// Simple Zod to React Hook Form validator
export const zodResolver = (schema: any) => (values: any) => {
  try {
    schema.parse(values);
    return {};
  } catch (error: any) {
    const errors: any = {};
    error.errors?.forEach((err: any) => {
      const path = err.path.join('.');
      errors[path] = { message: err.message };
    });
    return errors;
  }
};
