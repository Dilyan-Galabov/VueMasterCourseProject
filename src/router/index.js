import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/login';
import Navigation from '../components/navigation/Navigation';
import Trending from '../components/trending/Trending';
import Movies from '../components/movies/Movies';
import Series from '../components/series/Series';
import Favorite from '../components/favorite/Favorite';
import MovieDetails from '../components/moviedetails/MovieDetails';
import DiscoverMovies from '../components/discover/DiscoverMovies';
import DiscoverPeople from '../components/discover/DiscoverPeople';
import DiscoverSeries from '../components/discover/DiscoverSeries';
import Footer from '../components/footer/Footer';
import Person from '../components/people/Person';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      components: {
        default: Login,
      },
    },
    {
      path: '/discover',
      name: 'DiscoverMovies',
      components: {
        navigation: Navigation,
        default: DiscoverMovies,
        footer: Footer,
      },
    },
    {
      path: '/discoverSeries',
      name: 'DiscoverSeries',
      components: {
        navigation: Navigation,
        default: DiscoverSeries,
        footer: Footer,
      },
    },
    {
      path: '/discoverPeople',
      name: 'DiscoverPeople',
      components: {
        navigation: Navigation,
        default: DiscoverPeople,
        footer: Footer,
      },
    },
    {
      path: '/trending',
      name: 'Trending',
      components: {
        navigation: Navigation,
        default: Trending,
        footer: Footer,
      },
    },
    {
      path: '/movies',
      name: 'Movies',
      components: {
        navigation: Navigation,
        default: Movies,
        footer: Footer,
      },
    },
    {
      path: '/series',
      name: 'Series',
      components: {
        navigation: Navigation,
        default: Series,
        footer: Footer,
      },
    },
    {
      path: '/favorite',
      name: 'Favorite',
      components: {
        navigation: Navigation,
        default: Favorite,
        footer: Footer,
      },
    },
    {
      path: '/movie/:id',
      name: 'Movie',
      components: {
        navigation: Navigation,
        default: MovieDetails,
        footer: Footer,
      },
    },

    {
      path: '/person',
      name: 'Person',
      components: {
        navigation: Navigation,
        default: Person,
        footer: Footer,
      },
    },

  ],
});
