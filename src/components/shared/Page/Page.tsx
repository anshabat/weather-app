import "./Page.css";

type Props = {
  title: React.ReactNode;
  children: React.ReactNode;
};

const Page = (props: Props) => {
  const { title, children } = props;
  return (
    <section className="page">
      <div className="page__header">
        <h1 className="page__title">{title}</h1>
      </div>
      <div className="page__content">{children}</div>
    </section>
  );
};

export default Page;
