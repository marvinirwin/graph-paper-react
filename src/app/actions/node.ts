import { createAction } from 'typesafe-actions';

// TODO figure out if I have to resolve anything here, I just want to return one node
export const createNode = createAction('CREATE_NODE', resolve => {
  return (parent: Node) => resolve();
});

export const moveNode = createAction('MOVE_NODE', resolve => {
  return (node: Node, newParent: Node) => resolve()
});

