import { vesselHierarchy } from "../mock.data";
import { TreeNode } from "../types";
import { useCallback, useEffect, useState } from "react";

export const useApp = () => {
  const [expandedMap, setExpandedMap] = useState<Record<string, boolean>>({});
  const [search, setSearch] = useState("");

  const handleSearch = useCallback(() => {
    // Expand all nodes that match the search term and their parents
    if (search.trim() === "") {
      setExpandedMap({});
      return;
    }

    const newExpandedMap: Record<string, boolean> = {};

    const expandMatchingNodes = (nodes: TreeNode[], parents: string[] = []) => {
      for (const node of nodes) {
        const isMatch = node.name.toLowerCase().includes(search.toLowerCase());
        if (isMatch) {
          // Expand all parents
          parents.forEach((parentId) => {
            newExpandedMap[parentId] = true;
          });
        }
        if (node.children) {
          expandMatchingNodes(node.children, [...parents, node.id]);
        }
      }
    };

    expandMatchingNodes(vesselHierarchy);
    setExpandedMap(newExpandedMap);
  }, [search]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    handleSearch();
  }, [handleSearch]);

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
    search,
    setSearch,
    expandedMap,
    toggle,
  };
};
