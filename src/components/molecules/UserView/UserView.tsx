/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { type FC } from 'react';
import React from 'react';
// import axios from 'axios';

// import { BreadCrumb } from '../../../components/atoms/BreadCrumb';
// import { Table } from '@/components/molecules/Table';
// import { Tabs } from '../../../components/atoms/Tabs';
// import type { User } from '../../types/dashborad';
// import { useNavigate } from '@tanstack/router';
// import { TableStatus } from '../TableStatus/TableStatus';

interface SuccessProps {}

export const UserView: FC<SuccessProps> = () => {
  // const navigate = useNavigate();
  // const [dataUsers, setDataUsers] = useState([]);

  // const getUsers = async (): Promise<void> => {
  //   try {
  //     const apiUrl = 'http://localhost:3000/get-users';
  //     const response = await axios.get(apiUrl);

  //     if (response.data && response.data.users) {
  //       const dataResponse = response.data.users.map((user) => ({
  //         id: user.id,
  //         name: user.name || '',
  //         email: user.email || '',
  //         phone: user.phoneNumber || '',
  //         status: user.status || '',
  //         role: user.role || ''
  //       }));

  //       setDataUsers(dataResponse);
  //     } else {
  //       console.error("Invalid response format. 'users' property not found.");
  //     }
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  // useEffect(() => {
  //   getUsers();
  // }, []);

  // const columns = [
  //   {
  //     maxWidth: '50px',
  //     omit: false
  //   },
  //   {
  //     name: 'name',
  //     selector: (row: User): string => `${row?.name}`,
  //     sortable: true,
  //     omit: false
  //   },
  //   {
  //     name: 'Email',
  //     selector: (row: User): string => row?.email || '',
  //     sortable: true,
  //     omit: false
  //   },
  //   {
  //     name: 'Phone Number',
  //     selector: (row: User): string => row?.phone || '',
  //     omit: false
  //   },
  //   {
  //     name: 'Role',
  //     selector: (row: User): string => row?.role || '',
  //     omit: false
  //   },
  //   {
  //     name: 'Status',
  //     maxWidth: '50px',
  //     selector: (row: User): JSX.Element => (
  //       <TableStatus status={row.status ? 'Active' : 'Inactive'} />
  //     ),
  //     sortable: true,
  //     omit: false
  //   }
  // ];

  return (
    <>
      {/* <Table columns={columns} data={dataUsers} buttonText="Add admin">
        <>
          <div>
            <BreadCrumb initialTab="Dashboard" actualTab="manage users" />
          </div>
          <div className="relative z-10">
            <Tabs actualTab="admins" />
          </div>
        </>
      </Table> */}
    </>
  );
};
