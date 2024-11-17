import { FileText } from 'lucide-react'
import { Separator } from "@/components/ui/separator"

export default function InfoDash() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-[2.5rem] font-bold text-[#014D6E]">300</h2>
        <div className="flex items-center gap-2 text-muted-foreground">
          <FileText className="w-5 h-5" />
          <span className="text-lg">Page views per minute</span>
        </div>
      </div>
      
      <Separator className="my-2" />
      
      <div className="relative w-full h-12">
        <svg
          className="w-full h-full"
          viewBox="0 0 300 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 80 C50 0, 100 100, 150 40 C200 0, 250 60, 300 40"
            stroke="#014D6E"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </div>

      <p className="text-lg text-muted-foreground">
        Upgrade your payout method in setting
      </p>
    </div>
  )
}