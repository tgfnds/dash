// import { saveStorage } from './api/localStorage';
// import { BOOKMARK_STORAGE_KEY } from './constants';
// import { AppState } from './types/store';

// export const store: AppState = {
//   bookmarkState: {
//     bookmarks: [],
//     isShowingModal: false,
//     showAddModal() {
//       this.isShowingModal = true;
//     },
//     hideAddModal() {
//       this.isShowingModal = false;
//     },
//     addBookmark(bookmark: Bookmark) {
//       try {
//         const NEW_ID =
//           this.bookmarks.reduce((prev, cur) => (cur.id > prev.id ? cur : prev))
//             .id + 1;
//         bookmark.id = NEW_ID;
//         this.bookmarks.push(bookmark);
//         saveStorage(BOOKMARK_STORAGE_KEY, this.bookmarks);
//       } catch (error) {
//         console.log('An error occurred while trying to add a bookmark.', error);
//       }
//     },
//     delBookmark(id: number) {
//       try {
//         this.bookmarks.filter((bm) => bm.id !== id);
//         saveStorage(BOOKMARK_STORAGE_KEY, this.bookmarks);
//       } catch (error) {
//         console.log(
//           'An error occurred while trying to delete a bookmark.',
//           error
//         );
//       }
//     },
//   },
//   // Put methods that change state here.
// };
