import Logo from "../logo";

export default function HomeComponent() {
  return (
    <div className="flex min-h-[100vh] items-center place-content-center">
      <Logo size={180} />
    </div>
  );
}
