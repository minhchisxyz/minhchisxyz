
import {CurrencyRate} from "@/app/lib/account-management/definitions";
import CurrencyContentPage from "@/app/ui/account-management/currency-content-page";
import {fetchAllRates} from "@/app/lib/account-management/currency/data";

export default async function CurrencyLayout() {
    const rates: CurrencyRate[] = await fetchAllRates()
    return (
        <CurrencyContentPage rates={rates}/>
    )
}