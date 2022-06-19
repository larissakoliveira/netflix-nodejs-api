import { Episode } from '../../entities';
import { ShowCategoryOptions } from '../../types/enums';

interface IShowUpdate {
  id: number
  cover: string
  title: string
  director: string
  actors: string[]
  description: string
  category: ShowCategoryOptions
  episodes: Episode[]
}

export default IShowUpdate;
