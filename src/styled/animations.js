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
};

export default animations;
