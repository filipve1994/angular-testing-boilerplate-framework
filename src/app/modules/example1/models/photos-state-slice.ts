import { Photo } from './photo';

export interface PhotosStateSlice {
  searchTerm: string;
  photos: Photo[];
  currentPhoto: Photo | null;
}
