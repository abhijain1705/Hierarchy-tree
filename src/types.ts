export type NodeType =
  | "EQUIPMENT_TYPE"
  | "EQUIPMENT"
  | "ASSEMBLY"
  | "COMPONENT";

export interface TreeNode {
  id: string;
  name: string;
  type: NodeType;
  children?: TreeNode[];
}
