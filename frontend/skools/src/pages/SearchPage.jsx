import React from 'react';
import { SearchBar } from '../component/search/searchBar';
import { SearchSortBar } from '../component/search/sortBar';
import { SearchSchoolList } from '../component/search/schoolList';
import { CompareBar } from '../component/compare/compareBar';

export default class SearchPage extends React.Component {
    render() { 
        return (  
            <div>
                <SearchBar/>
                <SearchSortBar />
                <SearchSchoolList />
                <CompareBar />
            </div>
        );
    }
}