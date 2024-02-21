import React, { useEffect, useState } from "react";
import CustomDataTable from "../../components/custom-table.tsx/CustomTable";
import { ApiUrls } from "../../constants/ApiUrls";
import axios from "axios";
import { DummyTableData } from "../../dummy-data/DummyTableData";
import { DummyUserData } from "../../dummy-data/DummyUserData";
import { ImageUrl } from "../../constants/ImageUrls";
import { InputSwitch } from "primereact/inputswitch";
import UserCard from "../../components/user-card/UserCard";

const UsersPage = () => {
  const [userdata, setUserdata] = useState<any>([]);
  const [apiHitting, setApiHitting] = useState<boolean>(false);
  const [istableview, setistableview] = useState<boolean>(false);

  const profileTemplate = (rowData: any) => {
    return (
      <>
        <div className="flex justify-start items-center">
          <img src={ImageUrl.userImg} className="h-8 w-8 rounded-full" alt="" />
          <h6 className="pl-2">{rowData?.name}</h6>
        </div>
      </>
    );
  };
  const columns = [
    {
      field: "name",
      header: "Name",
      minWidth: "200px",
      frozen: true,
      body: profileTemplate,
    },
    { field: "email", header: "Email", minWidth: "200px" },
    { field: "age", header: "Age", textAlign: "center" },
    { field: "collegeName", header: "College Name", minWidth: "200px" },
    { field: "address", header: "Address", minWidth: "250px" },
    { field: "pincode", header: "Pincode", textAlign: "center" },
    { field: "linkedinUrl", header: "LinkedIn URL", minWidth: "200px" },
    { field: "githubUrl", header: "GitHub URL", minWidth: "200px" },
  ];

  const getUserList = () => {
    setApiHitting(true);
    axios
      .get("http://127.0.0.1:3003/getUser")
      .then((response: any) => {
        if (response) {
          setUserdata(response.data?.data);
          setTimeout(() => {
            setApiHitting(false);
          }, 1000);
        }
      })
      .catch((error) => {
        return {};
      });
  };

  useEffect(() => {
    getUserList();
  }, []);

  const actionArray = [
    { icon: "pi pi-plus", severity: "success", label: "add" },
  ];

  return (
    <>
      <div className="flex justify-end">
        <InputSwitch
          checked={istableview}
          onChange={(e) => setistableview(e.value)}
          className="absolute top-4"
          pt={
            {
              // slider: ({ props }:any) => ({
              //   className: props.checked ? 'bg-teal-400 h-4' : 'bg-red-400 h-4'
              // }),
              // root: ({ props }:any) => ({
              //   className: 'h-5'
              // })
            }
          }
        />
      </div>
      {istableview ? (
        <CustomDataTable
          columnsArray={columns}
          data={userdata}
          actionButtonArray={actionArray}
          loading={apiHitting}
        />
      ) : (
        <>
          <div className="users-page">
            <div className="grid grid-cols-2 gap-4">
              <UserCard />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UsersPage;
