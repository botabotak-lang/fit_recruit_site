export default function VideoSection() {
  return (
    <section id="video" className="section-fit">
      <div className="container-fit">
        <h2>
          <span className="section-title-en">MOVIE</span>
          <span className="section-title-jp">仕事と雰囲気を知る</span>
        </h2>
        <p className="mt-5 text-sm leading-7 text-navy/90 sm:text-base">
          実際の仕事の雰囲気や、現場で大切にしている考え方を動画でご覧いただけます。
        </p>
      </div>
      <div className="mx-auto mt-8 w-[min(1600px,100vw)] px-2 sm:px-4">
        <div className="relative overflow-hidden rounded-2xl bg-black pb-[56.25%] shadow-card">
          <iframe
            src="https://www.youtube.com/embed/ib0h9g-MoB8"
            title="FIT採用 仕事と雰囲気"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}
