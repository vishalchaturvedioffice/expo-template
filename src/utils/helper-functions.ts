import { showMessage } from "react-native-flash-message";
import { extractError } from "./utils";

export const showError = (error: any) => {
  showMessage({
    message: error.message,
    type: "danger",
    icon: "danger",
  });
};

export const showErrorResponse = (error: any) => {
  showMessage({
    message: extractError(error?.response?.data).trimEnd(),
    type: "danger",
    icon: "danger",
  });
};

export const showSuccess = (message: string) => {
  showMessage({
    message: message,
    type: "success",
    icon: "success",
  });
};

export const showInfo = (message: string) => {
  showMessage({
    message: message,
    type: "info",
    icon: "info",
  });
};

export const showWarning = (message: string) => {
  showMessage({
    message: message,
    type: "warning",
    icon: "warning",
  });
};
