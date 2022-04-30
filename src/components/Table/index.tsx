import "./Table.scss";

interface TableProps {
  columns: Array<string>;
  children: JSX.Element | JSX.Element[];
}

const Table: React.FC<TableProps> = ({ columns, children }) => {
  return (
    <table className="table">
      <thead className="t-head">
        <tr className="table-row">
          {columns.map((column, i) => (
            <th key={column + i}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody className="t-body">{children}</tbody>
    </table>
  );
};

export default Table;
