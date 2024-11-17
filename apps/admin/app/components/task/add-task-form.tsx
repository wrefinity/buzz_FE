"use client";

import { useState } from "react";
import { Calendar, Upload } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const inputClassName =
  "bg-[#F7F7F9] border border-[#DBDCDE] rounded-lg shadow-sm px-6 py-3 h-auto text-base placeholder:text-gray-400";

export default function AddTaskForm({ type }: { type: "social" | "video" }) {
  const [date, setDate] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (
      droppedFile &&
      (droppedFile.type.startsWith("image/") ||
        droppedFile.type === "image/gif")
    ) {
      setFile(droppedFile);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
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
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="title">{isSocial ? "Task" : "Video"} Title </Label>
            <Input
              id="title"
              className={inputClassName}
              placeholder="Enter title"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="points">
              {isSocial ? "Task " : "Video"} Points
            </Label>
            <Input
              id="points"
              type="number"
              className={inputClassName}
              placeholder="Enter points"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="url">{isSocial ? "Task " : "Video"} URL</Label>
            <Input
              id="url"
              type="url"
              className={inputClassName}
              placeholder="Enter URL"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <div className="relative">
              <Input
                id="date"
                value={date}
                className={`${inputClassName} pr-10`}
                readOnly
              />
              <Calendar className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 right-3 top-1/2" />
            </div>
          </div>
        </div>

        {!isSocial && (
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="duration">Video Duration (s)</Label>
              <Input
                id="duration"
                type="number"
                className={inputClassName}
                placeholder="Enter duration in seconds"
              />
            </div>
          </div>
        )}
        <div className="space-y-2">
          <Label htmlFor="description">
            {isSocial ? "Task " : "Video"} Description
          </Label>
          <Textarea
            id="description"
            className={inputClassName}
            placeholder="Enter description"
            rows={4}
          />
        </div>

        {!isSocial && (
          <div className="space-y-2">
            <Label>Upload a Video Banner</Label>
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
              />
              <label
                htmlFor="file-upload"
                className="flex flex-col items-center gap-2 cursor-pointer"
              >
                <Upload className="w-8 h-8 text-gray-400" />
                <div className="text-sm text-gray-600">
                  Click to upload or drag and drop
                </div>
                <div className="text-xs text-gray-400">
                  SVG, PNG, JPG or GIF (max. 800x400px)
                </div>
                {file && (
                  <div className="mt-2 text-sm text-primary">{file.name}</div>
                )}
              </label>
            </div>
          </div>
        )}

        <div className="flex justify-end gap-4">
          <Button variant="outline">Cancel</Button>
          <Button className="bg-[#014D6E]">Add New {isSocial ? "Task " : "Video"}</Button>
        </div>
      </CardContent>
    </Card>
  );
}
