export const handleTop = (setIsTop: (isTop: boolean) => void, offsetY: number) => {
  if (window.pageYOffset > offsetY) {
      setIsTop(false);
  }
  else {
      setIsTop(true);
  }
}