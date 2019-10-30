const addAnimationEventListener = animationFunction => {
  window.addEventListener('scroll', animationFunction);
  window.addEventListener('resize', animationFunction);
  window.addEventListener('load', animationFunction);
};

const removeAnimationEventListener = animationFunction => {
  window.removeEventListener('scroll', animationFunction);
  window.removeEventListener('resize', animationFunction);
  window.removeEventListener('load', animationFunction);
};

const elementInViewport = (element, number) => {
  const { offsetTop } = element;
  return offsetTop * number < window.pageYOffset + window.innerHeight;
};

const addAnimation = (reference, number, setVisibilityFunction) => {
  if (elementInViewport(reference.current, number)) {
    setVisibilityFunction(true);
  }
};

export { addAnimationEventListener, removeAnimationEventListener, addAnimation };
