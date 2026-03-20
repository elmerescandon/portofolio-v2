import BackgroundEffect from "./components/BackgroundEffect";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 text-center relative overflow-hidden">
        <BackgroundEffect>
          <h1 className="font-black text-[clamp(2rem,6vw,5rem)] leading-[0.9] lowercase tracking-[0.02em]">
            raul escandon
          </h1>

          <p className="max-w-lg text-base md:text-lg leading-relaxed font-light mt-6 lowercase">
            i <span className="text-accent-green font-medium">build</span> things that create a{" "}
            <span className="text-accent-blue font-medium">better place</span>
          </p>

          <div className="flex gap-2 mt-6 justify-center">
            <div className="w-8 h-8 bg-accent-brown" />
            <div className="w-8 h-8 bg-accent-red" />
            <div className="w-8 h-8 bg-accent-orange" />
            <div className="w-8 h-8 bg-accent-yellow" />
            <div className="w-8 h-8 bg-accent-green" />
            <div className="w-8 h-8 bg-accent-blue" />
            <div className="w-8 h-8 bg-accent-pink" />
            <div className="w-8 h-8 bg-accent-gray" />
          </div>
        </BackgroundEffect>
      </section>
    </div>
  );
}
