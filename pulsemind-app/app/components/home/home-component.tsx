import Logo from "../logo";

export default function HomeComponent() {
  return (
    <div className="flex min-h-[100vh] items-center place-content-center">
      <Logo size={250} />
      <div>
        <h1 className="text-[#0d7dbb] text-2xl font-bold">PULSEMIND</h1>
        <p className="text-[#0097b2] font-light opacity-75">
          FullStack Developer
        </p>
        <a
          href="https://github.com/PulseMind"
          className="font-light text-[0.8rem]"
        >
          Visit GitHub
        </a>
      </div>
    </div>
  );
}
