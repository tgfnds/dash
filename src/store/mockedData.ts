import { Bookmark, Category } from '@/types/bookmark';
import { v4 as uuidv4 } from 'uuid';

export const initialCategories: Category[] = [
  {
    id: uuidv4(),
    name: 'Twitch',
    color: '#6247AA',
  },
  {
    id: uuidv4(),
    name: 'Other',
    color: null,
  },
];

export const initialBookmarks: Bookmark[] = [
  {
    id: uuidv4(),
    name: 'giantwaffle',
    url: 'https://www.twitch.tv/giantwaffle',
    icon: 'twitch-purple.svg',
    category: initialCategories[0],
  },
  {
    id: uuidv4(),
    name: 'Naive-UI',
    url: 'https://www.naiveui.com',
    category: initialCategories[1],
  },
];
