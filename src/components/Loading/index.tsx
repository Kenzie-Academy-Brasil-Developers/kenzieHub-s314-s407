import { Loading, QuarterIcon, TqIcon } from "./styles";

const LoadingScreen = () => {
  return (
    <Loading>
    <TqIcon origin={0} size={5} color="var(--color-primary-negative)" duration={2000} reverse="true"/>
    <QuarterIcon origin={45} size={7.5} color="var(--color-success)" duration={1000}/>
    <QuarterIcon origin={235} size={7.5} color="var(--color-negative)" duration={1000}/>
    <TqIcon origin={180} size={10} color="var(--color-grey-0)" duration={3000} />
    <QuarterIcon origin={135} size={12.5} color="var(--color-primary)" duration={2500} reverse="true"/>
    <QuarterIcon origin={315} size={12.5} color="var(--color-primary)" duration={2500} reverse="true"/>
    <h1>carregando...</h1>
    </Loading>
  );
}

export default LoadingScreen;