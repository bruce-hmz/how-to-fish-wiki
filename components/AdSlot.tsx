import Script from 'next/script';

const CONTAINER_ZONE_KEY = '6514b9c8130dda3aae610a1cb887dc0a';
const BANNER_KEY = 'd39cd6b89f682ee70eb898f0016a15d4';

// Container-zone ad: the async invoke.js looks up the div below and fills it.
// Kept as a plain async script (no document.write involved), so it is safe in
// the server-rendered document.
export function AdContainerZone() {
  return (
    <div className="my-10 flex justify-center" aria-label="Advertisement">
      <Script
        async
        data-cfasync="false"
        src={`https://pl31091097.profitableratecpmnetwork.com/${CONTAINER_ZONE_KEY}/invoke.js`}
        strategy="afterInteractive"
      />
      <div id={`container-${CONTAINER_ZONE_KEY}`} />
    </div>
  );
}

// Legacy atOptions + invoke.js ad code (300x250 iframe format). That script
// family writes its ad with document.write, which would wipe the host page if
// run inline, so the code runs isolated inside a srcdoc iframe instead — the
// write only touches the frame's own document. Date: the ad network supplies
// the iframe format itself; we just give it a fixed 300x250 stage.
export function AdBanner300x250() {
  const srcdoc = [
    '<script>',
    'atOptions = {',
    "  'key' : '" + BANNER_KEY + "',",
    "  'format' : 'iframe',",
    "  'height' : 250,",
    "  'width' : 300,",
    "  'params' : {}",
    '};',
    '</scr' + 'ipt>',
    '<script src="https://www.highrevenueformat.com/' + BANNER_KEY + '/invoke.js"></scr' + 'ipt>',
  ].join('\n');
  return (
    <div className="my-10 flex justify-center" aria-label="Advertisement">
      <iframe
        title="Advertisement"
        width={300}
        height={250}
        loading="lazy"
        sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox allow-same-origin"
        srcDoc={srcdoc}
        style={{ border: 0 }}
      />
    </div>
  );
}
