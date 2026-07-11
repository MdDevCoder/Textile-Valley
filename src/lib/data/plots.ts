export type PlotStatus = "available" | "reserved" | "sold" | "future";

export interface PlotData {
  id: string;
  number: string;
  areaSqYd: number;
  dimensions: string;
  roadWidth: string;
  status: PlotStatus;
  points: number[][]; // Array of [x, y] coordinate pairs (percentages)
}

export const masterPlanPlots: PlotData[] = [
  {
    "id": "B-1",
    "number": "B-1",
    "areaSqYd": 331,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        18.8,
        36.47
      ],
      [
        20.7,
        38.71
      ],
      [
        20.47,
        56.65
      ],
      [
        18.69,
        56.48
      ]
    ]
  },
  {
    "id": "B-2",
    "number": "B-2",
    "areaSqYd": 314,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        20.7,
        38.63
      ],
      [
        22.2,
        40.01
      ],
      [
        22.2,
        59.07
      ],
      [
        20.76,
        59.24
      ]
    ]
  },
  {
    "id": "B-3",
    "number": "B-3",
    "areaSqYd": 344,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        22.08,
        40.01
      ],
      [
        23.69,
        41.47
      ],
      [
        23.63,
        59.24
      ],
      [
        22.31,
        59.33
      ]
    ]
  },
  {
    "id": "B-4",
    "number": "B-4",
    "areaSqYd": 333,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        23.69,
        41.39
      ],
      [
        25.24,
        42.34
      ],
      [
        25.19,
        59.07
      ],
      [
        23.81,
        59.07
      ]
    ]
  },
  {
    "id": "B-5",
    "number": "B-5",
    "areaSqYd": 343,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        25.13,
        42.77
      ],
      [
        26.68,
        44.06
      ],
      [
        26.51,
        58.9
      ],
      [
        25.36,
        59.16
      ]
    ]
  },
  {
    "id": "B-6",
    "number": "B-6",
    "areaSqYd": 335,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        26.74,
        44.23
      ],
      [
        28.35,
        45.61
      ],
      [
        28.23,
        59.59
      ],
      [
        26.62,
        59.07
      ]
    ]
  },
  {
    "id": "B-7",
    "number": "B-7",
    "areaSqYd": 342,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "sold",
    "points": [
      [
        28.46,
        45.87
      ],
      [
        29.67,
        47.08
      ],
      [
        29.79,
        61.48
      ],
      [
        28.41,
        61.4
      ]
    ]
  },
  {
    "id": "B-8",
    "number": "B-8",
    "areaSqYd": 314,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        29.73,
        47.34
      ],
      [
        31.28,
        48.63
      ],
      [
        31.34,
        61.48
      ],
      [
        29.96,
        61.48
      ]
    ]
  },
  {
    "id": "B-9",
    "number": "B-9",
    "areaSqYd": 340,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        31.11,
        48.63
      ],
      [
        32.72,
        50.27
      ],
      [
        33.01,
        61.74
      ],
      [
        31.22,
        61.23
      ]
    ]
  },
  {
    "id": "B-10",
    "number": "B-10",
    "areaSqYd": 335,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        32.72,
        49.93
      ],
      [
        34.45,
        51.82
      ],
      [
        34.27,
        61.66
      ],
      [
        32.95,
        61.48
      ]
    ]
  },
  {
    "id": "B-11",
    "number": "B-11",
    "areaSqYd": 335,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        34.39,
        51.91
      ],
      [
        35.77,
        52.6
      ],
      [
        35.94,
        71.4
      ],
      [
        34.33,
        71.32
      ]
    ]
  },
  {
    "id": "B-12",
    "number": "B-12",
    "areaSqYd": 334,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        35.77,
        53.03
      ],
      [
        37.67,
        54.58
      ],
      [
        37.55,
        70.46
      ],
      [
        35.88,
        71.23
      ]
    ]
  },
  {
    "id": "B-23",
    "number": "B-23",
    "areaSqYd": 302,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        16.96,
        57.09
      ],
      [
        18.57,
        56.48
      ],
      [
        18.69,
        76.06
      ],
      [
        16.96,
        76.06
      ]
    ]
  },
  {
    "id": "B-22",
    "number": "B-22",
    "areaSqYd": 345,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        18.69,
        56.83
      ],
      [
        20.64,
        56.57
      ],
      [
        20.64,
        75.29
      ],
      [
        18.57,
        75.89
      ]
    ]
  },
  {
    "id": "B-21",
    "number": "B-21",
    "areaSqYd": 325,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "sold",
    "points": [
      [
        20.59,
        59.33
      ],
      [
        22.2,
        59.24
      ],
      [
        21.97,
        74.94
      ],
      [
        20.7,
        75.11
      ]
    ]
  },
  {
    "id": "B-20",
    "number": "B-20",
    "areaSqYd": 308,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        22.25,
        59.16
      ],
      [
        23.63,
        59.33
      ],
      [
        23.52,
        74.16
      ],
      [
        21.97,
        74.6
      ]
    ]
  },
  {
    "id": "B-19",
    "number": "B-19",
    "areaSqYd": 347,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        23.69,
        59.16
      ],
      [
        25.13,
        59.07
      ],
      [
        25.3,
        73.91
      ],
      [
        23.58,
        74.34
      ]
    ]
  },
  {
    "id": "B-18",
    "number": "B-18",
    "areaSqYd": 319,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        25.19,
        59.24
      ],
      [
        26.74,
        59.5
      ],
      [
        26.91,
        73.47
      ],
      [
        25.24,
        74.16
      ]
    ]
  },
  {
    "id": "B-17",
    "number": "B-17",
    "areaSqYd": 316,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        26.71,
        58.71
      ],
      [
        28.29,
        59.16
      ],
      [
        28.35,
        73.22
      ],
      [
        26.85,
        73.39
      ]
    ]
  },
  {
    "id": "B-16",
    "number": "B-16",
    "areaSqYd": 302,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        28.35,
        61.83
      ],
      [
        29.67,
        61.48
      ],
      [
        30.02,
        72.61
      ],
      [
        28.41,
        72.87
      ]
    ]
  },
  {
    "id": "B-15",
    "number": "B-15",
    "areaSqYd": 306,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        29.84,
        61.48
      ],
      [
        31.34,
        61.31
      ],
      [
        31.45,
        72.53
      ],
      [
        29.9,
        72.87
      ]
    ]
  },
  {
    "id": "B-14",
    "number": "B-14",
    "areaSqYd": 341,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "sold",
    "points": [
      [
        31.28,
        61.4
      ],
      [
        32.95,
        61.57
      ],
      [
        32.95,
        72.18
      ],
      [
        31.28,
        72.44
      ]
    ]
  },
  {
    "id": "B-13",
    "number": "B-13",
    "areaSqYd": 325,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        32.72,
        61.48
      ],
      [
        34.45,
        61.57
      ],
      [
        34.33,
        71.92
      ],
      [
        32.89,
        71.92
      ]
    ]
  },
  {
    "id": "A-1",
    "number": "A-1",
    "areaSqYd": 324,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        34.81,
        24.08
      ],
      [
        37.67,
        20.85
      ],
      [
        37.67,
        36.38
      ],
      [
        35.42,
        34.4
      ]
    ]
  },
  {
    "id": "A-2",
    "number": "A-2",
    "areaSqYd": 326,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        37.67,
        20.69
      ],
      [
        38.87,
        19.56
      ],
      [
        39.05,
        37.59
      ],
      [
        37.67,
        36.47
      ]
    ]
  },
  {
    "id": "A-3",
    "number": "A-3",
    "areaSqYd": 323,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        38.93,
        19.65
      ],
      [
        40.2,
        18.1
      ],
      [
        40.14,
        38.63
      ],
      [
        39.05,
        37.68
      ]
    ]
  },
  {
    "id": "A-4",
    "number": "A-4",
    "areaSqYd": 326,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        40.2,
        17.93
      ],
      [
        41.69,
        16.46
      ],
      [
        41.69,
        40.27
      ],
      [
        40.43,
        38.8
      ]
    ]
  },
  {
    "id": "A-5",
    "number": "A-5",
    "areaSqYd": 311,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        44.05,
        16.72
      ],
      [
        51.7,
        17.06
      ],
      [
        51.7,
        20.69
      ],
      [
        43.99,
        20.6
      ]
    ]
  },
  {
    "id": "A-6",
    "number": "A-6",
    "areaSqYd": 345,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        44.16,
        20.86
      ],
      [
        51.58,
        20.86
      ],
      [
        51.7,
        22.84
      ],
      [
        43.99,
        22.76
      ]
    ]
  },
  {
    "id": "A-7",
    "number": "A-7",
    "areaSqYd": 334,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "sold",
    "points": [
      [
        43.93,
        23.01
      ],
      [
        51.64,
        23.19
      ],
      [
        51.58,
        25
      ],
      [
        43.93,
        25
      ]
    ]
  },
  {
    "id": "A-8",
    "number": "A-8",
    "areaSqYd": 345,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        43.82,
        25.34
      ],
      [
        51.93,
        25.26
      ],
      [
        51.93,
        27.59
      ],
      [
        44.11,
        27.33
      ]
    ]
  },
  {
    "id": "A-9",
    "number": "A-9",
    "areaSqYd": 346,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        44.16,
        27.59
      ],
      [
        51.87,
        27.41
      ],
      [
        51.93,
        30.17
      ],
      [
        43.88,
        30.09
      ]
    ]
  },
  {
    "id": "A-10",
    "number": "A-10",
    "areaSqYd": 306,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        44.11,
        29.91
      ],
      [
        51.81,
        29.91
      ],
      [
        51.7,
        32.24
      ],
      [
        43.82,
        32.59
      ]
    ]
  },
  {
    "id": "A-11",
    "number": "A-11",
    "areaSqYd": 315,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        44.22,
        32.68
      ],
      [
        51.98,
        32.42
      ],
      [
        51.29,
        34.75
      ],
      [
        44.16,
        34.49
      ]
    ]
  },
  {
    "id": "A-18",
    "number": "A-18",
    "areaSqYd": 338,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        54.69,
        16.98
      ],
      [
        62.79,
        17.93
      ],
      [
        62.79,
        20.43
      ],
      [
        54.57,
        20.69
      ]
    ]
  },
  {
    "id": "A-17",
    "number": "A-17",
    "areaSqYd": 326,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        54.63,
        20.51
      ],
      [
        62.56,
        20.69
      ],
      [
        62.74,
        23.01
      ],
      [
        54.69,
        22.76
      ]
    ]
  },
  {
    "id": "A-16",
    "number": "A-16",
    "areaSqYd": 343,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        54.86,
        22.84
      ],
      [
        62.56,
        23.01
      ],
      [
        62.85,
        25.34
      ],
      [
        54.63,
        25.26
      ]
    ]
  },
  {
    "id": "A-15",
    "number": "A-15",
    "areaSqYd": 348,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        54.69,
        25.08
      ],
      [
        62.74,
        25.08
      ],
      [
        62.79,
        27.5
      ],
      [
        54.86,
        27.67
      ]
    ]
  },
  {
    "id": "A-14",
    "number": "A-14",
    "areaSqYd": 315,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "sold",
    "points": [
      [
        54.74,
        27.76
      ],
      [
        62.62,
        27.67
      ],
      [
        62.74,
        30.09
      ],
      [
        54.8,
        30.09
      ]
    ]
  },
  {
    "id": "A-13",
    "number": "A-13",
    "areaSqYd": 340,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        54.86,
        30.09
      ],
      [
        62.79,
        30.17
      ],
      [
        62.79,
        32.16
      ],
      [
        54.8,
        32.42
      ]
    ]
  },
  {
    "id": "A-12",
    "number": "A-12",
    "areaSqYd": 309,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        54.97,
        32.5
      ],
      [
        62.85,
        32.5
      ],
      [
        62.79,
        34.66
      ],
      [
        55.2,
        34.49
      ]
    ]
  },
  {
    "id": "A-19",
    "number": "A-19",
    "areaSqYd": 331,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        62.79,
        18.01
      ],
      [
        70.5,
        18.1
      ],
      [
        70.5,
        20.69
      ],
      [
        62.68,
        20.51
      ]
    ]
  },
  {
    "id": "A-20",
    "number": "A-20",
    "areaSqYd": 338,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        62.91,
        20.51
      ],
      [
        70.44,
        20.86
      ],
      [
        70.62,
        22.84
      ],
      [
        62.56,
        22.93
      ]
    ]
  },
  {
    "id": "A-21",
    "number": "A-21",
    "areaSqYd": 328,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "sold",
    "points": [
      [
        62.68,
        23.36
      ],
      [
        70.62,
        22.76
      ],
      [
        70.56,
        25.26
      ],
      [
        62.74,
        25.69
      ]
    ]
  },
  {
    "id": "A-22",
    "number": "A-22",
    "areaSqYd": 336,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        62.62,
        25.43
      ],
      [
        70.5,
        25.26
      ],
      [
        70.56,
        27.76
      ],
      [
        62.74,
        27.5
      ]
    ]
  },
  {
    "id": "A-23",
    "number": "A-23",
    "areaSqYd": 320,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        62.68,
        27.76
      ],
      [
        70.67,
        27.59
      ],
      [
        70.56,
        30
      ],
      [
        62.74,
        30.09
      ]
    ]
  },
  {
    "id": "A-24",
    "number": "A-24",
    "areaSqYd": 332,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        62.74,
        30.26
      ],
      [
        70.56,
        30.09
      ],
      [
        70.79,
        32.07
      ],
      [
        62.56,
        32.24
      ]
    ]
  },
  {
    "id": "A-25",
    "number": "A-25",
    "areaSqYd": 308,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        62.79,
        32.33
      ],
      [
        70.5,
        32.5
      ],
      [
        69.41,
        34.49
      ],
      [
        62.56,
        34.75
      ]
    ]
  },
  {
    "id": "A-35",
    "number": "A-35",
    "areaSqYd": 332,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "sold",
    "points": [
      [
        44.39,
        38.71
      ],
      [
        51.41,
        39.14
      ],
      [
        51.58,
        49.75
      ],
      [
        44.25,
        43.5
      ]
    ]
  },
  {
    "id": "A-34",
    "number": "A-34",
    "areaSqYd": 324,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        51.58,
        39.23
      ],
      [
        52.96,
        38.89
      ],
      [
        53.08,
        51.39
      ],
      [
        51.47,
        49.84
      ]
    ]
  },
  {
    "id": "A-33",
    "number": "A-33",
    "areaSqYd": 349,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        53.19,
        39.23
      ],
      [
        54.51,
        39.06
      ],
      [
        54.8,
        51.48
      ],
      [
        53.02,
        51.13
      ]
    ]
  },
  {
    "id": "A-32",
    "number": "A-32",
    "areaSqYd": 306,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        54.51,
        39.06
      ],
      [
        56.24,
        39.14
      ],
      [
        56.3,
        50.7
      ],
      [
        54.74,
        51.65
      ]
    ]
  },
  {
    "id": "A-31",
    "number": "A-31",
    "areaSqYd": 325,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        56.12,
        39.32
      ],
      [
        57.68,
        39.23
      ],
      [
        57.62,
        49.67
      ],
      [
        56.35,
        50.62
      ]
    ]
  },
  {
    "id": "A-30",
    "number": "A-30",
    "areaSqYd": 331,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        57.62,
        39.14
      ],
      [
        59.11,
        38.8
      ],
      [
        59.17,
        50.01
      ],
      [
        57.73,
        49.84
      ]
    ]
  },
  {
    "id": "A-26",
    "number": "A-26",
    "areaSqYd": 307,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        62.79,
        38.71
      ],
      [
        70.21,
        39.14
      ],
      [
        70.73,
        40.52
      ],
      [
        62.79,
        40.52
      ]
    ]
  },
  {
    "id": "A-27",
    "number": "A-27",
    "areaSqYd": 340,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        62.79,
        40.44
      ],
      [
        70.79,
        40.35
      ],
      [
        70.79,
        42.77
      ],
      [
        62.68,
        42.77
      ]
    ]
  },
  {
    "id": "A-28",
    "number": "A-28",
    "areaSqYd": 340,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "sold",
    "points": [
      [
        62.85,
        43.11
      ],
      [
        70.73,
        43.2
      ],
      [
        70.9,
        45.44
      ],
      [
        62.85,
        45.61
      ]
    ]
  },
  {
    "id": "A-29",
    "number": "A-29",
    "areaSqYd": 316,
    "dimensions": "120' x 60'",
    "roadWidth": "18.00 MT. WIDE ROAD",
    "status": "available",
    "points": [
      [
        62.85,
        45.7
      ],
      [
        70.96,
        45.79
      ],
      [
        70.85,
        47.6
      ],
      [
        62.79,
        49.06
      ]
    ]
  }
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getStatusColor = (status: PlotStatus) => {
  return "transparent";
};

export const getStatusBorder = (status: PlotStatus) => {
  switch (status) {
    case "available": return "rgba(22, 78, 59, 1)";
    case "reserved": return "rgba(17, 17, 17, 0.8)";
    case "sold": return "rgba(142, 145, 144, 1)";
    case "future": return "rgba(229, 229, 229, 1)";
    default: return "rgba(0,0,0,0.1)";
  }
};