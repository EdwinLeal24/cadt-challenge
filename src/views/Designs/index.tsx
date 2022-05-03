import styles from "./Designs.module.scss";
import { Table } from "components";
import { formatDate } from "utils";
import { FunctionComponent, useEffect, useState } from "react";
import { get_designs, get_users } from "services/getters";
import { IDesign, IUser } from "types";

interface DesignsProps {}

const Designs: FunctionComponent<DesignsProps> = () => {
  const [designs, setDesigns] = useState<IDesign[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);

  const COLUMNS = ["name", "courses", "wales", "last updated", "by"];

  useEffect(() => {
    const getData = async () => {
      const [userData, userError] = await get_users();
      const [designsData, designError] = await get_designs();

      if (!designError) {
        setDesigns(designsData);
      }

      if (!userError) {
        setUsers(userData);
      }
    };
    getData();
  }, []);

  const filterUser = (id: number): string | undefined => {
    const user = users.find((user) => user.id === id);
    return user && getInitials(user.name);
  };

  const getInitials = (name: string): string => {
    const initials = name
      .split(" ")
      .map((el) => el[0])
      .join("");
    return initials.toUpperCase();
  };

  return (
    <div className={styles.container}>
      <div className={styles.tableContainer}>
        <Table columns={COLUMNS}>
          {designs ? (
            <div data-testid="design-list">
              {designs.map((item: IDesign) => (
                <div
                  data-testid="design-item"
                  key={item.id}
                  className={styles.tRow}
                >
                  <div className={styles.td}>{item.name}</div>
                  <div className={styles.td}>{item.courses}</div>
                  <div className={styles.td}>{item.wales}</div>
                  <div className={styles.td}>{formatDate(item.updated)}</div>
                  <div className={styles.td}>
                    <div className={styles.initialsName}>
                      {filterUser
                        ? filterUser(item.user_id_last_update)
                        : "User not found"}
                    </div>
                  </div>
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

export default Designs;
