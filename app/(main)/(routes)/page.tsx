import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";
 
export default function Home() {
  return (
    <div className="flex flex-col items-center h-full">
      <UserButton afterSignOutUrl="/"/>
      <ModeToggle/>
    </div>
  )
}