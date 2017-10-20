export default function on(event, selector) {
  return function(target, name, descriptor) {
    target.events = target.events || [];
    target.events.push({ event, selector, callback: target[name] });

    return descriptor;
  }
}
