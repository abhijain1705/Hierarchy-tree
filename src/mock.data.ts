import type { TreeNode } from "./types";

export const vesselHierarchy: TreeNode[] = [
  {
    id: "et-1",
    name: "Propulsion System",
    type: "EQUIPMENT_TYPE",
    children: [
      {
        id: "eq-1",
        name: "Main Engine",
        type: "EQUIPMENT",
        children: [
          {
            id: "as-1",
            name: "Cylinder Unit",
            type: "ASSEMBLY",
            children: [
              {
                id: "as-2",
                name: "Fuel Supply Subsystem",
                type: "ASSEMBLY",
                children: [
                  {
                    id: "as-3",
                    name: "High Pressure Pump Assembly",
                    type: "ASSEMBLY",
                    children: [
                      {
                        id: "as-4",
                        name: "Plunger Mechanism",
                        type: "ASSEMBLY",
                        children: [
                          {
                            id: "co-1",
                            name: "Plunger Rod",
                            type: "COMPONENT",
                            children: [
                              {
                                id: "co-2",
                                name: "Sealing Ring",
                                type: "COMPONENT",
                                children: [
                                  {
                                    id: "co-3",
                                    name: "Pressure Sleeve",
                                    type: "COMPONENT",
                                    children: [
                                      {
                                        id: "co-4",
                                        name: "Retaining Clip",
                                        type: "COMPONENT",
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "as-8",
            name: "Exhaust System",
            type: "ASSEMBLY",
            children: [
              {
                id: "co-7",
                name: "Muffler Unit",
                type: "COMPONENT",
              },
            ],
          },
          {
            id: "as-9",
            name: "Cooling System",
            type: "ASSEMBLY",
            children: [
              {
                id: "co-8",
                name: "Heat Exchanger",
                type: "COMPONENT",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "et-2",
    name: "Electrical System",
    type: "EQUIPMENT_TYPE",
    children: [
      {
        id: "eq-2",
        name: "Power Distribution Panel",
        type: "EQUIPMENT",
        children: [
          {
            id: "as-5",
            name: "Circuit Breaker Assembly",
            type: "ASSEMBLY",
            children: [
              {
                id: "as-6",
                name: "Protection Module",
                type: "ASSEMBLY",
                children: [
                  {
                    id: "as-7",
                    name: "Thermal Trip Unit",
                    type: "ASSEMBLY",
                    children: [
                      {
                        id: "co-5",
                        name: "Bimetal Strip",
                        type: "COMPONENT",
                        children: [
                          {
                            id: "co-6",
                            name: "Calibration Spring",
                            type: "COMPONENT",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
