export function buildFromLoopData(host, loopData) {
  if (!loopData) {
    return;
  }

  const [builder, items] = loopData;

  if (typeof builder !== 'function' || !Array.isArray(items) || items.length === 0) {
    return;
  }

  items.forEach((item, index) => {
    builder.call(host, item, index, items);
  });
}

