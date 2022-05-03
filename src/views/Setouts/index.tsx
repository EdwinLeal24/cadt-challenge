import { Table } from "components";
import { FunctionComponent, useEffect, useState } from "react";
import { get_setouts } from "services/getters";
import styles from "./Setouts.module.scss";
import { formatDate } from "utils";
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
        setSetouts(setoutsData);
      }
    };

    getSetouts();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.tableContainer}>
        <Table columns={COLUMNS}>
          {setouts ? (
            <div data-testid="setouts-list">
              {setouts.map((item: any) => (
                <div key={item.id} className={styles.tRow}>
                  <div className={styles.td}>{item.name}</div>
                  <div className={styles.td}>{item.machine_name}</div>
                  <div className={styles.td}>{item.machine_width}</div>
                  <div className={styles.td}>{item.courses}</div>
                  <div className={styles.td}>{formatDate(item.updated)}</div>
                </div>
              ))}
            </div>
          ) : (
            <h1>Loading...</h1>
          )}
        </Table>
      </div>
    </div>
  );
};

export default Setouts;
