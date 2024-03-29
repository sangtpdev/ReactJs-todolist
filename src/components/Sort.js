import React, { Component } from 'react';

class Sort extends Component {
    

    onClick =(sortBy, sortValue)=>{
        console.log(sortBy, sortValue);
        this.props.onSort(sortBy, sortValue);
    }
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button type="button"
                        className="btn btn-primary dropdow-toggle"
                        id="menu1"
                        data-toggle="dropdown">sắp xếp
                <span className="fa fa-caret-square-o-down ml-5"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="Menu1"  >
                        <li onClick={ () => this.onClick('name', 1)}>
                            <a href="/"
                            role="button" 
                            className={(this.props.sortBy ==='name' && this.props.sortValue === 1)? 'sort_selected' : ''}>
                                <span className="fa fa-sort-alpha-asc pr-5">
                                    &nbsp; Tên A-Z
                            </span>
                            </a>
                        </li>
                        <li onClick={ () => this.onClick('name', -1)}>
                            <a href="/"
                            role="button"
                            className={(this.props.sortBy ==='name' && this.props.sortValue === -1)? 'sort_selected' : ''}>
                                <span className="fa fa-sort-alpha-desc pr-5">
                                    &nbsp; Tên Z-A
                            </span>
                            </a>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li onClick={ () => this.onClick('status', 1)}>
                            <a href="/"
                            role="button"
                            className={(this.props.sortBy ==='status' && this.props.sortValue === 1)? 'sort_selected' : ''}>Trạng thái kích hoạt</a>
                        </li>
                        <li onClick={ () => this.onClick('status', -1)}>
                            <a href="/"
                            role="button"
                            className={(this.props.sortBy ==='status' && this.props.sortValue === -1)? 'sort_selected' : ''}>Trạng thái ẩn</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sort;