import { cn } from "@/lib/utils"
import Image from "next/image"
interface StepSectionProps {
  number: number
  title: string
  description: string
  imageSrc: string
  backgroundColor: string
  imagePosition?: "left" | "right"
  additionalContent?: React.ReactNode
  imageHeight?: number
}

export function StepSection({
  number,
  title,
  description,
  imageSrc,
  imagePosition = "right",
  additionalContent,
}: StepSectionProps) {
  return (
    <div className="container px-4 py-6 mx-auto md:py-8">
      <div className={cn(
        "flex flex-col-reverse items-center gap-8 justify-between",
        imagePosition === "left" ? "lg:flex-row-reverse" : "lg:flex-row"
      )}>
        <div className="flex-1 max-w-xl">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">
            {number}. {title}
          </h2>
          <p className="mb-6 text-gray-600">
            {description}
          </p>
          {additionalContent}
        </div>
        
        <div className={`relative overflow-hidden`}>
          <Image
            src={imageSrc}
            alt={title}
            width={100}
            height={100}
            className="w-full max-w-md"
          />
        </div>
      </div>
    </div>
  )
}