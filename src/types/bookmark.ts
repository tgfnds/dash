// export const initialBookmarks = {
//   bookmarks: [
//     {
//       name: "giantwaffle",
//       url: "https://www.twitch.tv/giantwaffle",
//     },
//   ],
// };

export type Bookmark = {
  name: string;
  url: string;
  icon?: string;
  category?: string;
  clicks: number;
};