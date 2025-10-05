// dynamic import example
export async function loadModule() {
  const m = await import('./some-module.js');
  console.log('loaded', m.name);
  return m;
}
