import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
export default function Page(){
    const t = useTranslations('landing')
    return(
        <div className="h-dvh w-screen">
            <div className="flex flex-col justify-center h-full items-center bg-linear-to-b from-[#FFF9E6] to-[#FAD880] text-center gap-2">
                <h1 className="text-3xl md:text-5xl text-[#F1F5F2] font-bold [-webkit-text-stroke:1px_black]">{t('title')}</h1>
                <p className="font-bold w-50 text-xs md:text-base md:w-70 [-webkit-text-stroke:0.5px_#F1F5F2]">{t('explore')}</p>
                <Link href='/Environment' className="bg-[#355834]/75 hover:bg-[#355834] transition-all duration-300 focus:bg-[#6E633D] p-2 font-bold rounded-xl">{t('header')}</Link>
            </div>
        </div>
    )
}