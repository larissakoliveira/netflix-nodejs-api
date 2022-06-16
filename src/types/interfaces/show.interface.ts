import { ShowCategoryOptions } from '../../types/enums';

interface IShow {
  id: number;

  cover: string;

  title: string;

  director: string;

  actors: string[];

  description: string

  category: ShowCategoryOptions
}

export default IShow;
