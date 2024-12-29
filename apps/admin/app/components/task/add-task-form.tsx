"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon, Loader2, Upload } from 'lucide-react';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { format } from "date-fns"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useAxios from "@/hooks/useAxios";
import { createTaskUrl } from "@/service/task";
import { ITask } from "./task-row";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

const inputClassName =
  "bg-[#F7F7F9] border border-[#DBDCDE] rounded-lg shadow-sm px-6 py-3 h-auto text-base placeholder:text-gray-400";

const schema = z.object({
  title: z.string().min(1, { message: "Please enter a title" }),
  description: z.string().min(1, { message: "Please enter a description" }),
  url: z.string().url({ message: "Please enter a valid URL" }),
  rewardTokens: z.string().min(0, { message: "Points must be 0 or greater" }),
  date: z.string().min(1, { message: "Please select a date" }),
  socialPlatform: z.string().optional(),
  duration: z.number().optional(),
  files: z.union([z.instanceof(File), z.string()]).optional().nullable()
});

type FormValues = z.infer<typeof schema>;

export default function AddTaskForm({
  type,
  data,
  isLoading
}: {
  type: "social" | "video";
  data?: ITask | null;
  isLoading?: boolean;
}) {
  const { axiosHandler } = useAxios();
  const router = useRouter();
  const [file, setFile] = useState<File | string | null>(null);
  const [loading, setisLoading] = useState(false);
  console.log(data);
  const [defaultValues, setDefaultValues] = useState<FormValues>({
    title: "",
    description: "",
    url: "",
    rewardTokens: "",
    date: "",
    socialPlatform: "",
    duration: undefined,
    files: null
  });
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues
  });

  useEffect(() => {
    if (data) {
      setDefaultValues({
        title: data.title,
        description: data.description,
        url: data.url,
        rewardTokens: String(data.rewardTokens),
        date: new Date(data.createdAt).toISOString(),
        socialPlatform: data.socialPlatform,
        files: data.thumbnail,
        duration: undefined
      });
      form.reset({
        title: data.title,
        description: data.description,
        url: data.url,
        rewardTokens: String(data.rewardTokens),
        date: data.createdAt,
        socialPlatform: data.socialPlatform,
        duration: undefined
      });
      setFile(data.thumbnail);
    }

  }, [data, form]);

  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (
      droppedFile &&
      (droppedFile.type.startsWith("image/") ||
        droppedFile.type === "image/gif")
    ) {
      setFile(droppedFile);
      form.setValue("files", droppedFile);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      form.setValue("files", selectedFile);
    }
  };

  const onSubmit = async (data: FormValues) => {
    setisLoading(true);
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formData.append(key, value as any);
        }
      });
      
      if (file instanceof File) {
        formData.append('files', file);
      }

      const result = await axiosHandler(createTaskUrl, "POST", formData, true);
      if (result) {
        toast.success("Task created successfully");
        router.back();
      }
    } catch (error) {
      toast.error("Failed to create task");
      console.error(error);
    } finally {
      setisLoading(false);
    }
  };

  const isSocial = type === "social";

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{isSocial ? "Add a New Task" : "Add a New Video"}</CardTitle>
        <p className="text-sm text-muted-foreground">
          {isSocial ? "Create a New Task" : "Create new Video Task"}
        </p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{isSocial ? "Task" : "Video"} Title</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className={inputClassName}
                        placeholder="Enter title"
                        disabled={loading || isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="rewardTokens"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{isSocial ? "Task" : "Video"} Points</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        className={inputClassName}
                        placeholder="Enter points"
                        disabled={loading || isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{isSocial ? "Task" : "Video"} URL</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="url"
                        className={inputClassName}
                        placeholder="Enter URL"
                        disabled={loading || isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                            disabled={loading || isLoading}
                          >
                            {field.value ? (
                              format(new Date(field.value), "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="w-4 h-4 ml-auto opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value ? new Date(field.value) : undefined}
                          onSelect={(date) => field.onChange(date?.toISOString())}
                          disabled={(date) =>
                            date < new Date() || date > new Date(new Date().setFullYear(new Date().getFullYear() + 1))
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {!isSocial && (
              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Video Duration (s)</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        className={inputClassName}
                        placeholder="Enter duration in seconds"
                        disabled={loading || isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {isSocial ? "Task" : "Video"} Description
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className={inputClassName}
                      placeholder="Enter description"
                      rows={4}
                      disabled={loading || isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {
              <FormField
                control={form.control}
                name="files"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Upload a Video Banner</FormLabel>
                    <FormControl>
                      <div
                        className="p-8 text-center border-2 border-dashed rounded-lg"
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={handleFileDrop}
                      >
                        <input
                          type="file"
                          id="file-upload"
                          className="hidden"
                          accept="image/*,.gif"
                          onChange={handleFileSelect}
                          disabled={loading || isLoading}
                        />
                        <label
                          htmlFor="file-upload"
                          className="flex flex-col items-center gap-2 cursor-pointer"
                        >
                          {file ? (
                            <div>
                              <Image
                                src={file instanceof File ? URL.createObjectURL(file) : file}
                                alt="Uploaded file"
                                width={100}
                                height={100}
                              />

                              <div className="mt-2 text-sm text-primary">
                                {file instanceof File ? file.name : 'Uploaded file'}
                              </div>
                            </div>
                          ) : (
                            <>
                              <Upload className="w-8 h-8 text-gray-400" />
                              <div className="text-sm text-gray-600">
                                Click to upload or drag and drop
                              </div>
                              <div className="text-xs text-gray-400">
                                SVG, PNG, JPG or GIF (max. 800x400px)
                              </div>
                            </>
                          )}
                        </label>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            }

            <div className="flex justify-end gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={loading || isLoading} className="bg-[#014D6E]">
                {loading || isLoading ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  `Add New ${isSocial ? "Task" : "Video"}`
                )}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

