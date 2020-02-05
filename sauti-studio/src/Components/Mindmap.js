// import React, { Component } from 'react';
// import SortableTree, {toggleExpandedForAll, removeNodeAtPath } from 'react-sortable-tree';
// import 'react-sortable-tree/style.css';
// import "./styles.css";

// const maxDepth = 5;

// const alertNodeInfo = ({ node, path, treeIndex }) => {
//     const objectString = Object.keys(node)
//       .map(k => (k === "children" ? "children: Array" : `${k}: '${node[k]}'`))
//       .join(",\n   ");
  
//     global.alert(
//       "Info passed to the button generator:\n\n" +
//         `node: {\n   ${objectString}\n},\n` +
//         `path: [${path.join(", ")}],\n` +
//         `treeIndex: ${treeIndex}`
//     );
//   };



// export default class Mindmap extends React.Component {
//     counter = 0;
//     constructor(props) {
//       super(props);
  
//       this.state = {
//         name: "",
//         treeData: [
//           { title: "Chicken", expanded: true, children: [{ title: "Egg" }] }
//         ]
//       };
//     }
  
//     handleChange(e) {
//       this.setState({ name: e.target.value });
//     }
  
//     addNewLabel() {
//       this.counter += 1;
//       this.setState({
//         treeData: this.state.treeData.concat({
//           title: this.state.name ? this.state.name : `test-${this.counter}`,
//           expanded: true
//         })
//       });
//       this.setState({ name: "" });
//     }
//     canDrag(e) {
//       return e.node.title && e.node.title.includes("test");
//     }
  
//     render() {
//       return (
//         <div style={{ height: 500 }}>
//           <div style={{ width: 100 }}>
//             {" "}
//             {/* <label>Data: {JSON.stringify(this.state.treeData)}</label> */}
//           </div>
  
//           <input
//             type="text"
//             value={this.state.name}
//             onChange={this.handleChange.bind(this)}
//           />
//           <button onClick={() => this.addNewLabel()}>Add</button>
//           <SortableTree
//             // canDrag={this.canDrag}
//             treeData={this.state.treeData}
//             onChange={treeData => this.setState({ treeData })}
//           />
//         </div>
//       );
//     }
//   }
  