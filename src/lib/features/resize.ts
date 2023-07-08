const onResize = (container: HTMLDivElement) => {
  if(window.innerWidth < window.innerHeight) {
    container.style.rotate = '90deg';
  } else {
    container.style.rotate = '';
  }
}

export { onResize };