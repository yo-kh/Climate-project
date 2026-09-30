import { useTranslations } from "next-intl";
import Link from "@/i18n/navigation";
export default function Page() {
  const t = useTranslations('challenges')
  return (
    <div>
      <section className="sticky flex flex-col justify-center items-center top-0 h-dvh gap-10">
        <div className="relative h-full">
          <img src="/Home_page.png" className="w-screen h-full object-cover" />
          <div className="flex flex-col justify-center items-center absolute inset-0 z-20">
            <h1 className="text-2xl p-5 md:text-7xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#658A64] to-[#14281D] [-webkit-text-stroke:0.5px_#F1F5F2]">
              {t('title')}
            </h1>
            <p className="md:text-xl font-bold text-transparent bg-clip-text bg-linear-to-b from-[#658A64] to-[#14281D] ">
              {t('explore')}
            </p>
            <div
              className="absolute inset-0 bg-black pointer-events-none [animation-name:fade-dark] [animation-timeline:scroll()] [animation-range:0dvh_100dvh]"
              style={{ animationFillMode: "both" }}
            />
          </div>
        </div>
      </section>
      <section className="relative min-h-screen w-full flex flex-col bg-linear-to-b from-[#73E2A7] to-[#1C7C54] text-white z-20 shadow-[0_-20px_75px_#73E2A7] p-5 pt-10 gap-30">
        <h2 className="text-center text-2xl font-bold md:text-4xl">
          {t('heading')}
        </h2>
        <div className="flex flex-col gap-50 text-sm md:text-xl">
          <p>
            {t.rich('temperature', {
              span : (chunks) => <span className="font-bold">{chunks}</span>
            })}
          </p>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex flex-col gap-5">
              <p>
                {t('greenhouse')}
              </p>
              <p>
                {t('warming')}
              </p>
            </div>
            <img
              src="/global_warming.png"
              alt={t('globalWarmingImageAlt')}
              className="rounded-2xl "
            />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-5">
              <p className="text-[12px] md:text-xl">
                {t('inequality')}
              </p>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3DqcTLfupUagMvSM5m7DP7kCpD1oyQWv4B-jng4HeYw&s=10"
                alt={t('droughtImageAlt')}
                className="h-75 w-35 md:w-200 md:h-100 rounded-2xl"
              />
            </div>
            <div>
              <p>
                {t('climateInjustice')}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p>
              {t('solutions')}
            </p>
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex flex-col gap-5">
              <p>
                {t('personalActions')}
              </p>
              <p>
                {t('future')}
              </p>
              </div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdKjTrQeIcc-CkZPBjI41m2ysl3JOld4Gi_JSNG4aTDw&s=10"
                alt={t('recyclingImageAlt')}
                className="rounded-2xl w-120 h-80"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <h5 className="text-sm text-end">{t('previous')}</h5>
            <div className="flex items-center">
              <svg viewBox="0 0 16 16" height="24" width="24">
                <path
                  fill="white"
                  d="m10.5 1.94-.53.53-4.82 4.82a1 1 0 0 0 0 1.42l4.82 4.82.53.53L11.56 13l-.53-.53L6.56 8l4.47-4.47.53-.47z"
                />
              </svg>
              <Link href="/Environment">{t('environment')}</Link>
            </div>
          </div>
          <div>
            <h5 className="text-sm">{t('next')}</h5>
            <div className="flex items-center">
              <Link href="/ClimateChanges">{t('earthClimate')}</Link>
              <svg viewBox="0 0 16 16" height="24" width="24">
                <path
                  fill="white"
                  d="m5.5 1.94.53.53 4.82 4.82a1 1 0 0 1 0 1.42l-4.82 4.82-.53.53L4.44 13l.53-.53L9.44 8 4.97 3.53 4.44 3z"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
