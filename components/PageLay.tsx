interface Props {
  title: string;
  desc?: string;
  children: React.ReactNode;
}
const PageLay: React.FC<Props> = ({ title, desc, children }) => {
  return (
    <div className="sm:mt-32 mt-16">
      <header className="max-w-2xl">
        <h1 className="sm:text-5xl text-4xl font-bold tracking-tight text-default-800">
          {title}
        </h1>
        <p className="mt-6 text-base text-default-600">{desc}</p>
      </header>
      <div className="mt-16 sm:mt-20">{children}</div>
    </div>
  );
};

export default PageLay;
