import { auth_token, session_active } from "@/utils/constants";
import axios from "axios";
import { toast } from "sonner";

export default function useAxios() {
  async function axiosHandler<T, D = unknown>(
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE",
    data?: D,
    isAuthorized?: boolean,
    triggerError = true
  ): Promise<T | null> {
    const token = localStorage.getItem(auth_token);
    console.log(token)
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      credentials: "include"
    };
    const config = {
      headers: isAuthorized ? headers : {}
    };

    const result = await axios<T>({
      method: method,
      url: url,
      data: data,
      ...config
    }).catch((err) => {
      let errMessage = "";
      if (axios.isAxiosError(err) && err.response) {
        switch (err.response.status) {
          case 401:
            errMessage = "Unauthorized";
            if (!localStorage.getItem(session_active)) {
              localStorage.setItem(session_active, "true");
              // redirect to sing in
              toast.error("Session expired. Please login again.");
              //logout()
            }
            break;
          case 403:
            errMessage = "Forbidden";
            break;
          case 404:
            if (triggerError) {
              toast.error("Resource Not Found");
              errMessage = "Not Found";
            } else {
              const message =
                err.response.data.error ||
                "An error occured while processing your request";
              if (triggerError) {
                toast.error(`Error ${message}`);
              }
              errMessage = `Error ${message}`;
            }
            break;
          case 500:
            errMessage = "Internal Server Error";
            toast.error(
              "Something went wrong internally. Please try again later"
            );
            break;
          default:
            errMessage = "Something went wrong";
            toast.error("Something went wrong. Please try again later");
            if (triggerError) {
              toast.error(`Error ${errMessage}`);
            }
            break;
        }
      }
    });
    if (!result) {
      return null;
    }
    return result.data || (true as T);
  }

  return { axiosHandler };
}
