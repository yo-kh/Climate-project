import { useTranslations } from "next-intl";
import Link from "next/link";
export default function page() {
  const t = useTranslations('climate')
  return (
    <div>
      <section className="sticky flex flex-col justify-center items-center top-0 h-dvh gap-10">
        <div className="relative h-full">
          <img
            src="https://c1.wallpaperflare.com/preview/260/923/765/global-warming-climate-change.jpg"
            className="w-screen h-full object-cover"
          />
          <div className="flex flex-col justify-center items-center absolute inset-0 z-20">
            <h1 className="text-2xl p-5 md:text-7xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#14281D] to-[#658A64] [-webkit-text-stroke:0.5px_#F1F5F2]">
              {t('title')}
            </h1>
            <p className="md:text-xl font-bold text-transparent bg-clip-text bg-linear-to-b from-[#658A64] to-[#14281D]">
              {t('explore')}
            </p>
            <div
              className="absolute inset-0 bg-black pointer-events-none [animation-name:fade-dark] [animation-timeline:scroll()] [animation-range:0dvh_100dvh]"
              style={{ animationFillMode: "both" }}
            />
          </div>
        </div>
      </section>
      <section className="relative min-h-screen w-full flex flex-col bg-linear-to-b from-[#4FB0C6] to-[#4F86C6] text-white z-20 shadow-[0_-20px_75px_#4FB0C6] p-5 pt-10 gap-30 text-sm md:text-xl">
        <div className="flex flex-col gap-30">
          <h2 className="text-center text-2xl font-bold md:text-4xl">
            {t('temperature')}
          </h2>
          <div className="flex flex-col gap-5">
            <div className="flex gap-5">
              <p className="w-fit">
                {t('intro')}
              </p>
              <div className="flex flex-col w-min h-fit bg-[#1C7C54] gap-5 p-5 rounded-2xl shadow-[0_0_50px_#1C7C54]">
                <h3 className="whitespace-nowrap">{t('greenhouseTitle')}</h3>
                <p className="text-base">
                  {t('greenhouseText')}
                </p>
              </div>
            </div>
            <p>
              {t('humanImpact')}
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <p>
              {t('history')}
            </p>
            <img
              src="https://images.ctfassets.net/cxgxgstp8r5d/entry-cm_892-image/47a6353606fc14c6cc41b6c5ff3f0c2d/entry-cm_892-image.jpg"
              alt={t('historyImageAlt')}
              className="md:w-100"
            />
          </div>
          <div className="flex flex-col gap-5">
            <p>
              {t('consequences')}
            </p>
            <div className="flex flex-col md:flex-row gap-5">
              <p>
                {t('solutions')}
              </p>
              <img
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/Photovoltaik_Dachanlage_Hannover_-_Schwarze_Heide_-_1_MW.jpg/330px-Photovoltaik_Dachanlage_Hannover_-_Schwarze_Heide_-_1_MW.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
                alt={t('solutionsImageAlt')}
                className="w-full"
              />
            </div>
            <p>
              {t('everyone')}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <h2 className="text-center text-2xl font-bold md:text-4xl">
            {t('greenEnergy')}
          </h2>
          <div className="flex flex-col gap-5">
            <p>
              {t('greenEnergyIntro')}
            </p>
            <h2 className="text-center text-2xl font-bold md:text-4xl mt-20">
              {t('solarPanels')}
            </h2>
            <div className="grid grid-cols-2">
              <p>
                {t.rich('solarIntro', {
                  b: (chunks) => <b>{chunks}</b>,
                })}
              </p>
              <div className="flex justify-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkR8a2ZkDNcDMgWeBOb19dYBqk9y_vCS4kWeZyv5tdg&s=10"
                  alt={t('solarImageAlt')}
                />
              </div>
            </div>
            <div className="bg-[#1C7C54] rounded-2xl p-5 shadow-[0_0_50px_#1C7C54] m-10">
              <h3 className="text-center text-xl md:text-2xl font-bold">
                {t('funFacts')}
              </h3>
              <p className="text-sm md:text-lg">
                {t.rich('siliconFacts', {
                  b: (chunks) => <b>{chunks}</b>,
                })}
              </p>
            </div>
            <p>
              {t.rich('inverter', {
                  b: (chunks) => <b>{chunks}</b>,
                })}
            </p>
            <div className="grid grid-cols-2 gap-5">
              <p>
                {t('solarBenefits')}
              </p>
              <div className="flex justify-center items-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm8McpzfyO9iDSBUOkE6ZJKTD-jkc7STMQcD5lcuhn8g&s=10"
                  alt={t('solarHouseAlt')}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <h2 className="text-center text-2xl font-bold md:text-4xl">
            {t('windTurbines')}
          </h2>
          <div className="flex flex-col md:flex-row gap-5">
            <p>
              {t.rich('windIntro', {
                  b: (chunks) => <b>{chunks}</b>,
                })}
            </p>
            <img
              src="https://cdn.britannica.com/48/121648-050-562F03B0/Components-wind-turbine.jpg?w=400&h=300&c=crop"
              alt={t('windImageAlt')}
            />
          </div>
          <p>
            {t.rich('windScale', {
                  b: (chunks) => <b>{chunks}</b>,
                })}
          </p>
          <div className="grid grid-cols-2 gap-5">
            <p>
              {t.rich('zafarana', {
                  b: (chunks) => <b>{chunks}</b>,
                })}
            </p>
            <img
              src="https://www.esi-africa.com/wp-content/uploads/2026/04/zaafarana-wind-project-eumedbridge-1.jpg"
              alt={t('zafaranaImageAlt')}
              className="h-full"
            />
          </div>
          <p>
            {t.rich('repowering', {
                  b: (chunks) => <b>{chunks}</b>,
                })}
          </p>
        </div>

        <div className="flex flex-col gap-10">
          <h2 className="text-center text-2xl font-bold md:text-4xl">
            {t('giantDams')}
          </h2>
          <p>
            {t.rich('damsIntro', {
                  b: (chunks) => <b>{chunks}</b>,
                })}
          </p>
          <div className="grid grid-cols-2">
            <p>
              {t('damMechanism')}
            </p>
            <div className="flex justify-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsExfkHaz9wCEAN9r_NMFal4HPyWHs-F3yMlITBIPPjYOPA57M8UVcN8k&s=10"
                alt={t('damImageAlt')}
              />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p>
              {t('damScale')}
            </p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/ab/ThreeGorgesDam-China2009.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"
              alt={t('threeGorgesImageAlt')}
            />
          </div>
          <div className="flex flex-col gap-5">
            <p>
              {t('damUsers')}
            </p>
            <div className="flex flex-col gap-5 md:grid md:grid-cols-2">
              <p>{t('aswan')}</p>
              <div className="flex justify-center">
              <img src="https://www.thoughtco.com/thmb/mW3eUtSgQc0akxeHEYSeNalUy4M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-97842951-5bb3de7346e0fb0026161a5a.jpg" alt={t('aswanImageAlt')}/>
              </div>
            </div>
            <p>
              {t('conclusion')}
            </p>
          </div>
        </div>

        <div className="w-fit">
            <h5 className="text-sm text-end">{t('previous')}</h5>
            <div className="flex items-center">
              <svg viewBox="0 0 16 16" height="24" width="24">
                <path
                  fill="white"
                  d="m10.5 1.94-.53.53-4.82 4.82a1 1 0 0 0 0 1.42l4.82 4.82.53.53L11.56 13l-.53-.53L6.56 8l4.47-4.47.53-.47z"
                />
              </svg>
              <Link href="./EnviromentalChallenges">{t('environment')}</Link>
            </div>
          </div>
      </section>
    </div>
  );
}
