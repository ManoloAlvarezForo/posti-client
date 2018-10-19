import React from 'react'

// Components.
import Search from './Search';

const WithSearch = (WrapperComponent) => {
    class Searcher extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                showLargeSearch: {
                    display: 'none'
                }
            };
        }

        _handleChange = (e) => {
            e.preventDefault();
            if (e.target.value.length > 0) {
                this.setState({ showLargeSearch: { display: 'block' } }, () => {
                    this._form.searchlarge.focus();
                });
                if (e.target.name === 'search') {
                    this._form.searchlarge.value = e.target.value;
                    this._search(e.target.value);
                }
                else {
                    this._form.search.value = e.target.value;
                    this._search(e.target.value);
                }
            }
            else {
                this._handleClose(e);
            }
        }

        _search = (query) => {
            this.props._searchStrategy(query);
        }

        _handleClose = (e) => {
            (e) ? e.preventDefault() : this.setState({ showLargeSearch: { display: 'none' } }, () => {
                this._form.search.focus();
                this._form.search.value = "";
            });
        }

        render() {
            return (
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <form ref={f => this._form = f}>
                        <Search
                            name="search"
                            onChange={this._handleChange} />
                        <WrapperComponent
                            showLargeSearch={this.state.showLargeSearch}
                            _handleChange={this._handleChange}
                            _handleClose={this._handleClose}
                            {...this.props} />
                    </form>
                </div>
            )
        }
    }

    return Searcher;
}

export default WithSearch;