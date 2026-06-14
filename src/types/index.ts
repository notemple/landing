export interface Task {
  id: string;
  text: string;
  completed: boolean;
  category?: string;
  date?: string;
}

export interface NoteBlock {
  id: string;
  type: 'h1' | 'h2' | 'p' | 'todo' | 'quote' | 'bullet';
  content: string;
  completed?: boolean;
}

export interface TemplPage {
  id: string;
  title: string;
  icon: string;
  category: 'personal' | 'work' | 'archive';
  blocks: NoteBlock[];
  updatedAt: string;
}

export interface CollectionItem {
  id: string;
  title: string;
  category: string;
  author: string;
  status: 'Draft' | 'Published' | 'Under Review';
}

