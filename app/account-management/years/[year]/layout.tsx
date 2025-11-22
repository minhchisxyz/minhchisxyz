import NavLinks from "@/app/ui/account-management/nav-links";
import {ReactNode, Suspense} from "react";
import {fetchAllMonths} from "@/app/lib/account-management/transaction/data";
import {getMonthName} from "@/app/lib/account-management/formatterService";
import {NavLinksSkeleton} from "@/app/ui/account-management/skeletons";

export default async function Layout({
    params, children
}: {
    params: Promise<{year: string}>,
    children: ReactNode
}) {
  const { year } = await params;
  const months: string[] = (await fetchAllMonths(parseInt(year))).map(m => getMonthName(m.month).toUpperCase())

  return (
    <div className={`min-h-screen flex w-full`}>
      <nav className={`sticky top-0 w-36 p-4 flex flex-col gap-4 h-screen`}>
        <Suspense fallback={<NavLinksSkeleton/>}>
          <NavLinks staticLinks={[]}
                    links={months.map(month => ({
                      href: `account-management/years/${year}/months/${month.toLowerCase()}`,
                      label: month
                    }))}/>
        </Suspense>
      </nav>
      <div className={`flex-1 p-5 w-full`}>
          {children}
      </div>
    </div>
  )
}