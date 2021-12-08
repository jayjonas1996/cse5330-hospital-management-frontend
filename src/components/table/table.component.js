import { Component } from "react";
import PropTypes from "prop-types";
import './table.component.css'

export default class Table extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired,
        hasTotal: PropTypes.bool
    };

    getTotalElement() {
        return (<span className="total">Total</span>)
    }

    render() {
        const { props: { data, hasTotal } } = this;

        let headers = [];
        let elements = []

        var header_cells = [];
        for (var k=0; k < data[0].length; k++) {
            header_cells.push(<th key={'header-cells' + k}>{data[0][k]}</th>);
        }
        headers.push(<tr key={'header'}>{header_cells}</tr>);
 
        for (var i = 1; i < data.length; i++) {
            let cells = [];
            for(var j=0; j < data[i].length; j++) {
                cells.push(<td key={`body-cells-${i}-${j}`}>{data[i][j] !== null ? data[i][j] : (hasTotal ? this.getTotalElement() : '-')}</td>)
            }
            elements.push(<tr key={`value-row-${i}`}>{cells}</tr>);
        }

        return (
            <div>
                <table className='table'>
                    <thead>
                        {headers}
                    </thead>
                    <tbody>
                        {elements}
                    </tbody>
                </table>
            </div>
        );
    }
}
