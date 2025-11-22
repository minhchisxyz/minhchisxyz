import Skeleton from "@mui/material/Skeleton";

export function NavLinksSkeleton() {
  return (
      <>
        <Skeleton variant={`rounded`} className={`w-full h-9`}/>
        <Skeleton variant={`rounded`} className={`w-full h-9`}/>
        <Skeleton variant={`rounded`} className={`w-full h-9`}/>
        <Skeleton variant={`rounded`} className={`w-full h-9`}/>
        <Skeleton variant={`rounded`} className={`w-full h-9`}/>
      </>
  )
}