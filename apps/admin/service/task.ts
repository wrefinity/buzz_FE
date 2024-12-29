import { BASE_URL } from "@/utils/constants";

export const createTaskUrl = `${BASE_URL}api/tasks`
export const getTask = `${BASE_URL}api/tasks`
export const getTaskById = (id: string) => `${BASE_URL}api/tasks/${id}`