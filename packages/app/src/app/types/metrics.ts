export interface Identity {
    userId?: string | number;
    anonymousId?: string | number;
  }

export interface Traits {
  [key: string]: any;
}

export interface Properties {
  paired?: boolean;
  createdAt?: Date;
  [key: string]: any;
}

export interface Event {
  userId: string | undefined;
  event: string;
  properties: Properties;
  context: any;
  messageId?: string;
}

export interface SegmentApiCalls {
  [key: string]: Event;
}

export interface MetricsState {
  participateInDesktopMetrics: boolean;
  desktopMetricsId?: string;
  eventsBeforeMetricsOptIn: Event[];
  traits: Traits;
  segmentApiCalls: SegmentApiCalls;
}