// // utils/routerUtils.tsx

// import { ComponentType, ReactElement, ReactNode } from 'react';
// import { useRouter } from 'next/router';
// import { getLocalStorage, removeLocalStorage } from './local-storage';
// import { accessToken, group } from './constant';

// interface Props {
//   path: string;
//   page: ComponentType;
//   layout?: ComponentType<{ children: ReactNode }> | null;
// }

// const UnauthenticatedRoute = (routes: Array<Props>) => {
//   return routes.map(({ page: Page, layout: Layout, path }) => {
//     return (
//       <div key={path}>
//         {/* Your logic for checking authentication */}
//         {Layout ? (
//           <Layout>
//             <Page />
//           </Layout>
//         ) : (
//           <Page />
//         )}
//       </div>
//     );
//   });
// };

// const AuthenticatedRoute = (routes: Array<Props>) => {
//   return routes.map(({ page: Page, layout: Layout, path }) => {
//     return (
//       <div key={path}>
//         {/* Your logic for checking authentication */}
//         {Layout ? (
//           <Layout>
//             <Page />
//           </Layout>
//         ) : (
//           <Page />
//         )}
//       </div>
//     );
//   });
// };

// const AdminRoute = (routes: Array<Props>) => {
//   return routes.map(({ page: Page, layout: Layout, path }) => {
//     return (
//       <div key={path}>
//         {/* Your logic for checking authentication */}
//         {Layout ? (
//           <Layout>
//             <Page />
//           </Layout>
//         ) : (
//           <Page />
//         )}
//       </div>
//     );
//   });
// };

// export { UnauthenticatedRoute, AuthenticatedRoute, AdminRoute };
