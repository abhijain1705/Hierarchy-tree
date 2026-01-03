import { vesselHierarchy } from "../mock.data";
import { TreeNode } from "../types";
import { useState } from "react";

export const useApp = () => {
  const [expandedMap, setExpandedMap] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => {
    // make parent and all its child to false in case of collapsing
    setExpandedMap((prev) => {
      const isExpanded = !!prev[id];
      const newMap = { ...prev, [id]: !isExpanded };

      if (isExpanded) {
        const collapseChildren = (node: TreeNode) => {
          if (node.children) {
            node.children.forEach((child) => {
              newMap[child.id] = false;
              collapseChildren(child);
            });
          }
        };

        const findNodeById = (
          nodes: TreeNode[],
          nodeId: string
        ): TreeNode | null => {
          for (const node of nodes) {
            if (node.id === nodeId) return node;
            if (node.children) {
              const found = findNodeById(node.children, nodeId);
              if (found) return found;
            }
          }
          return null;
        };

        const node = findNodeById(vesselHierarchy, id);
        if (node) {
          collapseChildren(node);
        }
      }

      return newMap;
    });
  };

  return {
    expandedMap,
    toggle,
  };
};
