import * as S from './styles'
import Lottie from 'react-lottie';


export function Loading() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: '',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <S.Wrapper>
      <Lottie options={defaultOptions}
        height={400}
        width={400}
      />
    </S.Wrapper>
  )
}