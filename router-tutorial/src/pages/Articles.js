import { NavLink, Outlet } from 'react-router-dom';

const Articles = () => {
  return (
    <div>
      <Outlet />
      <ul>
        <ArticleItem id={1} />
        <ArticleItem id={2} />
        <ArticleItem id={3} />
      </ul>
    </div>
  );
};

const ArticleItem = ({ id }) => {
  const activeStyle = {
    color: 'green',
    fontSize: 21,
  };
  return (
    <li>
      <NavLink
        to={`/articles/${id}`}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        게시글 {id}
      </NavLink>
    </li>
  );
};

export default Articles;



// import { NavLink, Outlet } from 'react-router-dom';

// const Articles = () => {
//   const activeStyle = {
//     color: 'green',
//     fontSize: 21,
//   };

//   return (
//     <div>
//       <Outlet />
//       <ul>
//         <li>
//           <NavLink
//             to="/articles/1"
//             style={({ isActive }) => (isActive ? activeStyle : undefined)}
//           >
//             게시글 1
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/articles/2"
//             style={({ isActive }) => (isActive ? activeStyle : undefined)}
//           >
//             게시글 2
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/articles/3"
//             style={({ isActive }) => (isActive ? activeStyle : undefined)}
//           >
//             게시글 3
//           </NavLink>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Articles;

// import { Link, Outlet } from 'react-router-dom';

// const Articles = () => {
//   return (
//     <div>
//       <Outlet />
//       <ul>
//         <li>
//           <Link to="/articles/1">게시글 1</Link>
//         </li>
//         <li>
//           <Link to="/articles/2">게시글 2</Link>
//         </li>
//         <li>
//           <Link to="/articles/3">게시글 3</Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Articles;