import React from 'react';
import { SearchBar } from '../component/search/searchBar';
import RecommendSchool from '../component/home/recommendSchool';
import FeaturedSchool from '../component/home/featuredSchool';
import { RecommendArticle } from '../component/home/RecommendArticle';
import Loading from '../component/loading';

const HomePage = () => {
  return (
    <div>
      <SearchBar />
      <FeaturedSchool />
      <RecommendSchool />
      <RecommendArticle />
      <Loading />
    </div>
  );
};

export default HomePage;