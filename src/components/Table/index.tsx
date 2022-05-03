import style from "./Table.module.scss";

interface TableProps {
  columns: Array<string>;
  children: JSX.Element | JSX.Element[];
}

const Table: React.FC<TableProps> = ({ columns, children }) => {
  return (
    <div className={style.table}>
      <div className={style.tHead}>
        <div className={style.tRow}>
          {columns.map((column, i) => (
            <div className={style.th} key={column + i}>
              {column}
            </div>
          ))}
        </div>
      </div>
      <div className={style.tBody}>{children}</div>
    </div>
  );
};

export default Table;
