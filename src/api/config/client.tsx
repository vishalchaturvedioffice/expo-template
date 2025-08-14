import enVariables from "@/constants/enVariables";
import { useAppStore } from "@/store";
import { showError } from "@/utils/helper-functions";
import axios from "axios";

export const client = axios.create({
  baseURL: `${enVariables.API_URL}`,
});

client.interceptors.request.use((config) => {
  const tokens = useAppStore((state) => state.tokens);
  if (!!tokens) {
    config.headers.Authorization = `Bearer ${tokens.accessToken}`;
  }
  return config;
});

client.interceptors.response.use(
  (response) => response,
  (error) => {
    const { logout } = useAppStore((state) => state);
    if (error.response?.status === 401) {
      showError("Your session has expired, please log in again");
      logout();
    }
    return Promise.reject(error);
  }
);
