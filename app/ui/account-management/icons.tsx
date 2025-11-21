import Image from "next/image";

export function EuroIcon() {
    const url = '/account-management/euro.svg'
    return (
        <div className="flex justify-center items-center">
            <Image src={url} alt={`Euro`} height={36} width={48}/>
        </div>
    )
}

export function VietnamIcon() {
    const url = '/account-management/vn.svg'
    return (
        <div className="flex justify-center items-center">
            <Image src={url} alt={`Euro`} height={36} width={48}/>
        </div>
    )
}