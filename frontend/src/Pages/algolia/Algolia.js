import React from 'react'
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Hits, SearchBox, Pagination, Highlight, ClearRefinements, Panel, RefinementList, SortBy, Configure } from 'react-instantsearch/dom';
import "../../App.css"
const searchClient = algoliasearch('5L5AVLJE0W', '8acc788b5d2e29a82f13374e1ae5a62d');
const Algolia = () => {
    return (
        <div className="container">
            <InstantSearch searchClient={searchClient} indexName="product_search">
                <Configure hitsPerPage={8} />
                <h1>Tài Dev &nbsp;
                    <img src="https://res.cloudinary.com/taithinhnam/image/upload/v1668158317/user/llrq8lgwaw9bou94hies.gif" alt="" style={{ width: '15%', height: '15%' }} />
                </h1>

                <SearchBox
                    searchable
                    translations={{
                        placeholder: 'Search product',
                    }}
                />
                <div className="twoColumns">
                    <Panel header="categories">
                        <RefinementList attribute="categories.name"
                            searchable
                            showMore
                            showMoreLimit={100}
                            translations={{
                                placeholder: 'Search category',
                            }}
                        />
                        <ClearRefinements />

                    </Panel>
                    <Hits hitComponent={Hit}
                    />

                </div>

                <div className="twoColumns">
                    <div></div>
                    <div style={{ textAlign: "center" }}>
                        <Pagination />
                    </div>
                </div>

            </InstantSearch>
        </div>
    )
}
function Hit(props) {
    return (
        <div>
            <Highlight attribute={['name']}
                tagName="b" hit={props.hit} />
            <div>{props.hit.price}</div>
            <img src={props.hit.image.url} style={{ width: '25%', height: '25%' }} />
        </div>
    )
}
export default Algolia

