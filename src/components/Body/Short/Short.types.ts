export type ShortenResult = {
    code: string;
    short_link: string;
    full_short_link: string;
    short_link2: string;
    full_short_link2: string;
    share_link: string;
    short_link3: string;
    full_short_link3: string;
    full_share_link: string;
    original_link: string;
  }
  
  export type ShortenResponse = {
    ok: boolean;
    result : ShortenResult;
  }
  
  export type ShortContextProps = {
    search: (url: string) => void;
    lastResearches: Array<ShortenResult>;
  }
  