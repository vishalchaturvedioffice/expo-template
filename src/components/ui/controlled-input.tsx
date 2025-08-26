import React from "react";
import {
    Control,
    FieldPath,
    FieldValues,
    RegisterOptions,
    useController,
} from "react-hook-form";
import Input, { InputProps } from "./input";

interface ControlledInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends Omit<InputProps, "value" | "onChangeText"> {
  control: Control<TFieldValues>;
  name: TName;
  rules?: RegisterOptions<TFieldValues, TName>;
  defaultValue?: any;
}

function ControlledInput<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  control,
  name,
  rules,
  defaultValue,
  maxLength = 150,
  numberOfLines = 1,
  autoCapitalize = "none",
  onBlur,
  ...props
}: ControlledInputProps<TFieldValues, TName>) {
  const { field, fieldState } = useController({
    control,
    name,
    rules,
    defaultValue,
  });

  const handleChangeText = React.useCallback(
    (text: string) => {
      field.onChange(text);
    },
    [field]
  );

  const handleBlur = React.useCallback((e?: any) => {
    // Call the passed onBlur prop first if it exists
    if (onBlur) {
      onBlur(e);
    }
    // Then call react-hook-form's onBlur for validation
    field.onBlur();
  }, [field, onBlur]);

  return (
    <Input
      autoCapitalize={autoCapitalize}
      onChangeText={handleChangeText}
      onBlur={handleBlur}
      maxLength={maxLength}
      value={field.value ?? ""}
      numberOfLines={numberOfLines}
      error={fieldState.error?.message}
      {...props}
    />
  );
}

export default React.memo(ControlledInput) as typeof ControlledInput;
