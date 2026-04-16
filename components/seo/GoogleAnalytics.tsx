import Script from "next/script";

interface GoogleAnalyticsProps {
  gaId: string;
}

export default function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');

          document.addEventListener('click', function (event) {
            var target = event.target && event.target.closest ? event.target.closest('[data-track]') : null;
            if (!target || typeof gtag !== 'function') return;

            var eventName = target.getAttribute('data-track') || 'tracked_click';
            var eventLabel = target.getAttribute('data-track-label') || target.textContent?.trim() || '';
            gtag('event', eventName, {
              event_category: 'engagement',
              event_label: eventLabel,
            });
          });

          document.addEventListener('submit', function (event) {
            var form = event.target;
            if (!form || !form.getAttribute) return;
            var formName = form.getAttribute('data-track-form');
            if (!formName || typeof gtag !== 'function') return;
            gtag('event', 'form_submit', {
              event_category: 'lead',
              event_label: formName,
            });
          });
        `}
      </Script>
    </>
  );
}
