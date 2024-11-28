import { Github } from "lucide-react";
import Logo from "../logo";
import { Card } from "../ui/card";

export default function HomeComponent() {
  return (
    <div className="flex bg-slate-200 min-h-[100vh] items-center place-content-center shadow-[inset_0_0_80px_20px_rgba(0,0,0,0.45)]">
      <Card className="flex items-center place-content-center pr-[50px]">
        <div className="px-12 py-10">
          <Logo size={185} />
        </div>
        <div>
          <h1 className="text-[#0d7dbb] text-2xl font-bold">PULSEMIND</h1>
          <p className="text-[#0097b2] font-light opacity-50">
            FullStack Developer
          </p>
          <a
            href="https://github.com/PulseMind"
            className="flex font-light text-[0.8rem] mt-1 opacity-85 hover:opacity-100"
          >
            Visit GitHub <Github size={16} className="ml-1" />
          </a>
        </div>
      </Card>
    </div>
  );
}
