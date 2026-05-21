import Script from "next/script";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const COOKIEBOT_ID = process.env.NEXT_PUBLIC_COOKIEBOT_ID;

const CONSENT_MODE_DEFAULT = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{ad_personalization:'denied',ad_storage:'denied',ad_user_data:'denied',analytics_storage:'denied',functionality_storage:'denied',personalization_storage:'denied',security_storage:'granted',wait_for_update:500});gtag('set','ads_data_redaction',true);`;

const gtmSnippet = (id: string) =>
  `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${id}');`;

export function ConsentModeDefault() {
  if (!GTM_ID || !COOKIEBOT_ID) return null;
  return (
    <script
      id="consent-mode-default"
      dangerouslySetInnerHTML={{ __html: CONSENT_MODE_DEFAULT }}
    />
  );
}

export function TrackingScripts() {
  if (!GTM_ID || !COOKIEBOT_ID) return null;
  return (
    <>
      <Script id="gtm-loader" strategy="afterInteractive">
        {gtmSnippet(GTM_ID)}
      </Script>
      <Script
        id="Cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid={COOKIEBOT_ID}
        data-blockingmode="auto"
        strategy="afterInteractive"
      />
    </>
  );
}

export function TrackingNoScript() {
  if (!GTM_ID) return null;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        className="invisible hidden"
        title="Google Tag Manager"
      />
    </noscript>
  );
}
