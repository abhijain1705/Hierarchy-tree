import React from "react";
import type { TreeNode } from "../types";
import "../styles/tree-node.css";
import { memo } from "react";
import plus from "../icons/plus.svg";
import minus from "../icons/minus.svg";
import { motion } from "framer-motion";
import { Connect } from "react-connect-lines";

type NodeProps = {
  node: TreeNode;
  expandedMap: Record<string, boolean>;
  toggle: (id: string) => void;
};

const Node = memo(({ node, expandedMap, toggle }: NodeProps) => {
  const { id, name, type, children } = node;
  const expanded = expandedMap[id];

  const hasChildren = !!children?.length;

  const nodeClass = `tree-node tree-node--${type.toLowerCase()}`;

  return (
    <div className="flex gap-8">
      <Connect
        id={id}
        connectWith={
          hasChildren && expanded
            ? children!.map((child) => ({
                id: child.id,
                edge: "step",
              }))
            : []
        }
      >
        <div id={id}>
          <motion.div
            drag
            dragMomentum={false}
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            className={nodeClass}
          >
            <span>{name}</span>
            {hasChildren && (
              <button
                className="absolute bg-amber-50 rounded-full p-2 bottom-0.5 right-0.5"
                onClick={() => toggle(id)}
              >
                <img src={expanded ? minus : plus} alt="toggle" />
              </button>
            )}
          </motion.div>
        </div>
      </Connect>
      {/* Children are ALWAYS mounted */}
      {hasChildren && (
        <div className={`block ${expanded ? "opacity-100" : "opacity-0"}`}>
          {children!.map((child) => (
            <Node
              key={child.id}
              node={child}
              expandedMap={expandedMap}
              toggle={toggle}
            />
          ))}
        </div>
      )}
    </div>
  );
});

export default Node;
