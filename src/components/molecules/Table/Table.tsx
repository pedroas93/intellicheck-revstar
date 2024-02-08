// import { useDebounce } from '@/hooks/debounce';
// import type { FC, ReactElement } from 'react';
// import { useEffect, useState } from 'react';
// // eslint-disable-next-line import-helpers/order-imports
// import React from 'react';
// // eslint-disable-next-line import-helpers/order-imports
// // import DataTable from 'react-data-table-component';
// // eslint-disable-next-line import-helpers/order-imports
// import { Button } from '@/components/atoms/Button';
// // import { Icon } from "@/components/ui/Icon";
// import { Modal } from '@/components/atoms/Modal';
// import { TableHeader } from '@/components/atoms/TableHeader';

// interface Column {
//   name?: string;
//   selector?: (row: unknown) => unknown;
//   sortable?: boolean;
//   omit?: boolean;
// }

// interface TableProps {
//   columns?: Array<Column>;
//   data?: unknown;
//   showAddButton?: boolean;
//   children?: ReactElement;
//   buttonText?: string;
//   checkedValue?: boolean;
//   handleSearchValue?: (value: string) => string;
//   handleCheckValue?: (value: unknown) => void;
//   conditionalRowStyles?: unknown;
//   onClickButton?: () => void;
//   widthSearch?: string;
//   loading?: boolean;
//   onRowClicked?: (row: unknown) => void;
// }

// export const Table: FC<TableProps> = ({
//   columns = [],
//   // data,
//   children,
//   buttonText,
//   handleSearchValue,
//   // handleCheckValue,
//   // checkedValue = true,
//   // conditionalRowStyles,
//   onClickButton,
//   // widthSearch = '158px',
//   // loading,
//   // onRowClicked,
//   showAddButton
// }) => {
//   const [visible, setVisible] = useState(false);
//   const [stateColumns, setStateColumns] = useState<Array<Column>>(columns);
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const [searchMenu, setSearchMenu] = useState<boolean>(false);
//   const [searchValue, setSearchValue] = useState<string>('');
//   const [value, setValue] = useState<string>('');
//   const debouncedSearchTerm = useDebounce(value, 1000);

//   const handleCloseEye = (id: number): void => {
//     const newColumns = stateColumns.map((column, key: number) => {
//       if (key === id) {
//         return { ...column, omit: !column.omit };
//       }

//       return column;
//     });
//     setStateColumns(newColumns);
//   };

//   useEffect(() => {
//     if (searchValue === '') {
//       setValue('');
//     }
//   }, [searchValue]);

//   useEffect(() => {
//     if (handleSearchValue) {
//       handleSearchValue(debouncedSearchTerm);
//       if (value === '') {
//         setSearchValue(debouncedSearchTerm);
//       } else {
//         setSearchValue('');
//       }
//     }
//   }, [debouncedSearchTerm, handleSearchValue, value]);

//   const showAllColumn = (): void => {
//     const newColumns = stateColumns.map((data: Column) => {
//       return { ...data, omit: false };
//     });

//     setStateColumns(newColumns);
//   };

//   return (
//     <div className="flex flex-col w-full h-full">
//       {children}
//       <div className="header-table">
//         <TableHeader
//           add={true}
//           nameView={'Manage Users'}
//           visible={visible}
//           setVisible={setVisible}
//         />
//         <div
//           className={`flex justify-end gap-2 items-center bg-primary-500 h-[50px]`}
//           style={{ position: 'relative', width: '180px' }}
//         >
//           <div
//             className={`w-[50px] h-[30px] rounded-[10px] bg-black-100 flex items-center justify-center cursor-pointer hover:bg-white z-10 `}
//             onMouseEnter={(): void => {
//               setSearchMenu(true);
//             }}
//             onMouseLeave={(): void => {
//               setSearchMenu(false);
//             }}
//             onClick={(): void => {
//               setVisible(true);
//             }}
//           >
//             {/* <Icon
// 				name="menuTable"
// 				width="18"
// 				color={`${searchMenu ? "#0e2130" : "white"}`}
// 			/> */}
//           </div>

//           {buttonText && showAddButton && (
//             <div className="">
//               <Button buttonText={buttonText} variant={'white'} onClick={onClickButton} />
//             </div>
//           )}
//         </div>
//       </div>
//       <div className="h-full w-full rounded-3xl bg-white">
//         <div className="rounded-3xl h-[85vh] overflow-auto">
//           {/* <DataTable
//             fixedHeader
//             columns={stateColumns}
//             data={data}
//             className="h-[85vh]"
//             progressPending={loading}
//             conditionalRowStyles={conditionalRowStyles}
//             onRowClicked={onRowClicked}
//           /> */}
//         </div>
//       </div>

//       <Modal
//         visible={visible}
//         onHide={(): void => {
//           setVisible(false);
//         }}
//         title="Manage Columns"
//         subTitle="Fill out some information"
//         width="20vw"
//       >
//         <div className="flex flex-col items-center justify-between gap-5 " style={{ width: '98%' }}>
//           <div
//             className="flex justify-end w-full cursor-pointer text-blue-100 text-[13px]"
//             onClick={showAllColumn}
//           >
//             Show All
//           </div>
//           {stateColumns?.map((data, key: number) => {
//             return (
//               <div key={key} className="flex items-center justify-between w-full">
//                 <div className="flex items-center justify-center gap-2">{data?.name}</div>

//                 <div
//                   onClick={(): void => {
//                     handleCloseEye(key);
//                   }}
//                   className="cursor-pointer"
//                 >
//                   {/* <Icon
// 						name={data?.omit ? "closeEye" : "openEye"}
// 						width="18"
// 						color="black"
// 					/> */}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </Modal>
//     </div>
//   );
// };
