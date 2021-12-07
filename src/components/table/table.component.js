import { Component } from "react";
import PropTypes from "prop-types";
import './table.component.css'

export default class Table extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired
      };

    render() {
        const { props: { data } } = this;
        let headers = [];
        let elements = []

        var header_cells = [];
        for (var k=0; k < data[0].length; k++) {
            header_cells.push(<th key={k}>{data[0][k]}</th>);
        }
        headers.push(<tr>{header_cells}</tr>);
 
        for (var i = 1; i < data.length; i++) {
            let cells = [];
            for(var j=0; j < data[i].length; j++) {
                cells.push(<td key={`${i}-${j}`}>{data[i][j]}</td>)
            }
            elements.push(<tr>{cells}</tr>);
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
