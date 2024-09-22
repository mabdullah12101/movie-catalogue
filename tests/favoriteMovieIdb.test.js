import FavoriteMovieIdb from '../src/scripts/data/favorite-movie-idb';
import { itActsAsFavoriteMovieModel } from './contracts/favoriteMovieContract';

describe('Favorite movie idb test implementation', () => {
  afterEach(async () => {
    (await FavoriteMovieIdb.getAllMovies()).forEach(async (movie) => {
      await FavoriteMovieIdb.deleteMovie(movie.id);
    });
  });

  itActsAsFavoriteMovieModel(FavoriteMovieIdb);
});
