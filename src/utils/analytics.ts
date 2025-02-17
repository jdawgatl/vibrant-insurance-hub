
interface PageViewProps {
  title: string;
  path: string;
}

interface EventProps {
  action: string;
  category: string;
  label: string;
  value?: number;
}

export const trackPageView = ({ title, path }: PageViewProps) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'page_view', {
      page_title: title,
      page_path: path,
    });
  }
};

export const trackEvent = ({ action, category, label, value }: EventProps) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
