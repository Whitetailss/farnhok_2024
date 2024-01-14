import React from 'react';
import { SearchBar } from '../component/search/searchBar';
import { RecommendSchool } from '../component/home/recommendSchool';
import  FeaturedSchool  from '../component/home/featuredSchool';
import { RecommendArticle } from '../component/home/recommendArtical';
import Loading from '../component/loading';

export default class HomePage extends React.Component {

    render() { 
        return (  
            <div>
                <SearchBar />
                <FeaturedSchool />
                <RecommendSchool />
                <RecommendArticle />
                <Loading />
            </div>
        );
    }
}