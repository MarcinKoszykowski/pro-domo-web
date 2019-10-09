import { keyframes } from 'styled-components';

const animations = {
  opacityZeroToOne: keyframes`
    0% {opacity: 0}
    100% {opacity: 1}
  `,
  opacityOneToZero: keyframes`
    0% {opacity: 1}
    100% {opacity: 0}
  `,
  menuIconAnimation: keyframes`
    0% {transform: translateY(-100px)}
    30% {transform: translateY(0)}
    50% {transform: translateY(-20px)}
    75% {transform: translateY(0)}
    90% {transform: translateY(-5px)}
    100% {transform: translateY(0)}
  `,
  navigationLinkHoverAfterAnimation: keyframes`
    0% {transform: translateX(-5px)}
    100% {transform: translateX(0)}
  `,
  navigationLinkHoverBeforeAnimation: keyframes`
    0% {transform: translateX(5px)}
    100% {transform: translateX(0)}
  `,
  headerAnimation: keyframes`
    0% {transform: translateY(-100px)}
    100% {transform: translateY(0)}
  `,
  scrollButton: keyframes`
    0% {opacity: 0}
    100% {opacity: .6}
  `,
  aboutUsLogoAnimation: keyframes`
    0% {transform: translateX(300px); opacity: 0}
    100% {transform: translateX(0); opacity: 1}
  `,
  aboutUsTextAnimation: keyframes`
    0% {transform: translateX(-200px); opacity: 0}
    100% {transform: translateX(0); opacity: 1}
  `,
  loanImageAnimation: keyframes`
    0% {transform: translateY(250px); opacity: 0}
    80% {transform: translateY(-30px)}
    100% {transform: translateY(0); opacity: 1}
  `,
  cityTextAnimation: keyframes`
    0% {transform: translateX(-300px); opacity: 0}
    100% {transform: translateX(0); opacity: 1}
  `,
  cityImageAnimation: keyframes`
    0% {transform: translateX(300px); opacity: 0}
    100% {transform: translateX(0); opacity: 1}
  `,
  answerAnimationOn: keyframes`
    0% {transform: translateY(-40px); opacity: 0}
    100% {transform: translateY(0); opacity: 1}
  `,
  answerAnimationOff: keyframes`
    0% {transform: translateY(0); opacity: 1}
    100% {transform: translateY(-40px); opacity: 0}
  `,
};

export default animations;
