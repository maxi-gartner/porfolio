interface ContainerProps {
  children: React.ReactNode;
}

const ContainerPage = (props: ContainerProps) => {
  const { children } = props;
  return (
    <div className="z-20 w-full bg-darkBg/60 pt-28 md:pt-20">
      <div className="w-full max-w-6xl px-4 pb-16 mx-auto mt-16 md:pb-0 md:px-6 flex flex-col justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default ContainerPage;
