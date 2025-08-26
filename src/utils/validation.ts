import { z } from "zod";
export { z };

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

// Text component validation schemas
export const TextVariantSchema = z.enum([
  "display-xl", "display-lg", "display-md", "display-sm",
  "h1", "h2", "h3", "h4", "h5", "h6",
  "body-xl", "body-lg", "body-md", "body-sm", "body-xs",
  "caption", "overline", "label"
]);

export const TextColorSchema = z.enum([
  "primary", "secondary", "muted", "onPrimary",
  "success", "warning", "error", "info", "inherit"
]);

export const TextWeightSchema = z.enum([
  "thin", "extraLight", "light", "normal", "medium", 
  "semibold", "bold", "extraBold", "black"
]);

export const TextAlignSchema = z.enum(["auto", "left", "right", "center", "justify"]);

export const TextTransformSchema = z.enum(["none", "capitalize", "uppercase", "lowercase"]);

export const TextDecorationSchema = z.enum([
  "none", "underline", "line-through", "underline line-through"
]);

export const TextPropsSchema = z.object({
  variant: TextVariantSchema.optional(),
  color: TextColorSchema.optional(),
  weight: TextWeightSchema.optional(),
  align: TextAlignSchema.optional(),
  transform: TextTransformSchema.optional(),
  decoration: TextDecorationSchema.optional(),
  size: z.number().min(8).max(100).optional(),
  responsive: z.boolean().optional(),
  lineHeight: z.number().min(0.8).max(3).optional(),
  letterSpacing: z.number().min(-2).max(10).optional(),
  truncate: z.boolean().optional(),
  maxLines: z.number().min(1).max(20).optional(),
  semanticRole: z.enum(["heading", "label", "summary"]).optional(),
  selectable: z.boolean().optional(),
}).strict();