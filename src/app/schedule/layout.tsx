import { MainNav } from "@/src/components/navigation/main-nav"

interface IRootLayoutProps {
  children: React.ReactNode
}

export default function ScheduleLayout({ children }: IRootLayoutProps) {
  return (
    <>
      <MainNav white />
      {children}
    </>
  )
}
