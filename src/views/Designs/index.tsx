import { Table } from "components";
import { formatDate, splitElemets } from "helpers";
import { FunctionComponent, useEffect, useState } from "react";
import { get_designs, get_users } from "services/getters";
import { IDesign, IUser } from "types";

interface DesignsProps {}

const Designs: FunctionComponent<DesignsProps> = () => {
  const [designs, setDesigns] = useState<IDesign[][]>([]);
  const [users, setUsers] = useState<IUser[]>([]);

  const COLUMNS = ["name", "courses", "wales", "last updated", "by"];

  useEffect(() => {
    const getData = async () => {
      const [userData, userError] = await get_users();
      const [designsData, designError] = await get_designs();
      if (!designError) {
        const designs: IDesign[][] = splitElemets(designsData, 5);
        setDesigns(designs);
      }

      if (!userError) {
        setUsers(userData);
      }
    };
    getData();
  }, []);

  const filterUser = (id: number): string | undefined => {
    const user = users.find((user) => user.id === id);
    return user?.name;
  };

  return (
    <div className="setouts-container">
      {designs[0] && (
        <Table columns={COLUMNS}>
          {designs[0].map((item: IDesign) => (
            <tr key={item.id} className="t-row">
              <td>{item.name}</td>
              <td>{item.courses}</td>
              <td>{item.wales}</td>
              <td>{formatDate(item.updated)}</td>
              <td>
                {filterUser
                  ? filterUser(item.user_id_last_update)
                  : "User not found"}
              </td>
            </tr>
          ))}
        </Table>
      )}
    </div>
  );
};

export default Designs;
