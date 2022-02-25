import React, { Component } from 'react'
import {Input} from "antd"
import {SearchOutlined} from '@ant-design/icons'
export default class SearchInput extends Component {
    render() {
        return (
            <div>
                 <Input  placeholder={this.props.hot} prefix={<SearchOutlined />} className="SearchBox" />
            </div>
        )
    }
}
