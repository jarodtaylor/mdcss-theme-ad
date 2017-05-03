const wrapEl = (target, wrapper) => {
  let targetParent = target.parentNode;
  targetParent.insertBefore(wrapper, target);
  wrapper.appendChild(target);
  return wrapper;
}

export { wrapEl };
