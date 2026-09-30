import { useTranslations } from "next-intl";
import Link from "@/i18n/navigation";
export default function Page() {
  const t = useTranslations('environment')
  return (
    <div className="relative">
      <section className="sticky flex flex-col justify-center items-center top-0 h-dvh bg-linear-to-b from-[#FFF9E6] to-[#FAD880] gap-10">
        <h1 className="text-3xl md:text-7xl font-bold text-transparent bg-clip-text p-5 bg-linear-to-b from-[#658A64] to-[#14281D]">
          {t('title')}
        </h1>
        <p className="md:text-xl font-bold text-transparent bg-clip-text bg-linear-to-b from-[#658A64] to-[#14281D]">
          {t('explore')}
        </p>
        <div
          className="absolute inset-0 bg-black pointer-events-none [animation-name:fade-dark] [animation-timeline:scroll()] [animation-range:0dvh_100dvh]"
          style={{ animationFillMode: "both" }}
        />
      </section>
      <section className="relative min-h-screen w-full flex flex-col bg-[#14281D] text-white z-20 shadow-[0_-20px_50px_#14281D] p-5 pt-10 gap-30">
        <div className="flex flex-col items-center gap-10">
          <h2 className="text-4xl font-bold capitalize" id="Environment_header">
            {t('header')}
          </h2>
          <p className="md:text-xl">
            {t.rich('introduction', {
              span : (chunks) => <span className="md:text-xl font-serif">{chunks}</span>
            })}
          </p>
        </div>
        <div className="flex flex-col w-full gap-5 text-sm md:text-xl">
          <h2 className="text-center capitalize text-2xl font-bold">
            {t('philosophers')}
          </h2>
          <div className="flex flex-col gap-10">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="flex justify-center items-center">
                <a className="hover:underline hover:text-blue-500 cursor-pointer h-fit font-bold">
                  {t('aristotle')}
                </a>
              </div>
              <p className="flex items-center">
                {t('aristotleText')}
              </p>
              <div className="flex justify-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThhgBSGZjsYuLIXRps5RWTwW_ITf1XPiZFFwZaaISBdNZZSS3zpvqRxkwNopIhcWSrX0xWeE2Zlxp2fpqe6e7LIeuB2Vx4l0hHtra_QLwE&s=10"
                  alt={t('aristotleImageAlt')}
                  className="w-full md:w-50 
                "
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="flex justify-center items-center">
                <a className="hover:underline hover:text-blue-500 cursor-pointer h-fit font-bold">
                  {t('descartes')}
                </a>
              </div>
              <p className="flex items-center">
                {t('descartesText')}
              </p>
              <div className="flex justify-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvVVLCRId_R9Hmd67sl9U5alQdxHTxnGGi5yO6gnzlQQ&s"
                  alt={t('descartesImageAlt')}
                  className="w-full md:w-50 "
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="flex justify-center items-center">
                <a className="hover:underline hover:text-blue-500 cursor-pointer h-fit font-bold">
                  {t('rousseau')}
                </a>
              </div>
              <p className="flex items-center">
                {t('rousseauText')}
              </p>
              <div className="flex justify-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSwzJJOBrB8H2xNmdEVXwKLIjo-MZmBtRNfj7swhoVuw&s"
                  alt={t('rousseauImageAlt')}
                  className="w-full md:w-50 "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-between md:justify-around text-sm gap-5 md:text-xl">
            <p>
              {t.rich('differentPerspectives', {
                span : (chunks) => <span  className="font-bold text-xl">{chunks}</span>
              })}
            </p>
            <p>
              {t('categories')}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/tree.png"
              alt={t('treeImageAlt')}
              className="h-50 md:h-100 w-fit"
            />
            <img
              src="/waves2.png"
              alt={t('waterImageAlt')}
              className="h-50 md:h-100 w-fit rounded-2xl "
            />
          </div>
        </div>
        <div className="text-xl">
          {t('challengesIntro')}
        </div>
        <div className="flex w-full justify-end">
          <div className="flex flex-col w-fit">
            <h5 className="text-sm">{t('next')}</h5>
            <div className="flex flex-row justify-center">
              <Link href="/EnviromentalChallenges">
                {t('environmentalChallenges')}
              </Link>
              <svg
                viewBox="0 0 16 16"
                height="24"
                width="24"
              >
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
