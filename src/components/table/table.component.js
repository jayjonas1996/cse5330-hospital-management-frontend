import { Component } from "react";
import PropTypes from "prop-types";
import './table.component.css'

export default class Table extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired
      };


    constructor(props) {
        super(props);
    }
    render() {
        const { props: { data } } = this;
        let headers = [];
        let elements = []

        for (var i=0; i < data[0].length; i++) {
            headers.push(<th><td>{data[0][i]}</td></th>)
        }
 
        for (var i = 1; i < data.length; i++) {
            let cells = [];
            for(var j=0; j < data[i].length; j++) {
                cells.push(<td>{data[i][j]}</td>)
            }
            elements.push(<tr key={`${i}-${j}`}>{cells}</tr>);
        }

        return (
            <div>
                <table>
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
