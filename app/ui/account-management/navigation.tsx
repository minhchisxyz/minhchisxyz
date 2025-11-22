import {fetchAllMonths, fetchAllYears} from "@/app/lib/account-management/transaction/data";
import NavLinks, {StaticLink} from "@/app/ui/account-management/nav-links";
import Tooltip from "@mui/material/Tooltip";
import {ArrowTrendingUpIcon, BanknotesIcon, HomeIcon} from "@heroicons/react/24/outline";
import {getMonthName} from "@/app/lib/account-management/formatterService";

export async function YearNavigation() {
  const years: number[] = (await fetchAllYears()).map(y => y.year)
  const BASE = `account-management`
  const staticLinks: StaticLink[] = [
    {
      href: `${BASE}`,
      icon:
          <Tooltip title={`Home`} placement={`right`}>
            <HomeIcon className={`h-full`}/>
          </Tooltip>
    },
    {
      href: `${BASE}/currency`,
      icon:
          <Tooltip title={`Currency Exchange Rate`} placement={`right`}>
            <ArrowTrendingUpIcon className={`h-full`}/>
          </Tooltip>
    },
    {
      href: `${BASE}/transactions`,
      icon:
          <Tooltip title={`Create new transaction`} placement={`right`}>
            <BanknotesIcon className={`h-full`}/>
          </Tooltip>
    }
  ]
  const links = years.map(year => ({label: String(year), href: `account-management/years/${year}`}))
  return (
      <NavLinks staticLinks={staticLinks}
                links={links}/>
  )
}

export async function MonthNavigation({ year } : { year: string } ) {
  const months: string[] = (await fetchAllMonths(parseInt(year))).map(m => getMonthName(m.month).toUpperCase())
  const links = months.map(month => ({
    href: `account-management/years/${year}/months/${month.toLowerCase()}`,
    label: month
  }))
  return (
      <NavLinks staticLinks={[]}
                links={links}/>
  )
}