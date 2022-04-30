import { Table } from "components";
import { FunctionComponent, useEffect, useState } from "react";
import { get_setouts } from "services/getters";
import "./Setouts.scss";
import { formatDate, splitElemets } from "helpers";
import { ISetout } from "types";

interface SetoutsProps {}

const Setouts: FunctionComponent<SetoutsProps> = () => {
  const [setouts, setSetouts] = useState<ISetout[][]>([]);
  const COLUMNS = [
    "name",
    "machine name",
    "machine width",
    "courses",
    "last updated",
  ];
  useEffect(() => {
    const getSetouts = async () => {
      const [setoutsData, setoutsError] = await get_setouts();
      if (!setoutsError) {
        const setouts: ISetout[][] = splitElemets(setoutsData, 5);
        setSetouts(setouts);
      }
    };

    getSetouts();
  }, []);

  return (
    <div className="setouts-container">
      {setouts[0] && (
        <Table columns={COLUMNS}>
          {setouts[0].map((item: any) => (
            <tr key={item.id} className="t-row">
              <td>{item.name}</td>
              <td>{item.machine_name}</td>
              <td>{item.machine_width}</td>
              <td>{item.courses}</td>
              <td>{formatDate(item.updated)}</td>
            </tr>
          ))}
        </Table>
      )}
    </div>
  );
};

export default Setouts;
